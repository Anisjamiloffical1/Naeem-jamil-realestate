"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/50 bg-background/90 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-gradient-to-b from-dark/60 to-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-[#B8941F] shadow-lg shadow-gold/25"
          >
            <Building2 className="h-5 w-5 text-navy" />
          </motion.div>
          <div className="hidden sm:block">
            <p
              className={cn(
                "font-heading text-lg font-bold leading-tight transition-colors",
                onHero ? "text-white" : "text-foreground"
              )}
            >
              Naeem Jamil
            </p>
            <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
              Real Estate & Construction
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                onHero
                  ? "text-white/75 hover:bg-white/10 hover:text-white"
                  : "text-muted-foreground hover:bg-gold/10 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={COMPANY.phoneHref}>
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn("lg:hidden", onHero && "text-white hover:text-gold")}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href={COMPANY.phoneHref} onClick={() => setMobileOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
