"use client"

export function LastUpdatedSection() {
  const now = new Date()
  const formatted = now.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })

  return (
    <section>
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-xs md:text-sm text-muted-foreground">
          Mise à jour le {formatted}
        </p>
      </div>
    </section>
  )
}

