import { NextResponse } from "next/server"
import { z } from "zod"

// Schéma de validation côté serveur
const schema = z.object({
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

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const data = schema.parse(json)

    const provider = process.env.CONTACT_PROVIDER?.toLowerCase()
    const to = process.env.CONTACT_TO_EMAIL
    const from = process.env.CONTACT_FROM_EMAIL

    if (!provider || !to || !from) {
      return NextResponse.json(
        {
          ok: false,
          reason:
            "Contact non configuré: définissez CONTACT_PROVIDER, CONTACT_TO_EMAIL et CONTACT_FROM_EMAIL dans .env",
        },
        { status: 501 }
      )
    }

    const text = `De: ${data.name} <${data.email}>\nTel: ${data.phone ?? "-"}\n\n${data.message}`

    if (provider === "resend") {
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
