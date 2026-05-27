import React from "react";
import { Camera, Users, Video, Smile, Store, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const services = [
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Headshots & LinkedIn",
    desc: "Look the part. Whether it's LinkedIn, a speaking bio, or a new business card, we'll get you a photo you're actually proud to use.",
  },
  {
    icon: <Camera className="w-6 h-6 text-accent" />,
    title: "Self-Portraits",
    desc: "Book the studio solo, bring a friend, or work with our photographer. Your session, your vision, we just make the space and light perfect.",
  },
  {
    icon: <Video className="w-6 h-6 text-accent" />,
    title: "Weddings & Events",
    desc: "On-site coverage for weddings, engagements, and milestone events. We travel to you and capture every moment that matters.",
  },
  {
    icon: <Smile className="w-6 h-6 text-accent" />,
    title: "Portraits & Families",
    desc: "Maternity, birthdays, couple sessions, family milestones. Real moments, beautifully lit, beautifully kept.",
  },
  {
    icon: <Store className="w-6 h-6 text-accent" />,
    title: "Studio Rental",
    desc: "Book the space for your own shoot. 597 sq ft, 2 lights, customizable backdrops, makeup station, from $60/hr.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    title: "Makeup Touch-Ups",
    desc: "Light makeup and touch-up services available to make sure you feel as good as you look before the camera rolls.",
  },
];

export function ServicesSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="sessions" className="py-[60px] md:py-[100px] bg-secondary w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent uppercase tracking-widest text-xs font-medium mb-4 block">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Every Kind of Photo. One Studio.
          </h2>
          <p className="text-secondary-foreground text-lg">
            From LinkedIn updates to wedding days, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-card p-8 rounded-xl border border-border shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${isIntersecting ? 100 + i * 100 : 0}ms` }}
            >
              <div className="bg-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
