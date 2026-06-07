"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Star, Users } from "lucide-react";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { Counter } from "@/components/ui/counter";
import { useInView } from "@/hooks/use-in-view";
import { STATS } from "@/lib/constants";

const STAT_ICONS = [Users, Star, Building2, HardHat];

export function Statistics() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy" />
      <BlueprintGrid opacity={0.05} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.15),_transparent_70%)]" />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring" }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-white/8"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 transition-colors group-hover:bg-gold/25">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <p className="font-heading text-4xl font-bold text-gold sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                </p>
                <p className="mt-2 text-sm font-medium text-white/60">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
