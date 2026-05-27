import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const services = [
  {
    title: "Headshots & Portraits",
    desc: "Look the part. LinkedIn profiles, speaking bios, or business cards — we'll get you a photo you're proud to use.",
    image: "/images/gallery-6.png",
    tag: "Most Popular",
  },
  {
    title: "Baby Photography",
    desc: "Soft, timeless newborn and milestone portraits. Safe, warm, and unhurried — we work at your baby's pace.",
    image: "/images/gallery-7.png",
  },
  {
    title: "Boudoir Photography",
    desc: "Empowering, artistic, and completely private. A beautiful gift to yourself or someone special.",
    image: "/images/gallery-8.png",
  },
  {
    title: "Commercial Photography",
    desc: "Products, brands, and business content. Clean, high-quality images ready for web, print, or social.",
    image: "/images/gallery-9.png",
  },
  {
    title: "Corporate Photography",
    desc: "Team photos, executive portraits, and office event coverage. Polished images that reflect your brand.",
    image: "/images/gallery-1.png",
  },
  {
    title: "Events & Parties",
    desc: "Weddings, engagements, birthdays, and more. We travel to you and capture every moment that matters.",
    image: "/images/gallery-2.png",
  },
];

export function ServicesSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sessions" className="py-[60px] md:py-[100px] bg-[#0E0E0E] w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">

        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Every Kind of Photo. One Studio.
          </h2>
          <p className="text-white/50 text-lg">
            From your first headshot to your wedding day — we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <button
              key={i}
              onClick={scrollToContact}
              className={`group relative overflow-hidden rounded-xl aspect-[4/5] text-left transition-all duration-700 ease-out focus:outline-none ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? i * 80 : 0}ms` }}
            >
              {/* Background photo */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay — stronger at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/60" />

              {/* Popular badge */}
              {service.tag && (
                <div className="absolute top-4 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {service.tag}
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Book this session
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
