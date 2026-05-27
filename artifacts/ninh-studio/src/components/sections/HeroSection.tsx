import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{
          backgroundImage: "url('/images/hero.png')",
          transform: `translateY(${offsetY * 0.4}px)`,
        }}
      />
      {/* Overlay - subtle dark gradient on bottom 40% only */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-[60%] top-auto" />
      <div className="absolute inset-0 z-0 bg-black/20" /> {/* Slight overall darkening for text readability */}

      <div className="relative z-10 max-w-[1180px] w-full mx-auto px-6 flex flex-col items-center text-center mt-16 md:mt-24">
        <span className="animate-in fade-in slide-in-from-bottom-8 duration-700 uppercase tracking-[0.1em] text-accent font-medium text-sm md:text-base mb-6 drop-shadow-sm">
          East Vancouver's Creative Photography Studio
        </span>
        <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-both font-display font-extrabold text-5xl md:text-[72px] leading-[1.1] text-white max-w-4xl mb-8 drop-shadow-md">
          Your Story Deserves to Be Seen.
        </h1>
        <p className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow">
          Professional headshots, portraits, weddings, and studio rental all in a bright, welcoming space on Joyce Street. No stiff poses. No intimidating setups. Just great photos.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white min-w-[200px] tracking-wide"
            onClick={scrollToContact}
          >
            Book a Session
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground bg-transparent min-w-[200px] tracking-wide"
            onClick={scrollToContact}
          >
            Rent the Studio
          </Button>
        </div>

        <div className="animate-in fade-in duration-1000 delay-700 fill-mode-both mt-16 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs md:text-sm text-white/80 font-medium">
          <div className="flex items-center gap-1">
            <span className="text-accent">★</span> Highly Rated on Google
          </div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>Joyce-Collingwood, East Van</div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>Steps from SkyTrain</div>
          <span className="hidden md:inline text-white/30">•</span>
          <div>Free Parking</div>
        </div>
      </div>
    </section>
  );
}
