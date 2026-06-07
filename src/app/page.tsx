import { About } from "@/components/sections/about";
import { Areas } from "@/components/sections/areas";
import { CeoSection } from "@/components/sections/ceo";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { FeaturedProperties } from "@/components/sections/featured-properties";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="skyline-divider" />
      <FeaturedProperties />
      <About />
      <CeoSection />
      <Services />
      <WhyChooseUs />
      <Areas />
      <Projects />
      <Testimonials />
      <Statistics />
      <Cta />
      <Contact />
    </>
  );
}
