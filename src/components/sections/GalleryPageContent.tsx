"use client";

import { GalleryLightboxImage } from "@/components/GalleryLightboxImage";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { galleryPageImages, site } from "@/lib/site";

const images = galleryPageImages();

export function GalleryPageContent() {
  return (
    <main id="main" className="page-enter-content min-h-screen bg-background text-foreground">
      <section className="pt-28 md:pt-32 pb-[60px] md:pb-[100px]">
        <div className="mx-auto px-6 text-center max-w-2xl mb-12">
          <SectionEyebrow className="text-center">Gallery</SectionEyebrow>
          <h1 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
            Sessions &amp; the studio.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Portraits, weddings, hair &amp; makeup, and the space on Joyce Street — natural light, backdrops, and a makeup station.
          </p>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <GalleryLightboxImage
              key={`${img.src}-${i}`}
              img={img}
              className="aspect-[3/4] w-full"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-12 px-6">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold tracking-wide border border-foreground/20 text-foreground hover:bg-ink hover:text-gold transition-colors"
          >
            See more on Instagram
          </a>
          <a
            href={site.links.session}
            className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold tracking-wide lookbook-solid"
          >
            Book a session
          </a>
        </div>
      </section>
    </main>
  );
}
