import { COMPANY } from "@/lib/constants";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: COMPANY.name,
    description: COMPANY.description,
    url: "https://naeemjamilassociates.com",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}, ${COMPANY.address.line3}`,
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    founder: {
      "@type": "Person",
      name: COMPANY.ceo,
      jobTitle: "CEO & Founder",
    },
    areaServed: [
      "E-11 Islamabad",
      "D-12 Islamabad",
      "B-17 Islamabad",
      "Bahria Town Islamabad",
      "DHA Islamabad",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
      bestRating: "5",
    },
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-19:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
