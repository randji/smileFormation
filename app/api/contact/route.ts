import { NextResponse } from "next/server"
import { z } from "zod"

// Schéma de validation côté serveur
const schema = z.object({
  firstName: z.string().min(2).optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(2).max(120),
  message: z.string().min(10),
})

// Import dynamique protégé pour éviter les erreurs de typage si les paquets ne sont pas installés.
async function dynImport(mod: string): Promise<any> {
  // eslint-disable-next-line no-new-func
  const fn = new Function("m", "return import(m)") as (m: string) => Promise<any>
  return fn(mod)
}

// Normalise un numéro de téléphone vers un format proche E.164 pour Brevo
// - Supprime espaces/parenthèses/traits/points
// - Convertit les préfixes 00 en +
// - Si numéro FR probable (10 chiffres commençant par 0), convertit en +33...
// - Si invalide/ambigu, retourne null pour éviter une erreur API
function normalizePhone(phone: string): string | null {
  let p = phone.trim()
  if (!p) return null
  // enlever séparateurs communs
  p = p.replace(/[\s\-.()]/g, "")
  if (p.startsWith("00")) p = "+" + p.slice(2)
  if (p.startsWith("+")) {
    const digits = p.slice(1).replace(/\D/g, "")
    if (digits.length >= 8 && digits.length <= 15) return "+" + digits
    return null
  }
  const digits = p.replace(/\D/g, "")
  if (digits.length === 10 && digits.startsWith("0")) {
    // heuristique France
    return "+33" + digits.slice(1)
  }
  // numéro sans indicatif pays: on évite d'envoyer pour ne pas provoquer une 400
  return null
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = schema.parse(json)

    const provider = process.env.CONTACT_PROVIDER?.toLowerCase()
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL

    // For Brevo, we don't require to/from since we store contacts, not send mail
    const requireEmailRouting = provider !== "brevo"

    if (!provider || (requireEmailRouting && (!to || !from))) {
      return NextResponse.json(
        {
          ok: false,
          reason:
            requireEmailRouting
              ? "Contact non configuré: définissez CONTACT_PROVIDER, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL dans .env"
              : "Contact non configuré: définissez CONTACT_PROVIDER dans .env",
        },
        { status: 501 }
      )
    }

    const text = `De: ${data.name} <${data.email}>\nTel: ${data.phone ?? "-"}\n\n${data.message}`

    if (provider === "brevo") {
      const apiKey = process.env.BREVO_API_KEY
      const listId = Number(process.env.BREVO_LIST_ID || "")
      if (!apiKey) {
        return NextResponse.json(
          { ok: false, reason: "BREVO_API_KEY manquant" },
          { status: 501 }
        )
      }
      let contactStored = false
      let brevoError: string | null = null
      try {
        // Mapping des attributs Brevo configurable via .env
        // Priorité: si ATTR_FIRSTNAME/LASTNAME définis, on les utilise. Sinon on retombe sur ATTR_NAME (compatibilité)
        const ATTR_FIRSTNAME = process.env.BREVO_ATTR_FIRSTNAME || "FIRSTNAME"
        const ATTR_LASTNAME = process.env.BREVO_ATTR_LASTNAME || "LASTNAME"
        const ATTR_NAME = process.env.BREVO_ATTR_NAME // ancien fallback vers un seul champ
        const ATTR_PHONE = process.env.BREVO_ATTR_PHONE || "SMS"
        const ATTR_SUBJECT = process.env.BREVO_ATTR_SUBJECT || "SUBJECT"
        const ATTR_MESSAGE = process.env.BREVO_ATTR_MESSAGE || "MESSAGE"

        const attributes: Record<string, string> = {}
        if (ATTR_NAME) {
          attributes[ATTR_NAME] = data.name
        } else {
          attributes[ATTR_FIRSTNAME] = data.firstName ?? ""
          attributes[ATTR_LASTNAME] = data.name
        }
        if (data.phone) {
          const normalized = normalizePhone(data.phone)
          if (normalized) attributes[ATTR_PHONE] = normalized
        }
        attributes[ATTR_SUBJECT] = data.subject
        attributes[ATTR_MESSAGE] = data.message

        const payload: any = {
          email: data.email,
          attributes,
          updateEnabled: true,
        }
        if (!Number.isNaN(listId) && listId > 0) {
          payload.listIds = [listId]
        }
        let r = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key": apiKey,
          },
          body: JSON.stringify(payload),
        })
        if (!r.ok) {
          const body = await r.text().catch(() => "")
          // Si l'erreur vient du téléphone (invalide ou déjà utilisé), on retente sans l'attribut téléphone
          const isInvalidPhone = /Invalid phone number/i.test(body)
          const isDuplicatePhone = /duplicate_parameter.*SMS|SMS is already associated/i.test(body)
          if (
            (isInvalidPhone || isDuplicatePhone) &&
            payload.attributes &&
            ATTR_PHONE &&
            payload.attributes[ATTR_PHONE]
          ) {
            try {
              const retryPayload = { ...payload, attributes: { ...payload.attributes } }
              delete retryPayload.attributes[ATTR_PHONE]
              r = await fetch("https://api.brevo.com/v3/contacts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "api-key": apiKey,
                },
                body: JSON.stringify(retryPayload),
              })
            } catch {}
          }
          if (!r.ok) {
            // Dernier fallback: payload minimal (email seul)
            const minimal: any = { email: data.email, updateEnabled: true }
            if (!Number.isNaN(listId) && listId > 0) minimal.listIds = [listId]
            r = await fetch("https://api.brevo.com/v3/contacts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-key": apiKey,
              },
              body: JSON.stringify(minimal),
            })
            if (!r.ok) {
              const body2 = await r.text().catch(() => body)
              brevoError = `Brevo contact failed (${r.status})${body2 ? `: ${body2}` : ""}`
              console.error("BREVO_CONTACT_STORE_FAILED", body2)
            }
          }
        }
        if (r.ok) contactStored = true

        // Optionnel: si CONTACT_FROM_EMAIL et CONTACT_TO_EMAIL sont définis, envoyer aussi un email transactionnel via Brevo
        if (from && to) {
          const parseEmail = (s: string) => {
            const m = s.match(/<([^>]+)>/) // extrait l'email entre <>
            return (m && m[1]) || s
          }
          const parseName = (s: string) => {
            const m = s.match(/^\s*([^<]+)</)
            return (m && m[1].trim()) || undefined
          }
          const fromEmail = parseEmail(from)
          const fromName = parseName(from)
          const toEmail = parseEmail(to)

          const htmlContent = `
            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background:#f7f7f8; padding:24px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                    <tr>
                      <td style="padding:20px 24px; background:#0f172a; color:#fff; font-size:18px; font-weight:600;">
                        Nouveau message du site – ${data.subject}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 24px; color:#111827; font-size:14px; line-height:1.6;">
                        <p style="margin:0 0 12px 0;"><strong>Prénom:</strong> ${data.firstName ?? "-"}</p>
                        <p style="margin:0 0 12px 0;"><strong>Nom:</strong> ${data.name}</p>
                        <p style="margin:0 0 12px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                        <p style="margin:0 0 12px 0;"><strong>Téléphone:</strong> ${data.phone ?? "-"}</p>
                        <hr style="border:none; border-top:1px solid #e5e7eb; margin:16px 0;"/>
                        <p style="margin:0 0 6px 0; font-weight:600;">Message:</p>
                        <div style="white-space:pre-wrap; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:12px; color:#111827;">${data.message}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 24px; color:#6b7280; font-size:12px; border-top:1px solid #e5e7eb;">
                        Cet email a été envoyé automatiquement depuis le formulaire de contact.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>`

          const mailPayload: any = {
            sender: fromName ? { email: fromEmail, name: fromName } : { email: fromEmail },
            to: [{ email: toEmail }],
            subject: `Nouveau message: ${data.subject}`,
            textContent: `Prénom: ${data.firstName ?? "-"}\nNom: ${data.name}\nEmail: ${data.email}\nTel: ${data.phone ?? "-"}\n\n${data.message}`,
            htmlContent,
            // Brevo SMTP API attend un objet { email, name } pour replyTo
            replyTo: {
              email: data.email,
              name: [data.firstName, data.name].filter(Boolean).join(" ").trim() || undefined,
            },
          }
          const er = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "api-key": apiKey,
            },
            body: JSON.stringify(mailPayload),
          })
          if (!er.ok) {
            const body = await er.text().catch(() => "")
            throw new Error(`BREVO_SEND_ERROR ${er.status}: ${body}`)
          }
        }
        if (brevoError) {
          return NextResponse.json(
            { ok: false, reason: brevoError },
            { status: 502 }
          )
        }
      } catch (e: any) {
        console.error("BREVO_CONTACT_ERROR", e)
        const reason =
          (typeof e?.message === "string" && e.message) ||
          (typeof e === "string" && e) ||
          "Erreur Brevo inconnue"
        return NextResponse.json(
          { ok: false, reason },
          { status: 502 }
        )
      }
    } else if (provider === "resend") {
      const apiKey = process.env.RESEND_API_KEY
      if (!apiKey) {
        return NextResponse.json(
          { ok: false, reason: "RESEND_API_KEY manquant" },
          { status: 501 }
        )
      }
      try {
        const { Resend } = await dynImport("resend")
        const resend = new Resend(apiKey)
        const r = await resend.emails.send({
          from,
          to,
          subject: data.subject,
          text,
          replyTo: data.email,
        })
        if (r.error) throw r.error
      } catch (e: any) {
        console.error("RESEND_SEND_ERROR", e)
        return NextResponse.json(
          { ok: false, reason: "Erreur envoi via Resend" },
          { status: 500 }
        )
      }
    } else if (provider === "smtp") {
      const host = process.env.SMTP_HOST
      const port = Number(process.env.SMTP_PORT ?? 587)
      const secure = String(process.env.SMTP_SECURE ?? "false").toLowerCase() === "true"
      const user = process.env.SMTP_USER
      const pass = process.env.SMTP_PASS
      if (!host || !user || !pass) {
        return NextResponse.json(
          { ok: false, reason: "Config SMTP incomplète (host/user/pass)" },
          { status: 501 }
        )
      }
      try {
        const nodemailer = await dynImport("nodemailer")
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        })
        await transporter.sendMail({ from, to, subject: data.subject, text, replyTo: data.email })
      } catch (e: any) {
        console.error("SMTP_SEND_ERROR", e)
        return NextResponse.json(
          { ok: false, reason: "Erreur envoi via SMTP" },
          { status: 500 }
        )
      }
    } else {
      return NextResponse.json(
        { ok: false, reason: `Provider inconnu: ${provider}` },
        { status: 400 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("CONTACT_FORM_ERROR", err)
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
