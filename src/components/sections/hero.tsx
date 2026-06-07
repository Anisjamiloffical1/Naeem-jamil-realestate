"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HardHat,
  MapPin,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { BlueprintGrid } from "@/components/ui/blueprint-grid";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import { useInView } from "@/hooks/use-in-view";
import { COMPANY } from "@/lib/constants";

const TRUST_ITEMS = [
  "100+ Happy Clients",
  "100+ Five Star Reviews",
  "Real Estate Experts",
  "Construction Specialists",
];

const PROPERTY_TYPES = ["Buy", "Sell", "Rent", "Build"];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { ref: statsRef, isInView } = useInView();

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Islamabad skyline and premium real estate"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-navy/90 to-navy/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(201,162,39,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,_rgba(30,41,59,0.8),_transparent_50%)]" />
      </motion.div>

      <BlueprintGrid opacity={0.06} />
      <FloatingShapes />

      {/* Animated skyline silhouette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-20">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <motion.path
            d="M0 120V80l80-30 60 20 90-50 70 35 50-25 80 45 60-30 100 55 70-40 90 30 60-20 110 50V120z"
            fill="currentColor"
            className="text-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </svg>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
                <Star className="h-4 w-4 fill-gold" />
                {COMPANY.googleReviews}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
                <HardHat className="h-4 w-4 text-gold" />
                Construction & Real Estate
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Find Your Dream{" "}
              <span className="text-gradient-gold">Property</span>
              <br />
              <span className="text-3xl font-medium text-white/80 sm:text-4xl lg:text-5xl">
                Build Your Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
            >
              {COMPANY.description}
            </motion.p>

            {/* Property search bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl"
            >
              <div className="mb-2 flex gap-1 p-1">
                {PROPERTY_TYPES.map((type, i) => (
                  <button
                    key={type}
                    className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                      i === 0
                        ? "bg-gold text-navy shadow-lg shadow-gold/20"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gold" />
                  <input
                    type="text"
                    placeholder="Location — E-11, DHA, Bahria Town..."
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                    readOnly
                  />
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                  <Building2 className="h-5 w-5 shrink-0 text-gold" />
                  <select className="w-full bg-transparent text-sm text-white/70 outline-none">
                    <option className="bg-navy">Property Type</option>
                    <option className="bg-navy">Residential</option>
                    <option className="bg-navy">Commercial</option>
                    <option className="bg-navy">Plot / Land</option>
                  </select>
                </div>
                <Button className="shrink-0 sm:px-8">
                  <Search className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <a href="#projects">
                  Explore Properties
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get Consultation</a>
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-2"
            >
              {TRUST_ITEMS.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right — CEO + floating stat cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/25 via-gold/5 to-transparent blur-3xl animate-pulse-glow" />

              <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-navy/40 p-2 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/ceo.jpg"
                    alt={`${COMPANY.ceo} - CEO & Founder`}
                    fill
                    priority
                    unoptimized
                    className="object-cover object-[center_20%]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-lg border border-gold/30 bg-navy/80 px-3 py-1.5 backdrop-blur-sm">
                    <p className="text-xs text-gold">CEO & Founder</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                  <p className="font-heading text-xl font-bold text-white">{COMPANY.ceo}</p>
                  <p className="text-sm text-gold">Real Estate Consultant & Builder</p>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-5 -left-5 rounded-xl border border-gold/30 bg-navy/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-xs text-white/50">Trusted Since</p>
                <p className="font-heading text-2xl font-bold text-gold">2010</p>
              </motion.div>

              <motion.div
                ref={statsRef as React.RefObject<HTMLDivElement>}
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 top-1/3 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="font-heading text-2xl font-bold text-gold">
                  <Counter value={500} suffix="+" isInView={isInView} />
                </p>
                <p className="text-xs text-white/50">Properties Sold</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-3 rounded-xl border border-success/30 bg-navy/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="font-heading text-2xl font-bold text-success">
                  <Counter value={50} suffix="+" isInView={isInView} />
                </p>
                <p className="text-xs text-white/50">Projects Built</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gold/40 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-2 w-1 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
