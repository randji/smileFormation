import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Conditions générales de vente | Smile Formation",
  description:
    "CGV de Smile Formation: inscriptions, prérequis, documentation, conditions financières, formations sur site, facturation, annulations, confidentialité, règlement intérieur, responsabilité, données personnelles et litiges.",
}

export default function ConditionsGeneralesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Conditions générales de vente</h1>
            <p className="mt-3 max-w-3xl text-white/90">Centre de Formation</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="prose max-w-5xl prose-p:leading-relaxed prose-li:leading-relaxed">
            <h2>Article 1 - Objet</h2>
            <p>
              Les présentes conditions générales ont pour but de définir les conditions de prestation des formations
              dispensées par SMILE FORMATION pour ses clients.
            </p>

            <h2>Article 2 - Inscription</h2>
            <p>
              La réservation de la formation ne sera effective qu’à réception de la convention, dûment complétée et signée,
              15 jours calendaires au plus tard avant le début de la formation. Dans le cas contraire, la réservation ne
              pourra être maintenue. Ce document est adressé par SMILE FORMATION après accord sur la nature et la date
              de la session. Les convocations, programme de formation, plan d’accès, sont adressés par mail au
              commanditaire de la formation. SMILE FORMATION ne saurait être tenu pour responsable de la non‑réception
              de la convocation, du programme de formation ou du plan d’accès. Il appartient au participant de s’assurer que
              son inscription est bien effective.
            </p>

            <h2>Article 3 - Prérequis</h2>
            <p>
              Des prérequis peuvent être indiqués dans le contenu de formation ou en annexe. Le client s’engage à les
              respecter dans la mesure notamment où cela est susceptible d’affecter la qualité de la formation dispensée.
            </p>

            <h2>Article 4 - Documentation pédagogique</h2>
            <p>
              La documentation pédagogique remise lors de certaines sessions de formation est la propriété de SMILE
              FORMATION et est protégée au titre des droits d’auteur. Toute reproduction, ou utilisation pour un usage
              autre qu’exclusivement interne de même que tout transfert ou mise à disposition d’un tiers, n’est pas autorisée
              et est constitutive de contrefaçon.
            </p>

            <h2>Article 5 - Conditions financières</h2>
            <p>
              Nos tarifs sont indiqués hors taxes et TTC. Ils sont majorés de la TVA au taux en vigueur. Les pauses sont
              inclues dans le coût de la formation. Les repas ne sont pas compris dans le prix du stage. Les frais annexes à
              la formation (les frais de déplacement, de séjour, …) sont en sus. En cas de session personnalisée, le temps
              de préparation fera l’objet d’une facturation complémentaire spécifique. Un support standard peut être remis en
              formation, des supports personnalisés peuvent être réalisés sur devis. Dans le cas d’une subrogation, l’OPCO
              paiera directement les frais de formation à SMILE FORMATION.
            </p>

            <h2>Article 6 - Formation sur site client</h2>
            <p>
              En cas de formations dispensées sur site client, le client s’engage à respecter les prérequis communiqués par
              SMILE FORMATION et doit tester en amont les accès à l’application depuis la salle de formation. Si la
              formation n’a pu être dispensée en raison du non‑respect des prérequis, l’intégralité de la formation et les frais
              annexes seront dus.
            </p>

            <h2>Article 7 - Facturation et règlement</h2>
            <p>
              La facturation est effectuée soit par acompte avant la formation et le solde à la fin de la formation. La
              formation peut aussi être facturée après chaque session ou à la fin de la formation. Elle est accompagnée de la
              feuille de présence correspondante. La facture éditée tient lieu de convention de formation simplifiée. Les
              règlements sont effectués par chèque ou par virement à réception de la facture. Toute somme due et non réglée
              au terme d’un délai de trente (30) jours, portera intérêt à un taux égal à trois (3) fois le taux d’intérêt légal en
              vigueur à compter du premier jour de retard. Les frais de recouvrement que devrait exposer SMILE FORMATION
              seront à la charge du client. En cas de paiement par un OPCO, si le règlement n’a pas été effectué dans un
              délai de 2 mois à compter de la réception de la facture, le client devra prendre en charge ce règlement.
            </p>

            <h2>Article 8 - Annulation</h2>
            <p className="font-medium">Annulation par le client :</p>
            <ul className="list-disc pl-6">
              <li>
                annulation ou report intervenant 2 jours calendaires avant le début du stage : les frais de participation au
                stage seront intégralement facturés
              </li>
              <li>
                annulation ou report intervenant entre 4 et 10 jours calendaires avant le début du stage : les frais de
                participation au stage seront facturés à hauteur 50%.
              </li>
            </ul>
            <p className="font-medium mt-4">Annulation par SMILE FORMATION :</p>
            <p>
              SMILE FORMATION se réserve le droit d’annuler une formation en cas de force majeure. Sont considérés comme
              tels, outre les cas habituels de force majeure ou de cas fortuit, sans que cette liste soit exhaustive : la grève des
              transports, la maladie de l’intervenant, l’interruption des télécommunications, … SMILE FORMATION organisera
              alors une nouvelle session dans les meilleurs délais et aucun dédommagement ne pourra être demandé. En cas
              d’impossibilité de votre part de participer à la manifestation à la date ultérieurement proposée, SMILE
              FORMATION vous proposera une formation équivalente ou vous remboursera, à votre demande, les frais
              d’inscription, à l’exclusion de tout autre dédommagement. En cas de session Interentreprises notamment, SMILE
              FORMATION se réserve le droit d’annuler une formation si le seuil pédagogique est jugé insuffisant.
            </p>

            <h2>Article 9 - Confidentialité</h2>
            <p>
              Les informations transmises et/ou échangées au cours de la formation sont confidentielles et ne sauraient faire
              l’objet de divulgation à des tiers.
            </p>

            <h2>Article 10 - Règlement intérieur</h2>
            <p>
              Le participant s’engage à respecter les conditions du règlement intérieur affiché dans chaque salle dont il
              déclare avoir pris connaissance et accepter les termes.
            </p>

            <h2>Article 11 - Responsabilité</h2>
            <p>
              SMILE FORMATION exclut toute responsabilité en cas de force majeure ou de cas fortuit. Dans l’hypothèse où la
              responsabilité de SMILE FORMATION serait engagée, cette responsabilité serait limitée aux dommages directs – à
              l’exclusion de tous dommages indirects – et plafonnée au montant des droits effectivement payés au titre de ladite
              manifestation. En outre, eu égard aux spécificités liées à notre domaine de formation, le programme prévu sera
              susceptible d’être adapté et aucun dédommagement ne sera dû.
            </p>

            <h2>Article 12 - Conservation de données et informatiques et libertés</h2>
            <p>
              SMILE FORMATION vous informe qu’elle conservera les données à caractère professionnel que vous lui transmettez
              à des fins de gestion interne et en vue de vous transmettre des informations sur la formation que vous avez suivie et
              de vous informer sur les différentes manifestations susceptibles de vous intéresser dans le cadre de votre vie
              professionnelle. Vous disposez toutefois d’un droit d’opposition, de rectification et de retrait vis‑à‑vis de ces
              données que vous pouvez exercer à l’adresse indiquée en en‑tête des présentes.
            </p>

            <h2>Article 13 - Litige</h2>
            <p>
              La loi applicable est la loi française. Toute contestation qui n’aurait pas été réglée à l’amiable sera portée devant le
              Tribunal de Commerce de Paris.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

