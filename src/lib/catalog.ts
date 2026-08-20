export type ServiceRank = 2 | 3;

export type ServicePageMeta = {
  slug: string;
  name: string;
  rank: ServiceRank;
  path: string;
  short: string;
  primaryKeyword: string;
};

export type AreaPageMeta = {
  slug: string;
  name: string;
  path: string;
  region: string;
  proximity: string;
  landmarks: string[];
  primaryKeyword: string;
};

export const services: ServicePageMeta[] = [
  {
    slug: "portrait-photography",
    name: "Portrait Photography",
    rank: 2,
    path: "/services/portrait-photography",
    short: "Headshots, personal branding, and unhurried portraits",
    primaryKeyword: "portrait photography Vancouver",
  },
  {
    slug: "wedding-photography",
    name: "Wedding Photography",
    rank: 2,
    path: "/services/wedding-photography",
    short: "Wedding-day coverage at the same unhurried studio pace",
    primaryKeyword: "wedding photography Vancouver",
  },
  {
    slug: "hair-and-makeup",
    name: "Hair & Makeup",
    rank: 2,
    path: "/services/hair-and-makeup",
    short: "Bridal trials and session hair & makeup with Michelle",
    primaryKeyword: "bridal hair and makeup Vancouver",
  },
  {
    slug: "studio-rental",
    name: "Photo Studio Rental",
    rank: 2,
    path: "/services/studio-rental",
    short: "Hourly rental on Joyce Street from C$60/hr",
    primaryKeyword: "photo studio rental Vancouver",
  },
  {
    slug: "baby-photography",
    name: "Baby Photography",
    rank: 3,
    path: "/services/baby-photography",
    short: "Newborn and milestone portraits at your baby’s pace",
    primaryKeyword: "baby photography Vancouver",
  },
  {
    slug: "boudoir-photography",
    name: "Boudoir Photography",
    rank: 3,
    path: "/services/boudoir-photography",
    short: "Private in-studio sessions",
    primaryKeyword: "boudoir photography Vancouver",
  },
  {
    slug: "commercial-photography",
    name: "Commercial Photography",
    rank: 3,
    path: "/services/commercial-photography",
    short: "Products, teams, and brand work",
    primaryKeyword: "commercial photography Vancouver",
  },
  {
    slug: "event-photography",
    name: "Event Photography",
    rank: 3,
    path: "/services/event-photography",
    short: "Parties, gatherings, and on-location coverage",
    primaryKeyword: "event photography Vancouver",
  },
];

export const coreServices = services.filter((s) => s.rank === 2);
export const moreServices = services.filter((s) => s.rank === 3);

export const areas: AreaPageMeta[] = [
  {
    slug: "joyce-collingwood",
    name: "Joyce-Collingwood",
    path: "/areas-we-serve/joyce-collingwood",
    region: "Vancouver",
    proximity: "About a 650 m walk from Joyce-Collingwood SkyTrain to 5530 Joyce Street",
    landmarks: ["Joyce-Collingwood Station", "Joyce Street", "Collingwood neighbourhood"],
    primaryKeyword: "photography studio Joyce-Collingwood",
  },
  {
    slug: "east-vancouver",
    name: "East Vancouver",
    path: "/areas-we-serve/east-vancouver",
    region: "Vancouver",
    proximity: "The studio is on Joyce Street in South Renfrew-Collingwood, East Vancouver",
    landmarks: ["Joyce Street", "Kingsway", "Renfrew-Collingwood"],
    primaryKeyword: "photography studio East Vancouver",
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    path: "/areas-we-serve/burnaby",
    region: "Metro Vancouver",
    proximity: "A short Expo Line ride or drive from Metrotown and central Burnaby",
    landmarks: ["Metrotown", "Expo Line", "Boundary Road"],
    primaryKeyword: "photography studio Burnaby",
  },
  {
    slug: "downtown-vancouver",
    name: "Downtown Vancouver",
    path: "/areas-we-serve/downtown-vancouver",
    region: "Vancouver",
    proximity: "Direct Expo Line from downtown stations to Joyce-Collingwood",
    landmarks: ["Waterfront Station", "City Centre", "Expo Line"],
    primaryKeyword: "photography studio near downtown Vancouver",
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    path: "/areas-we-serve/new-westminster",
    region: "Metro Vancouver",
    proximity: "Expo Line westbound to Joyce-Collingwood, then a short walk",
    landmarks: ["New Westminster Station", "Columbia Street", "Expo Line"],
    primaryKeyword: "photography studio New Westminster",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
