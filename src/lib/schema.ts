import { areas, services } from "@/lib/catalog";
import { homepageFaqs, type FaqItem } from "@/lib/faq";
import { site } from "@/lib/site";

const origin = "https://ninhstudio.ca";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${origin}/#business`,
    name: site.name,
    image: `${origin}${site.images.hero}`,
    url: origin,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    description:
      "Photography studio on Joyce Street in East Vancouver. Portraits, wedding photography, hair & makeup, and studio rental.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    sameAs: [site.instagram, site.mapsUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "17:30",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.google.rating,
      reviewCount: site.google.reviews,
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Photography services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${origin}${service.path}`,
        },
      })),
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${origin}${path}`,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${origin}/#business`,
      name: site.name,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postal,
        addressCountry: "CA",
      },
    },
    areaServed: areas.map((area) => area.name),
  };
}

export function homepageSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [localBusinessJsonLd(), faqJsonLd(homepageFaqs)],
  };
}
