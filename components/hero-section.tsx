"use client";

import Image from "next/image";
import WinkSmileyGSAP from "@/components/WinkSmileyGSAP";
import { useEffect, useState } from "react";

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
  // Tailles responsives (px): base (<md), md (>=768), lg (>=1024), xl (>=1280)
  smileySizes?: { base: number; md?: number; lg?: number; xl?: number };
  // Timings de clin d'œil
  blinkDuration?: number;
  blinkInterval?: number;
}

export function HeroSection({
  title,
  description,
  certificationImage,
  useAnimatedLogo,
  logoOpen,
  logoWink,
  textRevealDuration,
  smileySizes,
  blinkDuration,
  blinkInterval,
}: HeroSectionProps) {
  const sizes = {
    base: 160,
    md: 220,
    lg: 260,
    xl: 300,
    ...(smileySizes ?? {}),
  };
  const sizesAttr = `(min-width:1280px) ${sizes.xl}px, (min-width:1024px) ${sizes.lg}px, (min-width:768px) ${sizes.md}px, ${sizes.base}px`;
  // Masquer le logo jusqu'au montage pour éviter l'effet "petit puis grand"
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setShowLogo(true), 0);
    return () => clearTimeout(id);
  }, []);
  // Calcule une taille numérique côté client pour passer à `size={...}`
  const [currentSize, setCurrentSize] = useState<number>(sizes.base);
  useEffect(() => {
    const pick = () => {
      const w = window.innerWidth;
      if (w >= 1280) return sizes.xl;
      if (w >= 1024) return sizes.lg;
      if (w >= 768) return sizes.md;
      return sizes.base;
    };
    const update = () => setCurrentSize(pick());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [sizes.base, sizes.md, sizes.lg, sizes.xl]);
  return (
    <section className="container pt-2 mb:mx-auto min-h-[calc(100vh-4rem)] px-4 py-8 flex items-center mb-12">
      <div className="flex flex-col items-center gap-2 mb:gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <h1
            className=" mb-6 text-center lg:text-left text-4xl sm:text-5xl font-light uppercase tracking-wide lg:text-6xl"
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

        <div className="flex-shrink-0 transition-opacity duration-300" style={{ opacity: showLogo ? 1 : 0 }} aria-hidden={!showLogo}>
          {useAnimatedLogo ? (
            <div className="md:absolute mx-auto lg:mx-0 md:top-24 md:left-250" style={{ width: currentSize, height: currentSize }}>
              <WinkSmileyGSAP
                size={currentSize}
                color="#FFB80F"
                interval={blinkInterval ?? 2.4}
                blinkDuration={blinkDuration ?? 0.82}
                openSrc={logoOpen}
                winkSrc={logoWink}
                textSrc="/texteSmile.jpg"
                textRevealDuration={textRevealDuration}
                imageSizes={sizesAttr}
              />
            </div>
          ) : (
            certificationImage && (
              <div className="mx-auto lg:mx-0 relative" style={{ width: currentSize, height: currentSize }}>
                <Image
                  src={certificationImage || "/Smile.jpg"}
                  alt="smile formation logo"
                  fill
                  className="object-contain"
                  sizes={sizesAttr}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
