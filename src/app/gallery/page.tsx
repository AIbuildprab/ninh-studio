import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { GalleryPageContent } from "@/components/sections/GalleryPageContent";
import { galleryPageJsonLd } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const description =
  "Browse portraits, wedding photography, hair & makeup, and the Joyce Street studio at Ninh Studio in East Vancouver.";

export const metadata: Metadata = pageMetadata({
  title: "Gallery | Ninh Studio",
  description,
  path: "/gallery",
  image: {
    src: site.galleryItems[0].src,
    alt: site.galleryItems[0].alt,
  },
});

export default function GalleryPage() {
  return (
    <PageShell>
      <JsonLd data={galleryPageJsonLd()} />
      <GalleryPageContent />
    </PageShell>
  );
}
