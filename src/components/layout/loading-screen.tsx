"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, HardHat } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 4, 100));
    }, 60);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-[#B8941F] shadow-2xl shadow-gold/30"
            >
              <Building2 className="h-10 w-10 text-navy" />
            </motion.div>

            <h1 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              {COMPANY.name}
            </h1>
            <p className="mt-1 flex items-center justify-center gap-2 text-sm text-gold/80">
              <HardHat className="h-4 w-4" />
              Real Estate & Construction
            </p>

            <div className="mx-auto mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-gold via-[#D4AF37] to-gold"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="mt-3 text-xs tracking-widest text-white/40 uppercase">
              Building Trust, Creating Excellence
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
