"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<(typeof PROJECTS)[number] | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Portfolio"
          title="Construction Projects Showcase"
          description="Explore our portfolio of premium residential, commercial, and development projects across Islamabad."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {["All", ...PROJECT_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === cat
                  ? "bg-gradient-to-r from-gold to-[#D4AF37] text-navy shadow-lg shadow-gold/20"
                  : "border border-border bg-card text-muted-foreground hover:border-gold/30 hover:text-gold"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  onClick={() => setLightboxImage(project)}
                  className="group relative w-full overflow-hidden rounded-2xl"
                >
                  <div
                    className={cn(
                      "relative w-full overflow-hidden",
                      i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                    )}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/90 text-navy">
                        <ZoomIn className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                      <span className="text-xs font-medium text-gold">{project.category}</span>
                      <h3 className="font-heading text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog.Root open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[90vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 focus:outline-none">
            {lightboxImage && (
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-video">
                  <Image
                    src={lightboxImage.image}
                    alt={lightboxImage.title}
                    fill
                    className="object-cover"
                    sizes="90vw"
                  />
                </div>
                <div className="bg-navy p-6">
                  <Dialog.Title className="font-heading text-xl font-bold text-white">
                    {lightboxImage.title}
                  </Dialog.Title>
                  <Dialog.Description className="mt-1 text-gold">
                    {lightboxImage.category}
                  </Dialog.Description>
                </div>
                <Dialog.Close className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70">
                  <X className="h-5 w-5" />
                </Dialog.Close>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
