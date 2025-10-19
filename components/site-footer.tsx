import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="#" className="hover:text-[color:var(--smile-navy)]">
            À propos
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="#" className="hover:text-[color:var(--smile-navy)]">
            Notre équipe
          </Link>
          <span className="text-muted-foreground">|</span>
          <Link href="#" className="hover:text-[color:var(--smile-navy)]">
            Actualités
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link href="#" className="hover:text-[color:var(--smile-navy)]">
            Oyat
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-foreground">
            Mentions légales
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-foreground">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
