import React from "react";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

const services = [
  "Headshots & Portraits",
  "Baby Photography",
  "Boudoir Photography",
  "Commercial Photography",
  "Corporate Photography",
  "Events & Parties",
];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">

      {/* Faded studio image background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/studio-full.png')",
          opacity: 0.07,
        }}
      />

      {/* Gradient overlay — keeps edges dark */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]/80" />

      {/* Giant watermark wordmark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none whitespace-nowrap font-script leading-none text-accent"
        style={{ fontSize: "clamp(80px, 18vw, 220px)", opacity: 0.06 }}
        aria-hidden
      >
        Ninh Studio
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 pt-20 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <span className="font-script text-[2.2rem] leading-none text-accent">
                Ninh Studio
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-xs">
              A professional photography studio specializing in capturing timeless, high-quality images with a modern, artistic touch.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ninhstudio/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=5530+Joyce+Street+Vancouver"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@ninhstudio.ca"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-accent hover:text-accent transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white/90 text-xs uppercase tracking-[0.15em] font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/40 hover:text-accent transition-colors text-sm text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit & Links */}
          <div className="md:col-span-4 flex flex-col gap-10">
            <div>
              <h4 className="text-white/90 text-xs uppercase tracking-[0.15em] font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Book a Session", id: "contact" },
                  { label: "Rent the Studio", id: "studio" },
                  { label: "Gallery", id: "gallery" },
                  { label: "Pricing", id: "pricing" },
                  { label: "Contact", id: "contact" },
                ].map(({ label, id }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-white/40 hover:text-accent transition-colors text-sm"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/90 text-xs uppercase tracking-[0.15em] font-semibold mb-5">
                Visit Us
              </h4>
              <address className="not-italic space-y-2 text-white/40 text-sm">
                <p>5530 Joyce Street</p>
                <p>Vancouver, BC V5R 4H6</p>
                <p className="mt-4 flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent/70 flex-shrink-0" />
                  <a href="mailto:hello@ninhstudio.ca" className="hover:text-accent transition-colors">
                    hello@ninhstudio.ca
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>&copy; {new Date().getFullYear()} Ninh Studio. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 inline-block" />
            Made with care in East Vancouver
          </p>
        </div>
      </div>
    </footer>
  );
}
