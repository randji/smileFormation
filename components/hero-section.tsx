"use client"

import Image from "next/image";
import WinkSmileyGSAP from "@/components/WinkSmileyGSAP";

interface HeroSectionProps {
  title: string;
  description: string[];
  certificationImage?: string;
  // Si true, on affiche le smiley animé GSAP à la place de l'image
  useAnimatedLogo?: boolean;
  // Sources image (ouverts/clin d'œil) si vous préférez utiliser vos PNG/JPG
  logoOpen?: string;
  logoWink?: string;
  // Durée de l'apparition/descente du texte sous le logo (s)
  textRevealDuration?: number;
}

export function HeroSection({
  title,
  description,
  certificationImage,
  useAnimatedLogo,
  logoOpen,
  logoWink,
  textRevealDuration,
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

        <div className="flex-shrink-0">
          {useAnimatedLogo ? (
            <div className="mx-auto lg:mx-0">
              <WinkSmileyGSAP
                size={160}
                color="#FFB80F"
                interval={2.4}
                blinkDuration={0.82}
                openSrc={logoOpen}
                winkSrc={logoWink}
                textSrc="/texteSmile.jpg"
                textRevealDuration={textRevealDuration}
              />
            </div>
          ) : (
            certificationImage && (
              <Image
                src={certificationImage || "/Smile.jpg"}
                alt="smile formation logo"
                width={200}
                height={200}
                className="h-auto w-80 mx-auto lg:mx-0"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
