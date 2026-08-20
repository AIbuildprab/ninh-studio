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
import { homepageFaqs } from "@/lib/faq";
import { site } from "@/lib/site";

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
            {homepageFaqs.map((item) => (
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
