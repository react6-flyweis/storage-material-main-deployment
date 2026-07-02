import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NotSure from "@/components/NotSure";
import SteelBuildingTypes from "@/components/SteelBuildingTypes";
import WhyChooseSteel from "@/components/WhyChooseSteel";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <Header />
      <SteelBuildingTypes />
      
      <ScrollReveal>
        <WhyChooseSteel />
      </ScrollReveal>

      <ScrollReveal>
        <NotSure />
      </ScrollReveal>

      <Footer />
    </>
  );
}
