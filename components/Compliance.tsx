import Container from "./Container";
import Image from "next/image";
import complianceBg from "@/assets/who-we-are.png";
import ComplianceMobile from "./ComplianceMobile";

export default function Compliance() {
  const complianceItems = [
    "Engineer-approved designs",
    "Code-compliant structural calculations",
    "High-grade steel materials",
    "Tested coatings and finishes",
    "Documented quality checks",
  ];

  return (
    <>
      {/* Mobile View - Separate component, no background color */}
      <div className="md:hidden">
        <ComplianceMobile />
      </div>

      {/* Desktop View - Restored exactly as it was */}
      <section className="relative hidden md:block bg-[#1e2a4a] py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={complianceBg}
            alt="Compliance background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a4a] via-[#1e2a4a]/90 to-[#272C42]" />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-['Inter'] font-bold text-[48px] text-white mb-6">
              Quality and Compliance
            </h2>
            <p className="font-['Inter'] font-normal text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              At Steel Building Depot, we follow strict engineering and quality
              standards to ensure every building meets or exceeds industry
              requirements.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-[1300px] mx-auto px-6">
            {complianceItems.map((item, index) => {
              // Logic for staggered alignment: Left, Center, Right, Center, Left
              const alignments = [
                "self-start",
                "self-center",
                "self-end",
                "self-center",
                "self-start",
              ];
              const alignment = alignments[index % alignments.length];

              return (
                <div
                  key={index}
                  className={`${alignment} w-full md:w-auto md:min-w-[660px] bg-gradient-to-l from-white/0 to-white/30 rounded-[14px] p-10 md:px-[73px] md:py-[43px] flex items-center justify-center backdrop-blur-sm`}
                >
                  <span className="font-['Inter'] font-bold text-[32px] text-white text-center">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
