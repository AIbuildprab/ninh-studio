import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const servicesHub: SeoArticle = {
  slug: "services",
  kind: "hub",
  title: "Photography services in Vancouver | Ninh Studio Joyce Street",
  description:
    "Portrait, wedding, hair & makeup, baby, boudoir, commercial, events, and photo studio rental at Ninh Studio on Joyce Street in East Vancouver.",
  h1: "Photography services Ninh Studio offers in Vancouver",
  eyebrow: "Sessions & the studio",
  image: {
    src: site.images.studioFull,
    alt: "Ninh Studio photography studio interior on Joyce Street, East Vancouver",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ],
  serveAreas: [
    { label: "Joyce-Collingwood", href: "/areas-we-serve/joyce-collingwood" },
    { label: "East Vancouver", href: "/areas-we-serve/east-vancouver" },
    { label: "Burnaby", href: "/areas-we-serve/burnaby" },
    { label: "Downtown Vancouver", href: "/areas-we-serve/downtown-vancouver" },
    { label: "New Westminster", href: "/areas-we-serve/new-westminster" },
  ],
  body: [
    {
      type: "p",
      text: "People searching for photography services in Vancouver usually need two things. Someone they trust in front of the camera. A room that will not fight them.",
    },
    {
      type: "p",
      text: "This page is the map of what Ninh Studio does at 5530 Joyce Street. Portraits, weddings, hair and makeup, baby and boudoir sessions, commercial and event work, and hourly studio rental. Pick a path without guessing from a homepage carousel.",
    },
    {
      type: "p",
      text: "Michelle opened the studio in South Renfrew-Collingwood because she wanted sessions to feel slower. Cameras make a lot of people nervous. Hair and makeup happen in the same room. The Expo Line stop at Joyce-Collingwood is about a 650 metre walk. That matters if you are coming from [Burnaby](/areas-we-serve/burnaby), [downtown](/areas-we-serve/downtown-vancouver), or [New Westminster](/areas-we-serve/new-westminster) after work.",
    },
    {
      type: "h2",
      text: "What you can book here",
    },
    {
      type: "p",
      text: "Think of Ninh Studio as one address with a few distinct jobs. Some clients want photographs. Some want hair and makeup. Some already have a photographer and only need the room. All of that is legitimate. The pages below treat each job as its own topic.",
    },
    {
      type: "table",
      caption: "How the work usually splits",
      headers: ["If you need", "Start here", "Typical shape"],
      rows: [
        [
          "Photos of you or your family",
          "[Portrait photography](/services/portrait-photography)",
          "1 to 2 hours in studio, direction included",
        ],
        [
          "A wedding day",
          "[Wedding photography](/services/wedding-photography)",
          "Quoted for the day, trial makeup optional",
        ],
        [
          "Hair and makeup only",
          "[Hair & makeup](/services/hair-and-makeup)",
          "Bridal trials and session glam on Joyce Street",
        ],
        [
          "The room itself",
          "[Photo studio rental](/services/studio-rental)",
          "C$60/hour, 2-hour minimum, lights included",
        ],
      ],
    },
    {
      type: "h2",
      text: "Core sessions",
    },
    {
      type: "h3",
      text: "Portraits and headshots",
    },
    {
      type: "p",
      text: "LinkedIn, personal branding, family frames, and the kind of portrait you hang in a hallway all live under [portrait photography in Vancouver](/services/portrait-photography). You do not need a pose library. Michelle directs. Natural light and two professional lights are already in the room, so you are not paying someone to invent a setup from a backpack.",
    },
    {
      type: "h3",
      text: "Weddings",
    },
    {
      type: "p",
      text: "[Wedding photography](/services/wedding-photography) is quoted for the day. Getting-ready, ceremony, and last dance do not fit an hourly studio block. Plenty of couples still use Joyce Street for getting ready, bridal portraits, or a quiet hour before guests arrive. If you already have a photographer, [bridal hair and makeup](/services/hair-and-makeup) is often the piece you book here instead.",
    },
    {
      type: "h3",
      text: "Hair and makeup",
    },
    {
      type: "p",
      text: "Michelle does bridal trials with notes and reference photos so the wedding-day look can be repeated. Vancouver photographers send clients here for pre-wedding makeup because the studio is easy to find and not a hotel bathroom. Session glam for portraits and boudoir uses the same station.",
    },
    {
      type: "h3",
      text: "Renting the studio",
    },
    {
      type: "p",
      text: "The space is 597 square feet with air conditioning, Wi-Fi, customizable backdrops, a makeup station, a ring light, and room for up to 20 people. [Studio rental in Vancouver](/services/studio-rental) is C$60 per hour including tax, two-hour minimum. Photographers who live in [Joyce-Collingwood](/areas-we-serve/joyce-collingwood) use it as a weekday workroom. Clients who do not want to host a shoot at home use it because parking is simple and the SkyTrain is close.",
    },
    {
      type: "h2",
      text: "More specific work",
    },
    {
      type: "p",
      text: "Not every search is “photographer near me.” People look for [baby photography](/services/baby-photography) when a newborn will not tolerate a mall backdrop. They look for [boudoir photography](/services/boudoir-photography) when they want a locked door and no audience. Brands look for [commercial photography](/services/commercial-photography) when a product or team has to look consistent. Hosts look for [event photography](/services/event-photography) when a birthday or launch needs coverage that leaves Joyce Street.",
    },
    {
      type: "ul",
      items: [
        "[Baby photography](/services/baby-photography): newborns and milestones at the baby’s pace",
        "[Boudoir photography](/services/boudoir-photography): private, in-studio only",
        "[Commercial photography](/services/commercial-photography): products, teams, brand stills",
        "[Event photography](/services/event-photography): parties and on-location coverage",
      ],
    },
    {
      type: "h2",
      text: "The local scene",
    },
    {
      type: "p",
      text: "East Vancouver photography is crowded with people who will meet you in a park if it is not raining. Indoor light still matters here. Joyce Street sits between Kingsway traffic and residential side streets. You can park on site (two spots) or on the street. You can also walk from Joyce-Collingwood Station instead of circling for a stall downtown.",
    },
    {
      type: "p",
      text: "If you live in [East Vancouver](/areas-we-serve/east-vancouver), this is a neighbourhood studio, not a destination warehouse in an industrial park. If you do not, the Expo Line is why the location works. One train, a short walk, no Gastown loading-zone scramble.",
    },
    {
      type: "h2",
      text: "How to choose without overthinking it",
    },
    {
      type: "ol",
      items: [
        "If you need photographs of people in a controlled room, start with portraits or baby or boudoir.",
        "If you need a wedding day documented, start with wedding photography and add hair & makeup if you want both in one relationship.",
        "If you already have a photographer, rent the studio or book hair & makeup only.",
        "If you need a brand or a party covered, use commercial or events. Those jobs often leave Joyce Street.",
        "If you are unsure, send the inquiry form anyway. Michelle would rather quote the right shape than sell you the wrong one.",
      ],
    },
    {
      type: "h2",
      text: "Practical checklist before you inquire",
    },
    {
      type: "ul",
      items: [
        "Date range (or “weekday after 10 AM” is fine)",
        "How many people will be in the room",
        "Whether you need hair and makeup",
        "Whether you are hiring Ninh Studio to photograph, or only the space",
        "Any SkyTrain or parking constraint (the 650 m walk is real)",
      ],
    },
    {
      type: "h2",
      text: "What this page is not",
    },
    {
      type: "p",
      text: "It is not a fake menu of 40 cities. Ninh Studio is one studio and one phone number, (778) 908-4160, plus a set of neighbourhoods people actually travel from. Hours are Tuesday to Saturday 9:30 to 5:30 and Sunday 10:00 to 5:30. Monday is closed. Appointments only.",
    },
  ],
  faqs: [
    {
      id: "all-services",
      question: "Do you photograph and also rent the studio?",
      answer:
        "Yes. You can book Michelle for a session, rent the room on Tagvenue, or combine hair & makeup with either. Say which you need when you inquire so the quote is not a mash-up.",
    },
    {
      id: "price",
      question: "What does a session cost?",
      answer:
        "Studio rental is posted at C$60/hour with a two-hour minimum. Photography, weddings, and hair & makeup are quoted for the work, because a headshot hour and a wedding day are not the same job.",
    },
    {
      id: "parking-hub",
      question: "Is parking easier than downtown studios?",
      answer:
        "Usually. Two free spots on site and free street parking nearby. The SkyTrain walk from Joyce-Collingwood is about 650 metres if you would rather not drive.",
    },
    {
      id: "same-day-hmu",
      question: "Can hair and makeup happen the same day as portraits?",
      answer:
        "Yes. That is one of the reasons the makeup station is in the studio instead of a separate salon appointment across town.",
    },
    {
      id: "groups",
      question: "How many people can be in the studio?",
      answer: "Up to 20. For portraits we usually keep the set smaller so direction stays calm.",
    },
    {
      id: "kids",
      question: "Do you photograph children and newborns?",
      answer:
        "Yes. See the baby photography page. Sessions follow the baby’s schedule, not a rigid pose list.",
    },
    {
      id: "location",
      question: "Do you only shoot in the studio?",
      answer:
        "Portraits, boudoir, and most baby work happen in-studio. Weddings, events, and some commercial jobs go on location.",
    },
    {
      id: "book",
      question: "How do I book?",
      answer:
        "Use the contact form on the homepage, email hello@ninhstudio.ca, or call (778) 908-4160. Rentals can also be booked on Tagvenue.",
    },
  ],
};
