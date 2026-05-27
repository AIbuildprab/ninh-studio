import React, { useState } from "react";
import { X } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Professional warm headshot", aspect: "aspect-square" },
  { src: "/images/gallery-2.png", alt: "Candid emotional wedding moment", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-3.png", alt: "Lifestyle portrait", aspect: "aspect-square" },
  { src: "/images/gallery-4.png", alt: "Candid family photo", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-5.png", alt: "Creative self-portrait", aspect: "aspect-square" },
  { src: "/images/gallery-6.png", alt: "Modern business headshot", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-7.png", alt: "Maternity portrait", aspect: "aspect-square" },
  { src: "/images/gallery-8.png", alt: "Couple portrait", aspect: "aspect-[3/4]" },
  { src: "/images/gallery-9.png", alt: "Group portrait", aspect: "col-span-1 md:col-span-2 aspect-[16/9] md:aspect-auto h-auto md:h-full" },
];

export function GallerySection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent uppercase tracking-widest text-xs font-medium mb-4 block">
            Our Work
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Real People. Real Moments.
          </h2>
          <p className="text-secondary-foreground text-lg">
            Every photo in this gallery was taken right here in our studio or out in the world with our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(0,1fr)] mb-12">
          {galleryImages.map((img, i) => (
            <div 
              key={i}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${img.aspect} transition-all duration-700 ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? 100 + (i * 50) : 0}ms` }}
              onClick={() => setLightboxImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div 
          className={`flex justify-center transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => window.open("#", "_blank")}
          >
            See More on Instagram
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImg} 
            alt="Enlarged gallery view" 
            className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" 
          />
        </div>
      )}
    </section>
  );
}
