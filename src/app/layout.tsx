import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { StructuredData } from "@/components/shared/structured-data";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://naeemjamilassociates.com"),
  title: {
    default: `${COMPANY.name} | Real Estate & Construction Islamabad`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "real estate Islamabad",
    "property consultant Islamabad",
    "construction company Islamabad",
    "Naeem Jamil Associates",
    "property for sale Islamabad",
    "property rental Islamabad",
    "E-11 property",
    "DHA Islamabad",
    "Bahria Town",
    "property development Pakistan",
  ],
  authors: [{ name: COMPANY.ceo }],
  creator: COMPANY.name,
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://naeemjamilassociates.com",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Real Estate & Construction Islamabad`,
    description: COMPANY.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Real Estate & Construction Islamabad`,
    description: COMPANY.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://naeemjamilassociates.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
