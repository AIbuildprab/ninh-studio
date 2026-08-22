import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const downtownVancouver: SeoArticle = {
  slug: "downtown-vancouver",
  kind: "area",
  title: "Photography studio near downtown Vancouver | Ninh Studio Joyce Street",
  description:
    "Downtown Vancouver clients take the Expo Line to Joyce-Collingwood for portraits, boudoir, weddings, and studio rental at 5530 Joyce Street. Not a downtown address.",
  h1: "Photography studio near downtown Vancouver: on Joyce Street, not in the core",
  eyebrow: "Expo Line instead of parkades",
  image: {
    src: site.serviceImages.boudoir.src,
    alt: "Private in-studio portrait session at Ninh Studio, reachable from downtown via SkyTrain",
    objectPosition: site.serviceImages.boudoir.objectPosition,
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Areas we serve", path: "/areas-we-serve" },
    { name: "Downtown Vancouver", path: "/areas-we-serve/downtown-vancouver" },
  ],
  offerServices: [
    { label: "Portrait Photography", href: "/services/portrait-photography" },
    { label: "Boudoir Photography", href: "/services/boudoir-photography" },
    { label: "Wedding Photography", href: "/services/wedding-photography" },
    { label: "Photo Studio Rental", href: "/services/studio-rental" },
  ],
  body: [
    {
      type: "p",
      text: "If you work or live downtown, search results for a photography studio near downtown Vancouver are full of Gastown lofts, Yaletown addresses, and hourly rates that assume you enjoy circling for parking. Ninh Studio is not one of those.",
    },
    {
      type: "p",
      text: "We are at 5530 Joyce Street, Vancouver BC V5R 4H6, in South Renfrew-Collingwood on the Expo Line, about 650 metres from Joyce-Collingwood Station. We do not maintain a downtown storefront or a second location with a V6 postal code. Downtown clients come to us on purpose. The SkyTrain is direct. The session is private. You are not paying for a view of a loading zone.",
    },
    {
      type: "p",
      text: "From Waterfront or City Centre Station, the Expo Line eastbound to Joyce-Collingwood typically takes twenty to twenty-five minutes plus a flat seven to ten minute walk south on Joyce Street. Total door-to-door is often under forty minutes. That is comparable to driving and parking in the core during business hours, without the parkade bill.",
    },
    {
      type: "p",
      text: "[Portrait photography](/services/portrait-photography) for executives and creatives. [Boudoir photography](/services/boudoir-photography) in a locked studio. [Studio rental](/services/studio-rental) at C$60 per hour when you already have a photographer but need a room.",
    },
    {
      type: "h2",
      text: "Why downtown clients leave the core for Joyce Street",
    },
    {
      type: "p",
      text: "Downtown studios trade on postcode prestige. That works if you want brick walls visible from the window. Many clients want the opposite: no pedestrian audience, predictable air conditioning, hair and makeup in the same room, and a photographer who directs without rushing the next booking through the door.",
    },
    {
      type: "p",
      text: "Michelle runs Ninh Studio at an unhurried pace. 597 square feet. Appointments only. Tuesday through Saturday 9:30 AM to 5:30 PM and Sunday 10:00 AM to 5:30 PM.",
    },
    {
      type: "p",
      text: "Corporate headshots are a common downtown booking. You SkyTrain after work, walk from Joyce-Collingwood, shoot for ninety minutes, and SkyTrain home without paying thirty dollars for parking. Boudoir clients often choose Joyce Street because the studio is not in a glass tower lobby. Wedding parties book getting-ready coverage when a hotel suite feels cramped and a Gastown studio feels exposed.",
    },
    {
      type: "h2",
      text: "SkyTrain from downtown: real times",
    },
    {
      type: "table",
      caption: "Expo Line from downtown to Ninh Studio",
      headers: ["Downtown station", "Train", "Walk to studio", "Typical total"],
      rows: [
        [
          "Waterfront",
          "Expo Line eastbound to Joyce-Collingwood",
          "About 650 m south on Joyce Street",
          "About 30 to 40 min door-to-door",
        ],
        [
          "Burrard / City Centre",
          "Expo Line eastbound to Joyce-Collingwood",
          "About 650 m south on Joyce Street",
          "About 25 to 35 min door-to-door",
        ],
        [
          "Stadium-Chinatown",
          "Expo Line eastbound to Joyce-Collingwood",
          "About 650 m south on Joyce Street",
          "About 25 to 30 min door-to-door",
        ],
        [
          "Driving from downtown",
          "East via Kingsway or 1st Ave",
          "2 on-site spots or street parking",
          "About 20 to 40 min depending on traffic + parking search",
        ],
      ],
    },
    {
      type: "h2",
      text: "What we are not claiming",
    },
    {
      type: "p",
      text: "We are not a downtown Vancouver photography studio in the geographic sense. You will not find us in Coal Harbour or the Financial District. Listing “near downtown” means the Expo Line connects the core to Joyce Street without transfers. It does not mean we share your elevator.",
    },
    {
      type: "p",
      text: "If a search result promises a studio on Granville and the pin drops in Collingwood, that is the kind of mismatch we avoid. One address: 5530 Joyce Street. One phone: (778) 908-4160.",
    },
    {
      type: "h2",
      text: "Services downtown clients book most",
    },
    {
      type: "h3",
      text: "Executive and creative headshots",
    },
    {
      type: "p",
      text: "Lawyers, tech workers, consultants, and freelancers downtown book headshots because the studio removes variables that outdoor shoots around Canada Place cannot guarantee: light, temperature, direction. Most sessions are one to two hours with one or two outfit changes.",
    },
    {
      type: "h3",
      text: "Boudoir and private portraits",
    },
    {
      type: "p",
      text: "Privacy is the product. Boudoir sessions happen in-studio only, with a locked door and no shared hallway traffic from a retail podium. Downtown clients often SkyTrain in after work when discretion matters more than a waterfront backdrop.",
    },
    {
      type: "h3",
      text: "Weddings and bridal prep",
    },
    {
      type: "p",
      text: "Wedding photography is quoted for the full day. Downtown couples frequently book bridal portraits or getting-ready time on Joyce Street before a venue ceremony anywhere in Metro Vancouver. Hair and makeup trials happen in the same studio.",
    },
    {
      type: "h3",
      text: "Renting the room",
    },
    {
      type: "p",
      text: "If you already have a photographer downtown but need a controlled space, studio rental is C$60 per hour including tax with a two-hour minimum. Lights, backdrops, Wi-Fi, and air conditioning are included. Capacity up to 20 people.",
    },
    {
      type: "h2",
      text: "Landmarks on the Joyce Street end of the trip",
    },
    {
      type: "p",
      text: "Your downtown landmarks are Waterfront, the SeaBus gates, Pacific Centre, and the Expo Line platforms at City Centre. On the Joyce Street side, Joyce-Collingwood Station is the anchor. Then neighbourhood shops, Kingsway one block north, and residential Collingwood. The studio fits the Collingwood side of the city: practical, walkable, without tourist foot traffic.",
    },
    {
      type: "h2",
      text: "Checklist for downtown clients",
    },
    {
      type: "ul",
      items: [
        "Remember the studio is at 5530 Joyce Street, not downtown. Plan SkyTrain or drive time",
        "Expo Line eastbound to Joyce-Collingwood, then walk about 650 m south on Joyce (flat, about 10 min)",
        "Compare SkyTrain total time vs downtown parking fees before you drive",
        "For boudoir, allow unhurried time. Sessions are private and not rushed for the next client",
        "For headshots, bring one or two outfits. Direction is included",
        "Book via (778) 908-4160 or hello@ninhstudio.ca. Appointments only",
      ],
    },
    {
      type: "h2",
      text: "Parkade math vs the Expo Line",
    },
    {
      type: "p",
      text: "Downtown clients often compare us to Gastown studios after they have paid for parking twice. Once to scout. Once on session day. A typical core parkade runs fifteen to thirty dollars for a short stay. Add bridge or tunnel time if you live outside the peninsula and the headshot appointment starts to cost more in logistics than in photography.",
    },
    {
      type: "p",
      text: "Expo Line eastbound from City Centre to Joyce-Collingwood is usually twenty minutes on the train. Add the 650-metre walk and you are still inside what many people spend hunting for a stall on Hamilton Street.",
    },
    {
      type: "p",
      text: "You are not buying a downtown address. You are buying a calm room, professional light, and a photographer who blocks enough time that you are not rushed for the next booking. Hair and makeup in the same space removes a second appointment across town. For boudoir clients, discretion on the SkyTrain (camera bag, garment bag, no lobby audience) matters as much as the savings.",
    },
    {
      type: "h2",
      text: "Client types we see from the core",
    },
    {
      type: "ul",
      items: [
        "Financial District and tech workers updating headshots after work via SkyTrain",
        "Couples doing bridal portraits before a downtown hotel ceremony or a venue outside the core",
        "Creatives who want controlled light without renting a Gastown loft by the hour",
        "People who tried outdoor portraits at Canada Place and want reliable indoor light instead",
      ],
    },
    {
      type: "p",
      text: "Winter sessions highlight another downtown-vs-Joyce difference. You are not coordinating around short daylight in a third-floor Gastown walk-up. The studio lights and windows are set for consistent results in January and July alike. Summer sessions benefit from air conditioning when outdoor heat makes makeup melt before you start. Those practical details are why repeat downtown clients SkyTrain east instead of booking the closest postcode on the map.",
    },
    {
      type: "h2",
      text: "The trade you are making",
    },
    {
      type: "p",
      text: "Choosing Joyce Street over a downtown postcode trades skyline bragging rights for calm, space, and cost predictability. You ride the Expo Line past Commercial-Broadway, exit at Joyce-Collingwood, walk past the same coffee counters Metrotown commuters use, and step into a 597-square-foot studio where the job is the photograph, not the address on the invoice. For many downtown clients, that trade is exactly what they wanted.",
    },
  ],
  faqs: [
    {
      id: "dt-downtown",
      question: "Is Ninh Studio located downtown?",
      answer:
        "No. The studio is at 5530 Joyce Street in Collingwood, V5R 4H6. Downtown clients reach us via Expo Line to Joyce-Collingwood, then a walk of about 650 m.",
    },
    {
      id: "dt-time",
      question: "How long from Waterfront Station to the studio?",
      answer:
        "Typically thirty to forty minutes door-to-door: Expo Line eastbound to Joyce-Collingwood (about 20 to 25 min) plus a 7 to 10 minute walk on Joyce Street.",
    },
    {
      id: "dt-fake",
      question: "Do you have a second downtown location?",
      answer:
        "No. One studio, one address. We do not list Gastown or Yaletown offices we do not occupy.",
    },
    {
      id: "dt-boudoir",
      question: "Is boudoir photography private?",
      answer:
        "Yes. Boudoir sessions are in-studio only with a locked door. That is a common reason downtown clients choose Joyce Street over shared building studios.",
    },
    {
      id: "dt-parking",
      question: "Should I drive from downtown?",
      answer:
        "SkyTrain is often faster and cheaper when you factor parkade fees. If you drive, two on-site spots and street parking on Joyce are usually easier than downtown core parking.",
    },
    {
      id: "dt-headshot",
      question: "Do you offer executive headshots?",
      answer:
        "Yes. Portrait sessions include professional lighting and direction. Popular with downtown professionals who SkyTrain after work.",
    },
    {
      id: "dt-wedding",
      question: "Can downtown couples book wedding services?",
      answer:
        "Yes. Wedding photography is quoted for the day. Bridal portraits and getting-ready coverage at Joyce Street are common add-ons.",
    },
    {
      id: "dt-rental",
      question: "What does studio rental cost?",
      answer:
        "C$60 per hour including tax, two-hour minimum, with lights, backdrops, and air conditioning included.",
    },
    {
      id: "dt-hours",
      question: "What are your hours?",
      answer:
        "Tuesday to Saturday 9:30 AM to 5:30 PM, Sunday 10:00 AM to 5:30 PM. Closed Monday. Appointments only.",
    },
    {
      id: "dt-book",
      question: "How do I book from downtown?",
      answer:
        "Call (778) 908-4160, email hello@ninhstudio.ca, or use the homepage contact form.",
    },
  ],
};
