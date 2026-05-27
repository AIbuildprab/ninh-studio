import React from "react";
import { Instagram, MapPin, Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white/70 pt-20 pb-8">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-display font-extrabold text-2xl tracking-tight text-white mb-4">
              NINH STUDIO
            </span>
            <p className="text-white/50 mb-8 max-w-sm">
              Your Story Deserves to Be Seen. Professional photography and studio space in East Vancouver.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://maps.google.com/?q=5530+Joyce+Street+Vancouver" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@ninhstudio.ca" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo('contact')} className="hover:text-accent transition-colors text-sm">Book a Session</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-accent transition-colors text-sm">Rent the Studio</button></li>
              <li><button onClick={() => scrollTo('gallery')} className="hover:text-accent transition-colors text-sm">Gallery</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-accent transition-colors text-sm">Pricing</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-accent transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          {/* Visit Us Col */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6">Visit Us</h4>
            <address className="not-italic text-sm space-y-2">
              <p>5530 Joyce Street</p>
              <p>Vancouver, BC V5R 4H6</p>
              <p className="mt-4"><a href="mailto:hello@ninhstudio.ca" className="hover:text-accent transition-colors">hello@ninhstudio.ca</a></p>
            </address>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Ninh Studio. All rights reserved.</p>
          <p>Made with love in East Vancouver.</p>
        </div>
      </div>
    </footer>
  );
}
