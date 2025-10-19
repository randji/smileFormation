import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string[];
  certificationImage?: string;
}

export function HeroSection({
  title,
  description,
  certificationImage,
}: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h1
            className="mb-8 text-center lg:text-left text-4xl sm:text-5xl font-light uppercase tracking-wide lg:text-6xl"
            style={{ color: "var(--smile-navy)" }}
          >
            {title}
          </h1>
          <div className="space-y-4 text-center lg:text-left text-foreground/80 leading-relaxed">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {certificationImage && (
          <div className="flex-shrink-0">
            <Image
              src={certificationImage || "/Smile.jpg"}
              alt="Certification Qualiopi"
              width={200}
              height={200}
              className="h-auto w-80 mx-auto lg:mx-0"
            />
          </div>
        )}
      </div>
    </section>
  );
}
