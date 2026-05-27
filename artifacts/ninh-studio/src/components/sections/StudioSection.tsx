import React from "react";
import { Lightbulb, Layout, Sparkles, Move, Wind, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const features = [
  {
    icon: <Lightbulb className="w-5 h-5 text-accent" />,
    title: "Professional Lighting",
    desc: "Two softbox lights included in every rental. Additional equipment available on request.",
  },
  {
    icon: <Layout className="w-5 h-5 text-accent" />,
    title: "Customizable Backdrops",
    desc: "Multiple backdrop options including neutral, textured, sheer curtains, floral wall, and more.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    title: "Makeup Station",
    desc: "Ring light, full-length mirror, and dedicated prep area so clients arrive camera-ready.",
  },
  {
    icon: <Move className="w-5 h-5 text-accent" />,
    title: "597 Square Feet",
    desc: "Spacious enough for group shoots, runway setups, or full family sessions. Up to 20 people.",
  },
  {
    icon: <Wind className="w-5 h-5 text-accent" />,
    title: "Air Conditioning + Wi-Fi",
    desc: "Comfortable year-round. Stay connected.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    title: "Easy to Get Here",
    desc: "Steps from Joyce-Collingwood SkyTrain Station. Free on-site parking.",
  },
];

export function StudioSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="studio" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column - Large Image */}
        <div 
          className={`relative h-[600px] lg:h-auto rounded-xl overflow-hidden shadow-lg transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <img 
            src="/images/studio-full.png" 
            alt="Ninh Studio interior full view" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none" />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
          <div 
            className={`mb-10 transition-all duration-700 delay-200 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
              A Space Built for Great Work.
            </h2>
            <p className="text-secondary-foreground text-lg">
              Bright. Versatile. Fully equipped. And easy to get to.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 mb-10">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`flex flex-col transition-all duration-500 ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${isIntersecting ? 300 + (i * 100) : 0}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-secondary p-2 rounded-md">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-secondary-foreground leading-relaxed pl-11 sm:pl-0">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Small Detail Image */}
          <div 
            className={`relative h-48 w-full sm:w-2/3 rounded-lg overflow-hidden shadow-md transition-all duration-700 delay-700 ease-out ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <img 
              src="/images/studio-detail.png" 
              alt="Studio makeup station detail" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-black/5 rounded-lg pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
