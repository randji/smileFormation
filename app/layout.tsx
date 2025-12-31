import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "SMILE FORMATION",
    template: "%s | SMILE FORMATION",
  },
  description:
    "Centre de formation: bureautique (Word, Excel, PowerPoint, canva). La formation qui vous donne le sourire. Locaux accessibles PSH/PMR",
  metadataBase: new URL("https://smileformation.fr"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
