"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { COMPANY } from "@/lib/constants";

export function CeoSection() {
  return (
    <section id="ceo" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(201,162,39,0.1),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedReveal animation="slideRight">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-3xl bg-gold/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/ceo.jpg"
                    alt={`${COMPANY.ceo} - CEO & Founder of ${COMPANY.name}`}
                    fill
                    unoptimized
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="slideLeft" delay={0.2}>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Leadership
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Meet Our CEO
            </h2>
            <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-gold to-gold/30" />

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <Quote className="mb-4 h-10 w-10 text-gold/60" />
              <p className="text-lg leading-relaxed text-white/80 italic">
                A visionary real estate consultant and builder dedicated to helping families
                and investors achieve long-term property success through trust, transparency
                and professional expertise.
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-heading text-2xl font-bold text-white">{COMPANY.ceo}</p>
                  <p className="text-gold">CEO & Founder</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <motion.div
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                  >
                    <svg viewBox="0 0 200 60" className="h-12 w-40 text-gold/70">
                      <path
                        d="M10,45 Q30,10 60,35 T120,30 T180,25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-right text-xs text-white/40 italic">Signature</p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
