"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

export function BookingBanner() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-ink text-primary-foreground"
    >
      <div className="absolute inset-0">
        <PlaceholderImage
          src={site.images.studioFull}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink/70" />
      </div>

      <div
        className={`relative z-10 max-w-[1180px] mx-auto px-6 py-20 md:py-28 text-center reveal-blur ${
          isIntersecting ? "visible-state" : "hidden-state"
        }`}
      >
        <p className="uppercase tracking-[0.4em] text-gold text-[10px] md:text-[11px] font-medium mb-4">
          Ready to shoot
        </p>
        <h2 className="font-display font-medium text-4xl md:text-6xl text-white mb-4">
          Book a session
        </h2>
        <p className="text-gold-muted/80 text-base md:text-lg max-w-lg mx-auto mb-10">
          Portraits, weddings, hair &amp; makeup, or the room by the hour. Tell us the date — Michelle will quote it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={site.links.session}
            className="lookbook-solid inline-flex items-center justify-center min-w-[180px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            Book now
          </a>
          <a
            href="/#pricing"
            className="lookbook-ghost inline-flex items-center justify-center min-w-[180px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
