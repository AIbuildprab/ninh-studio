import Link from "next/link";
import { areas, coreServices } from "@/lib/catalog";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export function HomeAuthorityLinks() {
  return (
    <section className="py-[60px] md:py-[80px] bg-secondary w-full">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionEyebrow>Our main services</SectionEyebrow>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-foreground mb-6">
            Sessions and the room
          </h2>
          <ul className="space-y-3">
            {coreServices.map((service) => (
              <li key={service.slug}>
                <Link href={service.path} className="text-accent hover:underline text-lg">
                  {service.name}
                </Link>
                <p className="text-sm text-secondary-foreground">{service.short}</p>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-accent hover:underline text-lg">
                All photography services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <SectionEyebrow>Areas we serve</SectionEyebrow>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-foreground mb-6">
            Neighbourhoods that come to Joyce Street
          </h2>
          <ul className="space-y-3">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={area.path} className="text-accent hover:underline text-lg">
                  {area.name}
                </Link>
                <p className="text-sm text-secondary-foreground">{area.proximity}</p>
              </li>
            ))}
            <li>
              <Link href="/areas-we-serve" className="text-accent hover:underline text-lg">
                All areas we serve
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
