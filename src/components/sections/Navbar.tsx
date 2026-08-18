"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

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

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[hsl(40_33%_97%/0.92)] backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between">
          <a href="#" aria-label={site.name} className="shrink-0">
            <Logo variant={scrolled ? "dark" : "light"} size={scrolled ? "sm" : "md"} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-7">
              {site.nav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors hover:text-accent ${
                    scrolled ? "text-foreground/80" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button asChild className="font-medium tracking-wide bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={site.links.session}>Book Now</a>
            </Button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-12">
            <Logo variant="dark" size="md" />
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="text-foreground h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center flex-1">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-3xl font-display font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="lg" className="mt-8 bg-primary text-primary-foreground w-full max-w-[200px]">
              <a href={site.links.session} onClick={closeMenu}>
                Book Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
