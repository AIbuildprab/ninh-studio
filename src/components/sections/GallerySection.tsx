"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site, type SiteImage } from "@/lib/site";

const clientWork = [...site.galleryItems];
const studioShots = [...site.studioItems];

const row1: SiteImage[] = [
  clientWork[0], clientWork[1], clientWork[2], studioShots[0], clientWork[3], clientWork[4], clientWork[12],
];
const row2: SiteImage[] = [
  clientWork[5], clientWork[6], studioShots[1], clientWork[7], studioShots[2], clientWork[8], clientWork[13],
];
const row3: SiteImage[] = [
  studioShots[3], clientWork[9], studioShots[4], clientWork[10], clientWork[11], studioShots[6], clientWork[14],
];

function MarqueeRow({
  images,
  direction = "left",
  speed = 35,
}: {
  images: SiteImage[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full group">
      <div
        className="gallery-marquee flex gap-3 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <MarqueeImage key={`${img.src}-${i}`} img={img} />
        ))}
      </div>
    </div>
  );
}

function MarqueeImage({ img }: { img: SiteImage }) {
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <button
        type="button"
        className="relative h-64 md:h-80 w-auto flex-shrink-0 overflow-hidden rounded cursor-pointer group/img"
        style={{ aspectRatio: "3/4" }}
        onClick={() => setLightbox(true)}
        aria-label={`View ${img.alt}`}
      >
        <PlaceholderImage
          src={img.src}
          alt={img.alt}
          fill
          sizes="240px"
          objectPosition={img.objectPosition}
          className={cn(
            "object-cover transition-transform duration-500 group-hover/img:scale-105",
            img.className
          )}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300" />
      </button>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-16 animate-in fade-in duration-200"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label={img.alt}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage
              src={img.src}
              alt={img.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export function GallerySection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-[60px] md:py-[100px] bg-background w-full overflow-hidden" ref={ref}>
      <div
        className={`mx-auto px-6 text-center max-w-2xl mb-12 transition-all duration-700 ease-out ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionEyebrow className="text-center">Gallery</SectionEyebrow>
        <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
          Sessions &amp; the studio.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Portraits, weddings, hair &amp; makeup, and the space on Joyce Street — natural light, backdrops, and a makeup station.
        </p>
      </div>

      <div
        className={`flex flex-col gap-3 transition-all duration-700 delay-200 ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        <MarqueeRow images={row1} direction="left" speed={38} />
        <MarqueeRow images={row2} direction="right" speed={46} />
        <MarqueeRow images={row3} direction="left" speed={30} />
      </div>

      <div
        className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold tracking-wide border border-foreground/20 text-foreground hover:bg-ink hover:text-gold transition-colors"
        >
          See more on Instagram
        </a>
      </div>
    </section>
  );
}
