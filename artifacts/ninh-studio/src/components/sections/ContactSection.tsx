import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export function ContactSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send to an API
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thanks! We'll be in touch soon.",
      className: "bg-accent text-white border-none",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-[60px] md:py-[100px] bg-background w-full" ref={ref}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div 
          className={`mb-16 transition-all duration-700 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-4">
            Come Find Us.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl">
            We're easy to get to, and even easier to work with. Reach out to book a session, ask about dates, or just say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Form */}
          <div 
            className={`flex flex-col gap-12 transition-all duration-700 delay-200 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Address</p>
                    <p className="text-secondary-foreground mt-1">5530 Joyce Street<br/>Vancouver, BC V5R 4H6</p>
                    <p className="text-secondary-foreground mt-1 text-xs">South Renfrew-Collingwood<br/>East Vancouver</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Phone</p>
                    <p className="text-secondary-foreground mt-1">(778) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div className="text-sm">
                    <p className="font-bold text-foreground">Email</p>
                    <a href="mailto:hello@ninhstudio.ca" className="text-accent hover:underline mt-1 block">hello@ninhstudio.ca</a>
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
                        <tr><td className="py-1">Mon</td><td className="py-1 text-right">Closed</td></tr>
                        <tr><td className="py-1">Tue-Thu</td><td className="py-1 text-right">9:30 AM - 5:30 PM</td></tr>
                        <tr><td className="py-1">Fri</td><td className="py-1 text-right">9:00 AM - 9:00 PM</td></tr>
                        <tr><td className="py-1">Sat</td><td className="py-1 text-right">9:00 AM - 5:30 PM</td></tr>
                        <tr><td className="py-1 border-t border-border/50">Sun</td><td className="py-1 text-right border-t border-border/50">10:00 AM - 5:30 PM</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="text-sm mt-4 p-3 bg-secondary rounded text-secondary-foreground text-xs">
                  <p className="font-medium text-foreground mb-1">Transit & Parking</p>
                  <p>Minutes from Joyce-Collingwood Station. 2 free on-site spaces + free street parking.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h3 className="font-display font-bold text-xl mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or event..." 
                            className="min-h-[120px] focus-visible:ring-accent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white mt-2">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Right Column: Map */}
          <div 
            className={`h-[400px] lg:h-auto min-h-[500px] rounded-xl overflow-hidden shadow-md transition-all duration-700 delay-400 ease-out ${
              isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <iframe 
              src="https://maps.google.com/maps?q=5530+Joyce+Street+Vancouver+BC&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ninh Studio Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
