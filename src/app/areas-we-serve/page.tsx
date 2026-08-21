import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { areasHub } from "@/content/index";
import { articleMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = articleMetadata(areasHub);

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
