"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"

// Public, reusable schema so you can re-use it server-side as well
export const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  subject: z
    .string()
    .min(2, "Sujet requis")
    .max(120, "Sujet trop long"),
  message: z.string().min(10, "Message trop court"),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export interface ContactFormProps {
  // API endpoint to submit to. Change this if you deploy behind a custom route.
  // Ex: "/api/contact" (par défaut)
  action?: string
  // Labels personnalisables si besoin
  title?: string
  description?: string
  submitLabel?: string
  // Hook de succès si vous voulez gérer un tracking ou un toast externe
  onSuccess?: (data: ContactFormValues) => void
}

export function ContactForm({
  action = "/api/contact",
  title = "Contactez-nous",
  description =
    "Une question sur nos formations (langues, bureautique, IA) ? Laissez-nous un message et nous vous répondrons rapidement.",
  submitLabel = "Envoyer",
  onSuccess,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  const [status, setStatus] = React.useState<"idle" | "ok" | "error">("idle")

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle")
    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("ok")
      onSuccess?.(values)
      reset()
    } catch (e) {
      setStatus("error")
    }
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-lg border bg-card p-6 shadow-sm">
        {/* Personnalisez le titre/texte ci-dessous via les props ou passez-les depuis content/home.ts */}
        <h2
          className="mb-2 text-3xl font-semibold"
          style={{ color: "var(--smile-navy)" }}
        >
          {title}
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">{description}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Nom</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="vous@exemple.com"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Téléphone (optionnel)</label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="06 12 34 56 78"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium">Sujet</label>
            <input
              {...register("subject")}
              type="text"
              placeholder="Ex: Devis formation Excel"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Dites-nous en plus sur votre besoin…"
              className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="sm:col-span-2 mt-2 flex items-center gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[color:var(--smile-navy)] text-white hover:bg-[color:var(--smile-yellow)] hover:text-[#111827]"
            >
              {isSubmitting ? "Envoi…" : submitLabel}
            </Button>
            {status === "ok" && (
              <span className="text-sm text-green-600">Message envoyé ✅</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-600">Une erreur est survenue</span>
            )}
          </div>
        </form>

        {/*
          PARAMÉTRAGE EMAIL (à faire plus tard):
          - Ce formulaire POST vers {action} (par défaut /api/contact).
          - Ouvrez app/api/contact/route.ts et remplacez le "TODO email" par
            une intégration Resend, SMTP/Nodemailer ou autre (voir commentaires dans le fichier).
          - Vous pouvez aussi changer la prop `action` pour pointer vers un outil externe (Make, Zapier, etc.).
        */}
      </div>
    </section>
  )
}

