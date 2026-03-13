import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { PlansSection } from "@/components/plans-section";
import { SolutionsSection } from "@/components/industry-section";
import { AboutSection } from "@/components/about-section";
import { EscalableSection } from "@/components/escalable-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <SolutionsSection/> */}
        <PlansSection />
        <EscalableSection/>
        <BenefitsSection />
        {/* <AboutSection/> */}
        <FaqSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
