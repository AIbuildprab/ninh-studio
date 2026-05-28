import React from "react";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Simple, Honest Pricing.
          </h2>
          <p className="text-secondary-foreground text-lg">
            No hidden fees. No surprises. Just great value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div 
            className={`relative bg-card rounded-2xl border-2 border-accent p-8 md:p-10 shadow-lg flex flex-col reveal-blur transition-all duration-700 ease-out ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Popular
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">Studio Rental</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">C$60</span>
              <span className="text-secondary-foreground"> / hour</span>
              <div className="text-sm text-secondary-foreground mt-1">(2-hour minimum)</div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "2 professional softbox lights",
                "Customizable backdrops",
                "Natural light + A/C + Wi-Fi",
                "Makeup station + ring light",
                "Full-length mirror",
                "Up to 20 people"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary-foreground">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary/50 rounded-lg p-4 mb-8 text-sm">
              <span className="font-bold text-foreground block mb-2">Cancellation Policy:</span>
              <ul className="space-y-1 text-secondary-foreground text-xs">
                <li>• 7+ days: Full refund</li>
                <li>• 7 days to 24 hrs: 50% refund</li>
                <li>• Under 24 hrs: Non-refundable</li>
              </ul>
            </div>

            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-base shadow-[0_4px_14px_rgba(196,136,58,0.3)] animate-in pulse duration-1000"
              onClick={scrollToContact}
            >
              Book the Studio
            </Button>
          </div>

          {/* Card 2 */}
          <div 
            className={`bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm flex flex-col reveal-blur transition-all duration-700 ease-out ${
              isIntersecting ? "visible-state" : "hidden-state"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <h3 className="font-display font-bold text-2xl mb-2">Photography Sessions</h3>
            <div className="mb-6">
              <span className="text-xl font-medium text-foreground block mb-1">Pricing varies by session type.</span>
              <span className="text-secondary-foreground block">Contact us for a custom quote.</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Headshots & LinkedIn",
                "Self-Portraits",
                "Portraits & Families",
                "Weddings & Events",
                "Makeup touch-up available"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-secondary-foreground">
                  <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary rounded-lg p-4 mb-8 text-sm">
              <span className="font-bold text-foreground block mb-2">Every session includes:</span>
              <ul className="space-y-2 text-secondary-foreground text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Full studio + equipment use</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Professional lighting setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" /> Edited final images delivered</li>
              </ul>
            </div>

            <Button 
              variant="outline"
              className="w-full h-12 text-base font-bold border-2"
              onClick={scrollToContact}
            >
              Book a Session
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
