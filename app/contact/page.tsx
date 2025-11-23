import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact | Smile Formation",
  description:
    "Contactez Smile Formation pour toute demande d’information ou de devis (langues, bureautique, IA).",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Contact</h1>
            <p className="mt-3 max-w-3xl text-white/90">Centre de Formation</p>
          </div>
        </section>

        <ContactForm
          title="Contactez-nous"
          description="Une question sur nos formations (langues, bureautique, IA) ? Laissez‑nous un message et nous vous répondrons rapidement."
          submitLabel="Envoyer"
        />
      </main>

      <SiteFooter />
    </div>
  )
}

