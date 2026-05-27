import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function AboutSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-[60px] md:py-[100px] bg-background w-full overflow-hidden" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          className={`transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/about.png"
              alt="Photographer at Ninh Studio"
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-black/5 rounded-lg pointer-events-none" />
          </div>
        </div>

        <div
          className={`flex flex-col transition-all duration-700 delay-200 ease-out ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <span className="text-accent uppercase tracking-widest text-xs font-medium mb-4">
            About the Studio
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-6">
            Photography Without the Pressure.
          </h2>
          
          <div className="space-y-6 text-secondary-foreground text-base md:text-lg mb-10">
            <p>
              Ninh Studio was built for real people—not just models or professionals. Whether you've never been in front of a camera before, or you just need a fresh set of headshots before Monday's interview, we make the whole thing easy.
            </p>
            <p>
              Our 597-square-foot studio in East Vancouver is bright, clean, and purpose-built for great photography. We've got professional lighting, customizable backdrops, a makeup station, and enough space to move—but the real difference is the atmosphere. Relaxed. Personal. No rushing.
            </p>
            <p>
              We also offer full on-site coverage for weddings and events, bringing the same care and quality wherever you need us. From the prep room to the final dance, we've got the moments that matter covered.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-foreground mb-1">600+</span>
              <span className="text-sm text-secondary-foreground">Sessions</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-foreground mb-1">597</span>
              <span className="text-sm text-secondary-foreground">Sq Ft Studio</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl text-foreground mb-1">Events</span>
              <span className="text-sm text-secondary-foreground">& Weddings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
