"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";

const services = [
  {
    title: "Headshots & Portraits",
    desc: "LinkedIn, personal branding, and portraits with direction so you don’t have to guess what to do with your face.",
    image: site.serviceImages.headshots,
    tag: "Photography",
  },
  {
    title: "Wedding Photography",
    desc: "Wedding-day coverage with the same unhurried pace as the studio — from getting ready through the last dance.",
    image: site.serviceImages.wedding,
  },
  {
    title: "Hair & Makeup",
    desc: "Bridal trials and wedding-day hair & makeup with Michelle. Notes and reference photos so the look holds.",
    image: site.serviceImages.hmu,
  },
  {
    title: "Baby Photography",
    desc: "Newborn and milestone portraits. Soft, unhurried, at your baby’s pace.",
    image: site.serviceImages.baby,
  },
  {
    title: "Boudoir Photography",
    desc: "Private, artistic sessions in-studio. A gift to yourself, or someone special.",
    image: site.serviceImages.boudoir,
  },
  {
    title: "Commercial & Events",
    desc: "Products, teams, parties, and on-location coverage when the work needs to leave Joyce Street.",
    image: site.serviceImages.commercial,
  },
];

export function ServicesSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="sessions"
      className="py-[60px] lg:py-[80px] bg-secondary w-full scroll-mt-24 lg:scroll-mt-28"
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 lg:mb-12 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow className="text-center">What We Do</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl lg:text-5xl text-foreground mb-4">
            Photography, then makeup &amp; weddings.
          </h2>
          <p className="text-secondary-foreground text-lg">
            Sessions in the studio, hair and makeup in-house, and the space itself when you need to rent it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <a
              key={service.title}
              href={site.links.session}
              className={`group relative overflow-hidden rounded-sm aspect-[4/5] text-left transition-all duration-700 ease-out focus:outline-none ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? i * 80 : 0}ms` }}
            >
              <PlaceholderImage
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                objectPosition={service.image.objectPosition}
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-105",
                  service.image.className
                )}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/55" />

              {service.tag && (
                <div className="absolute top-4 left-4 bg-background/95 text-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                  {service.tag}
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                <h3 className="font-display font-medium text-2xl text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Inquire
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
