import { Button } from "@/components/ui/button"
import { Settings, Clock, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface TrainingCardProps {
  title: string
  category: string
  imageUrl: string
  type: string
  duration: string
  contactText: string
  href?: string
}

export function TrainingCard({ title, category, imageUrl, type, duration, contactText, href }: TrainingCardProps) {
  return (
    <div className="group relative w-full max-w-md mx-auto overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#003366]/90 to-[#001a33]/95" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[300px] flex-col justify-between p-6 text-white">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/80">{category}</p>
          <h3 className="text-xl font-medium leading-snug">{title}</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2 border-t border-white/20 pt-3">
            <div className="flex items-center gap-3 text-sm">
              <Settings className="h-4 w-4" />
              <span className="uppercase tracking-wide">{type}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4" />
              <span className="uppercase tracking-wide">{duration}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4" />
              <span className="uppercase tracking-wide">{contactText}</span>
            </div>
          </div>

          {href ? (
            <Link
              href={href as any}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none rounded-full border border-white bg-transparent text-white hover:bg-[color:var(--smile-yellow)] hover:text-[#111827] h-9 px-4"
            >
              En savoir +
            </Link>
          ) : (
            <Button
              variant="outline"
              className="rounded-full border-white bg-transparent text-white hover:bg-[color:var(--smile-yellow)] hover:text-[#111827] h-9 px-4"
            >
              En savoir +
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
