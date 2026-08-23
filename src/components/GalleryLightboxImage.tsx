"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { SiteImage } from "@/lib/site";

type GalleryLightboxImageProps = {
  img: SiteImage;
  className?: string;
  sizes?: string;
};

export function GalleryLightboxImage({
  img,
  className,
  sizes = "240px",
}: GalleryLightboxImageProps) {
  const [lightbox, setLightbox] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const close = () => setLightbox(false);

  const overlay =
    lightbox && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={img.alt}
          >
            <button
              type="button"
              className="absolute top-3 right-3 z-10 flex min-h-11 min-w-11 items-center justify-center text-white/70 transition-colors hover:text-white md:top-6 md:right-6"
              onClick={close}
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <div
              className="max-h-[90dvh] max-w-[min(100%,72rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <PlaceholderImage
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1600}
                sizes="90vw"
                className="max-h-[90dvh] max-w-full h-auto w-auto object-contain"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        className="relative h-full w-full overflow-hidden rounded cursor-pointer group/img"
        onClick={() => setLightbox(true)}
        aria-label={`View ${img.alt}`}
      >
        <PlaceholderImage
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          objectPosition={img.objectPosition}
          className={cn(
            "object-cover transition-transform duration-500 group-hover/img:scale-105",
            img.className
          )}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover/img:bg-black/15" />
      </button>
      {overlay}
    </div>
  );
}
