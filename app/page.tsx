import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

import dreamBuildingImg from "@/assets/dream-building-home.png";

import Image from "next/image";
import Buildings from "@/components/home/Buildings";
import DesignYourBuilding from "@/components/home/DesignYourBuilding";
import OurPromise from "@/components/home/OurPromise";
import BuildSteps from "@/components/home/BuildSteps";
import BuildingInAction from "@/components/home/BuildingInAction";
import DreamBuilding from "@/components/home/DreamBuilding";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GetAQuoteDialog from "@/components/GetAQuoteDialog";
import ClearanceBanner from "@/components/home/ClearanceBanner";


import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <ScrollReveal>
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <ClearanceBanner />
      </ScrollReveal>

      <Buildings />

      <ScrollReveal>
        <DesignYourBuilding />
      </ScrollReveal>

      <ScrollReveal>
        <OurPromise />
      </ScrollReveal>

      <BuildSteps />
      <BuildingInAction />

      <ScrollReveal>
        <DreamBuilding image={dreamBuildingImg} />
      </ScrollReveal>

      <Footer />
    </>
  );
}
