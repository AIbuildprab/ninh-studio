"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [serviceFade, setServiceFade] = useState(true);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceFade(false);
      setTimeout(() => {
        setServiceIdx((i) => (i + 1) % site.sessionTypes.length);
        setServiceFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20">
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
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-black/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/15 to-black/30" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-accent/80" />
        <span className="text-accent/80 text-[10px] tracking-[0.28em] uppercase rotate-[-90deg] whitespace-nowrap">
          {site.address.line1}
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-accent/80" />
      </div>

      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-gold-muted/50" />
          <span className="uppercase tracking-[0.42em] text-gold-muted font-medium text-[10px] md:text-[11px]">
            Photography Studio
          </span>
          <div className="w-8 h-px bg-gold-muted/50" />
        </div>

        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both font-display font-medium leading-[1.08] text-white mb-4">
          <span className="block text-5xl md:text-[4.75rem] tracking-tight">A photography studio</span>
          <span className="block text-5xl md:text-[4.75rem] tracking-tight italic text-white/90">
            made to be used.
          </span>
        </h1>

        <div className="animate-in fade-in duration-700 delay-200 fill-mode-both h-8 flex items-center justify-center mb-6">
          <span
            className="text-sm md:text-base font-medium text-white/60 uppercase tracking-[0.14em] transition-all duration-300"
            style={{ opacity: serviceFade ? 1 : 0, transform: serviceFade ? "translateY(0)" : "translateY(6px)" }}
          >
            {site.sessionTypes[serviceIdx]}
          </span>
        </div>

        <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
          Portraits and wedding photography, with hair & makeup in-house. Bright natural light on Joyce Street, steps from the SkyTrain.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 min-w-[200px] tracking-wide text-sm font-semibold"
          >
            <a href={site.links.session}>Book a Session</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white hover:text-foreground bg-white/5 backdrop-blur-sm min-w-[200px] tracking-wide text-sm font-semibold"
          >
            <a href="#pricing">Rent the Studio</a>
          </Button>
        </div>

        <div className="animate-in fade-in duration-1000 delay-700 fill-mode-both flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-white/55 font-medium">
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white/80">
            <span className="text-accent">★★★★★</span> {site.google.rating} · {site.google.reviews} Google reviews
          </a>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Joyce-Collingwood SkyTrain</span>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Free Parking</span>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Natural Light Studio</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors group"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
