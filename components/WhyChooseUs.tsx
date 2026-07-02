import React from "react";
import Container from "./Container";
import WhyChooseUsMobile from "./WhyChooseUsMobile";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Engineered Strength",
      desc: "Built to meet local building codes and project requirements.",
    },
    {
      title: "Instant, Transparent Quotes",
      desc: "Get pricing without mandatory login or long delays.",
    },
    {
      title: "Flexible Customization",
      desc: "Sizes, layouts, doors, insulation, colors, and roof styles.",
    },
    {
      title: "Fast Delivery",
      desc: "Pre-cut, pre-drilled kits shipped directly to your site.",
    },
    {
      title: "Expert Support",
      desc: "From first quote to final build—and beyond.",
    },
    {
      title: "Long-Term Warranties",
      desc: "Peace of mind with industry-leading coverage.",
    },
  ];

  return (
    <>
      {/* Mobile View - Matches the provided design */}
      <div className="md:hidden">
        <WhyChooseUsMobile />
      </div>

      {/* Desktop View - Restored and unchanged */}
      <section className="relative hidden md:block py-24 bg-[#272C42] text-white">
        <Container as="div">
          <div className="text-center mb-24">
            <h2 className="font-['Inter'] font-bold text-[36px] md:text-[48px] leading-[58px] mb-4">
              Why Choose Us
            </h2>
            <p className="font-['Inter'] font-bold text-[24px] md:text-[36px] leading-[44px] text-white/55">
              What Sets Us Apart
            </p>
          </div>

          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {items.map((it) => (
              <div
                key={it.title}
                className="bg-white/15 rounded-[14px] p-10 md:p-14 flex flex-col items-center justify-center text-center gap-6"
              >
                <h3 className="font-['Inter'] font-bold text-[28px] md:text-[32px] leading-[39px]">
                  {it.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[18px] md:text-[24px] leading-[32px] md:leading-[40px] text-[#EDF1F4]">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
