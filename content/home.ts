import type { TrainingCardProps } from "@/components/training-card";

export const hero = {
  title: "Smile Formation",
  description: [
    "Centre de formation professionnelle spécialisé en bureautique.",
    "Notre pédagogie est orientée résultats: parcours sur-mesure, exercices pratiques, et accompagnement individualisé.","La formation qui vous donne le sourire.", "Locaux accessibles PSH/PMR.",
    
  ],
  certificationImage: "/Smile.jpg",
  // Active le smiley animé GSAP à la place de l'image
  useAnimatedLogo: true,
  // Images fournies par le client (mode images GSAP)
  logoOpen: "/Smile.jpg",
  logoWink: "/logoSmileClose.png",
  // Durée de la descente/affichage du texte sous le logo (secondes)
  logoTextDuration: 0.9,
  // Tailles responsives du logo (px) : base < md, md ≥ 768px, lg ≥ 1024px, xl ≥ 1280px
  smileySizes: { base: 160, md: 220, lg: 260, xl: 300 },
  // Timings de l'animation (secondes)
  // - logoBlinkDuration: durée totale d'un clin d'œil
  // - logoBlinkInterval: délai avant le clin d'œil (si rejoué plus tard)
  logoBlinkDuration: 0.82,
  logoBlinkInterval: 3.4,
  // Délai avant d'afficher/commencer l'animation du logo (secondes)
  // Mettez 0 pour démarrer immédiatement
  logoStartDelay: 0,
};

export const tabs: string[] = ["Word", "Excel", "PowerPoint", "Canva"];

export const trainings: TrainingCardProps[] = [
  {
    title: "Français langue étrangère (FLE) – niveaux A1 à C1",
    category: "Langues",
    imageUrl: "/Smile.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 35h",
    contactText: "Nous contacter",
  },
  {
    title: "Anglais professionnel – communication et réunions",
    category: "Langues",
    imageUrl: "/Smile.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 21h",
    contactText: "Nous contacter",
  },
  {
    title: "Espagnol – conversation et écrits pro",
    category: "Langues",
    imageUrl: "/Smile.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 21h",
    contactText: "Nous contacter",
  },
  {
    title: "Word – niveau intermédiaire",
    category: "Word",
    imageUrl: "/Smile.jpg",
    type: "Atelier pratique",
    duration: "1 à 2 jours",
    contactText: "Nous contacter",
  },
  {
    title: "Word - niveau débutant",
    category: "Word",
    imageUrl: "/Smile.jpg",
    type: "Atelier guidé",
    duration: "1 jour ou 2 demi-journées",
    contactText: "Programme détaillé",
  },
  {
    title: "Excel - niveau débutant",
    category: "Excel",
    imageUrl: "/Smile.jpg",
    type: "Atelier guidé",
    duration: "1 journée (7h)",
    contactText: "Programme détaillé",
  },
  {
    title: "Excel - niveau intermédiaire",
    category: "Excel",
    imageUrl: "/Smile.jpg",
    type: "Atelier pratique",
    duration: "1 journée",
    contactText: "Programme détaillé",
  },
  {
    title: "PowerPoint - niveau débutant",
    category: "PowerPoint",
    imageUrl: "/Smile.jpg",
    type: "Atelier guidé",
    duration: "1 journée (7h)",
    contactText: "Programme détaillé",
  },
  {
    title: "PowerPoint - niveau intermédiaire",
    category: "PowerPoint",
    imageUrl: "/Smile.jpg",
    type: "Atelier pratique",
    duration: "1 journée",
    contactText: "Programme détaillé",
  },
  {
    title: "Canva - niveau débutant",
    category: "Canva",
    imageUrl: "/Smile.jpg",
    type: "Atelier guidé",
    duration: "2 jours recommandés",
    contactText: "Programme détaillé",
  },
  {
    title: "Canva - niveau avancé",
    category: "Canva",
    imageUrl: "/Smile.jpg",
    type: "Atelier pratique",
    duration: "2 à 3 jours",
    contactText: "Programme détaillé",
  },
  // {
  //   title: "Excel – tableaux, formules et tableaux croisés",
  //   category: "Bureautique",
  //   imageUrl: "/blue-technology-keyboard-close-up.jpg",
  //   type: "Atelier pratique",
  //   duration: "1 à 3 jours",
  //   contactText: "Nous contacter",
  // },
  {
    title: "IA – initiation et usages métiers",
    category: "IA",
    imageUrl: "/Smile.jpg",
    type: "Workshop",
    duration: "1 journée",
    contactText: "Nous contacter",
  },
  {
    title: "IA – prompt engineering pour débutants",
    category: "IA",
    imageUrl: "/Smile.jpg",
    type: "Workshop",
    duration: "1 journée",
    contactText: "Nous contacter",
  },
];

// Contenu de la section contact (centralisé pour faciliter la personnalisation)
export const contactSection = {
  // Titre affiché au-dessus du formulaire
  title: "Besoin d'une formation ?",
  // Court texte d’introduction sous le titre
  description:
    "Parlez-nous de votre projet et nous revenons vers vous sous 24h.",
  // Libellé du bouton d’envoi
  submitLabel: "Envoyer ma demande",
};

// Liens vers les pages formations détaillées (configurable)
export const trainingLinks: Record<string, string> = {
  "Excel - niveau débutant": "/formations/excel-debutant",
  "Excel - niveau intermédiaire": "/formations/excel",
  "PowerPoint - niveau débutant": "/formations/powerpoint-debutant",
  "PowerPoint - niveau intermédiaire": "/formations/powerpoint",
  "Canva - niveau débutant": "/formations/canva-debutant",
  "Canva - niveau avancé": "/formations/canva",
  "Word – niveau intermédiaire": "/formations/word",
  "Word - niveau intermédiaire": "/formations/word",
  "Word – niveau débutant": "/formations/word-debutant",
  "Word - niveau débutant": "/formations/word-debutant",
};
