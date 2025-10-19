"use client"

import { useState } from "react"

interface FilterTabsProps {
  tabs: string[]
  onFilterChange?: (filter: string) => void
}

export function FilterTabs({ tabs, onFilterChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    onFilterChange?.(tab)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-4 text-sm font-medium uppercase tracking-wide transition-colors ${
              activeTab === tab
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  )
}
