import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const newWestminster: SeoArticle = {
  slug: "new-westminster",
  kind: "area",
  title: "Photography studio for New Westminster clients | Ninh Studio Joyce Street",
  description:
    "New Westminster clients take the Expo Line westbound to Joyce-Collingwood for portraits, weddings, baby photos, and studio rental at 5530 Joyce Street, Vancouver.",
  h1: "Photography studio New Westminster clients reach on the Expo Line",
  eyebrow: "Westbound to Joyce Street",
  image: {
    src: site.serviceImages.baby.src,
    alt: "Baby photography session at Ninh Studio, convenient from New Westminster via SkyTrain",
    objectPosition: site.serviceImages.baby.objectPosition,
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Areas we serve", path: "/areas-we-serve" },
    { name: "New Westminster", path: "/areas-we-serve/new-westminster" },
  ],
  offerServices: [
    { label: "Portrait Photography", href: "/services/portrait-photography" },
    { label: "Wedding Photography", href: "/services/wedding-photography" },
    { label: "Baby Photography", href: "/services/baby-photography" },
    { label: "Photo Studio Rental", href: "/services/studio-rental" },
  ],
  body: [
    {
      type: "p",
      text: "New Westminster sits on the Fraser, with Columbia Street, the Quay, and New Westminster Station anchoring a city that feels both historic and commutable. Ninh Studio is not in New Westminster. We are at 5530 Joyce Street, Vancouver BC V5R 4H6, in Collingwood.",
    },
    {
      type: "p",
      text: "What we share with New West clients is the Expo Line. Board westbound at New Westminster Station, ride to Joyce-Collingwood, walk about 650 metres south on Joyce Street, and you are at the studio door. For portraits, weddings, baby sessions, and hourly studio rental, that trip is often simpler than driving to a downtown Vancouver address and hunting for parking.",
    },
    {
      type: "p",
      text: "Michelle runs one room. 597 square feet. Air conditioned. Makeup station and professional lights already in place. [Portrait photography](/services/portrait-photography) for families and professionals. [Wedding photography](/services/wedding-photography) quoted for the day. [Baby photography](/services/baby-photography) paced around naps and feeds.",
    },
    {
      type: "p",
      text: "New West parents, couples planning weddings at the Quay or in Burnaby, and SkyTrain commuters book here because the Expo Line makes Joyce Street reachable without a car.",
    },
    {
      type: "h2",
      text: "Why New Westminster clients come to Joyce Street",
    },
    {
      type: "p",
      text: "New Westminster has riverfront charm and growing density along Columbia and Sixth. It does not have as many small private photo studios with on-site parking, in-room hair and makeup, and a photographer who blocks unhurried time for nervous subjects.",
    },
    {
      type: "p",
      text: "Families in Queensborough and Sapperton book baby milestones because the studio is warm and private. It is not a mall backdrop with a line behind you. Couples book bridal portraits before a ceremony at a New West hall or a Burnaby venue. Professionals SkyTrain after work for headshots because the math beats bridge traffic to Gastown.",
    },
    {
      type: "p",
      text: "Local relevance comes from transit and a real address, not a fictional Columbia Street suite. There is no Ninh Studio in New Westminster. There is one phone number, (778) 908-4160, and one Joyce Street door.",
    },
    {
      type: "h2",
      text: "Expo Line from New Westminster Station",
    },
    {
      type: "table",
      caption: "SkyTrain and drive times from New Westminster",
      headers: ["Origin", "Route", "Typical door-to-door"],
      rows: [
        [
          "New Westminster Station",
          "Expo Line westbound to Joyce-Collingwood + walk",
          "About 25 to 35 min total",
        ],
        [
          "Columbia Street / Quay area",
          "Walk or bus to New West Station, then Expo Line",
          "About 30 to 40 min total",
        ],
        [
          "Queensborough",
          "Drive via Kingsway or SkyTrain from nearby stations",
          "About 20 to 35 min depending on mode",
        ],
        [
          "Driving direct",
          "Kingsway east toward Joyce Street",
          "About 15 to 25 min off-peak + street parking",
        ],
      ],
    },
    {
      type: "h2",
      text: "Landmarks you know on both ends",
    },
    {
      type: "p",
      text: "On the New Westminster side, Columbia Street, the waterfront, and the SkyTrain platform at New Westminster Station are the familiar anchors. On the Joyce Street side, Joyce-Collingwood Station, Kingsway one block north, and the Collingwood neighbourhood shops line the walk to 5530 Joyce.",
    },
    {
      type: "p",
      text: "The studio sits in the kind of East Vancouver strip where people buy groceries and coffee, not tourist postcards. That suits clients who want a session, not a sightseeing detour.",
    },
    {
      type: "h2",
      text: "What New West clients book",
    },
    {
      type: "h3",
      text: "Baby and family portraits",
    },
    {
      type: "p",
      text: "New Westminster families often choose in-studio baby photography because the room is controlled. Warm. Quiet. Breaks for feeding. Siblings can move without a public audience. Sessions follow the baby’s pace rather than a rigid twenty-minute slot.",
    },
    {
      type: "h3",
      text: "Weddings and bridal prep",
    },
    {
      type: "p",
      text: "Wedding coverage is quoted for the full day. New West couples frequently book getting-ready photography, bridal portraits, or hair and makeup trials on Joyce Street before heading to a venue. Michelle documents trial looks so the wedding-day makeup repeats reliably.",
    },
    {
      type: "h3",
      text: "Headshots and personal branding",
    },
    {
      type: "p",
      text: "Commuters who work in New Westminster or downtown but live along the Expo Line book headshots between shifts. Direction is included. The lighting setup is permanent. Most appointments run one to two hours.",
    },
    {
      type: "h3",
      text: "Studio rental",
    },
    {
      type: "p",
      text: "Photographers serving New Westminster clients rent the room at C$60 per hour including tax with a two-hour minimum when they need backdrops and lights without building a home studio. Capacity is up to 20 people.",
    },
    {
      type: "h2",
      text: "Queensborough, Sapperton, and the Quay",
    },
    {
      type: "p",
      text: "New Westminster is several cities in one label. Queensborough families often drive Kingsway east toward Joyce when strollers and car seats make a single vehicle easier than a bus connection. Sapperton and uptown clients know Columbia Street’s traffic patterns and sometimes SkyTrain from New Westminster Station when commuting anyway.",
    },
    {
      type: "p",
      text: "Waterfront couples planning Quay or Fraser River ceremonies book bridal portraits on Joyce Street because the studio is private and unhurried. That is a contrast to busy public spaces along the boardwalk.",
    },
    {
      type: "p",
      text: "Baby photography is especially common from New West parents who want warmth and flexibility without a mall studio chain. Feeding breaks, pacifier pauses, and sibling wrangling are normal here. Michelle follows the baby’s rhythm rather than enforcing a rigid pose list. That pacing is harder in high-volume retail photo environments. It is one reason the Expo Line trip westbound feels worth it.",
    },
    {
      type: "h2",
      text: "SkyTrain vs driving from New Westminster",
    },
    {
      type: "p",
      text: "SkyTrain is predictable. Westbound Expo Line to Joyce-Collingwood, exit, walk south on Joyce about seven to ten minutes. Driving via Kingsway off-peak is often fifteen to twenty-five minutes with straightforward parking. Two free on-site spots when available, plus street parking on Joyce.",
    },
    {
      type: "p",
      text: "Rush hour can stretch either mode. Pad time or choose the train when Columbia Street traffic is heavy. We will not promise five minutes away. We will tell you what other New West clients actually plan.",
    },
    {
      type: "h2",
      text: "Checklist for New Westminster clients",
    },
    {
      type: "ul",
      items: [
        "Confirm the address: 5530 Joyce Street, Vancouver BC V5R 4H6, not New Westminster",
        "From New Westminster Station: Expo Line westbound to Joyce-Collingwood, walk about 650 m",
        "For baby sessions, schedule flex time around feeds and naps",
        "For weddings, specify studio portraits vs full-day coverage",
        "If driving, mention whether you need an on-site parking spot",
        "Contact (778) 908-4160 or hello@ninhstudio.ca. Appointments only",
      ],
    },
    {
      type: "h2",
      text: "Hair and makeup without a second stop",
    },
    {
      type: "p",
      text: "New Westminster brides sometimes book hair and makeup trials on Joyce Street even when the ceremony is on the Fraser or in Burnaby. Michelle keeps trial notes and reference photos so wedding-day timing stays predictable.",
    },
    {
      type: "p",
      text: "Session glam for portraits or maternity uses the same vanity. Useful when you SkyTrain from New West Station after work and want one appointment instead of salon plus studio across the city. If you already have a wedding photographer, hair and makeup alone is a common booking from our New Westminster clients.",
    },
    {
      type: "h2",
      text: "Hours and booking from the Fraser side",
    },
    {
      type: "p",
      text: "Studio hours are Tuesday through Saturday 9:30 AM to 5:30 PM and Sunday 10:00 AM to 5:30 PM. Monday is closed. Appointments only. Walk-ins are not possible because Michelle may be mid-session.",
    },
    {
      type: "p",
      text: "New Westminster clients often book Sunday baby sessions or weekday headshots when SkyTrain frequency is good and Columbia Street traffic is lighter. Wedding inquiries should mention date, venue, and whether you need full coverage or studio time only so the quote matches the job.",
    },
    {
      type: "h2",
      text: "One studio, straight line on the Expo Line",
    },
    {
      type: "p",
      text: "Ninh Studio serves New Westminster clients without pretending to be there. The relationship is the train line, the walk, and the work. Portraits, weddings, babies, rental. Done calmly in a 597-square-foot room on Joyce Street.",
    },
    {
      type: "p",
      text: "If you live along the Fraser or commute through New Westminster Station, Joyce-Collingwood is a few stops west. Michelle will meet you at the door, not at a fictional Columbia Street suite.",
    },
  ],
  faqs: [
    {
      id: "nw-location",
      question: "Is the studio in New Westminster?",
      answer:
        "No. Ninh Studio is at 5530 Joyce Street, Vancouver BC V5R 4H6. New Westminster clients take the Expo Line westbound to Joyce-Collingwood and walk about 650 metres.",
    },
    {
      id: "nw-time",
      question: "How long from New Westminster Station?",
      answer:
        "Typically twenty-five to thirty-five minutes door-to-door: Expo Line westbound to Joyce-Collingwood plus a 7 to 10 minute walk on Joyce Street.",
    },
    {
      id: "nw-fake",
      question: "Do you have a New Westminster office?",
      answer:
        "No. One address only on Joyce Street. We do not list Columbia Street locations we do not occupy.",
    },
    {
      id: "nw-baby",
      question: "Do you photograph New Westminster babies?",
      answer:
        "Yes. Baby photography sessions are in-studio, paced around your baby’s schedule, with a warm private room.",
    },
    {
      id: "nw-wedding",
      question: "Do you cover New Westminster weddings?",
      answer:
        "Yes. Wedding photography is quoted for the day. Couples often book getting-ready or bridal portraits at Joyce Street before their ceremony.",
    },
    {
      id: "nw-parking",
      question: "Is parking available if I drive from New West?",
      answer:
        "Two free on-site spots when available, plus street parking on Joyce and nearby side streets. Usually easier than downtown.",
    },
    {
      id: "nw-rental",
      question: "Can I rent the studio by the hour?",
      answer:
        "Yes. C$60/hour including tax, two-hour minimum, lights and backdrops included.",
    },
    {
      id: "nw-hmu",
      question: "Is hair and makeup available?",
      answer:
        "Yes. Bridal trials and session hair & makeup happen on Joyce Street, with or without photography.",
    },
    {
      id: "nw-hours",
      question: "What are your hours?",
      answer:
        "Tuesday to Saturday 9:30 AM to 5:30 PM, Sunday 10:00 AM to 5:30 PM. Closed Monday. Appointments only.",
    },
    {
      id: "nw-book",
      question: "How do New Westminster clients book?",
      answer:
        "Call (778) 908-4160, email hello@ninhstudio.ca, or submit the homepage inquiry form.",
    },
  ],
};
