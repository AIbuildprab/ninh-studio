import type { SeoArticle } from "@/lib/content";
import { site } from "@/lib/site";

export const babyPhotography: SeoArticle = {
  slug: "baby-photography",
  kind: "service",
  title: "Baby photography in Vancouver | Ninh Studio Joyce Street",
  description:
    "Newborn and milestone baby photography at Ninh Studio on Joyce Street in East Vancouver. Warm, patient sessions with Michelle — 650 m from Joyce-Collingwood SkyTrain.",
  h1: "Baby photography in Vancouver at Ninh Studio",
  eyebrow: "Newborns & milestones",
  image: {
    src: site.serviceImages.baby.src,
    alt: site.serviceImages.baby.alt,
    objectPosition: site.serviceImages.baby.objectPosition,
  },
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Baby Photography", path: "/services/baby-photography" },
  ],
  serveAreas: [
    { label: "Joyce-Collingwood", href: "/areas-we-serve/joyce-collingwood" },
    { label: "East Vancouver", href: "/areas-we-serve/east-vancouver" },
    { label: "Burnaby", href: "/areas-we-serve/burnaby" },
    { label: "New Westminster", href: "/areas-we-serve/new-westminster" },
  ],
  body: [
    {
      type: "p",
      text: "Baby photography is one of those searches people run at odd hours — when the newborn finally sleeps on your chest and you realize you have no decent photos that are not a phone flash in a dark bedroom. Ninh Studio on Joyce Street exists for that moment, and for the ones that follow: first smiles, sitting up, cake smashes, and the quiet in-between when you still cannot believe they fit in your hands.",
    },
    {
      type: "p",
      text: "Michelle runs the studio in South Renfrew-Collingwood. Sessions follow the baby, not a rigid pose chart from a mall kiosk. The room is 597 square feet, air-conditioned, with natural light and two professional lights already set up. Parents from [Joyce-Collingwood](/areas-we-serve/joyce-collingwood), [East Vancouver](/areas-we-serve/east-vancouver), [Burnaby](/areas-we-serve/burnaby), and [New Westminster](/areas-we-serve/new-westminster) often walk from the SkyTrain — about 650 metres from Joyce-Collingwood Station — because parking a carseat downtown is its own kind of endurance sport.",
    },
    {
      type: "h2",
      text: "Why a studio instead of a park",
    },
    {
      type: "p",
      text: "Vancouver baby photographers love outdoor light when the weather cooperates. February does not always cooperate. Newborns also do not care about your Pinterest board. They need warmth, feeding breaks, and a calm room where a parent can step out without carrying a stroller up a muddy path. The studio gives you control: temperature, lighting, and time. Michelle can pause when the baby needs a bottle, a nap, or five minutes of being held by Mom before anyone touches a camera again.",
    },
    {
      type: "p",
      text: "That same room hosts [portrait photography](/services/portrait-photography) and [hair and makeup](/services/hair-and-makeup) for parents who want to be in a few frames looking like themselves, not like they have not slept in three weeks. You can book glam and baby time in one appointment if that is what your calendar allows.",
    },
    {
      type: "h2",
      text: "What we photograph",
    },
    {
      type: "table",
      caption: "Baby sessions at a glance",
      headers: ["Stage", "Typical age", "What the hour looks like"],
      rows: [
        [
          "Newborn",
          "Under 14 days (flexible)",
          "Swaddles, detail shots, parent hands — lots of pauses",
        ],
        [
          "Milestone",
          "3–12 months",
          "Sitting, belly time, personality starting to show",
        ],
        [
          "Family with baby",
          "Any age",
          "Parents and siblings in the same calm room",
        ],
        [
          "First birthday",
          "Around 12 months",
          "Simple setups; cake optional — we plan for mess",
        ],
      ],
    },
    {
      type: "p",
      text: "Newborn work is unhurried. Michelle keeps wraps and neutral tones in the studio so you are not hauling props across town. Milestone sessions lean into who your baby is becoming — the grin that appears when Dad makes a ridiculous face, the serious study of a wooden block. Family frames include everyone without forcing a toddler to sit still for forty minutes; we work in short bursts.",
    },
    {
      type: "h2",
      text: "Timing newborn sessions around real life",
    },
    {
      type: "p",
      text: "The best time to email is often before baby arrives. Michelle holds a flexible window around your due date because newborns rarely respect a calendar. Some families book at two weeks; others at ten days. Both work. What matters is that nobody is rushing you out the door when milk is still the priority. Weekday mornings tend to be quieter in the studio than Saturday afternoons — worth mentioning if you have an easygoing infant who naps predictably (a rare and beautiful gift).",
    },
    {
      type: "p",
      text: "Grandparents sometimes join. That is welcome when space allows, but the room is intentionally small so the baby is not overstimulated by a crowd. One or two support people is ideal. If extended family wants photos, consider a separate short family portrait block after the newborn work when everyone can take turns holding the baby instead of leaning into one frame all at once.",
    },
    {
      type: "h2",
      text: "Safety and comfort first",
    },
    {
      type: "p",
      text: "Posed newborn images you see online often use composite techniques or a spotter inches away. Michelle never prioritizes a setup over a supported baby. If a pose does not feel safe or the baby is fussy, we change course. The studio is cleaned between sessions, hands are washed, and anyone with a cold is asked to reschedule. Parents stay in the room; you are not handing your newborn to a stranger behind a curtain.",
    },
    {
      type: "p",
      text: "Feeding, changing, and contact naps on a parent are all normal parts of the block. A “failed” session in industry terms — baby will not settle — is just a human morning. Michelle would rather send you home with a handful of honest images and an invitation to return when nap schedules shift than stress a tiny person for one more angle.",
    },
    {
      type: "h2",
      text: "The Joyce Street room",
    },
    {
      type: "p",
      text: "Ninh Studio sits at 5530 Joyce Street, Vancouver, BC V5R 4H6. Two free parking spots on site plus street parking nearby. The makeup station is there if Mom wants a little help before photos; the ring light and backdrops are included whether you booked a full session or you are a photographer renting the space through [studio rental](/services/studio-rental) for your own baby client. Rental is C$60 per hour with a two-hour minimum, tax included — a path some local photographers use when their home setup is not big enough for a family of four.",
    },
    {
      type: "p",
      text: "Hours are Tuesday through Saturday 9:30 AM to 5:30 PM and Sunday 10:00 AM to 5:30 PM. Monday is closed. Appointments only — email hello@ninhstudio.ca or call (778) 908-4160 so Michelle can suggest a time that fits feeding rhythms rather than a generic slot.",
    },
    {
      type: "h2",
      text: "How this differs from wedding or portrait work",
    },
    {
      type: "p",
      text: "[Wedding photography](/services/wedding-photography) at Ninh Studio often covers getting-ready or bridal portraits, not newborns. Baby sessions are their own quote because the pacing is different. Older children and adults who need headshots are on the portrait page; babies get the slow version. If you are browsing all options, the [services hub](/services) maps everything without mixing keywords into one paragraph.",
    },
    {
      type: "h3",
      text: "What to bring",
    },
    {
      type: "p",
      text: "A fed baby is a happier baby, but not always a sleepy one — we adjust. Bring extra diapers, a favourite soother if you use one, and a change of clothes for parents in case of spit-up. Special outfits are optional; simple often photographs better than costume overload. For milestones, a plain onesie and one “dress-up” outfit is plenty.",
    },
    {
      type: "h2",
      text: "Checklist before your session",
    },
    {
      type: "ul",
      items: [
        "Feed the baby within an hour of arrival; pack backup milk if you bottle-feed",
        "Dress in neutral or soft colours — avoid loud logos on parent clothing",
        "Pack diapers, wipes, soother, and a blanket that smells like home",
        "Plan for 90–120 minutes even if the baby sleeps through half of it",
        "Tell Michelle about reflux, colic, or schedule quirks in your inquiry",
        "Sibling coming? Bring a snack and a quiet toy; we photograph them in turns",
        "SkyTrain: exit Joyce-Collingwood and allow 10 minutes for the 650 m walk",
        "If baby is unwell, reschedule — no fee drama for genuine illness",
      ],
    },
    {
      type: "h2",
      text: "Milestone sessions as your baby grows",
    },
    {
      type: "p",
      text: "The first year moves faster than any camera can capture. Many families return at three, six, nine, or twelve months for milestone sessions — sitting, crawling, standing with help, or destroying a small cake with bare hands. Each visit is shorter in emotional weight than newborn work but just as unscripted. Michelle keeps simple props in the studio so you are not shipping a Pinterest arch across town. The backdrop and light stay familiar; only your child changes.",
    },
    {
      type: "p",
      text: "Some parents combine a milestone session with updated family portraits — siblings grow too, and the older child who hid behind Mom at the newborn session might suddenly ham it up at eight months. That continuity is one reason people choose a neighbourhood studio instead of a different pop-up each time.",
    },
    {
      type: "h2",
      text: "After the session",
    },
    {
      type: "p",
      text: "Deliverables depend on what you book — Michelle quotes edited image counts and turnaround when you inquire, because a newborn gallery and a first-birthday smash are different workloads. You receive digital files sized for print and sharing; print albums can be discussed if you want something for the shelf. The goal is images that still feel like your child when you look back in ten years, not a filter that dates the photo instantly.",
    },
    {
      type: "p",
      text: "If you are comparing studios across Metro Vancouver, ask how each handles meltdowns, feeding, and reschedules. Baby photography should feel like a neighbour helping you document a chapter, not a factory slot. That is the tone Michelle keeps on Joyce Street — warm, patient, and honest about what a baby will and will not do in an hour.",
    },
  ],
  faqs: [
    {
      id: "baby-age",
      question: "How old should my baby be for newborn photos?",
      answer:
        "Ideally under two weeks, when they still curl naturally and sleep in longer stretches. Older newborns are welcome — we simply adapt poses and timing. Milestone sessions happen at three, six, nine, or twelve months, or whenever you feel ready.",
    },
    {
      id: "baby-length",
      question: "How long does a baby session take?",
      answer:
        "Plan for 90–120 minutes. Much of that may be feeding, soothing, or contact naps. Michelle blocks enough time so you never feel rushed when the baby needs a break.",
    },
    {
      id: "baby-parents",
      question: "Can parents and siblings be in the photos?",
      answer:
        "Yes. Family frames are common. Siblings are photographed in short turns so nobody melts down from boredom. Parent hair and makeup can be added if you want to be in images looking refreshed.",
    },
    {
      id: "baby-sick",
      question: "What if my baby is fussy or unwell?",
      answer:
        "We pause, feed, and cuddle as needed. If your baby is genuinely ill, reschedule without awkward fees. Forcing a session helps nobody.",
    },
    {
      id: "baby-studio-safe",
      question: "Is the studio warm enough for a newborn?",
      answer:
        "Yes. The room is heated and air-conditioned as needed. Bring a blanket from home for scent comfort; we keep the space comfortable for bare skin during wraps.",
    },
    {
      id: "baby-price",
      question: "How much does baby photography cost?",
      answer:
        "Sessions are quoted based on the type — newborn, milestone, or family — and how many edited images you need. Studio rental for your own photographer is C$60/hour with a two-hour minimum. Email or call for a quote tied to your date.",
    },
    {
      id: "baby-getting-here",
      question: "How do we get to the studio with a newborn?",
      answer:
        "Drive and use on-site or street parking, or take the Expo Line to Joyce-Collingwood — about a 650 metre walk. Strollers fit through the entrance. Appointments only at 5530 Joyce Street.",
    },
    {
      id: "baby-book",
      question: "How far in advance should we book?",
      answer:
        "For newborns, contact while you are still pregnant and hold a flexible window around your due date. Milestone dates fill around weekends; weekdays often have more room. Tuesday–Saturday 9:30–5:30, Sunday 10–5:30.",
    },
  ],
};
