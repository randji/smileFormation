import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrainingsSection } from "@/components/trainings-section"
import { LoadMoreSection } from "@/components/load-more-section"
import { SiteFooter } from "@/components/site-footer"
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
        />

        <TrainingsSection tabs={tabs} trainings={trainings} />

        <LoadMoreSection />

        {/* Section de contact - s'affiche juste avant le footer */}
        <ContactForm
          // Textes centralisés dans content/home.ts
          title={contactSection.title}
          description={contactSection.description}
          submitLabel={contactSection.submitLabel}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
