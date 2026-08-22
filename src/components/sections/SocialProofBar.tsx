"use client";

import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { site } from "@/lib/site";

export function SocialProofBar() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const end = site.google.reviews;
    const duration = 900;
    const step = Math.max(1, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, step);
    return () => clearInterval(timer);
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className={`w-full bg-ink text-primary-foreground py-8 md:py-10 border-y border-gold/10 transition-all duration-700 transform ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gold/10 text-center">
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="pt-4 md:pt-0 flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
        >
          <div className="flex gap-1 text-gold mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="font-medium text-sm tracking-wide text-gold-muted/90">
            {site.google.rating} on Google
          </span>
        </a>
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <span className="font-display font-medium text-3xl mb-1 logo-gold">{count}</span>
          <span className="font-medium text-sm tracking-wide text-gold-muted/90">Google reviews</span>
        </div>
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <span className="font-medium text-sm tracking-wide text-gold-muted/90 leading-relaxed">
            Photography, weddings,<br />hair & makeup
          </span>
        </div>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="pt-4 md:pt-0 flex flex-col items-center justify-center hover:opacity-80 transition-opacity"
        >
          <span className="font-medium text-sm tracking-wide text-gold-muted/90 leading-relaxed">
            {site.address.line1},<br />{site.address.area}
          </span>
        </a>
      </div>
    </section>
  );
}
