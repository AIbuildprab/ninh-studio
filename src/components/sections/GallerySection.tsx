"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { GalleryLightboxImage } from "@/components/GalleryLightboxImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site, type SiteImage } from "@/lib/site";

const clientWork = [...site.galleryItems];
const studioShots = [...site.studioItems];

const row1: SiteImage[] = [
  clientWork[0], clientWork[1], clientWork[2], studioShots[0], clientWork[3], clientWork[4], clientWork[12],
];
const row2: SiteImage[] = [
  clientWork[5], clientWork[6], studioShots[1], clientWork[7], studioShots[2], clientWork[8], clientWork[13],
];
const row3: SiteImage[] = [
  studioShots[3], clientWork[9], studioShots[4], clientWork[10], clientWork[11], studioShots[6], clientWork[14],
];

function MarqueeRow({
  images,
  direction = "left",
  speed = 35,
}: {
  images: SiteImage[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full group">
      <div
        className="gallery-marquee flex gap-3 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <MarqueeImage key={`${img.src}-${i}`} img={img} />
        ))}
      </div>
    </div>
  );
}

function MarqueeImage({ img }: { img: SiteImage }) {
  return (
    <GalleryLightboxImage
      img={img}
      className="h-64 md:h-80 w-auto flex-shrink-0 aspect-[3/4]"
      sizes="240px"
    />
  );
}

export function GallerySection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-[60px] md:py-[100px] bg-background w-full overflow-hidden" ref={ref}>
      <div
        className={`mx-auto px-6 text-center max-w-2xl mb-12 transition-all duration-700 ease-out ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionEyebrow className="text-center">Gallery</SectionEyebrow>
        <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
          Sessions &amp; the studio.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Portraits, weddings, hair &amp; makeup, and the space on Joyce Street — natural light, backdrops, and a makeup station.
        </p>
      </div>

      <div
        className={`gallery-marquee-fade flex flex-col gap-3 transition-all duration-700 delay-200 ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <MarqueeRow images={row1} direction="left" speed={38} />
        <MarqueeRow images={row2} direction="right" speed={46} />
        <MarqueeRow images={row3} direction="left" speed={30} />
      </div>

      <div
        className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold tracking-wide border border-foreground/20 text-foreground hover:bg-ink hover:text-gold transition-colors"
        >
          See more on Instagram
        </a>
      </div>
    </section>
  );
}
