import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Sessions", id: "sessions" },
    { label: "Studio", id: "studio" },
    { label: "Gallery", id: "gallery" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-script text-[2rem] leading-none transition-colors ${
              scrolled ? "text-accent" : "text-white"
            }`}
          >
            Ninh Studio
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    scrolled ? "text-secondary-foreground" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <Button
              onClick={() => scrollTo("contact")}
              className={`font-medium tracking-wide bg-accent text-white hover:bg-accent/90 hover:-translate-y-[1px] shadow-sm hover:shadow-md transition-all ${
                !scrolled && "border-white/20"
              }`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-12">
            <span className="font-script text-[2rem] leading-none text-accent">
              Ninh Studio
            </span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="text-foreground h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-2xl font-display font-bold text-foreground"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              className="mt-8 bg-accent text-white w-full max-w-[200px]"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
