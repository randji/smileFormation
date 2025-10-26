import type { TrainingCardProps } from "@/components/training-card";

export const hero = {
  title: "Smile Formation",
  description: [
    "Centre de formation professionnelle spécialisé en langues (français, anglais, espagnol...), bureautique (Word, Excel, PowerPoint) et intelligence artificielle.",
    "Notre pédagogie est orientée résultats: parcours sur-mesure, exercices pratiques, et accompagnement individualisé. La formation qui vous donne le sourire.",
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

export const tabs: string[] = ["Langues", "Bureautique", "IA", "Tous"];

export const trainings: TrainingCardProps[] = [
  {
    title: "Français langue étrangère (FLE) – niveaux A1 à C1",
    category: "Langues",
    imageUrl: "/business-meeting-silhouettes-professional.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 35h",
    contactText: "Nous contacter",
  },
  {
    title: "Anglais professionnel – communication et réunions",
    category: "Langues",
    imageUrl: "/code-on-computer-screen-data-privacy.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 21h",
    contactText: "Nous contacter",
  },
  {
    title: "Espagnol – conversation et écrits pro",
    category: "Langues",
    imageUrl: "/blue-technology-keyboard-close-up.jpg",
    type: "Inter / Intra-entreprise",
    duration: "Cycle 14 à 21h",
    contactText: "Nous contacter",
  },
  {
    title: "Word – niveau intermédiaire",
    category: "Bureautique",
    imageUrl: "/code-on-computer-screen-data-privacy.jpg",
    type: "Atelier pratique",
    duration: "1 à 2 jours",
    contactText: "Nous contacter",
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
    imageUrl: "/business-meeting-silhouettes-professional.jpg",
    type: "Workshop",
    duration: "1 journée",
    contactText: "Nous contacter",
  },
  {
    title: "IA – prompt engineering pour débutants",
    category: "IA",
    imageUrl: "/code-on-computer-screen-data-privacy.jpg",
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
    "Parlez-nous de votre projet (langues, bureautique, IA) et nous revenons vers vous sous 24h.",
  // Libellé du bouton d’envoi
  submitLabel: "Envoyer ma demande",
};
