import type { Metadata } from "next";
import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const siteOrigin = "https://ninhstudio.ca";

const defaultOgImage = {
  url: site.images.hero,
  width: 1200,
  height: 630,
  alt: "Ninh Studio photography studio on Joyce Street, East Vancouver",
};

export function absoluteUrl(path: string) {
  if (path === "/") return siteOrigin;
  return `${siteOrigin}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image
    ? { url: image.src, width: 1200, height: 630, alt: image.alt }
    : defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type,
      locale: "en_CA",
      siteName: site.name,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}

export function articleMetadata(article: SeoArticle): Metadata {
  const path = article.breadcrumbs.at(-1)?.path ?? `/${article.slug}`;
  return pageMetadata({
    title: article.title,
    description: article.description,
    path,
    image: article.image,
    type: article.kind === "hub" ? "website" : "article",
  });
}
