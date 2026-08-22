"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-end md:items-center pt-20">
      <div
        className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
        style={{
          transform: `translateY(${offsetY * 0.35}px)`,
          willChange: "transform",
        }}
      >
        <PlaceholderImage
          src={site.images.hero}
          alt={`${site.name} photography studio in East Vancouver`}
          fill
          priority
          sizes="100vw"
          objectPosition="50% 40%"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/25 to-black/45" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-gold/70" />
        <span className="text-gold/80 text-[10px] tracking-[0.28em] uppercase rotate-[-90deg] whitespace-nowrap">
          {site.address.line1}
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-gold/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 pb-20 md:pb-0 md:pl-16 lg:pl-24">
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 uppercase tracking-[0.36em] text-gold-muted font-medium text-[10px] md:text-[11px] mb-5">
          {site.tagline}
        </p>

        <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-75 fill-mode-both font-display font-medium leading-[1.08] text-white mb-3 text-4xl md:text-6xl tracking-tight max-w-xl">
          {site.seo.h1}
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both font-display italic text-xl md:text-2xl text-white/85 mb-8 max-w-md">
          A photography studio made to be used.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href={site.links.session}
            className="lookbook-solid inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            Book a Session
          </a>
          <a
            href="/#pricing"
            className="lookbook-ghost inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            Pricing
          </a>
        </div>

        <div className="animate-in fade-in duration-700 delay-300 fill-mode-both flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-white/55 font-medium">
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-gold/80">
            {site.google.rating} · {site.google.reviews} Google reviews
          </a>
          <span className="hidden sm:block w-px h-3 bg-white/20" />
          <span>Joyce-Collingwood</span>
          <span className="hidden sm:block w-px h-3 bg-white/20" />
          <span>Free Parking</span>
        </div>
      </div>

      <a
        href="/#featured"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gold/50 hover:text-gold transition-colors"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
