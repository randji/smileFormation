import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrainingsSection } from "@/components/trainings-section"
import { SiteFooter } from "@/components/site-footer"
import { PresenteeismSection } from "@/components/presenteeism-section"
import { LastUpdatedSection } from "@/components/last-updated-section"
import { hero, tabs, trainings, contactSection, trainingLinks } from "@/content/home"
import { ContactForm } from "@/components/contact-form"
import { QualiopiBadge } from "@/components/qualiopi-badge"

export default function FormationsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <HeroSection
          title={hero.title}
          description={hero.description}
          certificationImage={hero.certificationImage}
          // Active l’animation GSAP si configurée dans le contenu
          useAnimatedLogo={hero.useAnimatedLogo}
          logoOpen={hero.logoOpen}
          logoWink={hero.logoWink}
          textRevealDuration={hero.logoTextDuration}
          smileySizes={hero.smileySizes}
          blinkDuration={hero.logoBlinkDuration}
          blinkInterval={hero.logoBlinkInterval}
          startDelay={hero.logoStartDelay}
        />

        <QualiopiBadge />

        <TrainingsSection
          tabs={tabs}
          trainings={trainings.map((t) => ({
            ...t,
            href: trainingLinks[t.title] ?? (t.title.toLowerCase().includes("word") ? "/formations/word" : t.href),
          }))}
        />


        {/* Section de contact */}
        <ContactForm
          // Textes centralisés dans content/home.ts
          title={contactSection.title}
          description={contactSection.description}
          submitLabel={contactSection.submitLabel}
        />

        {/* Badge présentéisme */}
        <PresenteeismSection />

        {/* Mise à jour mensuelle (mois + année) */}
        <LastUpdatedSection />
      </main>

      <SiteFooter />
    </div>
  )
}
