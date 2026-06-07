"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0) return TESTIMONIALS.length - 1;
      if (next >= TESTIMONIALS.length) return 0;
      return next;
    });
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,162,39,0.08),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="100+ Happy Clients trust Naeem Jamil Associates for their real estate and construction needs."
          className="[&_h2]:text-white [&_p]:text-white/60"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
            <Quote className="mb-6 h-10 w-10 text-gold/50" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-white/80 italic sm:text-xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-heading text-xl font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold">{testimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
