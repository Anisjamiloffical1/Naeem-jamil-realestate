"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimationType = "fadeUp" | "slideLeft" | "slideRight" | "scaleIn";

const variants: Record<AnimationType, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface AnimatedRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
}

export function AnimatedReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className,
  as = "div",
}: AnimatedRevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[animation]}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
