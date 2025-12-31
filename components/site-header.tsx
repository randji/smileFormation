import { type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center md:justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Smile.jpg" alt="SMILE FORMATION" width={32} height={32} />
          <span className="text-2xl font-bold" style={{ color: "var(--smile-navy)" }}>
            SMILE <span className="text-[color:var(--smile-yellow)]">FORMATION</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Dropdown label="WORD">
            <Link
              href="/formations/word"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Word intermédiaire
            </Link>
            <Link
              href="/formations/word-debutant"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Word débutant
            </Link>
          </Dropdown>

          <Dropdown label="EXCEL">
            <Link
              href="/formations/excel"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Excel intermédiaire
            </Link>
            <Link
              href="/formations/excel-debutant"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Excel débutant
            </Link>
          </Dropdown>

          <Dropdown label="POWERPOINT">
            <Link
              href="/formations/powerpoint"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              PowerPoint intermédiaire
            </Link>
            <Link
              href="/formations/powerpoint-debutant"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              PowerPoint débutant
            </Link>
          </Dropdown>

          <Dropdown label="CANVA">
            <Link
              href="/formations/canva"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Canva avancé
            </Link>
            <Link
              href="/formations/canva-debutant"
              className="block px-4 py-2 text-sm font-medium text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-light)]"
            >
              Canva débutant
            </Link>
          </Dropdown>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-10 px-4 rounded-full border bg-transparent border-[color:var(--smile-navy)] text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-yellow)] hover:text-[#111827]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

function Dropdown({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative group inline-block">
      <button
        type="button"
        className="text-sm font-medium hover:text-[color:var(--smile-navy)] focus:outline-none"
      >
        {label}
      </button>
      <div className="absolute left-0 top-full z-20 hidden min-w-[200px] rounded-lg border border-[color:var(--border)] bg-white shadow-lg group-hover:block group-focus-within:block">
        {children}
      </div>
    </div>
  )
}
