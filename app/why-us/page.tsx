import DreamBuilding from "@/components/home/DreamBuilding";
import OurPromise from "@/components/home/OurPromise";
import Testimonials from "@/components/home/Testimonials";
import WhyUsHero from "@/components/WhyUsHero";
import WhyChooseComparison from "@/components/WhyChooseComparison";
import ScrollReveal from "@/components/ScrollReveal";

import dreamBuildingImg from "@/assets/dream-building-why-us.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <WhyUsHero />
      <OurPromise />
      
      <ScrollReveal>
        <WhyChooseComparison />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <DreamBuilding image={dreamBuildingImg} />
      <Footer />
    </>
  );
}
