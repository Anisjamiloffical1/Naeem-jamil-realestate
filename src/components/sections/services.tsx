"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Building2,
  HardHat,
  Home,
  Key,
  Landmark,
  Paintbrush,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Key,
  Home,
  HardHat,
  Landmark,
  TrendingUp,
  Paintbrush,
  BadgeDollarSign,
};

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <BlueprintGrid opacity={0.03} />
      <div className="absolute inset-0 construction-stripe opacity-50" />
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="Real Estate & Construction Services"
          description="From property sales to full-scale construction — complete solutions under one trusted roof."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const isFeatured = i === 0 || i === 3;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group property-card relative overflow-hidden rounded-2xl border bg-card ${
                  isFeatured
                    ? "border-gold/30 shadow-lg shadow-gold/5 sm:col-span-1"
                    : "border-border"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-navy/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {isFeatured && (
                  <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                    <div className="absolute top-3 -right-6 rotate-45 bg-gold px-8 py-0.5 text-[10px] font-bold text-navy">
                      Popular
                    </div>
                  </div>
                )}
                <div className="relative p-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 shadow-inner transition-all duration-300 group-hover:from-gold/35 group-hover:shadow-lg group-hover:shadow-gold/20"
                  >
                    <Icon className="h-8 w-8 text-gold" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-0.5 flex-1 rounded-full bg-border transition-all duration-500 group-hover:bg-gold/30" />
                    <span className="text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Learn More →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
