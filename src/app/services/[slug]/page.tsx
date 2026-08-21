import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SeoArticlePage } from "@/components/SeoArticlePage";
import { serviceArticles } from "@/content/index";
import { articleMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(serviceArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = serviceArticles[slug];
  if (!article) return {};
  return articleMetadata(article);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const article = serviceArticles[slug];
  if (!article) notFound();

  return (
    <PageShell>
      <SeoArticlePage article={article} />
    </PageShell>
  );
}
