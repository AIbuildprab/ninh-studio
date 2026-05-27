import React from "react";
import { Instagram } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const instaPosts = [
  { src: "/images/gallery-1.png", alt: "Professional headshot session" },
  { src: "/images/gallery-3.png", alt: "Lifestyle portrait session" },
  { src: "/images/gallery-5.png", alt: "Creative self-portrait" },
  { src: "/images/gallery-2.png", alt: "Wedding candid moment" },
  { src: "/images/gallery-4.png", alt: "Family portrait session" },
  { src: "/images/gallery-6.png", alt: "Business headshot" },
];

export function InstagramSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="bg-[#111111] py-16 overflow-hidden" ref={ref}>
      <div
        className={`max-w-[1180px] mx-auto px-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center md:text-left">
          <p className="text-white/50 text-sm uppercase tracking-widest mb-2 font-medium">Follow Our Work</p>
          <a
            href="https://www.instagram.com/ninhstudio/"
            target="_blank"
            rel="noreferrer"
            className="font-display text-accent text-3xl font-bold hover:text-white transition-colors"
          >
            @ninhstudio
          </a>
        </div>
        <Button
          variant="outline"
          className="border-white/20 text-white hover:bg-white hover:text-black gap-2"
          onClick={() => window.open("https://www.instagram.com/ninhstudio/", "_blank")}
        >
          <Instagram className="w-4 h-4" />
          Follow on Instagram
        </Button>
      </div>

      <div
        className={`w-full overflow-x-auto pb-4 hide-scrollbar transition-all duration-700 delay-200 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex gap-3 px-6 md:justify-center min-w-max md:min-w-0">
          {instaPosts.map((post, i) => (
            <a
              href="https://www.instagram.com/ninhstudio/"
              target="_blank"
              rel="noreferrer"
              key={i}
              className="relative w-48 h-48 md:w-52 md:h-52 shrink-0 group rounded-sm overflow-hidden block"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? "none" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
              {/* Instagram-style corner icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <Instagram className="w-3 h-3 text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
