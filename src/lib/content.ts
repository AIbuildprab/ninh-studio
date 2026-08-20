import type { FaqItem } from "@/lib/faq";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

export type SeoArticle = {
  slug: string;
  kind: "service" | "area" | "hub";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  image: { src: string; alt: string; objectPosition?: string };
  body: ContentBlock[];
  faqs: FaqItem[];
  serveAreas?: { label: string; href: string }[];
  offerServices?: { label: string; href: string }[];
  breadcrumbs: { name: string; path: string }[];
};
