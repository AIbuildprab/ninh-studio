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
  cherryClose: "/images/661332225_18344146363212876_187410965167138073_n.jpg",
  headshot: "/images/557450071_18319665712212876_5076352169028679104_n.jpg",
  shadowPortrait: "/images/532071746_18314138497212876_4927294953617113216_n.jpg",
  ivyProfile: "/images/634555137_18337554907212876_3035967748429450545_n.jpg",
  moodyPortrait: "/images/532381661_18314138488212876_6830629131662163073_n.jpg",
  mermaid: "/images/512506750_18508296769037098_5279261974635497118_n.jpg",
  forestDress: "/images/631145743_18337554898212876_7739959377910937175_n.jpg",
  gardenRoses: "/images/636997591_18337554880212876_1954085658199415000_n.jpg",
  pinkBlazer: "/images/649601405_18081831551362750_5691664145534238077_n.jpg",
  blackEditorial: "/images/468617035_18285894421212876_6826570509966480493_n.jpg",
  directorChair: "/images/469383584_18286819903212876_5706593147507485013_n.jpg",
  turtleneck: "/images/491444776_18301347739212876_7900669333681122615_n.jpg",
  beautyHoops: "/images/629764508_18336416899212876_7086536974214035352_n.jpg",
  pinkGown: "/images/466420831_18466685776012327_8777711288094021968_n.jpg",
  purpleMetallic: "/images/468710330_18285898045212876_1419320731200097181_n.jpg",
  sunglasses: "/images/657455525_18075080894433504_4932882462293649224_n.jpg",
  plaidStool: "/images/653394023_18097152745812800_1837796904943014885_n.jpg",
} as const;

export const site = {
  name: "Ninh Studio",
  origin: "https://ninhstudio.ca",
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
    "https://maps.google.com/maps?q=Ninh+Studio,+5530+Joyce+Street,+Vancouver,+BC&z=16&output=embed",
  seo: {
    title:
      "BEST Photography Studio Vancouver - if you're looking for Portrait Photography near me or Wedding Photography, Hair & Makeup and Photo Studio Rental near me - Ninh Studio is the place to be",
    h1: "Photography Studio Vancouver",
    h2: "Portrait Photography, Wedding Photography, Hair & Makeup and Studio Rental",
  },
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
    hero: "/images/space-6.avif",
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
    src: "/images/space-5.avif",
    alt: "Makeup station at Ninh Studio on Joyce Street",
    objectPosition: "50% 40%",
  } satisfies SiteImage,
  galleryItems: [
    {
      src: photos.cherryBlossom,
      alt: "Cherry blossom portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-soft",
    },
    {
      src: photos.forestDress,
      alt: "Fantasy portrait in the studio garden set — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-warm",
    },
    {
      src: photos.pinkGown,
      alt: "Formal sequin gown portrait — Ninh Studio",
      objectPosition: "50% 18%",
      className: "photo-soft",
    },
    {
      src: photos.headshot,
      alt: "Professional headshot — Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-warm",
    },
    {
      src: photos.beautyHoops,
      alt: "Beauty portrait — Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-card",
    },
    {
      src: photos.gardenRoses,
      alt: "Garden-set fashion portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-warm",
    },
    {
      src: photos.blackEditorial,
      alt: "Editorial studio portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-card",
    },
    {
      src: photos.directorChair,
      alt: "Branding portrait with portfolio — Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-soft",
    },
    {
      src: photos.ivyProfile,
      alt: "Editorial portrait with ivy — Ninh Studio",
      objectPosition: "60% 25%",
      className: "photo-warm",
    },
    {
      src: photos.fairyStones,
      alt: "Fairy portrait on stone — Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-warm",
    },
    {
      src: photos.cherryClose,
      alt: "Cherry blossom close portrait — Ninh Studio",
      objectPosition: "40% 25%",
      className: "photo-soft",
    },
    {
      src: photos.pinkBlazer,
      alt: "Branding portrait — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-warm",
    },
    {
      src: photos.turtleneck,
      alt: "Glossy beauty close-up — Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-card",
    },
    {
      src: photos.purpleMetallic,
      alt: "Fashion editorial — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-card",
    },
    {
      src: photos.plaidStool,
      alt: "Studio fashion portrait — Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-soft",
    },
    {
      src: photos.sunglasses,
      alt: "Editorial sunglasses portrait — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-card",
    },
    {
      src: photos.mermaid,
      alt: "Creative fantasy session — Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-soft",
    },
    {
      src: photos.moodyPortrait,
      alt: "Moody studio portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-card",
    },
    {
      src: photos.shadowPortrait,
      alt: "Dramatic studio portrait — Ninh Studio",
      objectPosition: "55% 20%",
      className: "photo-card",
    },
  ] as const satisfies readonly SiteImage[],
  studioItems: [
    { src: "/images/space-1.avif", alt: "Studio interior on Joyce Street" },
    { src: "/images/space-5.avif", alt: "Makeup station and vanity" },
    { src: "/images/space-3.avif", alt: "Natural light shooting area" },
    { src: "/images/space-4.avif", alt: "Floral mirror setup" },
    { src: "/images/space-2.avif", alt: "Studio backdrop and lighting" },
    { src: "/images/space-6.avif", alt: "Ninh Studio shooting space" },
    { src: "/images/widen-1680-noupsize.avif", alt: "Ninh Studio space" },
    { src: "/images/widen-1680-noupsize (1).avif", alt: "Wide view of Ninh Studio" },
    { src: "/images/widen-1680-noupsize (2).avif", alt: "Studio detail at Ninh Studio" },
  ] as const satisfies readonly SiteImage[],
  serviceImages: {
    headshots: {
      src: photos.headshot,
      alt: "Headshots & Portraits at Ninh Studio",
      objectPosition: "50% 15%",
      className: "photo-warm",
    },
    wedding: {
      src: photos.pinkGown,
      alt: "Wedding Photography at Ninh Studio",
      objectPosition: "50% 18%",
      className: "photo-soft",
    },
    hmu: {
      src: photos.beautyHoops,
      alt: "Hair & Makeup at Ninh Studio",
      objectPosition: "50% 25%",
      className: "photo-card",
    },
    baby: {
      src: photos.fairyStones,
      alt: "Baby Photography at Ninh Studio",
      objectPosition: "50% 28%",
      className: "photo-warm",
    },
    boudoir: {
      src: photos.blackEditorial,
      alt: "Boudoir Photography at Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-card",
    },
    commercial: {
      src: photos.directorChair,
      alt: "Commercial & Events at Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-soft",
    },
  } as const satisfies Record<string, SiteImage>,
  instagramPosts: [
    {
      src: photos.forestDress,
      alt: "Fantasy portrait — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-warm",
    },
    {
      src: photos.turtleneck,
      alt: "Beauty close-up — Ninh Studio",
      objectPosition: "50% 30%",
      className: "photo-card",
    },
    {
      src: photos.gardenRoses,
      alt: "Garden-set portrait — Ninh Studio",
      objectPosition: "50% 20%",
      className: "photo-warm",
    },
    {
      src: photos.pinkBlazer,
      alt: "Branding portrait — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-warm",
    },
    {
      src: photos.sunglasses,
      alt: "Editorial portrait — Ninh Studio",
      objectPosition: "50% 22%",
      className: "photo-card",
    },
    {
      src: photos.cherryClose,
      alt: "Cherry blossom close portrait — Ninh Studio",
      objectPosition: "40% 25%",
      className: "photo-soft",
    },
  ] as const satisfies readonly SiteImage[],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Sessions", href: "/services" },
    { label: "Studio", href: "/#studio" },
    { label: "Areas", href: "/areas-we-serve" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ],
  links: {
    contact: "/#contact",
    session: "/#contact",
    rental: "https://www.tagvenue.com/ca/rooms/vancouver/75697/ninh-studio/photo-studio",
  },
} as const;

export type SessionType = (typeof site.sessionTypes)[number];

export function formatAddress() {
  const { line1, city, region, postal } = site.address;
  return `${line1}, ${city}, ${region} ${postal}`;
}
