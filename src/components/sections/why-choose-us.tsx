"use client";

import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Eye,
  Layers,
  MapPin,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Star,
  ShieldCheck,
  MapPin,
  Award,
  Eye,
  Users,
  BarChart3,
  Layers,
};

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Naeem Jamil Advantage"
          description="Experience the difference of working with Islamabad's most trusted real estate and construction professionals."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="group flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 transition-all duration-300 group-hover:bg-gold/20 group-hover:shadow-lg group-hover:shadow-gold/20">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
