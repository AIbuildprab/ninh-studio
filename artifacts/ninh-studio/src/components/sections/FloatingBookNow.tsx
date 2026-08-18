"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function FloatingBookNow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href={site.links.session}
      aria-label="Book a session"
      className={`fixed bottom-8 right-8 z-50 bg-primary text-primary-foreground text-sm font-semibold px-6 py-3 rounded-full shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      Book Now
    </a>
  );
}
