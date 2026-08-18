export type SiteImage = {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
};

const photos = {
  angel: "/images/632294253_18337554916212876_7404704275554732930_n.jpg",
  fairyStones: "/images/633352034_18337554862212876_2836969324011808_n.jpg",
  cherryBlossom: "/images/658838752_18343396168212876_5488004857212973396_n.jpg",
  headshot: "/images/557450071_18319665712212876_5076352169028679104_n.jpg",
  shadowPortrait: "/images/532071746_18314138497212876_4927294953617113216_n.jpg",
  ivyProfile: "/images/634555137_18337554907212876_3035967748429450545_n.jpg",
  moodyPortrait: "/images/532381661_18314138488212876_6830629131662163073_n.jpg",
  mermaid: "/images/512506750_18508296769037098_5279261974635497118_n.jpg",
} as const;

export const site = {
  name: "Ninh Studio",
  tagline: "Photography Studio · East Vancouver",
  owner: "Michelle",
  email: "hello@ninhstudio.ca",
  phone: "+1 778-908-4160",
  phoneHref: "tel:+17789084160",
  phoneDisplay: "(778) 908-4160",
  instagram: "https://www.instagram.com/ninhstudio/",
  instagramHandle: "@ninhstudio",
  mapsUrl:
    "https://www.google.com/maps/place/Ninh+Studio/@49.233558,-123.036216,17z/data=!4m6!3m5!1s0x548677015ada9d8f:0x1a2e0d2059f88131!8m2!3d49.233558!4d-123.036216!16s%2Fg%2F11vq2nqxn7",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=49.233558,-123.036216&z=16&output=embed",
  tagvenueUrl:
    "https://www.tagvenue.com/ca/rooms/vancouver/75697/ninh-studio/photo-studio",
  address: {
    line1: "5530 Joyce Street",
    city: "Vancouver",
    region: "BC",
    postal: "V5R 4H6",
    neighbourhood: "South Renfrew-Collingwood",
    area: "East Vancouver",
  },
  geo: {
    lat: 49.233558,
    lng: -123.036216,
  },
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday–Saturday", hours: "9:30 AM – 5:30 PM" },
    { day: "Sunday", hours: "10:00 AM – 5:30 PM" },
  ],
  google: {
    rating: "5.0",
    reviews: 22,
  },
  rental: {
    price: "C$60",
    unit: "/ hour",
    minimum: "2-hour minimum",
    taxNote: "Prices include sales tax.",
    capacity: "Up to 20 people",
    cancellation: [
      "7+ days before: full refund",
      "7 days to 24 hrs: 50% refund",
      "Under 24 hrs: non-refundable",
    ],
  },
  sessionTypes: [
    "Headshots & Portraits",
    "Wedding Photography",
    "Hair & Makeup",
    "Baby Photography",
    "Boudoir Photography",
    "Commercial Photography",
    "Corporate Photography",
    "Events & Parties",
  ] as const,
  images: {
    logo: "/images/logo.jpg",
    hero: "/images/Dolphin_Radar_20260818002150.png",
    studioFull: "/images/space-1.avif",
    studioDetail: "/images/space-5.avif",
    spaces: [
      "/images/space-1.avif",
      "/images/space-2.avif",
      "/images/space-3.avif",
      "/images/space-4.avif",
      "/images/space-5.avif",
      "/images/space-6.avif",
      "/images/space-7.avif",
      "/images/space-8.avif",
    ],
  },
  aboutImage: {
    src: photos.headshot,
    alt: "Michelle at Ninh Studio",
    objectPosition: "50% 18%",
    className: "photo-warm",
  } satisfies SiteImage,
  galleryItems: [
    {
      src: photos.angel,
      alt: "Angel wings portrait — Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-warm",
    },
    {
      src: photos.fairyStones,
      alt: "Fairy portrait on stone — Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-warm",
    },
    {
      src: photos.cherryBlossom,
      alt: "Cherry blossom portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-soft",
    },
    {
      src: photos.headshot,
      alt: "Professional headshot — Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-warm",
    },
    {
      src: photos.shadowPortrait,
      alt: "Dramatic studio portrait — Ninh Studio",
      objectPosition: "55% 20%",
      className: "photo-card",
    },
    {
      src: photos.ivyProfile,
      alt: "Editorial portrait with ivy — Ninh Studio",
      objectPosition: "60% 25%",
      className: "photo-warm",
    },
    { src: "/images/space-1.avif", alt: "Studio interior on Joyce Street" },
    { src: "/images/space-3.avif", alt: "Natural light shooting area" },
    { src: "/images/space-5.avif", alt: "Makeup station and vanity" },
  ] as const satisfies readonly SiteImage[],
  studioItems: [
    { src: "/images/space-1.avif", alt: "Studio interior on Joyce Street" },
    { src: "/images/space-5.avif", alt: "Makeup station and vanity" },
    { src: "/images/space-3.avif", alt: "Natural light shooting area" },
    { src: "/images/space-4.avif", alt: "Floral mirror setup" },
    { src: "/images/widen-1680-noupsize.avif", alt: "Ninh Studio space" },
    {
      src: photos.mermaid,
      alt: "Creative fantasy session at Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-soft",
    },
  ] as const satisfies readonly SiteImage[],
  serviceImages: {
    headshots: {
      src: photos.headshot,
      alt: "Headshots & Portraits at Ninh Studio",
      objectPosition: "50% 12%",
      className: "photo-card",
    },
    wedding: {
      src: photos.cherryBlossom,
      alt: "Wedding Photography at Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-soft",
    },
    hmu: {
      src: photos.moodyPortrait,
      alt: "Hair & Makeup at Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-card",
    },
    baby: {
      src: photos.fairyStones,
      alt: "Baby Photography at Ninh Studio",
      objectPosition: "50% 28%",
      className: "photo-warm",
    },
    boudoir: {
      src: photos.moodyPortrait,
      alt: "Boudoir Photography at Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-card",
    },
    commercial: {
      src: photos.mermaid,
      alt: "Commercial & Events at Ninh Studio",
      objectPosition: "50% 10%",
      className: "photo-soft",
    },
  } as const satisfies Record<string, SiteImage>,
  instagramPosts: [
    {
      src: photos.angel,
      alt: "Angel wings portrait — Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-warm",
    },
    {
      src: photos.cherryBlossom,
      alt: "Cherry blossom portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-soft",
    },
    {
      src: photos.headshot,
      alt: "Professional headshot — Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-warm",
    },
    {
      src: photos.fairyStones,
      alt: "Fairy portrait — Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-warm",
    },
    {
      src: photos.mermaid,
      alt: "Fantasy session — Ninh Studio",
      objectPosition: "50% 10%",
      className: "photo-soft",
    },
    {
      src: photos.shadowPortrait,
      alt: "Studio portrait — Ninh Studio",
      objectPosition: "55% 20%",
      className: "photo-card",
    },
  ] as const satisfies readonly SiteImage[],
  nav: [
    { label: "About", href: "#about" },
    { label: "Sessions", href: "#sessions" },
    { label: "Studio", href: "#studio" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  links: {
    contact: "#contact",
    session: "#contact",
    rental: "https://www.tagvenue.com/ca/rooms/vancouver/75697/ninh-studio/photo-studio",
  },
} as const;

export type SessionType = (typeof site.sessionTypes)[number];

export function formatAddress() {
  const { line1, city, region, postal } = site.address;
  return `${line1}, ${city}, ${region} ${postal}`;
}
