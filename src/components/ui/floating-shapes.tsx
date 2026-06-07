"use client";

import { motion } from "framer-motion";
import { Building2, HardHat, Home, Ruler } from "lucide-react";

const SHAPES = [
  { Icon: Building2, top: "12%", left: "8%", delay: 0, size: 28 },
  { Icon: Home, top: "22%", right: "12%", delay: 0.5, size: 24 },
  { Icon: HardHat, bottom: "30%", left: "15%", delay: 1, size: 22 },
  { Icon: Ruler, bottom: "20%", right: "8%", delay: 1.5, size: 20 },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {SHAPES.map(({ Icon, delay, size, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute flex items-center justify-center rounded-2xl border border-gold/20 bg-gold/5 p-3 text-gold/40 backdrop-blur-sm"
          style={pos}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon style={{ width: size, height: size }} />
        </motion.div>
      ))}
    </div>
  );
}
