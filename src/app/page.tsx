import { Navbar } from "@/components/sections/Navbar";
import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { FloatingBookNow } from "@/components/sections/FloatingBookNow";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <FloatingBookNow />
      <Navbar />
      <main id="main" className="page-enter-content min-h-screen bg-background text-foreground font-sans">
        <HeroSection />
        <SocialProofBar />
        <AboutSection />
        <ServicesSection />
        <StudioSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <InstagramSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
