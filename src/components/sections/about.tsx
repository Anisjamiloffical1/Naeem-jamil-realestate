"use client";

import { motion } from "framer-motion";
import { Award, Handshake, Shield, Target } from "lucide-react";
import Image from "next/image";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { TIMELINE } from "@/lib/constants";

const EXPERIENCE_CARDS = [
  {
    icon: Shield,
    title: "Integrity First",
    description: "Transparent dealings and honest advice in every transaction.",
  },
  {
    icon: Target,
    title: "Client Focused",
    description: "Tailored solutions designed around your unique property goals.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Premium construction standards and exceptional craftsmanship.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "Long-term relationships built on reliability and results.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <BlueprintGrid opacity={0.025} />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Who We Are"
          title="About Naeem Jamil Associates"
          description="A trusted construction and real estate company committed to delivering high-quality residential, commercial and investment projects across Islamabad."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedReveal animation="slideRight">
            <div className="relative mb-8 overflow-hidden rounded-2xl lg:mb-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src="/images/projects/project-3.jpg"
                  alt="Construction and real estate projects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 rounded-xl border border-gold/30 bg-navy px-6 py-4 shadow-xl"
              >
                <p className="font-heading text-3xl font-bold text-gold">15+</p>
                <p className="text-sm text-white/60">Years Experience</p>
              </motion.div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Naeem Jamil Associates is a trusted construction and real estate company
                committed to delivering high-quality residential, commercial and investment
                projects. We provide complete property and construction solutions including
                buying, selling, rentals, development, renovation and investment consultancy.
              </p>
              <p>
                With a focus on integrity, transparency and customer satisfaction, we transform
                our clients&apos; visions into reality through innovative planning and exceptional
                execution.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {EXPERIENCE_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group property-card rounded-xl border border-border bg-card p-5"
                >
                  <card.icon className="mb-3 h-8 w-8 text-gold transition-transform group-hover:scale-110" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal animation="slideLeft" delay={0.2}>
            <div className="relative">
              <h3 className="mb-8 font-heading text-2xl font-bold text-foreground">
                Our Journey
              </h3>
              <div className="relative space-y-0">
                <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative flex gap-6 pb-10 last:pb-0"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2 }}
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-background shadow-lg shadow-gold/20"
                    >
                      <span className="text-xs font-bold text-gold">{item.year.slice(2)}</span>
                    </motion.div>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-gold">{item.year}</p>
                      <h4 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
