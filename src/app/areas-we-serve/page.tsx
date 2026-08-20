import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { areasHub } from "@/content/index";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: areasHub.title,
  description: areasHub.description,
  openGraph: {
    title: areasHub.title,
    description: areasHub.description,
    type: "website",
  },
};

export default function AreasWeServePage() {
  return (
    <PageShell>
      <SeoArticlePage
        article={areasHub}
        extraSchema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: areasHub.h1,
          url: "https://ninhstudio.ca/areas-we-serve",
          about: {
            "@type": "Place",
            name: site.address.city,
          },
        }}
      />
    </PageShell>
  );
}
