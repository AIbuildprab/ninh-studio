"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";

export function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-[60px] md:py-[100px] bg-background w-full overflow-hidden" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          className={`reveal-blur transition-all duration-700 ${
            isIntersecting ? "visible-state" : "hidden-state"
          }`}
        >
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-md">
            <PlaceholderImage
              src={site.aboutImage.src}
              alt={site.aboutImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              objectPosition={site.aboutImage.objectPosition}
              className={cn("object-cover", site.aboutImage.className)}
            />
            <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none" />
          </div>
        </div>

        <div
          className={`flex flex-col reveal-blur transition-all duration-700 delay-200 ${
            isIntersecting ? "visible-state" : "hidden-state"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <SectionEyebrow>About {site.owner}</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Photography first. Then the rest, with care.
          </h2>

          <div className="space-y-6 text-secondary-foreground text-base md:text-lg mb-10">
            <p>
              Hi, I&apos;m {site.owner}. I built Ninh Studio on Joyce Street because I wanted a place where sessions don&apos;t feel rushed — where someone nervous in front of a camera can take a breath, and where hair and makeup happen in the same room as the shoot.
            </p>
            <p>
              The studio is built for real sessions — portraits, families, and wedding photography — with professional lighting, natural light, and room to work without watching the clock.
            </p>
            <p>
              Bridal trials include notes and reference photos so the wedding-day look stays true. Photographers in the city send their clients here for pre-wedding makeup, and families come in when they need someone patient in front of the camera.
            </p>
            <p>
              The studio itself is available to rent when you need a bright, equipped room — 597 square feet, two lights included, two free parking spots, and a short walk from Joyce-Collingwood Station.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="font-display font-medium text-2xl text-foreground mb-1">{site.google.rating}★</span>
              <span className="text-sm text-secondary-foreground">{site.google.reviews} Google reviews</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-2xl text-foreground mb-1">597</span>
              <span className="text-sm text-secondary-foreground">Sq Ft Studio</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-2xl text-foreground mb-1">HMU</span>
              <span className="text-sm text-secondary-foreground">&amp; Weddings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
