import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Share2, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Share2, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-[#B8941F] font-heading text-lg font-bold text-navy">
                NJ
              </div>
              <div>
                <p className="font-heading text-lg font-bold">{COMPANY.name}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Islamabad&apos;s trusted Real Estate Consultant & Construction Company
              delivering premium property solutions with integrity and excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all hover:border-gold/50 hover:bg-gold/10 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={COMPANY.phoneHref} className="text-sm text-white/60 hover:text-gold">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/60 hover:text-gold">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <address className="text-sm not-italic text-white/60">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.line3}
                  <br />
                  {COMPANY.address.city}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; {COMPANY.year} {COMPANY.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
