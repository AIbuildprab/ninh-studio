import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function SocialProofBar() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const end = 600;
    const duration = 1500;
    const incrementTime = (duration / end) * 5;

    const timer = setInterval(() => {
      start += 5;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isIntersecting]);

  return (
    <section
      ref={ref}
      className={`w-full bg-[#1A1A1A] text-white py-12 transition-all duration-700 transform ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <div className="flex gap-1 text-accent mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className="font-medium text-sm tracking-wide text-white/90">5-Star Rated on Google</span>
        </div>
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <span className="font-display font-bold text-3xl mb-1">{count}+</span>
          <span className="font-medium text-sm tracking-wide text-white/90">Sessions Captured</span>
        </div>
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <span className="font-medium text-sm tracking-wide text-white/90 leading-relaxed">
            Weddings, Headshots,<br />Portraits, Events
          </span>
        </div>
        <div className="pt-4 md:pt-0 flex flex-col items-center justify-center">
          <span className="font-medium text-sm tracking-wide text-white/90 leading-relaxed">
            5530 Joyce St,<br />East Vancouver
          </span>
        </div>
      </div>
    </section>
  );
}
