import Link from "next/link";
import type { ReactNode } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { LookbookTiles } from "@/components/LookbookTiles";
import { BookingBanner } from "@/components/sections/BookingBanner";
import type { ContentBlock, SeoArticle } from "@/lib/content";
import { areas, services } from "@/lib/catalog";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text))) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const href = match[2];
    const label = match[1];
    const external = href.startsWith("http");
    parts.push(
      <Link
        key={key++}
        href={href}
        className="text-accent font-medium underline-offset-2 hover:underline"
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {label}
      </Link>
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return parts;
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return <p className="mb-5 text-base leading-relaxed text-secondary-foreground">{inline(block.text)}</p>;
  }
  if (block.type === "h2") {
    return (
      <h2 className="font-display font-medium text-3xl md:text-4xl text-foreground mt-12 mb-4">
        {block.text}
      </h2>
    );
  }
  if (block.type === "h3") {
    return (
      <h3 className="font-display font-medium text-2xl text-foreground mt-8 mb-3">
        {block.text}
      </h3>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="mb-6 list-disc space-y-2 pl-5 text-secondary-foreground">
        {block.items.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="mb-6 list-decimal space-y-2 pl-5 text-secondary-foreground">
        {block.items.map((item) => (
          <li key={item}>{inline(item)}</li>
        ))}
      </ol>
    );
  }
  return (
    <div className="mb-8 overflow-x-auto">
      {block.caption ? (
        <p className="mb-2 text-sm text-secondary-foreground">{block.caption}</p>
      ) : null}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {block.headers.map((header) => (
              <th
                key={header}
                className="border border-border bg-secondary px-3 py-2 text-left font-medium text-foreground"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <td key={cell} className="border border-border px-3 py-2 text-secondary-foreground">
                  {inline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SeoArticlePage({
  article,
  extraSchema,
}: {
  article: SeoArticle;
  extraSchema?: unknown;
}) {
  const schema = [
    breadcrumbJsonLd(article.breadcrumbs),
    faqJsonLd(article.faqs),
    article.kind === "service"
      ? serviceJsonLd(article.h1, article.breadcrumbs.at(-1)?.path ?? "/", article.description)
      : null,
    extraSchema ?? null,
  ].filter(Boolean);

  const isServicesHub = article.kind === "hub" && article.slug === "services";
  const isAreasHub = article.kind === "hub" && article.slug === "areas-we-serve";
  const relatedServices = article.offerServices?.filter((item) => item.href !== "/services") ?? [];
  const relatedAreas = article.serveAreas ?? [];

  return (
    <>
      {schema.map((item, i) => (
        <JsonLd key={i} data={item} />
      ))}
      <article>
        <header className="relative min-h-[72vh] overflow-hidden bg-ink text-primary-foreground flex items-end">
          <div className="absolute inset-0">
            <PlaceholderImage
              src={article.image.src}
              alt={article.image.alt}
              fill
              priority
              sizes="100vw"
              objectPosition={article.image.objectPosition}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/45" />
          </div>
          <div className="relative w-full max-w-[1180px] mx-auto px-6 pt-28 pb-14 md:pb-20 md:pl-16">
            <nav className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-gold/55 mb-6">
              {article.breadcrumbs.map((crumb, i) => (
                <span key={crumb.path} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  <Link href={crumb.path} className="hover:text-gold transition-colors">
                    {crumb.name}
                  </Link>
                </span>
              ))}
            </nav>
            <p className="uppercase tracking-[0.36em] text-gold-muted font-medium text-[10px] md:text-[11px] mb-4">
              {article.eyebrow}
            </p>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-[1.08] text-white mb-4 max-w-3xl">
              {article.h1}
            </h1>
            <p className="text-white/75 max-w-xl text-base md:text-lg mb-8">{article.description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={site.links.session}
                className="lookbook-solid inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
              >
                Book a Session
              </Link>
              <Link
                href="/#pricing"
                className="lookbook-ghost inline-flex items-center justify-center min-w-[160px] h-12 px-8 text-sm font-semibold tracking-wide transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
        </header>

        {isServicesHub ? (
          <LookbookTiles
            eyebrow="Sessions"
            title="Explore the work"
            items={services.map((s) => ({ label: s.name, href: s.path }))}
          />
        ) : null}

        {isAreasHub ? (
          <LookbookTiles
            variant="names"
            eyebrow="Areas"
            title="Neighbourhoods that come to Joyce Street"
            items={areas.map((a) => ({ label: a.name, href: a.path }))}
          />
        ) : null}

        <div className="max-w-[760px] mx-auto px-6 pt-12 pb-8">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <section className="mt-14">
            <h2 className="font-display font-medium text-3xl md:text-4xl text-foreground mb-6">
              Questions we hear a lot
            </h2>
            <dl className="space-y-6">
              {article.faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-medium text-foreground mb-1">{faq.question}</dt>
                  <dd className="text-secondary-foreground leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          {article.kind === "area" || article.slug === "areas-we-serve" ? (
            <section className="mt-14">
              <h2 className="font-display text-3xl mb-3">Find us on the map</h2>
              <p className="text-secondary-foreground mb-4 leading-relaxed">
                One studio: {site.address.line1}, {site.address.city}. About a 650 m walk from
                Joyce-Collingwood Station.
              </p>
              <div className="h-[320px] overflow-hidden shadow-md mb-4">
                <iframe
                  src={site.mapsEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${site.name} on Joyce Street`}
                />
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent font-medium hover:underline"
              >
                Get directions
              </a>
            </section>
          ) : null}
        </div>

        {!isServicesHub && relatedServices.length ? (
          <LookbookTiles eyebrow="Services" title="What we offer here" items={relatedServices} />
        ) : null}

        {!isAreasHub && relatedAreas.length ? (
          <LookbookTiles
            variant="names"
            eyebrow="Areas"
            title="Neighbourhoods we serve"
            items={relatedAreas}
          />
        ) : null}

        <BookingBanner />
      </article>
    </>
  );
}
