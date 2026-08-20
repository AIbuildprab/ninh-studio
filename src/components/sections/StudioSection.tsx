"use client";

import React from "react";
import { Lightbulb, Layout, Sparkles, Move, Wind, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";

const features = [
  {
    icon: <Lightbulb className="w-5 h-5 text-accent" />,
    title: "Professional Lighting",
    desc: "Two lights included in every rental. Additional equipment available on request.",
  },
  {
    icon: <Layout className="w-5 h-5 text-accent" />,
    title: "Customizable Backdrops",
    desc: "Neutral paper, textured walls, sheer curtains, and a floral mirror setup.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    title: "Makeup Station",
    desc: "Ring light, full-length mirror, and a dedicated prep area for hair and makeup.",
  },
  {
    icon: <Move className="w-5 h-5 text-accent" />,
    title: "597 Square Feet",
    desc: "Room for portraits, families, or a small crew. Up to 20 people standing.",
  },
  {
    icon: <Wind className="w-5 h-5 text-accent" />,
    title: "Air Conditioning + Wi-Fi",
    desc: "Comfortable year-round. Flatscreen TV, storage, and stay connected.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    title: "Easy to Get Here",
    desc: "About 650m from Joyce-Collingwood SkyTrain. 2 free on-site spaces + street parking.",
  },
];

export function StudioSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="studio"
      className="py-12 pb-28 bg-background w-full overflow-hidden lg:scroll-mt-[-5.5rem] lg:box-border lg:flex lg:h-dvh lg:max-h-dvh lg:flex-col lg:py-0 lg:pt-20 lg:pb-8"
      ref={ref}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 gap-6 lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:items-stretch lg:gap-12">
        <div
          className={`order-2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg transition-all duration-700 ease-out lg:order-1 lg:aspect-auto lg:h-full lg:min-h-0 ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <PlaceholderImage
            src={site.images.studioFull}
            alt={`${site.name} — full studio with backdrops and lighting`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none" />
        </div>

        <div className="contents lg:order-2 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:justify-center">
          <div
            className={`order-1 mb-0 lg:mb-6 transition-all duration-700 delay-200 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <SectionEyebrow className="mb-3">The Space</SectionEyebrow>
            <h2 className="font-display font-medium text-[2rem] leading-[1.15] lg:text-[2.5rem] text-foreground mb-3">
              Bright, equipped, and easy to get to.
            </h2>
            <p className="text-secondary-foreground text-base lg:text-[15px] leading-relaxed">
              Natural light, professional gear, and a makeup station — used for sessions here, and available to rent.
            </p>
          </div>

          <div className="order-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`flex flex-col transition-all duration-500 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${isIntersecting ? 300 + i * 80 : 0}ms` }}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className="bg-secondary p-2 rounded-sm shrink-0">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-foreground leading-tight">{feature.title}</h3>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed pl-11">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
