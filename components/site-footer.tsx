import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12">
          {/* Colonne gauche: logo (toujours visible) */}
          <div className="flex justify-center">
            <Image
              src="/logoSmile.jpg"
              alt="Smile Formation"
              width={600}
              height={600}
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 240px, 180px"
              className="mx-auto h-auto w-44 md:w-60 lg:w-72"
              priority
            />
          </div>

          {/* Colonne droite: coordonnées (toujours visibles, y compris mobile) */}
          <div className="flex w-full justify-center">
            <div className="w-full text-center leading-relaxed text-base md:text-lg lg:text-xl">
              <p className="font-medium">Smile Formation</p>
              <p>6 rue d'armaille 75017 Paris</p>
              <p>
                Téléphone: {" "}
                <a href="tel:0618730186" className="hover:text-[color:var(--smile-navy)]">
                  0618730186
                </a>
              </p>
              <p>
                Mail: {" "}
                <a href="mailto:contact@smileformation.fr" className="hover:text-[color:var(--smile-navy)]">
                  contact@smileformation.fr
                </a>
              </p>
              <p>SIREN: 990 859 654</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <Link href="/conditions-generales" className="hover:text-foreground">
            Conditions générales de vente
          </Link>
          <span>|</span>
          <Link href="/mentions-legales" className="hover:text-foreground">
            Mentions légales
          </Link>
          <span>|</span>
          <Link href="/confidentialite" className="hover:text-foreground">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
