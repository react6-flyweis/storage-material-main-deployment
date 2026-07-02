import AboutHero from "@/components/AboutHero";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DreamBuilding from "@/components/home/DreamBuilding";
import OurMission from "@/components/OurMission";
import WhyChooseUs from "@/components/WhyChooseUs";
import dreamBuildingImg from "@/assets/dream-building-projects.png";
import OurProcess from "@/components/OurProcess";
import Compliance from "@/components/Compliance";
import ScrollReveal from "@/components/ScrollReveal";

export default function page() {
  return (
    <>
      <Header />
      <AboutHero />
      
      <ScrollReveal>
        <WhoWeAre />
      </ScrollReveal>

      <ScrollReveal>
        <OurMission />
      </ScrollReveal>

      <ScrollReveal>
        <WhatWeDo />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <OurProcess />
      </ScrollReveal>

      <ScrollReveal>
        <Compliance />
      </ScrollReveal>

      <DreamBuilding image={dreamBuildingImg} />
      <Footer />
    </>
  );
}
