"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

const services = [
  {
    title: "Headshots & Portraits",
    image: site.serviceImages.headshots,
    href: "/services/portrait-photography",
  },
  {
    title: "Wedding Photography",
    image: site.serviceImages.wedding,
    href: "/services/wedding-photography",
  },
  {
    title: "Hair & Makeup",
    image: site.serviceImages.hmu,
    href: "/services/hair-and-makeup",
  },
  {
    title: "Baby Photography",
    image: site.serviceImages.baby,
    href: "/services/baby-photography",
  },
  {
    title: "Boudoir Photography",
    image: site.serviceImages.boudoir,
    href: "/services/boudoir-photography",
  },
  {
    title: "Commercial & Events",
    image: site.serviceImages.commercial,
    href: "/services/commercial-photography",
  },
];

export function ServicesSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="sessions"
      className="py-10 md:py-16 bg-background w-full scroll-mt-24"
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-4 md:px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-8 md:mb-10 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="brand-eyebrow mb-3">Sessions</p>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-foreground mb-3">
            Explore the work
          </h2>
          <p className="text-sm md:text-base text-secondary-foreground">
            {site.seo.h2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] text-left transition-all duration-700 ease-out ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? i * 70 : 0}ms` }}
            >
              <a href={service.href} className="absolute inset-0" aria-label={service.title}>
                <PlaceholderImage
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  objectPosition={service.image.objectPosition}
                  className={cn(
                    "object-cover transition-transform duration-700 group-hover:scale-105",
                    service.image.className
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 transition-opacity duration-300 group-hover:from-black/88" />
              </a>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10 px-6 text-center pointer-events-none">
                <h3 className="font-display font-medium text-2xl md:text-3xl text-white mb-4 leading-tight">
                  {service.title}
                </h3>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="lookbook-ghost pointer-events-auto inline-flex items-center justify-center h-10 px-6 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-secondary-foreground">
          Sessions in the studio, hair and makeup in-house, and the space itself when you need to rent it.{" "}
          <a href="/services" className="text-accent hover:underline">
            Read the full services guide
          </a>
          .
        </p>
      </div>
    </section>
  );
}
