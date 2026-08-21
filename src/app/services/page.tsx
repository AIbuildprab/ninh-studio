import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { servicesHub } from "@/content/index";
import { articleMetadata } from "@/lib/seo";

export const metadata: Metadata = articleMetadata(servicesHub);

export default function ServicesPage() {
  return (
    <PageShell>
      <SeoArticlePage article={servicesHub} />
    </PageShell>
  );
}
