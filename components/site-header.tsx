import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center md:justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Smile.jpg"
            alt="SMILE FORMATION"
            width={32}
            height={32}
          />
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--smile-navy)" }}
          >
            SMILE{" "}
            <span className="text-[color:var(--smile-yellow)]">FORMATION</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Centre
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Formations
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Équipe
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Financements
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Actualités
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[color:var(--smile-navy)]"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-[color:var(--smile-navy)] text-[color:var(--smile-navy)] hover:bg-[color:var(--smile-yellow)] hover:text-[#111827]"
          >
            Contact
          </Button>
          <Link
            href="#"
            className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-accent"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <button className="text-sm font-medium">FR EN</button>
        </div>
      </div>
    </header>
  );
}
