import React from "react";
import Container from "./Container";
import OurMissionMobile from "./OurMissionMobile";

export default function OurMission() {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden lg:block py-24 bg-[#272C42] text-white">
        <Container as="div">
          <div className="text-center">
            <h2 className="font-['Inter'] font-bold text-[36px] md:text-[48px] leading-[58px] mb-16">
              Our Mission
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1300px] mx-auto">
              {/* Mission Card */}
              <div className="bg-white/15 rounded-[14px] p-10 md:p-14 flex flex-col items-center text-center">
                <h3 className="font-['Inter'] font-bold text-[28px] md:text-[32px] leading-[39px] mb-8">
                  Our Mission
                </h3>
                <p className="font-['Inter'] font-normal text-[18px] md:text-[24px] leading-[32px] md:leading-[40px] text-[#EDF1F4]">
                  To simplify steel construction by delivering engineered, affordable and durable steel buildings—while providing transparent pricing and exceptional customer support at every step.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white/15 rounded-[14px] p-10 md:p-14 flex flex-col items-center text-center">
                <h3 className="font-['Inter'] font-bold text-[28px] md:text-[32px] leading-[39px] mb-8">
                  Our Vision
                </h3>
                <p className="font-['Inter'] font-normal text-[18px] md:text-[24px] leading-[32px] md:leading-[40px] text-[#EDF1F4]">
                  To become a leading name in steel building solutions, known for innovation, reliability and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile View */}
      <OurMissionMobile />
    </>
  );
}
