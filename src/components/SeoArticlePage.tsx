import Link from "next/link";
import type { ReactNode } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { JsonLd } from "@/components/JsonLd";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import type { ContentBlock, SeoArticle } from "@/lib/content";
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

  return (
    <>
      {schema.map((item, i) => (
        <JsonLd key={i} data={item} />
      ))}
      <article className="pb-20">
        <header className="relative overflow-hidden bg-ink text-primary-foreground">
          <div className="absolute inset-0">
            <PlaceholderImage
              src={article.image.src}
              alt={article.image.alt}
              fill
              priority
              sizes="100vw"
              objectPosition={article.image.objectPosition}
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          </div>
          <div className="relative max-w-[860px] mx-auto px-6 pt-28 pb-20">
            <SectionEyebrow className="text-gold-muted mb-4">{article.eyebrow}</SectionEyebrow>
            <h1 className="font-display font-medium text-4xl md:text-6xl leading-tight text-white mb-4">
              {article.h1}
            </h1>
            <p className="text-white/75 max-w-2xl text-lg">{article.description}</p>
          </div>
        </header>

        <div className="max-w-[760px] mx-auto px-6 pt-12">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {article.offerServices?.length ? (
            <section className="mt-12 rounded-sm border border-border bg-card p-6">
              <h2 className="font-display text-2xl mb-4">Services we offer here</h2>
              <ul className="space-y-2">
                {article.offerServices.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-accent hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {article.serveAreas?.length ? (
            <section className="mt-8 rounded-sm border border-border bg-card p-6">
              <h2 className="font-display text-2xl mb-4">We also serve these areas</h2>
              <ul className="space-y-2">
                {article.serveAreas.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-accent hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

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

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="font-display text-3xl mb-3">Come see the studio</h2>
            <p className="text-secondary-foreground mb-6 leading-relaxed">
              Ninh Studio is at {site.address.line1}, {site.address.city}, {site.address.region}{" "}
              {site.address.postal}. Call{" "}
              <a href={site.phoneHref} className="text-accent hover:underline">
                {site.phoneDisplay}
              </a>{" "}
              or send a note and we’ll find a time that isn’t rushed.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90"
            >
              Book a session
            </Link>
          </section>

          {article.kind === "area" || article.slug === "areas-we-serve" ? (
            <section className="mt-14">
              <h2 className="font-display text-3xl mb-3">Find us on the map</h2>
              <p className="text-secondary-foreground mb-4 leading-relaxed">
                One studio: {site.address.line1}, {site.address.city}. About a 650 m walk from
                Joyce-Collingwood Station.
              </p>
              <div className="h-[320px] rounded-xl overflow-hidden shadow-md mb-4">
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
      </article>
    </>
  );
}
