import React, { useState } from "react";
import { X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const allImages = [
  { src: "/images/gallery-1.png", alt: "Professional warm headshot" },
  { src: "/images/gallery-2.png", alt: "Candid wedding moment" },
  { src: "/images/gallery-3.png", alt: "Lifestyle portrait" },
  { src: "/images/gallery-4.png", alt: "Candid family photo" },
  { src: "/images/gallery-5.png", alt: "Creative self-portrait" },
  { src: "/images/gallery-6.png", alt: "Modern business headshot" },
  { src: "/images/gallery-7.png", alt: "Maternity portrait" },
  { src: "/images/gallery-8.png", alt: "Couple portrait" },
  { src: "/images/gallery-9.png", alt: "Group portrait" },
  { src: "/images/studio-full.png", alt: "Studio space" },
  { src: "/images/studio-detail.png", alt: "Studio detail" },
  { src: "/images/about.png", alt: "Behind the lens" },
];

const row1 = [
  allImages[0], allImages[1], allImages[2], allImages[3], allImages[4], allImages[5],
];
const row2 = [
  allImages[6], allImages[7], allImages[8], allImages[9], allImages[10], allImages[11],
];
const row3 = [
  allImages[3], allImages[0], allImages[9], allImages[2], allImages[6], allImages[11],
];

function MarqueeRow({
  images,
  direction = "left",
  speed = 35,
}: {
  images: typeof allImages;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden w-full group">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          animationPlayState: "running",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
        }}
      >
        {doubled.map((img, i) => (
          <MarqueeImage key={i} img={img} />
        ))}
      </div>
    </div>
  );
}

function MarqueeImage({ img }: { img: (typeof allImages)[0] }) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div
        className="relative h-64 md:h-80 w-auto flex-shrink-0 overflow-hidden rounded cursor-pointer group/img"
        style={{ aspectRatio: "3/4" }}
        onClick={() => setLightbox(true)}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/img:scale-105"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/15 transition-colors duration-300" />
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-16 animate-in fade-in duration-200"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(false)}
          >
            <X className="w-7 h-7" />
          </button>
          <img
            src={img.src}
            alt={img.alt}
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export function GallerySection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="gallery" className="py-[60px] md:py-[100px] bg-background w-full overflow-hidden" ref={ref}>
      {/* Header */}
      <div
        className={`max-w-[1180px] mx-auto px-6 text-center max-w-2xl mb-12 transition-all duration-700 ease-out ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 block">
          Our Work
        </span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
          Real People. Real Moments.
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Every photo was taken right here in our studio or out in the world with our clients.
        </p>
      </div>

      {/* Marquee rows */}
      <div
        className={`flex flex-col gap-3 transition-all duration-700 delay-200 ${
          isIntersecting ? "opacity-100" : "opacity-0"
        }`}
      >
        <MarqueeRow images={row1} direction="left" speed={38} />
        <MarqueeRow images={row2} direction="right" speed={46} />
        <MarqueeRow images={row3} direction="left" speed={30} />
      </div>

      {/* CTA */}
      <div
        className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Button
          variant="outline"
          className="border-accent text-accent hover:bg-accent hover:text-white"
          onClick={() => window.open("https://www.instagram.com/ninhstudio/", "_blank")}
        >
          See More on Instagram
        </Button>
      </div>
    </section>
  );
}
