import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[200] h-[2px] bg-accent transition-[width] duration-100 ease-out pointer-events-none"
      style={{ width: `${progress}%` }}
    />
  );
}

function FloatingBookNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      onClick={scrollToContact}
      aria-label="Book a session"
      className={`fixed bottom-8 right-8 z-50 bg-accent text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl shadow-accent/25 hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      Book Now
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <ScrollProgress />
      <FloatingBookNow />
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <AboutSection />
      <ServicesSection />
      <StudioSection />
      <GallerySection />
      <TestimonialsSection />
      <PricingSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
