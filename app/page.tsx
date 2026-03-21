import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FaqSection } from "@/components/faq-section";
import { PlansSection } from "@/components/plans-section";
import { EscalableSection } from "@/components/escalable-section";
import ContactSection from "@/components/contact-section";
import { WebModelSection } from "@/components/web-model-section";
import { DemosSection } from "@/components/demo-section";
import { CategoriesSection } from "@/components/categories-section";
import DemoSection from "@/components/demos-section";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        {/* <SolutionsSection/> */}
        {/* <PlansSection /> */}
        <CategoriesSection/>
        {/* <WebModelSection /> */}
        {/* <DemosSection /> */}
    
        <EscalableSection />
       <DemoSection/>
        <BenefitsSection />
         
        {/* <AboutSection/> */}
        <FaqSection />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}
