"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/ui/section-heading";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Us"
          description="Reach out for property consultations, construction inquiries, or investment advice. We're here to help."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <a href={COMPANY.phoneHref} className="text-foreground hover:text-gold">
                      {COMPANY.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-foreground hover:text-gold">
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Office Address</p>
                    <address className="not-italic text-foreground">
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                      <br />
                      {COMPANY.address.line3}
                      <br />
                      {COMPANY.address.city}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Business Hours</p>
                    <p className="text-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </li>
              </ul>

              <Button asChild className="mt-6 w-full" variant="default">
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Naeem Jamil Associates Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.5!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRWxldmVuIE1hcmtheiBFLTEx!5e0!3m2!1sen!2spk!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                      Full Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+92 300 0000000" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                    Service Interested In
                  </label>
                  <Input id="service" name="service" placeholder="e.g. Property Purchase, Construction" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={submitted}>
                  <Send className="h-5 w-5" />
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
