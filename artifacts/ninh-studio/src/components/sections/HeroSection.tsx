import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const services = [
  "Headshots & Portraits",
  "Baby Photography",
  "Boudoir Photography",
  "Commercial Photography",
  "Corporate Photography",
  "Events & Parties",
];

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [serviceFade, setServiceFade] = useState(true);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceFade(false);
      setTimeout(() => {
        setServiceIdx((i) => (i + 1) % services.length);
        setServiceFade(true);
      }, 300);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background with Parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: "url('/images/hero.png')",
          transform: `translateY(${offsetY * 0.35}px)`,
          willChange: "transform",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* Amber vertical line accent — left side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-accent/80" />
        <span className="text-accent/70 text-[10px] tracking-[0.25em] uppercase rotate-[-90deg] whitespace-nowrap translate-y-0">
          5530 Joyce St
        </span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-accent/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1100px] w-full mx-auto px-6 flex flex-col items-center text-center">

        {/* Kicker */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-accent/70" />
          <span className="uppercase tracking-[0.18em] text-accent font-semibold text-xs md:text-sm">
            East Vancouver's Creative Photography Studio
          </span>
          <div className="w-8 h-px bg-accent/70" />
        </div>

        {/* Headline */}
        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both font-display font-extrabold leading-[1.05] text-white mb-3">
          <span className="block text-5xl md:text-[80px] drop-shadow-lg">Your Story</span>
          <span className="block text-5xl md:text-[80px] drop-shadow-lg">
            Deserves to Be{" "}
            <span className="relative inline-block">
              Seen.
              <svg
                className="absolute -bottom-1 left-0 w-full text-accent"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 6 Q50 1 100 5 Q150 9 200 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Rotating service */}
        <div className="animate-in fade-in duration-700 delay-200 fill-mode-both h-8 flex items-center justify-center mb-6">
          <span
            className="text-sm md:text-base font-medium text-white/60 uppercase tracking-[0.12em] transition-all duration-300"
            style={{ opacity: serviceFade ? 1 : 0, transform: serviceFade ? "translateY(0)" : "translateY(6px)" }}
          >
            {services[serviceIdx]}
          </span>
        </div>

        {/* Tagline */}
        <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
          Capturing timeless, high-quality images with a modern, artistic touch — right here on Joyce Street in East Van.
        </p>

        {/* CTAs */}
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/85 text-white min-w-[200px] tracking-wide text-sm font-semibold shadow-lg shadow-accent/20"
            onClick={scrollToContact}
          >
            Book a Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white hover:text-foreground bg-white/5 backdrop-blur-sm min-w-[200px] tracking-wide text-sm font-semibold"
            onClick={scrollToContact}
          >
            Rent the Studio
          </Button>
        </div>

        {/* Trust bar */}
        <div className="animate-in fade-in duration-1000 delay-700 fill-mode-both flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-white/55 font-medium">
          <span className="flex items-center gap-1"><span className="text-accent">★★★★★</span> Google Rated</span>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Joyce-Collingwood SkyTrain</span>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Free Parking</span>
          <span className="hidden md:block w-px h-3 bg-white/20" />
          <span>Natural Light Studio</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors group"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
