export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const homepageFaqs: FaqItem[] = [
  {
    id: "session-length",
    question: "How long is a photography session?",
    answer:
      "It depends on what you book — a portrait might be an hour or two, weddings run the full day, and hair & makeup blocks are timed around your schedule. When you inquire, we'll suggest a length that fits your session type so nothing feels rushed.",
  },
  {
    id: "session-included",
    question: "What's included in a session?",
    answer:
      "Every session includes full use of the studio and professional lighting. Hair and makeup are available in-house with Michelle. Specific deliverables — number of edited photos, turnaround time — are quoted when you book, since weddings, portraits, and commercial work all differ.",
  },
  {
    id: "camera-shy",
    question: "I'm not comfortable in front of the camera. Is that okay?",
    answer:
      "Absolutely. A lot of clients say the same thing. Michelle works at your pace — gentle direction, no pressure, and plenty of time to warm up. The goal is photos that actually look like you, not stiff poses.",
  },
  {
    id: "hmu-trial",
    question: "How do bridal hair & makeup trials work?",
    answer:
      "Trials happen at the studio before your wedding day. Michelle takes notes and reference photos during the trial so the wedding-day look matches exactly. Many Vancouver photographers send their clients here for pre-wedding makeup — you're in good company.",
  },
  {
    id: "hmu-booking",
    question: "How far in advance should I book hair & makeup or a wedding?",
    answer:
      "For weddings and bridal trials, book as early as you can — popular dates fill up, especially spring through fall. Portraits and smaller sessions usually have more flexibility. Send an inquiry with your date and we'll let you know what's open.",
  },
  {
    id: "rental-minimum",
    question: "What's the studio rental minimum and what's included?",
    answer:
      "Studio rental is C$60/hour with a 2-hour minimum. Prices include sales tax. Two professional lights, customizable backdrops, natural light, A/C, Wi-Fi, a makeup station, and ring light are all included. Up to 20 people.",
  },
  {
    id: "rental-cancel",
    question: "What's the cancellation policy for studio rentals?",
    answer:
      "7+ days before: full refund. 7 days to 24 hrs: 50% refund. Under 24 hrs: non-refundable.",
  },
  {
    id: "getting-here",
    question: "How do I get to the studio? Is there parking?",
    answer:
      "We're at 5530 Joyce Street in East Vancouver — about a 650 m walk from Joyce-Collingwood SkyTrain. Two free on-site parking spaces plus free street parking nearby. The studio is by appointment only.",
  },
  {
    id: "hours",
    question: "What are your hours?",
    answer:
      "Monday: Closed. Tuesday–Saturday: 9:30 AM – 5:30 PM. Sunday: 10:00 AM – 5:30 PM.",
  },
];
