"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function QualiopiBadge() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`flex justify-center py-6 md:py-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Image
        src="/LogoQualiopi-150dpi-AvecMarianne.png"
        alt="Certification Qualiopi"
        width={420}
        height={210}
        className="h-auto w-full max-w-[260px] md:max-w-[320px] lg:max-w-[420px] pt-0pb-[100px]"
        sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 260px"
      />
    </section>
  );
}
