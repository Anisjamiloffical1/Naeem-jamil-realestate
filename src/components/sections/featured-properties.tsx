"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bath, BedDouble, MapPin, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

const FEATURED = [
  {
    id: 1,
    title: "Luxury Villa E-11",
    location: "E-11, Islamabad",
    price: "PKR 8.5 Cr",
    beds: 5,
    baths: 6,
    area: "1,200 sq yd",
    type: "For Sale",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment Complex",
    location: "DHA Phase 2",
    price: "PKR 2.2 Cr",
    beds: 3,
    baths: 3,
    area: "2,100 sq ft",
    type: "For Sale",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Corporate Office Tower",
    location: "Blue Area",
    price: "PKR 15 Cr",
    beds: 0,
    baths: 4,
    area: "5,000 sq ft",
    type: "Commercial",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Bahria Town Residence",
    location: "Bahria Town",
    price: "PKR 1.8 Lac/mo",
    beds: 4,
    baths: 4,
    area: "500 sq yd",
    type: "For Rent",
    image: "/images/projects/project-5.jpg",
  },
];

export function FeaturedProperties() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 dark:bg-navy/20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,162,39,0.06),_transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Featured Listings"
          title="Premium Properties"
          description="Explore handpicked residential and commercial properties across Islamabad's most sought-after locations."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((property, i) => (
            <motion.article
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-shadow duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                  {property.type}
                </span>
                <p className="absolute bottom-3 left-3 font-heading text-xl font-bold text-white">
                  {property.price}
                </p>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {property.location}
                </p>
                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  {property.beds > 0 && (
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-3.5 w-3.5" /> {property.beds} Beds
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" /> {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 className="h-3.5 w-3.5" /> {property.area}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 font-semibold text-gold transition-colors hover:text-gold/80"
          >
            View All Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
