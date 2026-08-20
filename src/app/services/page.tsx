import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { servicesHub } from "@/content/index";

export const metadata: Metadata = {
  title: servicesHub.title,
  description: servicesHub.description,
  openGraph: {
    title: servicesHub.title,
    description: servicesHub.description,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <SeoArticlePage article={servicesHub} />
    </PageShell>
  );
}
