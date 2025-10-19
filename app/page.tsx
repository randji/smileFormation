import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FilterTabs } from "@/components/filter-tabs"
import { TrainingGrid } from "@/components/training-grid"
import { LoadMoreSection } from "@/components/load-more-section"
import { SiteFooter } from "@/components/site-footer"
import { hero, tabs, trainings, contactSection } from "@/content/home"
import { ContactForm } from "@/components/contact-form"

export default function FormationsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <HeroSection title={hero.title} description={hero.description} certificationImage={hero.certificationImage} />

        <FilterTabs tabs={tabs} />

        <TrainingGrid trainings={trainings} />

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

