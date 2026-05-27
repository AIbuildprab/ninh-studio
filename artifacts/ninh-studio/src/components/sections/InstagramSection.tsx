import React from "react";
import { Instagram } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const instaPosts = [
  { src: "/images/insta-1.png", alt: "Instagram post 1" },
  { src: "/images/insta-2.png", alt: "Instagram post 2" },
  { src: "/images/insta-3.png", alt: "Instagram post 3" },
  { src: "/images/insta-4.png", alt: "Instagram post 4" },
  { src: "/images/insta-5.png", alt: "Instagram post 5" },
  { src: "/images/insta-6.png", alt: "Instagram post 6" },
];

export function InstagramSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="bg-[#1A1A1A] py-16 overflow-hidden" ref={ref}>
      <div 
        className={`max-w-[1180px] mx-auto px-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl font-medium mb-1">Follow Our Work</h2>
          <a href="#" className="font-display text-accent text-3xl font-bold hover:text-white transition-colors">
            @ninhstudio
          </a>
        </div>
        <Button 
          variant="outline" 
          className="border-white/20 text-white hover:bg-white hover:text-black gap-2"
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
        <div className="flex gap-4 px-6 md:justify-center min-w-max md:min-w-0">
          {instaPosts.map((post, i) => (
            <a 
              href="#" 
              key={i} 
              className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 group rounded-md overflow-hidden block"
            >
              <img 
                src={post.src} 
                alt={post.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
