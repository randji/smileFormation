import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Politique de confidentialité | Smile Formation",
  description:
    "Politique de confidentialité de Smile Formation: données collectées, finalités, base légale, durée de conservation, destinataires, droits RGPD, sécurité, cookies.",
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Politique de confidentialité</h1>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="prose max-w-5xl prose-p:leading-relaxed">
            <h2>Données collectées</h2>
            <p>
              Les données professionnelles transmises (identité, coordonnées, informations relatives à la formation) sont
              utilisées pour la gestion de la relation et le suivi des prestations.
            </p>

            <h2>Base légale et finalités</h2>
            <p>
              Traitement fondé sur l’exécution contractuelle et l’intérêt légitime: gestion des demandes, inscriptions,
              organisation pédagogique, facturation et information sur nos offres de formation.
            </p>

            <h2>Durée de conservation</h2>
            <p>
              Les données sont conservées pour la durée nécessaire aux finalités ci‑dessus puis archivées conformément aux
              obligations légales applicables.
            </p>

            <h2>Destinataires</h2>
            <p>
              Les données sont destinées aux services internes de SMILE FORMATION et, le cas échéant, à nos partenaires
              (ex: OPCO) dans le cadre strict de la formation.
            </p>

            <h2>Vos droits</h2>
            <p>
              Vous disposez des droits d’accès, de rectification, d’opposition, d’effacement, de limitation et de portabilité.
              Exercez‑les à l’adresse: contact@smileformation.fr.
            </p>

            <h2>Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données.
            </p>

            <h2>Cookies</h2>
            <p>
              Le site peut utiliser des cookies techniques nécessaires. Tout cookie non essentiel (mesure d’audience,
              personnalisation) sera soumis à votre consentement préalable si mis en place.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question ou réclamation relative à vos données personnelles: contact@smileformation.fr.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

