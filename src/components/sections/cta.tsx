"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function Cta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,162,39,0.2),_transparent_60%)]" />
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready To Invest In Your Future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Whether you&apos;re buying, selling, renting or building, Naeem Jamil Associates
              is here to guide you every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href={COMPANY.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Calendar className="h-5 w-5" />
                  Book Consultation
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
