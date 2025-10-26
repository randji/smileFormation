import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrainingsSection } from "@/components/trainings-section"
import { LoadMoreSection } from "@/components/load-more-section"
import { SiteFooter } from "@/components/site-footer"
import { PresenteeismSection } from "@/components/presenteeism-section"
import { hero, tabs, trainings, contactSection } from "@/content/home"
import { ContactForm } from "@/components/contact-form"

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

        <TrainingsSection tabs={tabs} trainings={trainings} />

        <LoadMoreSection />

        {/* Section de contact */}
        <ContactForm
          // Textes centralisés dans content/home.ts
          title={contactSection.title}
          description={contactSection.description}
          submitLabel={contactSection.submitLabel}
        />

        {/* Badge présentéisme juste avant le footer */}
        <PresenteeismSection />
      </main>

      <SiteFooter />
    </div>
  )
}
