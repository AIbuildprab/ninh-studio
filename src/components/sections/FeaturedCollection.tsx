"use client";

import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

const featured = site.galleryItems[0];

export function FeaturedCollection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="featured" className="bg-background w-full py-8 md:py-12 px-4 md:px-6 scroll-mt-24">
      <div
        ref={ref}
        className={`relative mx-auto max-w-[920px] aspect-[3/4] md:aspect-[4/5] overflow-hidden reveal-blur ${
          isIntersecting ? "visible-state" : "hidden-state"
        }`}
      >
        <PlaceholderImage
          src={featured.src}
          alt={featured.alt}
          fill
          sizes="(max-width: 920px) 100vw, 920px"
          objectPosition={featured.objectPosition}
          className={cn("object-cover", featured.className)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="uppercase tracking-[0.4em] text-gold text-[10px] md:text-[11px] font-medium mb-4">
            Featured
          </p>
          <h2 className="font-display font-medium text-white text-4xl md:text-6xl leading-tight mb-3">
            Cherry blossom
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-sm mb-8">
            Portraits in natural light — one of the looks we shoot on Joyce Street.
          </p>
          <a
            href="/#gallery"
            className="lookbook-ghost inline-flex items-center justify-center min-w-[200px] h-12 px-8 text-sm font-semibold tracking-[0.14em] uppercase transition-colors"
          >
            Explore the gallery
          </a>
        </div>
      </div>
    </section>
  );
}
