"use client";

import React from "react";
import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const testimonials = [
  {
    quote:
      "Patient from the first minute. I freeze in front of a camera — she talked me through it until the photos actually looked like me.",
    source: "Google review",
    session: "Portrait session",
  },
  {
    quote:
      "Detail-oriented in the best way. During the bridal trial she took notes and reference photos so wedding-day makeup matched exactly.",
    source: "Google review",
    session: "Bridal hair & makeup",
  },
  {
    quote:
      "A full wedding day that ran long, and she still held the appointment times. Calm, professional, and never rushed us.",
    source: "Google review",
    session: "Wedding day",
  },
];

export function TestimonialsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-[60px] md:py-[100px] bg-secondary w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <h2
          className={`font-display font-medium text-3xl md:text-4xl text-center text-foreground mb-12 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What clients say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-card p-8 rounded-sm shadow-sm border border-border flex flex-col reveal-blur transition-all duration-700 ${
                isIntersecting ? "visible-state" : "hidden-state"
              }`}
              style={{ transitionDelay: `${isIntersecting ? 100 + (i * 150) : 0}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-secondary-foreground italic mb-6 flex-1 font-serif text-lg leading-relaxed">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-display text-sm shrink-0">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-sm text-foreground">{t.source}</span>
                  <span className="text-xs text-secondary-foreground">{t.session}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col items-center justify-center transition-all duration-700 delay-500 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display font-medium text-2xl">{site.google.rating}</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-sm font-medium ml-2">{site.google.reviews} reviews on Google</span>
          </div>
          <Button asChild variant="outline" className="border-border hover:bg-background">
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">
              Read more reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
