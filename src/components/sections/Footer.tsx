import React from "react";

import { Instagram, MapPin, Mail, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";

import { coreServices, moreServices } from "@/lib/catalog";

import { site } from "@/lib/site";



export function Footer() {

  return (

    <footer className="relative overflow-hidden bg-ink text-primary-foreground">

      <div

        aria-hidden

        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_12%_-8%,hsl(36_28%_78%/0.09),transparent_58%),radial-gradient(ellipse_45%_40%_at_88%_105%,hsl(0_58%_39%/0.05),transparent_52%)]"

      />



      <div className="relative z-10 max-w-[1180px] mx-auto px-6 pt-20 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          <div className="md:col-span-5">

            <a href="/" aria-label={site.name} className="inline-block mb-6 group">

              <Logo variant="light" size="lg" />

            </a>

            <p className="text-gold-muted/75 text-sm leading-relaxed mb-8 max-w-xs">

              Photography studio on Joyce Street in East Vancouver. Portraits, wedding photography, hair & makeup, and studio rental.

            </p>



            <div className="flex gap-3">

              {[

                { href: site.instagram, label: "Instagram", icon: Instagram, external: true },

                { href: site.mapsUrl, label: "Google Maps", icon: MapPin, external: true },

                { href: `mailto:${site.email}`, label: "Email", icon: Mail, external: false },

                { href: site.phoneHref, label: "Phone", icon: Phone, external: false },

              ].map(({ href, label, icon: Icon, external }) => (

                <a

                  key={label}

                  href={href}

                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}

                  className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center text-gold-muted/55 hover:border-gold-muted/60 hover:text-gold transition-all duration-200"

                  aria-label={label}

                >

                  <Icon className="w-4 h-4" />

                </a>

              ))}

            </div>

          </div>



          <div className="md:col-span-3">

            <h4 className="brand-heading mb-6">Services</h4>

            <ul className="space-y-3">

              {[...coreServices, ...moreServices].map((s) => (

                <li key={s.slug}>

                  <a href={s.path} className="text-gold-muted/50 hover:text-gold transition-colors text-sm text-left">

                    {s.name}

                  </a>

                </li>

              ))}

            </ul>

          </div>



          <div className="md:col-span-4 flex flex-col gap-10">

            <div>

              <h4 className="brand-heading mb-6">Quick Links</h4>

              <ul className="space-y-3">

                <li>

                  <a href={site.links.session} className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Book a Session

                  </a>

                </li>

                <li>

                  <a href="/#pricing" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Rent the Studio

                  </a>

                </li>

                <li>

                  <a href="/#gallery" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Gallery

                  </a>

                </li>

                <li>

                  <a href="/#pricing" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Pricing

                  </a>

                </li>

                <li>

                  <a href="/areas-we-serve" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Areas we serve

                  </a>

                </li>

                <li>

                  <a href="/#faq" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    FAQ

                  </a>

                </li>

                <li>

                  <a href="/#contact" className="text-gold-muted/50 hover:text-gold transition-colors text-sm">

                    Contact

                  </a>

                </li>

              </ul>

            </div>



            <div>

              <h4 className="brand-heading mb-5">Visit Us</h4>

              <address className="not-italic space-y-2 text-gold-muted/50 text-sm">

                <p className="text-gold-muted/80 font-medium">{site.name}</p>

                <p>{site.address.line1}</p>

                <p>

                  {site.address.city}, {site.address.region} {site.address.postal}

                </p>

                <p className="mt-4 flex items-center gap-2">

                  <Phone className="w-3.5 h-3.5 text-gold-muted/70 flex-shrink-0" />

                  <a href={site.phoneHref} className="hover:text-gold transition-colors">

                    {site.phoneDisplay}

                  </a>

                </p>

                <p className="flex items-center gap-2">

                  <Mail className="w-3.5 h-3.5 text-gold-muted/70 flex-shrink-0" />

                  <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">

                    {site.email}

                  </a>

                </p>

              </address>

            </div>

          </div>

        </div>



        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />



        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gold-muted/35">

          <p>

            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.

          </p>

          <p className="flex items-center gap-1.5">

            <span className="w-1.5 h-1.5 rounded-[1px] bg-seal inline-block" />

            Photography studio in East Vancouver

          </p>

        </div>

      </div>

    </footer>

  );

}


