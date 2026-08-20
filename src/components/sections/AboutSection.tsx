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
    <section
      id="about"
      className="py-[60px] bg-background w-full overflow-hidden md:scroll-mt-[-5.5rem] md:box-border md:flex md:h-dvh md:max-h-dvh md:flex-col md:py-0 md:pt-20 md:pb-8"
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 gap-12 md:h-full md:min-h-0 md:flex-1 md:grid-cols-2 md:items-stretch md:gap-10">
        <div
          className={`reveal-blur transition-all duration-700 md:h-full md:min-h-0 ${
            isIntersecting ? "visible-state" : "hidden-state"
          }`}
        >
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-md md:aspect-auto md:h-full md:min-h-0">
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
          className={`flex flex-col reveal-blur transition-all duration-700 delay-200 md:h-full md:min-h-0 md:justify-center ${
            isIntersecting ? "visible-state" : "hidden-state"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <SectionEyebrow className="md:mb-3">About {site.owner}</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl md:text-4xl lg:text-[2.5rem] text-foreground mb-4 leading-tight">
            Unhurried sessions. Hair and makeup in the same room.
          </h2>

          <div className="space-y-3 text-secondary-foreground text-base md:text-[15px] lg:text-base mb-5 leading-relaxed">
            <p>
              Hi, I&apos;m {site.owner}. I opened Ninh Studio on Joyce Street because I wanted photography to feel slower than it usually does — a place where someone nervous in front of a camera can take a breath, and where hair and makeup happen in the same room as the shoot.
            </p>
            <p>
              I photograph portraits, families, and weddings here. We work with both natural light and studio lighting, and the room is set up so we don&apos;t have to watch the clock.
            </p>
            <p>
              Bridal trials include notes and reference photos, so the wedding-day look stays true. Photographers in the city send their clients here for pre-wedding makeup. Families come when they want someone patient behind the camera.
            </p>
            <p>
              When I&apos;m not shooting, the studio is available to rent — a bright, equipped room a short walk from Joyce–Collingwood Station.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-border pt-4">
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
