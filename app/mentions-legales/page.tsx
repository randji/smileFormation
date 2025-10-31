import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Mentions légales | Smile Formation",
  description: "Mentions légales de Smile Formation: éditeur, hébergeur, propriété intellectuelle, contact.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Mentions légales</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="prose max-w-5xl prose-p:leading-relaxed">
            <h2>Éditeur du site</h2>
            <p>
              SMILE FORMATION – 6 Rue d’Armaille, 75017 Paris – SIRET 990 859 654 00016 – RCS 990 859 654 –
              contact@smileformation.fr
            </p>

            <h2>Directeur de la publication</h2>
            <p>SMILE FORMATION</p>

            <h2>Hébergement</h2>
            <p>Hébergement et infrastructure fournis par votre prestataire d’hébergement habituel.</p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, images, logos, éléments graphiques) sont la propriété de SMILE FORMATION
              ou utilisés avec autorisation. Toute reproduction ou représentation, même partielle, est interdite sans accord préalable.
            </p>

            <h2>Responsabilité</h2>
            <p>
              SMILE FORMATION s’efforce d’assurer l’exactitude des informations publiées. Elle ne saurait toutefois être tenue
              responsable d’éventuelles erreurs ou omissions.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question: contact@smileformation.fr – Tél: 06 18 73 01 86
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

