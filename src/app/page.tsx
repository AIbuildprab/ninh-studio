import { Navbar } from "@/components/sections/Navbar";
import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { FloatingBookNow } from "@/components/sections/FloatingBookNow";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { GallerySection } from "@/components/sections/GallerySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BookingBanner } from "@/components/sections/BookingBanner";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/JsonLd";
import { homepageSchemaGraph } from "@/lib/schema";
import { HomeAuthorityLinks } from "@/components/sections/HomeAuthorityLinks";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchemaGraph()} />
      <ScrollProgress />
      <FloatingBookNow />
      <Navbar />
      <main id="main" className="page-enter-content min-h-screen bg-background text-foreground font-sans">
        <HeroSection />
        <FeaturedCollection />
        <ServicesSection />
        <SocialProofBar />
        <GallerySection />
        <AboutSection />
        <StudioSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingBanner />
        <InstagramSection />
        <HomeAuthorityLinks />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
