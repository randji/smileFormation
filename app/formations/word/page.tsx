import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Formation Word – Niveau intermédiaire | Smile Formation",
  description:
    "Programme détaillé de la formation Microsoft Word niveau intermédiaire : objectifs, public, durée, méthodes, évaluation, contenu des modules, accessibilité, formateur et tarifs.",
}

export default function WordIntermediairePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto px-4 py-14 md:py-20">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-white/80">Bureautique</p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              Microsoft Word – Niveau intermédiaire
            </h1>
            <p className="mt-4 max-w-3xl text-white/90">
              Maîtrisez les fonctionnalités essentielles et avancées pour produire des documents
              professionnels, structurés et cohérents.
            </p>
          </div>
        </section>

        {/* Contenu principal */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-12">
            {/* Colonne informations clés */}
            <aside className="space-y-6 md:col-span-1">
              <div className="rounded-lg border border-[color:var(--border)] p-5 shadow-lg">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--smile-navy)]">
                  Informations clés
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <span className="font-medium">Intitulé&nbsp;:</span> Microsoft Word niveau intermédiaire
                  </li>
                  <li>
                    <span className="font-medium">Durée&nbsp;:</span> 7 heures (deux demi‑journées)
                  </li>
                  <li>
                    <span className="font-medium">Type&nbsp;:</span> Présentiel, avec supports PDF + fichiers d’exercices
                  </li>
                  <li>
                    <span className="font-medium">Tarif&nbsp;:</span> 350€ HT (420€ TTC)
                  </li>
                  <li>
                    <span className="font-medium">Financement&nbsp;:</span> CPF, OPCO, Pôle Emploi, etc.
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-[color:var(--border)] p-5 shadow-lg">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--smile-navy)]">
                  Modalités d’accès
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Inscription jusqu’à 48h avant le début de la formation</li>
                  <li>Entretien de positionnement préalable si nécessaire</li>
                </ul>
              </div>

              <div className="rounded-lg border border-[color:var(--border)] p-5 shadow-lg">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--smile-navy)]">
                  Accessibilité
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Locaux accessibles PSH/PMR selon modalités des sites (ERP loué ou chez le
                  commanditaire). Contactez‑nous en amont pour organiser les adaptations nécessaires.
                </p>
              </div>

              <div className="rounded-lg border border-[color:var(--border)] p-5 shadow-lg">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--smile-navy)]">
                  Formateur
                </h2>
                <p className="mt-3 text-sm leading-relaxed">
                  Monsieur SAYADA Yoni, formateur Word et Excel depuis 2023.
                </p>
              </div>
            </aside>

            {/* Colonne contenu détaillé */}
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">
                  Objectifs pédagogiques opérationnels
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Maîtriser les fonctionnalités intermédiaires de Word pour produire des documents professionnels.</li>
                  <li>Gérer la mise en page avancée (styles, modèles, sections, en‑têtes/pieds de page personnalisés).</li>
                  <li>Utiliser les styles pour automatiser la mise en forme et certaines tâches (sommaire, publipostage, modèles).</li>
                  <li>Insérer, manipuler et gérer des objets (images, tableaux, graphiques, formes, SmartArt).</li>
                  <li>Créer un publipostage simple (lettres, étiquettes).</li>
                  <li>Utiliser les outils de correction et de collaboration.</li>
                  <li>Créer des documents professionnels avec une mise en forme avancée.</li>
                  <li>Améliorer la présentation et la cohérence des documents longs.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Public visé</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Toute personne amenée à rédiger, mettre en forme ou corriger des documents professionnels.</li>
                  <li>Indépendants, salariés, demandeurs d’emploi, retraités.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Prérequis</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Connaissances de base de Microsoft Word (niveau débutant maîtrisé).</li>
                  <li>Savoir créer et enregistrer un document, saisir du texte, appliquer une mise en forme simple.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Durée</h2>
                <p className="mt-4">Durée totale&nbsp;: 7 heures (deux demi‑journées).</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Méthodes mobilisées</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Formation en présentiel.</li>
                  <li>Support pédagogique fourni (PDF + fichiers d’exercices).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Modalités d’évaluation</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Positionnement initial (QCM ou test de niveau).</li>
                  <li>Évaluations formatives pendant les exercices pratiques.</li>
                  <li>Évaluation finale (mise en situation réelle : création d’un document structuré + QCM).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Contenu de la formation</h2>
                <div className="mt-4 space-y-6">
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 1 – Rappels essentiels</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Mise en forme de texte et paragraphes</li>
                      <li>Utilisation des raccourcis clavier</li>
                      <li>Sauvegarde et gestion des versions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 2 – Structurer un document</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Utilisation des styles (titre, corps de texte, etc.)</li>
                      <li>Création automatique de sommaire</li>
                      <li>Utilisation des sections (sauts de section, en‑têtes/pieds de page différenciés)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 3 – Mise en page avancée</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Marges, orientation, colonnes</li>
                      <li>Numérotation des pages personnalisée</li>
                      <li>Insertion de sauts de page/sauts de section</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 4 – Objets dans Word</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Insertion et mise en forme d’images</li>
                      <li>Tableaux (création, mise en page, styles)</li>
                      <li>Formes, graphiques SmartArt</li>
                      <li>Zones de texte</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 5 – Publipostage</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Création de lettres types</li>
                      <li>Liaison à une base de données Excel</li>
                      <li>Fusion pour étiquettes ou enveloppes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-[color:var(--smile-navy)]">Module 6 – Outils collaboratifs et révision</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Suivi des modifications</li>
                      <li>Commentaires</li>
                      <li>Comparaison de versions</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Fin de formation</h2>
                <p className="mt-4">Certificat de réalisation.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Coordonnées</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  SMILE FORMATION, 6 Rue d’Armaille, 75017, SIRET 990&nbsp;859&nbsp;654&nbsp;00016, RCS 990&nbsp;859&nbsp;654 •
                  smile.formation526@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">S’inscrire ou obtenir un devis</h2>
                <p className="mt-4 text-muted-foreground">
                  Dites‑nous vos besoins (dates, objectifs, niveau) et nous revenons vers vous sous 24h.
                </p>
                <div className="mt-6">
                  <ContactForm title="Besoin d'informations ?" description="Contactez‑nous pour cette formation Word." submitLabel="Envoyer" />
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

