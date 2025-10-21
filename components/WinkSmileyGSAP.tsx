"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

type Props = {
  size?: number // taille en px
  color?: string // couleur du trait/forme (mode SVG)
  interval?: number // temps entre deux clignements (s)
  blinkDuration?: number // durée du clignement complet (s)
  // Mode images: si vous fournissez ces 2 props, on animera l’image "clin d’œil" par-dessus l’image ouverte
  openSrc?: string
  winkSrc?: string
  // Image texte à afficher sous le smiley après l’animation
  textSrc?: string
  // Durée de l'animation de descente/affichage du texte (secondes)
  textRevealDuration?: number
}

export default function WinkSmileyGSAP({
  size = 220,
  color = "#F6C012",
  interval = 2.2,
  blinkDuration = 0.22,
  openSrc,
  winkSrc,
  textSrc = "/texteSmile.jpg",
  textRevealDuration = 0.6,
}: Props) {
  // Réfs pour le mode SVG
  const eyeRightRef = useRef<SVGRectElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

  // Réf pour le mode images (overlay clin d'œil)
  const winkRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    // Mode images: on fait simplement apparaître/disparaître l’overlay clin d’œil
    if (openSrc && winkSrc && winkRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline()
        const closeTime = blinkDuration * 0.45
        const holdTime = blinkDuration * 0.1
        const openTime = blinkDuration * 0.45

        gsap.set(winkRef.current, { opacity: 0, scale: 1, transformOrigin: "50% 50%" })
        if (textRef.current) gsap.set(textRef.current, { opacity: 0, y: -16, zIndex: 0 })
        tl.to(winkRef.current, { opacity: 1, duration: closeTime, ease: "power2.in" })
          .to(winkRef.current, { opacity: 1, duration: holdTime })
          .to(winkRef.current, { opacity: 0, duration: openTime, ease: "power2.out" })
          // fait descendre le texte juste après le clin d'œil
          .to(textRef.current, { opacity: 1, y: 0, duration: textRevealDuration, ease: "power2.out" }, "+=0.05")

        return () => tl.kill()
      }, winkRef)
      return () => ctx.revert()
    }

    // Mode SVG vectoriel (par défaut)
    const ctx = gsap.context(() => {
      const eye = eyeRightRef.current
      if (!eye) return
      gsap.set(eye, { transformBox: "fill-box", transformOrigin: "50% 50%" })

      const tl = gsap.timeline()
      const closeTime = blinkDuration * 0.45
      const holdTime = blinkDuration * 0.1
      const openTime = blinkDuration * 0.45

      tl.to(eye, { scaleY: 0.15, duration: closeTime, ease: "power2.in" })
        .to(eye, { scaleY: 0.12, duration: holdTime, ease: "none" })
        .to(eye, { scaleY: 1, duration: openTime, ease: "back.out(2)" })
      tl.to(eye, { rotation: -4, duration: 0.06, yoyo: true, repeat: 1, ease: "sine.inOut" }, 0)
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: -16 })
        tl.to(textRef.current, { opacity: 1, y: 0, duration: textRevealDuration, ease: "power2.out" }, "+=0.05")
      }
      return () => tl.kill()
    }, svgRef)

    return () => ctx.revert()
  }, [interval, blinkDuration, openSrc, winkSrc])

  if (openSrc && winkSrc) {
    return (
      <div className="select-none" aria-label="Smiley qui fait un clin d’œil">
        <div style={{ width: size, height: size }} className="relative z-[1] mx-auto">
          <Image src={openSrc} alt="Smiley" fill className="object-contain" sizes={`${size}px`} priority={false} />
          {/* Masqué initialement pour éviter tout flash avant l'animation */}
          <div ref={winkRef} className="absolute inset-0 opacity-0" style={{ opacity: 0 }}>
            <Image src={winkSrc} alt="Smiley qui cligne" fill className="object-contain" sizes={`${size}px`} />
          </div>
        </div>
        {/* Texte sous le smiley, masqué et légèrement au-dessus au chargement (évite flicker) */}
        {textSrc && (
          <div
            ref={textRef}
            className="relative z-0 -mt-4 flex justify-center opacity-0"
            style={{ opacity: 0, transform: "translateY(-16px)" }}
          >
            <Image
              src={textSrc}
              alt="Texte Smile"
              width={Math.round(size)}
              height={Math.round(size / 4)}
              className="object-contain"
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="select-none">
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 200 200"
        role="img"
        aria-label="Smiley qui fait un clin d’œil"
        className="relative z-[1] mx-auto"
      >
        <path d="M35 130 Q100 170 165 130" fill="none" stroke={color} strokeWidth="18" strokeLinecap="round" />
        <rect x="55" y="50" width="22" height="50" rx="11" fill={color} />
        <rect ref={eyeRightRef} x="123" y="50" width="22" height="50" rx="11" fill={color} />
      </svg>
      {textSrc && (
        <div
          ref={textRef}
          className="relative z-0 -mt-4 flex justify-center opacity-0"
          style={{ opacity: 0, transform: "translateY(-16px)" }}
        >
          <Image
            src={textSrc}
            alt="Texte Smile"
            width={Math.round(size)}
            height={Math.round(size / 4)}
            className="object-contain"
          />
        </div>
      )}
    </div>
  )
}
