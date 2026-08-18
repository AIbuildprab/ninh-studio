"use client";

import React from "react";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";
import { TagvenueBookingForm } from "@/components/sections/TagvenueBookingForm";

export function PricingSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="pricing" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow className="text-center mb-5">Pricing</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
            Sessions by inquiry. Studio by the hour.
          </h2>
          <p className="text-secondary-foreground text-lg">
            Photography, hair & makeup, and weddings are quoted for the day. The room itself is listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <div
            className={`bg-card rounded-sm border-2 border-foreground/15 p-8 md:p-10 shadow-sm flex flex-col reveal-blur transition-all duration-700 ease-out ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="brand-eyebrow mb-3">Photography &amp; HMU</p>
            <h3 className="font-display font-medium text-3xl mb-2">Sessions</h3>
            <div className="mb-6">
              <span className="text-xl font-medium text-foreground block mb-1">Pricing by inquiry.</span>
              <span className="text-secondary-foreground block">Tell us the date and what you need — we’ll send a quote.</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Headshots & portraits",
                "Wedding photography",
                "Hair & makeup — trials and wedding day",
                "Families & baby sessions",
                "Boudoir, commercial, and events",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary rounded-sm p-4 mb-8 text-sm">
              <span className="font-medium text-foreground block mb-2">Every session includes:</span>
              <ul className="space-y-2 text-secondary-foreground text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Full studio + equipment use</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Professional lighting setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Hair & makeup available in-house</li>
              </ul>
            </div>

            <Button asChild className="w-full h-12 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={site.links.session}>Inquire about a session</a>
            </Button>
          </div>

          <div
            className={`relative reveal-blur transition-all duration-700 ease-out ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="rounded-sm border border-border shadow-sm overflow-hidden bg-card">
              <TagvenueBookingForm />
              <div className="px-6 md:px-8 pb-8 -mt-2">
                <ul className="space-y-2 mb-5">
                  {[
                    "2 professional lights included",
                    "Customizable backdrops",
                    "Natural light + A/C + Wi-Fi",
                    "Makeup station + ring light",
                    site.rental.capacity,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/70 rounded-sm p-4 text-sm">
                  <span className="font-medium text-foreground block mb-2">Cancellation:</span>
                  <ul className="space-y-1 text-secondary-foreground text-xs">
                    {site.rental.cancellation.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
