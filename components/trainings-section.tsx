"use client"

import { useEffect, useMemo, useState } from "react"
import { FilterTabs } from "@/components/filter-tabs"
import { TrainingGrid } from "@/components/training-grid"
import type { TrainingCardProps } from "@/components/training-card"

interface TrainingsSectionProps {
  tabs: string[]
  trainings: TrainingCardProps[]
}

function normalizeLabel(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim()
}

export function TrainingsSection({ tabs, trainings }: TrainingsSectionProps) {
  // Masque temporairement certains onglets (réversibles plus tard)
  const hidden = new Set(["langues", "ia", "tous"]) // labels normalisés
  const visibleTabs = useMemo(
    () => tabs.filter((t) => !hidden.has(normalizeLabel(t))),
    [tabs]
  )

  const [active, setActive] = useState<string>(visibleTabs[0] ?? tabs[0])

  // Si la liste visible change (ou devient vide), réaligne l'onglet actif
  useEffect(() => {
    if (!visibleTabs.length) {
      setActive("")
    } else if (!visibleTabs.includes(active)) {
      setActive(visibleTabs[0])
    }
  }, [visibleTabs, active])

  const filtered = useMemo(() => {
    const key = normalizeLabel(active || "")
    if (!key || key === "tous") return trainings
    return trainings.filter((t) => normalizeLabel(t.category) === key)
  }, [active, trainings])

  return (
    <section>
      {visibleTabs.length > 0 && (
        <FilterTabs tabs={visibleTabs} onFilterChange={setActive} />
      )}
      <TrainingGrid trainings={filtered} />
    </section>
  )
}
