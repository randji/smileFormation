import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function LoadMoreSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center gap-6">
        <p className="text-sm font-medium">Plus de formations</p>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full bg-transparent">
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
