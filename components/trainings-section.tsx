"use client"

import { useMemo, useState } from "react"
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
  const [active, setActive] = useState(tabs[0])

  const filtered = useMemo(() => {
    const key = normalizeLabel(active)
    if (key === "tous") return trainings
    return trainings.filter((t) => normalizeLabel(t.category) === key)
  }, [active, trainings])

  return (
    <section>
      <FilterTabs tabs={tabs} onFilterChange={setActive} />
      <TrainingGrid trainings={filtered} />
    </section>
  )
}

