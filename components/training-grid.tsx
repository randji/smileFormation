import { TrainingCard, type TrainingCardProps } from "./training-card"

interface TrainingGridProps {
  trainings: TrainingCardProps[]
}

export function TrainingGrid({ trainings }: TrainingGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {trainings.map((training, index) => (
          <TrainingCard key={index} {...training} />
        ))}
      </div>
    </div>
  )
}
