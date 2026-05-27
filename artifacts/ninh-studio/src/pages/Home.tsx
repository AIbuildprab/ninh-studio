import React from "react";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans animate-in fade-in duration-300">
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
