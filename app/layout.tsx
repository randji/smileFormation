import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "SMILE FORMATION",
    template: "%s | SMILE FORMATION",
  },
  description:
    "Centre de formation professionnelle : bureautique (Word, Excel, PowerPoint, Canva). Programmes détaillés, ateliers pratiques, accessibilité PSH/PMR.",
  metadataBase: new URL("https://smileformation.fr"),
  alternates: { canonical: "https://smileformation.fr" },
  keywords: [
    "formation",
    "bureautique",
    "Word",
    "Excel",
    "PowerPoint",
    "Canva",
    "Smile Formation",
    "certification Qualiopi",
  ],
  openGraph: {
    type: "website",
    url: "https://smileformation.fr",
    siteName: "SMILE FORMATION",
    title: "SMILE FORMATION",
    description:
      "Formations Word, Excel, PowerPoint, Canva. Programmes détaillés, ateliers pratiques, accessibilité PSH/PMR.",
    images: [
      {
        url: "/Smile.jpg",
        width: 1200,
        height: 630,
        alt: "SMILE FORMATION - centre de formation bureautique et IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMILE FORMATION",
    description:
      "Formations bureautique (Word, Excel, PowerPoint, Canva). Programmes détaillés, ateliers pratiques, accessibilité PSH/PMR.",
    images: ["/Smile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "JKul2HmEP9Ad-lKKOaGjd9K8YS9I6HhZNGto5XsVR_U",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
