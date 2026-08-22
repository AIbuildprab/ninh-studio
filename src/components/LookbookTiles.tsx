import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { areaArticles, serviceArticles } from "@/content/index";
import { site, type SiteImage } from "@/lib/site";

export type LookbookTileItem = {
  label: string;
  href: string;
};

function imageForHref(href: string): SiteImage {
  const parts = href.split("/").filter(Boolean);
  if (parts[0] === "services" && parts[1] && serviceArticles[parts[1]]) {
    return serviceArticles[parts[1]].image;
  }
  if (parts[0] === "areas-we-serve" && parts[1] && areaArticles[parts[1]]) {
    return areaArticles[parts[1]].image;
  }
  return {
    src: site.images.studioFull,
    alt: `${site.name} photography studio`,
  };
}

export function LookbookTiles({
  eyebrow,
  title,
  items,
  variant = "photos",
}: {
  eyebrow?: string;
  title?: string;
  items: LookbookTileItem[];
  variant?: "photos" | "names";
}) {
  if (!items.length) return null;

  return (
    <section className="w-full bg-background">
      <div
        className={`mx-auto px-4 md:px-6 py-10 md:py-14 ${
          variant === "names" ? "max-w-[760px]" : "max-w-[1180px]"
        }`}
      >
        {(eyebrow || title) && (
          <div className={`max-w-2xl mb-8 ${variant === "names" ? "text-left" : "text-center mx-auto"}`}>
            {eyebrow ? <p className="brand-eyebrow mb-3">{eyebrow}</p> : null}
            {title ? (
              <h2 className="font-display font-medium text-3xl md:text-4xl text-foreground">
                {title}
              </h2>
            ) : null}
          </div>
        )}
        {variant === "names" ? (
          <ul className="flex flex-col gap-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-2xl md:text-3xl text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {items.map((item) => {
            const image = imageForHref(item.href);
            return (
              <div
                key={item.href}
                className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] text-left"
              >
                <a href={item.href} className="absolute inset-0" aria-label={item.label}>
                  <PlaceholderImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    objectPosition={image.objectPosition}
                    className={cn(
                      "object-cover transition-transform duration-700 group-hover:scale-105",
                      image.className
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 group-hover:from-black/88 transition-opacity" />
                </a>
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center pointer-events-none">
                  <h3 className="font-display font-medium text-2xl md:text-3xl text-white mb-4 leading-tight">
                    {item.label}
                  </h3>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="lookbook-ghost pointer-events-auto inline-flex items-center justify-center h-10 px-6 text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors"
                  >
                    Explore
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
