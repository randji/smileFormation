import { TrainingCard, type TrainingCardProps } from "./training-card"

interface TrainingGridProps {
  trainings: TrainingCardProps[]
}

export function TrainingGrid({ trainings }: TrainingGridProps) {
  return (
    <div className="container mx-auto px-4 py-8 justify-self-center">
      {/*  ne pas oublier d'ajouter plus tard md:grid-cols-2 lg:grid-cols-3 */}
      <div className="grid justify-items-center gap-6 "> 
        {trainings.map((training, index) => (
          <TrainingCard key={index} {...training} />
        ))}
      </div>
    </div>
  )
}
