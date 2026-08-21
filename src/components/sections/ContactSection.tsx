"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Mail, Instagram, Clock, Phone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { site } from "@/lib/site";
import { submitSessionInquiry } from "@/app/actions/contact";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(7, { message: "Phone number is required" }),
  sessionType: z.enum(site.sessionTypes as unknown as [string, ...string[]], {
    required_error: "Choose a session type",
  }),
  preferredDate: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    const result = await submitSessionInquiry(values);

    if (result.ok) {
      toast({
        title: "Message sent",
        description: "Thanks — we'll be in touch soon.",
        className: "bg-primary text-primary-foreground border-none",
      });
      form.reset();
      return;
    }

    if (result.mailto) {
      window.location.href = result.mailto;
      toast({
        title: "Open your email app",
        description: `If nothing opens, email ${site.email} or call ${site.phoneDisplay}.`,
      });
      return;
    }

    toast({
      title: "Could not send",
      description: result.error,
      variant: "destructive",
    });
  }

  return (
    <section id="contact" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-foreground mb-4">
            Come find us.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl">
            Inquire about a photography session, hair & makeup, or a wedding. Rent the studio by the hour below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Address</p>
                    <p className="text-secondary-foreground mt-1">
                      {site.name}<br />
                      {site.address.line1}<br />
                      {site.address.city}, {site.address.region} {site.address.postal}
                    </p>
                    <p className="text-secondary-foreground mt-1 text-xs">
                      {site.address.neighbourhood}<br />
                      {site.address.area}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Phone</p>
                    <a href={site.phoneHref} className="text-accent hover:underline mt-1 block">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Email</p>
                    <a href={`mailto:${site.email}`} className="text-accent hover:underline mt-1 block">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Instagram</p>
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="text-accent hover:underline mt-1 block">
                      {site.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm w-full">
                    <p className="font-bold text-foreground mb-2">Hours</p>
                    <table className="w-full text-xs text-secondary-foreground">
                      <tbody>
                        {site.hours.map((row) => (
                          <tr key={row.day}>
                            <td className="py-1">{row.day}</td>
                            <td className="py-1 text-right">{row.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="text-sm mt-4 p-3 bg-secondary rounded text-secondary-foreground text-xs">
                  <p className="font-medium text-foreground mb-1">Transit & Parking</p>
                  <p>Minutes from Joyce-Collingwood Station. 2 free on-site spaces + free street parking.</p>
                </div>

                <div className="text-sm">
                  <p className="font-bold text-foreground mb-2">Areas we serve</p>
                  <ul className="space-y-1 text-secondary-foreground">
                    <li><a className="text-accent hover:underline" href="/areas-we-serve/joyce-collingwood">Joyce-Collingwood</a></li>
                    <li><a className="text-accent hover:underline" href="/areas-we-serve/east-vancouver">East Vancouver</a></li>
                    <li><a className="text-accent hover:underline" href="/areas-we-serve/burnaby">Burnaby</a></li>
                    <li><a className="text-accent hover:underline" href="/areas-we-serve/downtown-vancouver">Downtown Vancouver</a></li>
                    <li><a className="text-accent hover:underline" href="/areas-we-serve/new-westminster">New Westminster</a></li>
                  </ul>
                </div>

                <div className="text-sm">
                  <p className="font-bold text-foreground mb-2">Our main services</p>
                  <ul className="space-y-1 text-secondary-foreground">
                    <li><a className="text-accent hover:underline" href="/services/portrait-photography">Portrait photography</a></li>
                    <li><a className="text-accent hover:underline" href="/services/wedding-photography">Wedding photography</a></li>
                    <li><a className="text-accent hover:underline" href="/services/hair-and-makeup">Hair &amp; makeup</a></li>
                    <li><a className="text-accent hover:underline" href="/services/studio-rental">Studio rental</a></li>
                  </ul>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <a href={site.links.rental}>
                    Rent the studio
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div
            className={`h-[320px] md:h-[380px] lg:h-[420px] lg:self-start rounded-xl overflow-hidden shadow-md transition-all duration-700 delay-400 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <iframe
              src={site.mapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${site.name} location`}
            />
          </div>

          <div className="lg:col-span-2">
            <div className="mx-auto w-full max-w-2xl bg-white p-6 md:p-8 rounded-xl border border-border shadow-sm">
              <h3 className="font-display font-medium text-xl mb-2">Book a session</h3>
              <p className="text-sm text-secondary-foreground mb-6">
                Photography, weddings, or hair & makeup. Studio rentals use the hourly form in Pricing.
              </p>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} className="focus-visible:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" type="email" {...field} className="focus-visible:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(778) 555-0123" type="tel" {...field} className="focus-visible:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sessionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Session type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-accent">
                              <SelectValue placeholder="Choose a session" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {site.sessionTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred date (optional)</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="focus-visible:ring-accent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your session..."
                            className="min-h-[120px] focus-visible:ring-accent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="sm:col-span-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
                  >
                    {form.formState.isSubmitting ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
