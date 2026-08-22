"use client";

import React, { useState, useEffect } from "react";
import { Instagram, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCompact(window.scrollY > 50);
    };
    handleScroll();
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
        className={`fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-gold/10 transition-[padding] duration-300 ease-out ${
          compact ? "py-2.5" : "py-3.5"
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between gap-4">
          <a href="/" aria-label={site.name} className="shrink-0">
            <Logo variant="light" size={compact ? "sm" : "md"} />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-gold/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              aria-label="Call Ninh Studio"
              className="hidden sm:flex w-9 h-9 rounded-full border border-gold/25 items-center justify-center text-gold/80 hover:border-gold hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden sm:flex w-9 h-9 rounded-full border border-gold/25 items-center justify-center text-gold/80 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={site.links.session}
              className="hidden md:inline-flex lookbook-solid items-center justify-center h-9 px-5 text-sm font-semibold tracking-wide transition-colors"
            >
              Book Now
            </a>
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="text-gold" />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-ink flex flex-col p-6 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-12">
            <a href="/" onClick={closeMenu} aria-label={site.name}>
              <Logo variant="light" size="md" />
            </a>
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="text-gold h-8 w-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center flex-1">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-3xl font-display font-medium text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.links.session}
              onClick={closeMenu}
              className="mt-8 lookbook-solid inline-flex items-center justify-center h-12 px-8 w-full max-w-[200px] text-sm font-semibold tracking-wide transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
