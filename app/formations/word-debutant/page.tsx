import { type ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Printer,
  Sparkles,
  Users,
} from "lucide-react"

export const metadata = {
  title: "Formation Word - Niveau débutant | Smile Formation",
  description:
    "Programme détaillé de la formation Microsoft Word niveau débutant : objectifs, durée, supports, méthodes pédagogiques et atelier final.",
}

const modules = [
  {
    title: "Introduction à Word",
    duration: "30 min",
    points: [
      "Tour d'interface : ruban, onglets, barre d'état, zone de travail",
      "Réglages essentiels : langue, affichage, zoom, modes de lecture",
      "Création d'un premier document",
    ],
  },
  {
    title: "Prise en main du traitement de texte",
    duration: "1h",
    points: [
      "Saisie efficace : retours à la ligne, paragraphes, copier/coller",
      "Enregistrement (DOCX, PDF), versions et emplacements",
      "Ouvrir, fermer et retrouver un document",
    ],
  },
  {
    title: "Mise en forme du texte",
    duration: "1h30",
    points: [
      "Police, taille, couleurs, styles de base",
      "Alignement, interlignes, espacements, bordures et trames",
      "Pinceau de mise en forme et exercices guidés",
    ],
  },
  {
    title: "Structurer avec les paragraphes",
    duration: "1h",
    points: [
      "Listes à puces et numérotées",
      "Retraits, tabulations, styles rapides (titres, sous-titres)",
      "Harmonisation d'un document simple",
    ],
  },
  {
    title: "Insertion d'éléments",
    duration: "1h",
    points: [
      "Images : insertion, redimensionnement, positionnement",
      "Tableaux simples : ajouter/supprimer lignes et colonnes",
      "Formes, liens hypertextes et mini-document illustré",
    ],
  },
  {
    title: "Mise en page et impression",
    duration: "1h",
    points: [
      "Marges, orientation, taille du papier et sauts de page",
      "En-têtes/pieds de page (numéros, date, logo)",
      "Aperçu avant impression et export PDF",
    ],
  },
  {
    title: "Atelier final guidé",
    duration: "1h",
    points: [
      "Création complète : titre, sous-titres, listes et médias",
      "Mise en page professionnelle et export final en PDF",
      "Auto-évaluation et quiz de validation",
    ],
  },
]

const supports = [
  {
    title: "Supports fournis",
    icon: FileText,
    items: ["Fiches mémo : raccourcis, mise en forme, insertion", "Exercices corrigés", "Modèles de documents simples"],
  },
  {
    title: "Méthodes pédagogiques",
    icon: Users,
    items: ["Alternance démonstration / exercices", "Mise en pratique immédiate", "Accompagnement individuel"],
  },
  {
    title: "Évaluation des acquis",
    icon: ClipboardCheck,
    items: ["Quiz de fin de formation", "Réalisation d'un document complet", "Auto-évaluation des compétences"],
  },
]

export default function WordDebutantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[color:var(--smile-light)]/40 via-white to-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-[color:var(--smile-yellow)]/20 blur-3xl animate-pulse" />
            <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-[color:var(--smile-navy)]/15 blur-3xl animate-pulse" />
          </div>

          <div className="container relative mx-auto grid gap-10 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-20">
            <div className="space-y-6 fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--smile-navy)]/80">
                Bureautique
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-[color:var(--smile-navy)] md:text-4xl">
                Microsoft Word - Niveau débutant
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Comprenez l'interface, maîtrisez la mise en forme et sortez avec un document professionnel prêt à
                partager ou imprimer.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge icon={Clock} label="1 jour ou 2 demi-journées" />
                <Badge icon={Award} label="Niveau : débutant" />
                <Badge icon={Printer} label="Objectif : export PDF maîtrisé" />
              </div>
            </div>

            <div className="fade-in-up fade-delay-100">
              <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-[color:var(--smile-navy)]" />
                  <h2 className="text-lg font-semibold text-[color:var(--smile-navy)]">Objectifs pédagogiques</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Comprendre l'interface de Word et les fonctionnalités essentielles.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Créer, modifier et mettre en forme un document simple.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Insérer images, tableaux, listes, en-têtes et pieds de page.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Gérer l'enregistrement, l'impression et le partage de documents.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Appliquer une mise en page professionnelle de base.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[color:var(--smile-light)]/70 p-4 text-sm text-[color:var(--smile-navy)]">
                  <p className="font-semibold">Durée modulable</p>
                  <p>1 journée (7h) ou 2 demi-journées (2 × 3h30 ou 1 × 4h + 1 × 3h), ajustable selon le public.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card title="Public visé" icon={Users} delay={0}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Professionnels ou particuliers qui rédigent des documents simples.</li>
                <li>Indépendants, salariés, demandeurs d'emploi ou personnes en reconversion.</li>
              </ul>
            </Card>

            <Card title="Prérequis" icon={ClipboardCheck} delay={50}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Savoir utiliser un ordinateur (clavier/souris).</li>
                <li>Aucune maîtrise préalable de Word n'est nécessaire.</li>
              </ul>
            </Card>

            <Card title="Livrables" icon={Printer} delay={100}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Document final prêt à imprimer/exporter en PDF.</li>
                <li>Modèles reproductibles pour vos futurs fichiers.</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-3 fade-in-up">
              <BookOpen className="h-5 w-5 text-[color:var(--smile-navy)]" />
              <h2 className="text-xl font-semibold text-[color:var(--smile-navy)]">Programme détaillé</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {modules.map((module, index) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-[color:var(--border)] bg-white/80 p-5 shadow-sm fade-in-up"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--smile-navy)] text-white">
                        {index + 1}
                      </div>
                      <h3 className="text-base font-semibold text-[color:var(--smile-navy)]">{module.title}</h3>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--smile-yellow)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-[color:var(--border)] bg-gradient-to-br from-white to-[color:var(--smile-light)]/60 p-6 shadow-md fade-in-up">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[color:var(--smile-navy)]" />
                <h2 className="text-lg font-semibold text-[color:var(--smile-navy)]">Atelier pratique final</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Création d'un document complet incluant titres, paragraphes mis en forme, listes à puces, image ou tableau,
                mise en page professionnelle et export PDF.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {supports.map((support, index) => (
                <Card key={support.title} title={support.title} icon={support.icon} delay={index * 50}>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {support.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--smile-yellow)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--smile-navy)] text-white">
          <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:items-center">
            <div className="space-y-3 fade-in-up">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Modalités pratiques</p>
              <h2 className="text-2xl font-semibold">Accessibilité & évaluations</h2>
              <ul className="space-y-2 text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--smile-yellow)]" />
                  Inscription possible jusqu'à 48h avant le démarrage, entretien de positionnement si besoin.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--smile-yellow)]" />
                  Locaux accessibles PSH/PMR selon les sites ; adaptations sur demande.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color:var(--smile-yellow)]" />
                  Quiz final + réalisation d'un document complet pour valider les acquis.
                </li>
              </ul>
            </div>
            <div className="fade-in-up fade-delay-50">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-[color:var(--smile-yellow)]" />
                  <h3 className="text-lg font-semibold">Formateur</h3>
                </div>
                <p className="mt-3 text-sm text-white/90">
                  Monsieur SAYADA Yoni, formateur Word et Excel depuis 2023. Une approche pas-à-pas qui sécurise les
                  débutants et ancre les bons réflexes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-3 fade-in-up">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--smile-navy)]/80">
                Dites-nous vos besoins
              </p>
              <h2 className="text-2xl font-semibold text-[color:var(--smile-navy)]">Obtenir un devis ou réserver</h2>
              <p className="text-sm text-muted-foreground">
                Décrivez vos dates, objectifs et contexte. Nous revenons vers vous sous 24h avec une proposition adaptée.
              </p>
            </div>
            <div className="fade-in-up fade-delay-50">
              <ContactForm
                title="Je veux suivre cette formation Word"
                description="Dites-nous si vous préférez 1 journée ou 2 demi-journées."
                submitLabel="Envoyer ma demande"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function Badge({ icon: Icon, label }: { icon: typeof Clock; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-2 text-xs font-medium text-[color:var(--smile-navy)] shadow-sm">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  )
}

function Card({ title, icon: Icon, children, delay = 0 }: { title: string; icon: typeof Users; children: ReactNode; delay?: number }) {
  return (
    <div className="fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="rounded-2xl border border-[color:var(--border)] bg-white/80 p-5 shadow-sm backdrop-blur">
        <div className="mb-3 flex items-center gap-2">
          <Icon className="h-5 w-5 text-[color:var(--smile-navy)]" />
          <h3 className="text-base font-semibold text-[color:var(--smile-navy)]">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  )
}
