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
  MonitorPlay,
  Sparkles,
  Users,
} from "lucide-react"

export const metadata = {
  title: "Formation PowerPoint - Niveau débutant | Smile Formation",
  description:
    "Programme détaillé de la formation Microsoft PowerPoint niveau débutant : création de présentations, insertion d'éléments, transitions, animations simples, projection et export.",
}

const modules = [
  {
    title: "Introduction à PowerPoint",
    duration: "30 min",
    points: ["Interface, ruban, modes d'affichage", "Présentation des modèles"],
  },
  {
    title: "Création d'une présentation",
    duration: "1h",
    points: ["Ajouter, supprimer, réorganiser des diapositives", "Choisir un thème", "Utiliser les dispositions"],
  },
  {
    title: "Insertion d'éléments",
    duration: "1h30",
    points: ["Zones de texte", "Images, icônes, formes", "Tableaux et graphiques simples", "SmartArt"],
  },
  {
    title: "Mise en forme",
    duration: "1h",
    points: ["Harmonisation des couleurs", "Alignements, regroupements", "Gestion des polices"],
  },
  {
    title: "Transitions et animations",
    duration: "1h",
    points: ["Transitions entre diapositives", "Animations simples sur objets", "Bonnes pratiques (éviter les excès)"],
  },
  {
    title: "Projection et export",
    duration: "45 min",
    points: ["Mode présentateur", "Impression des supports", "Export PDF"],
  },
  {
    title: "Atelier pratique",
    duration: "45 min",
    points: ["Création d'une mini-présentation complète"],
  },
]

const supports = [
  {
    title: "Supports fournis",
    icon: FileText,
    items: ["Fiches mémo modèles/thèmes", "Exercices corrigés", "Modèles prêts à l'emploi"],
  },
  {
    title: "Méthodes pédagogiques",
    icon: Users,
    items: ["Alternance démonstration / exercices", "Mise en pratique immédiate", "Accompagnement individuel"],
  },
  {
    title: "Évaluation des acquis",
    icon: ClipboardCheck,
    items: ["Quiz final", "Présentation complète réalisée", "Auto-évaluation guidée"],
  },
]

export default function PowerPointDebutantPage() {
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
                Microsoft PowerPoint - Niveau débutant
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Découvrez l'interface, créez une présentation structurée, insérez vos médias et maîtrisez transitions,
                animations simples et export pour projeter sereinement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge icon={Clock} label="1 journée (7h) ou 2 demi-journées" />
                <Badge icon={Award} label="Niveau : débutant" />
                <Badge icon={MonitorPlay} label="Objectif : présentation prête" />
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
                    Découvrir l'interface PowerPoint.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Créer une présentation simple et structurée.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Utiliser les modèles et thèmes.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Insérer du texte, des images, des formes.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Gérer les transitions et animations simples.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[color:var(--smile-light)]/70 p-4 text-sm text-[color:var(--smile-navy)]">
                  <p className="font-semibold">Durée modulable</p>
                  <p>1 journée (7h) ou 2 demi-journées (2 × 3h30 ou 1 × 4h + 1 × 3h), adaptable selon le public.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card title="Public visé" icon={Users} delay={0}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Personnes découvrant PowerPoint ou souhaitant structurer leurs présentations.</li>
                <li>Salariés, indépendants, demandeurs d'emploi ou reconversion.</li>
              </ul>
            </Card>

            <Card title="Prérequis" icon={ClipboardCheck} delay={50}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Connaissances bureautiques de base.</li>
                <li>Aucune pratique PowerPoint préalable nécessaire.</li>
              </ul>
            </Card>

            <Card title="Livrables" icon={Award} delay={100}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Présentation complète prête à projeter/exporter.</li>
                <li>Modèles réutilisables adaptés à votre charte.</li>
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
                Création d'une mini-présentation complète : choix du thème, insertion d'images/icônes, transitions,
                animations simples et export PDF ou support imprimable.
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
                  Quiz final + présentation complète pour valider les acquis.
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
                  Monsieur SAYADA Yoni, formateur Word, Excel et PowerPoint depuis 2023. Une approche pas-à-pas pour sécuriser
                  les débutants et harmoniser vos supports.
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
                Décrivez vos dates, vos publics et votre charte. Nous revenons sous 24h avec une proposition adaptée.
              </p>
            </div>
            <div className="fade-in-up fade-delay-50">
              <ContactForm
                title="Je veux suivre cette formation PowerPoint débutant"
                description="Précisez le type de présentation à produire et les médias à intégrer."
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
