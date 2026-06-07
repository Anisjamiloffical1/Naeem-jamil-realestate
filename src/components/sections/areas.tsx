"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AREAS } from "@/lib/constants";

export function Areas() {
  return (
    <section id="areas" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-gold/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Coverage"
          title="Areas We Serve"
          description="Prime locations across Islamabad where we deliver exceptional real estate and construction services."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group cursor-default rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{area.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
