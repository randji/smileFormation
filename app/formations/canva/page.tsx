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
  Layers,
  Settings,
  Sparkles,
  Users,
} from "lucide-react"

export const metadata = {
  title: "Formation Canva - Niveau avancé | Smile Formation",
  description:
    "Programme détaillé de la formation Canva niveau avancé : charte complète, modèles personnalisés, animations/vidéo, présentations pro, automatisations et atelier final.",
}

const modules = [
  {
    title: "Rappels essentiels & optimisation de workflow",
    duration: "1h",
    points: ["Raccourcis, duplication rapide, organisation", "Bibliothèques d’éléments et dossiers avancés"],
  },
  {
    title: "Création d’une charte graphique complète",
    duration: "2h",
    points: ["Palette de couleurs avancée", "Typographies cohérentes", "Définition d’un style visuel", "Création d’un Brand Kit (si Canva Pro)"],
  },
  {
    title: "Création de modèles personnalisés",
    duration: "2h",
    points: ["Templates pour réseaux sociaux", "Templates pour documents internes", "Templates pour présentations"],
  },
  {
    title: "Design avancé",
    duration: "2h",
    points: ["Grilles complexes", "Effets avancés : ombres, flous, dégradés", "Combinaisons typographiques professionnelles", "Création d’illustrations personnalisées"],
  },
  {
    title: "Présentations professionnelles",
    duration: "2h",
    points: ["Structuration d’un pitch deck", "Animation des diapositives", "Transitions, rythme visuel", "Mode présentateur"],
  },
  {
    title: "Vidéo et animation dans Canva",
    duration: "2h",
    points: ["Montage vidéo simple", "Ajout de musique, transitions, effets", "Animation d’éléments", "Export vidéo optimisé"],
  },
  {
    title: "Création de documents complexes",
    duration: "2h",
    points: ["E-books", "Catalogues", "Brochures multipages", "Rapports professionnels"],
  },
  {
    title: "Collaboration avancée",
    duration: "1h",
    points: ["Commentaires, validation, partage", "Travail en équipe", "Gestion des droits"],
  },
  {
    title: "Automatisation & intégrations",
    duration: "1h",
    points: ["Redimensionnement automatique", "Intégration avec Google Drive, Dropbox, etc.", "Importation de données (Canva Docs + tableaux)"],
  },
  {
    title: "Atelier final",
    duration: "2 à 3h",
    points: [
      "Création d’un projet complet professionnel (ex : identité visuelle + kit réseaux sociaux, présentation animée + vidéo promotionnelle, catalogue + visuels publicitaires)",
    ],
  },
]

const supports = [
  {
    title: "Supports fournis",
    icon: FileText,
    items: ["Fiches mémo (Brand Kit, animation, vidéo)", "Exercices corrigés", "Modèles avancés prêts à adapter"],
  },
  {
    title: "Méthodes pédagogiques",
    icon: Users,
    items: ["Alternance démonstration / exercices", "Cas métiers concrets", "Accompagnement individuel"],
  },
  {
    title: "Évaluation des acquis",
    icon: ClipboardCheck,
    items: ["Quiz final", "Projet complet réalisé", "Auto-évaluation guidée"],
  },
]

export default function CanvaAvancePage() {
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
                Design & communication
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-[color:var(--smile-navy)] md:text-4xl">
                Canva - Niveau avancé
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Maîtrisez les fonctionnalités avancées, créez des identités visuelles complètes, des présentations animées et
                des vidéos optimisées pour gagner en impact et en productivité.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge icon={Clock} label="2 à 3 jours recommandés (14 à 21h)" />
                <Badge icon={Award} label="Niveau : avancé" />
                <Badge icon={Settings} label="Brand Kit, animation, vidéo" />
              </div>
            </div>

            <div className="fade-in-up fade-delay-100">
              <div className="rounded-3xl border border-[color:var(--border)] bg-white/70 p-6 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <Layers className="h-5 w-5 text-[color:var(--smile-navy)]" />
                  <h2 className="text-lg font-semibold text-[color:var(--smile-navy)]">Objectifs pédagogiques</h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Maîtriser les fonctionnalités avancées de Canva.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Créer des identités visuelles complètes.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Concevoir des présentations professionnelles.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Utiliser les outils d’animation et de vidéo.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Optimiser la productivité (modèles, bibliothèques, automatisations).
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[color:var(--smile-light)]/70 p-4 text-sm text-[color:var(--smile-navy)]">
                  <p className="font-semibold">Durée recommandée</p>
                  <p>2 à 3 jours (14 à 21h) selon l’étendue de vos productions et de vos cas métiers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card title="Public visé" icon={Users} delay={0}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Utilisateurs Canva réguliers voulant professionnaliser et automatiser leurs productions.</li>
                <li>Équipes communication/marketing, indépendants, porteurs de projets.</li>
              </ul>
            </Card>

            <Card title="Prérequis" icon={ClipboardCheck} delay={50}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pratique Canva de base (modèles simples, insertion d’éléments).</li>
                <li>Notions de design conseillées.</li>
              </ul>
            </Card>

            <Card title="Livrables" icon={Award} delay={100}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Brand Kit ou charte complète appliquée.</li>
                <li>Templates avancés (réseaux, documents, présentations) et projet final animé/vidéo.</li>
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
                <h2 className="text-lg font-semibold text-[color:var(--smile-navy)]">Atelier final</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Réalisation d’un projet complet : identité visuelle + kit réseaux sociaux, ou présentation animée + vidéo
                promotionnelle, ou catalogue + visuels publicitaires selon vos besoins.
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
                  Quiz final + projet complet pour valider les acquis.
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
                  Monsieur SAYADA Yoni, formateur Word, Excel, PowerPoint et Canva depuis 2023. Un accompagnement pas-à-pas
                  pour des productions visuelles impactantes et industrialisées.
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
                Partagez vos cas métiers (charte, modèles, vidéo, présentations) et vos contraintes. Retour sous 24h avec une
                proposition calibrée.
              </p>
            </div>
            <div className="fade-in-up fade-delay-50">
              <ContactForm
                title="Je veux suivre cette formation Canva avancé"
                description="Indiquez vos objectifs : Brand Kit, modèles, vidéo, automatisations. Nous adaptons le parcours."
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

function Card({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string
  icon: typeof Users
  children: ReactNode
  delay?: number
}) {
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
