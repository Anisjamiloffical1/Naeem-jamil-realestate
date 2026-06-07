"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-14 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold"
        >
          <Building2 className="h-3.5 w-3.5" />
          {subtitle}
        </motion.span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
      <div className={cn("mt-6 flex items-center gap-3", align === "center" && "justify-center")}>
        <div className="h-px w-12 bg-gold/40" />
        <div className="h-2 w-2 rotate-45 border border-gold bg-gold/20" />
        <div className="h-px w-12 bg-gold/40" />
      </div>
    </motion.div>
  );
}
