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
  title: "Formation Word - Niveau intermédiaire | Smile Formation",
  description:
    "Programme détaillé de la formation Microsoft Word niveau intermédiaire : objectifs, modules avancés (styles, publipostage, collaboration), méthodes pédagogiques et atelier final.",
}

const modules = [
  {
    title: "Module 1 - Rappels essentiels",
    duration: "30 min",
    points: [
      "Mise en forme texte et paragraphes",
      "Raccourcis clavier utiles",
      "Sauvegarde et gestion des versions",
    ],
  },
  {
    title: "Module 2 - Structurer un document",
    duration: "1h",
    points: [
      "Styles titres/corps pour harmoniser",
      "Création automatique de sommaire",
      "Sections pour différencier en-têtes/pieds de page",
    ],
  },
  {
    title: "Module 3 - Mise en page avancée",
    duration: "1h",
    points: ["Marges, orientation, colonnes", "Numérotation personnalisée des pages", "Sauts de page et de section"],
  },
  {
    title: "Module 4 - Objets dans Word",
    duration: "1h",
    points: [
      "Images : insertion, habillage, positionnement",
      "Tableaux : styles, mise en forme, mises en page rapides",
      "Formes, SmartArt, zones de texte",
    ],
  },
  {
    title: "Module 5 - Publipostage",
    duration: "1h",
    points: ["Lettres types", "Connexion à une base Excel", "Fusion pour étiquettes ou enveloppes"],
  },
  {
    title: "Module 6 - Collaboration et révision",
    duration: "1h",
    points: ["Suivi des modifications", "Commentaires ciblés", "Comparaison de versions"],
  },
]

const supports = [
  {
    title: "Supports fournis",
    icon: FileText,
    items: ["Fiches mémo (styles, publipostage, raccourcis)", "Exercices corrigés", "Modèles prêts à l'emploi"],
  },
  {
    title: "Méthodes pédagogiques",
    icon: Users,
    items: ["Alternance démonstration / exercices", "Mise en pratique immédiate", "Accompagnement individuel"],
  },
  {
    title: "Évaluation des acquis",
    icon: ClipboardCheck,
    items: ["Quiz final", "Réalisation d'un document structuré", "Auto-évaluation guidée"],
  },
]

export default function WordIntermediairePage() {
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
                Microsoft Word - Niveau intermédiaire
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Maîtrisez les styles, la mise en page avancée et le publipostage pour produire des documents professionnels
                structurés et cohérents.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge icon={Clock} label="1 à 2 jours (7 à 14h)" />
                <Badge icon={Award} label="Niveau : intermédiaire" />
                <Badge icon={Settings} label="Styles, sections, publipostage" />
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
                    Construire des documents structurés avec styles, sections et sommaires automatiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Mettre en page de façon avancée : colonnes, numérotation personnalisée, en-têtes/pieds différenciés.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Insérer et maîtriser images, tableaux, SmartArt et zones de texte.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Réaliser un publipostage (lettres, étiquettes) connecté à une base de données.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-[color:var(--smile-yellow)]" />
                    Collaborer efficacement : suivi des modifications, commentaires, comparaison de versions.
                  </li>
                </ul>
                <div className="mt-6 rounded-2xl bg-[color:var(--smile-light)]/70 p-4 text-sm text-[color:var(--smile-navy)]">
                  <p className="font-semibold">Durée modulable</p>
                  <p>1 à 2 jours selon la pratique souhaitée (7h ou 14h), ajustable aux objectifs métiers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-14 md:pb-20">
          <div className="grid gap-8 md:grid-cols-3">
            <Card title="Public visé" icon={Users} delay={0}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Utilisateurs Word déjà à l'aise sur les bases, voulant structurer et automatiser.</li>
                <li>Salariés, indépendants, demandeurs d'emploi, reconversion.</li>
              </ul>
            </Card>

            <Card title="Prérequis" icon={ClipboardCheck} delay={50}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Mise en forme simple maîtrisée (gras, listes, enregistrer un document).</li>
                <li>Connaissances de base de la bureautique.</li>
              </ul>
            </Card>

            <Card title="Livrables" icon={Award} delay={100}>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documents modèles structurés (styles, sommaire, sections).</li>
                <li>Publipostage fonctionnel prêt à réutiliser.</li>
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
                Production d'un document complet : styles appliqués, sommaire automatique, sections différenciées,
                objets insérés, publipostage (lettre ou étiquette) et export PDF.
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
                  Quiz final + réalisation d'un document structuré pour valider les acquis.
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
                  Monsieur SAYADA Yoni, formateur Word et Excel depuis 2023. Un accompagnement pas-à-pas pour intégrer les
                  bonnes pratiques avancées et gagner en productivité.
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
                title="Je veux suivre cette formation Word intermédiaire"
                description="Précisez vos documents cibles et les fonctionnalités que vous souhaitez maîtriser."
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
