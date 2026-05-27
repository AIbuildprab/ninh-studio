import React from "react";
import { Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "I was so nervous about getting headshots done, I never know what to do with my face. But the whole experience was relaxed and fun. I ended up with photos I actually love using. Highly recommend.",
    author: "Sarah K.",
    session: "LinkedIn Session"
  },
  {
    quote: "Rented the studio for a personal project and it was perfect. Great light, easy to set up, and the location is super convenient. Will definitely be back.",
    author: "Marcus T.",
    session: "Studio Rental"
  },
  {
    quote: "They captured our wedding day beautifully. Every important moment is in there, candid, emotional, real. We keep coming back to these photos.",
    author: "Priya & Daniel",
    session: "Wedding Coverage"
  }
];

export function TestimonialsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="py-[60px] md:py-[100px] bg-secondary w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 
          className={`font-display font-extrabold text-3xl md:text-4xl text-center text-foreground mb-12 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          What Our Clients Say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className={`bg-white p-8 rounded-xl shadow-sm border border-black/5 flex flex-col transition-all duration-700 ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? 100 + (i * 150) : 0}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <p className="text-secondary-foreground italic mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-foreground">{t.author}</span>
                  <span className="text-xs text-secondary-foreground">{t.session}</span>
                </div>
                <div className="ml-auto flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm border border-gray-100 shrink-0">
                  <span className="font-bold text-[10px] text-blue-500">G</span>
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
            <span className="font-bold text-xl">5.0</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </div>
            <span className="text-sm font-medium ml-2">Highly Rated on Google</span>
          </div>
          <Button variant="outline" className="border-border hover:bg-secondary">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}
