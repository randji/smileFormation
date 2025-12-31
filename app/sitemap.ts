import type { MetadataRoute } from "next"

const baseUrl = "https://smileformation.fr"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = [
    "",
    "/contact",
    "/formations/word",
    "/formations/word-debutant",
    "/formations/excel",
    "/formations/excel-debutant",
    "/formations/powerpoint",
    "/formations/powerpoint-debutant",
    "/formations/canva",
    "/formations/canva-debutant",
  ]

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }))
}
