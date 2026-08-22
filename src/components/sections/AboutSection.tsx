"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";

export function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background w-full overflow-hidden scroll-mt-24"
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div
          className={`order-2 md:order-1 reveal-blur transition-all duration-700 ${
            isIntersecting ? "visible-state" : "hidden-state"
          }`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-md">
            <PlaceholderImage
              src={site.aboutImage.src}
              alt={site.aboutImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              objectPosition={site.aboutImage.objectPosition}
              className="object-cover"
            />
            <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3.5 pt-12 pointer-events-none">
              <p className="font-display italic font-medium text-2xl leading-none text-white mb-1.5">
                {site.owner}
              </p>
              <p className="text-[11px] tracking-[0.18em] uppercase text-white/80">
                {site.address.line1}
              </p>
            </div>
          </div>
        </div>

        <div className="contents md:order-2 md:block">
          <div
            className={`order-1 reveal-blur transition-all duration-700 delay-200 ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <SectionEyebrow className="mb-3">Photographer &amp; makeup</SectionEyebrow>
            <h2 className="font-display italic font-medium text-[2.75rem] leading-none md:text-5xl lg:text-[3.25rem] text-foreground mb-3">
              {site.owner}
            </h2>
            <p className="font-display font-medium text-[1.65rem] leading-[1.15] md:text-3xl lg:text-[2rem] text-foreground mb-4">
              Unhurried sessions. Hair and makeup in the same room.
            </p>
          </div>

          <div
            className={`order-3 flex flex-col reveal-blur transition-all duration-700 delay-200 ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
          >
            <div className="space-y-4 md:space-y-3 text-secondary-foreground text-base md:text-[15px] lg:text-base mb-6 md:mb-5 leading-relaxed">
              <p>
                Hi, I&apos;m {site.owner}. I opened Ninh Studio on Joyce Street because I wanted sessions to feel slower. If cameras make you nervous, you can take a breath here. Hair and makeup happen in the same room.
              </p>
              <p>
                I photograph portraits, families, and weddings. Natural light, studio lighting, and we don&apos;t watch the clock. For bridal trials I keep notes and reference photos so the look holds on the day. Photographers in the city send their clients here for makeup. Families come when they want someone patient.
              </p>
              <p>
                When I&apos;m not shooting, the studio is available to rent. Bright, equipped, and a short walk from Joyce-Collingwood Station.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-6 border-t border-border pt-5 md:pt-4">
              <div className="flex flex-col">
                <span className="font-display font-medium text-xl md:text-2xl text-foreground mb-1">{site.google.rating}★</span>
                <span className="text-[11px] md:text-sm text-secondary-foreground leading-snug">{site.google.reviews} Google reviews</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-xl md:text-2xl text-foreground mb-1">597</span>
                <span className="text-[11px] md:text-sm text-secondary-foreground leading-snug">Sq Ft Studio</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-medium text-xl md:text-2xl text-foreground mb-1">HMU</span>
                <span className="text-[11px] md:text-sm text-secondary-foreground leading-snug">&amp; Weddings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
