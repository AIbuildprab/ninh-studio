import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { areaArticles } from "@/content/index";
import { articleMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(areaArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = areaArticles[slug];
  if (!article) return {};
  return articleMetadata(article);
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const article = areaArticles[slug];
  if (!article) notFound();

  return (
    <PageShell>
      <SeoArticlePage
        article={article}
        extraSchema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://ninhstudio.ca/#business",
          name: site.name,
          telephone: site.phone,
          url: `https://ninhstudio.ca${article.breadcrumbs.at(-1)?.path}`,
          areaServed: {
            "@type": "Place",
            name: article.h1,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.line1,
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            postalCode: site.address.postal,
            addressCountry: "CA",
          },
        }}
      />
    </PageShell>
  );
}
