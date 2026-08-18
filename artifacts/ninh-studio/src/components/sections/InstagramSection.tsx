"use client";

import React from "react";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { site } from "@/lib/site";

const instaPosts = [...site.instagramPosts];

export function InstagramSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className="bg-ink py-16 overflow-hidden" ref={ref}>
      <div
        className={`max-w-[1180px] mx-auto px-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center md:text-left">
          <p className="brand-eyebrow mb-2">Follow along</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-display logo-gold text-3xl font-medium hover:opacity-90 transition-opacity"
          >
            {site.instagramHandle}
          </a>
          <p className="text-gold-muted/45 text-sm mt-2">Recent sessions and studio life on Joyce Street.</p>
        </div>
        <Button asChild variant="outline" className="border-gold/20 text-gold hover:bg-gold hover:text-ink gap-2">
          <a href={site.instagram} target="_blank" rel="noreferrer">
            <Instagram className="w-4 h-4" />
            Follow on Instagram
          </a>
        </Button>
      </div>

      <div
        className={`w-full overflow-x-auto pb-4 hide-scrollbar transition-all duration-700 delay-200 ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex gap-3 px-6 md:justify-center min-w-max md:min-w-0">
          {instaPosts.map((post, i) => (
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              key={`${post.src}-${i}`}
              className="relative w-48 h-48 md:w-52 md:h-52 shrink-0 group rounded-sm overflow-hidden block"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: isIntersecting ? 1 : 0,
                transform: isIntersecting ? "none" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <PlaceholderImage
                src={post.src}
                alt={post.alt}
                fill
                sizes="208px"
                objectPosition={post.objectPosition}
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-110",
                  post.className
                )}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
