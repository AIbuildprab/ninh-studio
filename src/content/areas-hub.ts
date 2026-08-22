import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const areasHub: SeoArticle = {
  slug: "areas-we-serve",
  kind: "hub",
  title: "Areas Ninh Studio serves from Joyce Street | Vancouver photography studio",
  description:
    "One Joyce Street studio in East Vancouver. Portraits, hair & makeup, and photo studio rental for Joyce-Collingwood, Burnaby, downtown, and New Westminster.",
  h1: "Areas Ninh Studio serves from Joyce Street",
  eyebrow: "One studio, many routes in",
  image: {
    src: site.images.studioFull,
    alt: "Ninh Studio interior on Joyce Street in South Renfrew-Collingwood, East Vancouver",
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Areas we serve", path: "/areas-we-serve" },
  ],
  serveAreas: [
    { label: "Joyce-Collingwood", href: "/areas-we-serve/joyce-collingwood" },
    { label: "East Vancouver", href: "/areas-we-serve/east-vancouver" },
    { label: "Burnaby", href: "/areas-we-serve/burnaby" },
    { label: "Downtown Vancouver", href: "/areas-we-serve/downtown-vancouver" },
    { label: "New Westminster", href: "/areas-we-serve/new-westminster" },
  ],
  offerServices: [
    { label: "All services", href: "/services" },
    { label: "Portrait photography", href: "/services/portrait-photography" },
    { label: "Photo studio rental", href: "/services/studio-rental" },
  ],
  body: [
    {
      type: "p",
      text: "Ninh Studio is a photography studio at 5530 Joyce Street in South Renfrew-Collingwood. That is the address.",
    },
    {
      type: "p",
      text: "The neighbourhoods on this page are where clients travel from. They are not extra locations. Michelle runs one room.",
    },
    {
      type: "p",
      text: "Portraits, weddings, hair and makeup, baby and boudoir work, commercial shoots, and hourly studio rental happen here. On-location work is for jobs that need to leave Joyce Street.",
    },
    {
      type: "p",
      text: "Vancouver is a large search. Someone in Metrotown cares about the Expo Line. Someone downtown cares about parking. Someone in Collingwood cares about walking distance. The five area pages below spell out those routes. There is no second studio in Burnaby and no branch downtown. You come to Joyce Street, or Michelle meets you on location for weddings and events.",
    },
    {
      type: "h2",
      text: "How people usually get here",
    },
    {
      type: "p",
      text: "The studio sits between Kingsway and residential side streets east of Joyce-Collingwood Station. Two parking spots are on site. Street parking nearby is typically free. The SkyTrain walk is about 650 metres. Use the table as a quick orientation. Each linked area page goes deeper on landmarks and timing.",
    },
    {
      type: "table",
      caption: "Area and how people typically arrive at 5530 Joyce Street",
      headers: ["Area", "Typical route", "Why it works"],
      rows: [
        [
          "[Joyce-Collingwood](/areas-we-serve/joyce-collingwood)",
          "Walk from Joyce-Collingwood Station (~650 m) or drive from Collingwood side streets",
          "The studio is in the neighbourhood. No train required if you live nearby.",
        ],
        [
          "[East Vancouver](/areas-we-serve/east-vancouver)",
          "Drive via Kingsway or Joyce Street; bus routes along Kingsway",
          "South Renfrew-Collingwood is East Van. Sessions stay local for many clients.",
        ],
        [
          "[Burnaby](/areas-we-serve/burnaby)",
          "Expo Line westbound to Joyce-Collingwood, or drive from Metrotown / Boundary",
          "One SkyTrain line and a short walk. There is no Burnaby studio address.",
        ],
        [
          "[Downtown Vancouver](/areas-we-serve/downtown-vancouver)",
          "Expo Line from Waterfront, Burrard, or City Centre to Joyce-Collingwood",
          "Skip downtown studio parking. Train plus walk is often faster than circling.",
        ],
        [
          "[New Westminster](/areas-we-serve/new-westminster)",
          "Expo Line westbound to Joyce-Collingwood, then walk south on Joyce",
          "Direct line from New Westminster Station. No transfer for most trips.",
        ],
      ],
    },
    {
      type: "h2",
      text: "Joyce-Collingwood, the studio’s home stop",
    },
    {
      type: "p",
      text: "For most of Collingwood, the studio is a neighbourhood errand, not a cross-city trip. Joyce Street runs north to south through houses, small shops, and quiet side streets. Portrait clients often relax once they step inside.",
    },
    {
      type: "p",
      text: "If you live within walking distance of the station, you already know the path. Exit at Joyce-Collingwood, walk south, and you are at the door in about eight to ten minutes at an ordinary pace.",
    },
    {
      type: "p",
      text: "Local clients book [portrait photography](/services/portrait-photography) for headshots and family frames, [hair and makeup](/services/hair-and-makeup) before a wedding elsewhere, and [studio rental](/services/studio-rental) when they want a controlled room without hosting a shoot at home. Photographers who live in the area use the space as a weekday workroom. Backdrops, lights, and air conditioning are already set up. Read the full [Joyce-Collingwood](/areas-we-serve/joyce-collingwood) page for station exits, parking habits, and what 650 metres feels like with a garment bag.",
    },
    {
      type: "h2",
      text: "East Vancouver, one neighbourhood studio",
    },
    {
      type: "p",
      text: "East Vancouver is a label on a map and a lived place at the same time. Renfrew-Collingwood, Hastings Sunrise, and Grandview-Woodland sit in different corners. The practical question is usually the same. Is there a photography studio that feels like a room someone cares about, not a white box in an industrial park?",
    },
    {
      type: "p",
      text: "Joyce Street answers that for a large slice of East Van. The address is residential in character. The room inside is a proper shooting space.",
    },
    {
      type: "p",
      text: "Clients from farther east often drive. Bus plus walk can beat two transfers. Clients from the west side of East Van sometimes take the Expo Line one stop past Commercial-Broadway. Parking at Joyce is simpler than near Main Street on a Saturday.",
    },
    {
      type: "p",
      text: "Michelle does not maintain a second East Van location. Every in-studio session listed on [services](/services) happens at 5530 Joyce Street. The [East Vancouver](/areas-we-serve/east-vancouver) page covers Kingsway access, nearby landmarks, and how far East Van photography searches should expect to travel.",
    },
    {
      type: "h2",
      text: "Burnaby, you travel to Joyce Street",
    },
    {
      type: "p",
      text: "A search for “photography studio Burnaby” often assumes a Metrotown address or a unit near Brentwood. Ninh Studio does not operate there.",
    },
    {
      type: "p",
      text: "Burnaby clients take the Expo Line west to Joyce-Collingwood, then walk south. From Metrotown that is typically well under half an hour on the train, plus the short walk, depending on when you board. Driving from central Burnaby via Kingsway or Boundary is common when you are hauling wardrobe, strollers, or gear.",
    },
    {
      type: "p",
      text: "Bridal hair trials and portrait sessions go better when the address is clear. You are not booking a suite in Burnaby and discovering the shoot is in Vancouver. You are choosing a Joyce Street studio because the room, the makeup station, and the parking are worth the trip.",
    },
    {
      type: "p",
      text: "Wedding coverage can still happen in Burnaby on the day. Michelle travels for weddings and events. The studio itself stays put. See [Burnaby](/areas-we-serve/burnaby) for Metrotown timing, driving notes, and what to expect when your search started in Burnaby and your session is in Collingwood.",
    },
    {
      type: "h2",
      text: "Downtown Vancouver, SkyTrain instead of studio parking",
    },
    {
      type: "p",
      text: "Downtown Vancouver has plenty of photography options. Almost none of them come with easy parking. That is why downtown clients look east on the Expo Line.",
    },
    {
      type: "p",
      text: "From Waterfront, Burrard, or City Centre, you board eastbound Expo service toward Joyce-Collingwood. One line. No transfer for the standard trip. Total time is often competitive with driving once you account for finding a stall, paying for it, and walking from a parkade to a Gastown or Yaletown studio door.",
    },
    {
      type: "p",
      text: "Ninh Studio is not a downtown location and does not claim to be. There is no second door near Robson Street. You trade a short train ride and a 650-metre walk for a session that does not start with circling the block.",
    },
    {
      type: "p",
      text: "Corporate headshot clients, boudoir clients who want privacy away from office towers, and renters who live downtown but do not want to shoot in their apartment use this pattern regularly. The [downtown Vancouver](/areas-we-serve/downtown-vancouver) page walks through station choices, evening appointments, and why “near downtown” in search results should mean transit-friendly, not literally downtown.",
    },
    {
      type: "h2",
      text: "New Westminster, westbound on the Expo Line",
    },
    {
      type: "p",
      text: "New Westminster sits on the same Expo Line. Joyce Street is easier to reach from here than studios that need a bus from Columbia Station or a long drive through congested corridors. Westbound service from New Westminster Station toward Joyce-Collingwood is direct for most trips.",
    },
    {
      type: "p",
      text: "After you exit, the walk south on Joyce is the same whether you started in Burnaby or downtown. The studio door is the constant.",
    },
    {
      type: "p",
      text: "There is no New Westminster studio address. Clients from the Royal City travel to Vancouver for in-studio portraits, baby milestones, boudoir, hair and makeup, and rental blocks. Michelle also travels outward for weddings and events when the job is on location in New West.",
    },
    {
      type: "p",
      text: "If your search began with “photography studio New Westminster,” the [New Westminster](/areas-we-serve/new-westminster) page explains the train timing, the driving alternative along Kingsway, and how to plan a session so you are not rushed from the platform to the makeup chair.",
    },
    {
      type: "h2",
      text: "What people book after they arrive",
    },
    {
      type: "p",
      text: "Geography gets you to the door. The work decides which page to read next. Most visitors from outside Collingwood still choose the same core services as neighbours. They just planned transit or parking first.",
    },
    {
      type: "ul",
      items: [
        "[Portrait photography](/services/portrait-photography): headshots, branding, and family portraits with direction included",
        "[Photo studio rental](/services/studio-rental): C$60/hour, two-hour minimum, lights and backdrops in the room",
        "[All photography services](/services): weddings, hair & makeup, baby, boudoir, commercial, and events",
      ],
    },
    {
      type: "p",
      text: "Studio rental is popular with photographers who live in Burnaby or downtown and do not want to maintain their own space. Portrait and hair & makeup combinations are popular with wedding clients who want trials and stills in one relationship. None of that requires a second address. It requires a clear plan for how you arrive at Joyce Street on the day.",
    },
    {
      type: "h2",
      text: "Practical checklist before you book",
    },
    {
      type: "ul",
      items: [
        "Confirm you are booking 5530 Joyce Street, not a satellite studio in another city",
        "Choose SkyTrain or drive based on time of day (Expo Line is often easiest from downtown, Burnaby, and New West)",
        "Budget ten minutes for the walk from Joyce-Collingwood Station with bags or heels",
        "Note whether you need hair & makeup in the same visit as portraits",
        "Say if you are hiring Michelle to photograph or only renting the room",
        "Share your date range. Tuesday to Saturday 9:30 to 5:30, Sunday 10:00 to 5:30, Monday closed",
        "Call (778) 908-4160 or email hello@ninhstudio.ca if transit or parking is a hard constraint",
      ],
    },
    {
      type: "h2",
      text: "One phone number, one front door",
    },
    {
      type: "p",
      text: "Area pages on local business sites sometimes sprawl into a dozen cities to catch searches. Ninh Studio keeps five: Joyce-Collingwood, East Vancouver, Burnaby, downtown Vancouver, and New Westminster. Those are the corridors Michelle actually sees on the calendar.",
    },
    {
      type: "p",
      text: "Every in-studio session happens at 5530 Joyce Street, Vancouver, BC V5R 4H6. Appointments only. When you are ready, pick your area below for route detail, or start with [services](/services) if you already know what you need.",
    },
  ],
  faqs: [
    {
      id: "multiple-locations",
      question: "Do you have studios in Burnaby, downtown, or New Westminster?",
      answer:
        "No. Ninh Studio is one location at 5530 Joyce Street in East Vancouver. Clients from Burnaby, downtown, and New Westminster travel here, usually via Expo Line to Joyce-Collingwood, or book on-location coverage for weddings and events.",
    },
    {
      id: "skytrain-walk",
      question: "How far is Joyce-Collingwood Station from the studio?",
      answer:
        "About 650 metres. That is roughly an eight- to ten-minute walk south on Joyce Street. The walk is the same whether you arrive from Burnaby, downtown, or New Westminster on the Expo Line.",
    },
    {
      id: "parking-areas",
      question: "Is parking easier here than downtown?",
      answer:
        "For most people, yes. There are two free spots on site and free street parking nearby. Downtown clients often prefer SkyTrain plus the short walk instead of downtown parkades.",
    },
    {
      id: "services-from-outside",
      question: "What do out-of-neighbourhood clients book most often?",
      answer:
        "Portraits, bridal hair and makeup trials, boudoir, baby milestones, and studio rental blocks. The room, makeup station, and predictable parking are why the trip is worth it.",
    },
    {
      id: "new-west-train",
      question: "Can I take SkyTrain from New Westminster?",
      answer:
        "Yes. Expo Line westbound from New Westminster Station to Joyce-Collingwood is direct for most trips, then walk south to 5530 Joyce Street.",
    },
    {
      id: "on-location",
      question: "Do you ever shoot in my neighbourhood instead of at Joyce Street?",
      answer:
        "In-studio work stays at Joyce Street. Weddings, events, and some commercial jobs happen on location. Say where you need coverage when you inquire.",
    },
    {
      id: "hours-areas",
      question: "What are your hours?",
      answer:
        "Tuesday to Saturday 9:30 AM to 5:30 PM, Sunday 10:00 AM to 5:30 PM. Monday is closed. Appointments only. Use the contact form, email hello@ninhstudio.ca, or call (778) 908-4160.",
    },
    {
      id: "book-areas",
      question: "How do I book from outside East Vancouver?",
      answer:
        "Same as any client: contact form, email, or phone. Mention your area and whether you are taking SkyTrain so Michelle can confirm timing. Studio rental can also be booked on Tagvenue.",
    },
  ],
};
