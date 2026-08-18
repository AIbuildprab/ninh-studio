"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";

const faqItems = [
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
    answer: `Studio rental is ${site.rental.price}${site.rental.unit} with a ${site.rental.minimum.toLowerCase()}. ${site.rental.taxNote} Two professional lights, customizable backdrops, natural light, A/C, Wi-Fi, a makeup station, and ring light are all included. ${site.rental.capacity}.`,
  },
  {
    id: "rental-cancel",
    question: "What's the cancellation policy for studio rentals?",
    answer: site.rental.cancellation.join(" "),
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
    answer: `${site.hours.map((row) => `${row.day}: ${row.hours}`).join(". ")}.`,
  },
];

export function FaqSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="faq" className="py-[60px] md:py-[100px] bg-secondary w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow className="text-center">FAQ</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
            Common questions.
          </h2>
          <p className="text-secondary-foreground text-lg">
            Sessions, hair &amp; makeup, studio rental, and getting here — if yours isn&apos;t listed, just ask.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="w-full bg-card rounded-sm border border-border px-6 md:px-8 shadow-sm">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline hover:text-accent py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-sm text-secondary-foreground mt-8">
            Still have a question?{" "}
            <a href={site.links.contact} className="text-accent font-medium hover:underline">
              Send us a message
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="text-accent font-medium hover:underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
