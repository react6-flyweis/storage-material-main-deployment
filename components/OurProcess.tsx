import ourProcessImage from "@/assets/our-process.png";
import OurProcessMobile from "./OurProcessMobile";

export default function OurProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "Share your project details and goals.",
      side: "left",
    },
    {
      title: "Engineering & Design",
      desc: "Custom plans created by experienced engineers.",
      side: "right",
    },
    {
      title: "Quote & Approval",
      desc: "Transparent pricing with no hidden fees.",
      side: "left",
    },
    {
      title: "Manufacturing & Delivery",
      desc: "Precision-fabricated components shipped to your site.",
      side: "right",
    },
    {
      title: "Build & Support",
      desc: "DIY-friendly or installer-assisted construction with ongoing support.",
      side: "left",
    },
  ];

  const svgHeight = steps.length * 180 + 120;

  return (
    <section className="relative py-12 md:py-16 bg-gray-100 overflow-hidden">
      {/* Background Image - Shared for both views */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        aria-hidden
      >
        <div
          className="w-full h-[100vw] bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url(${ourProcessImage.src})`,
            backgroundPositionX: "75%",
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Mobile View */}
      <div className="relative z-10 md:hidden">
        <OurProcessMobile />
      </div>

      {/* Desktop View */}
      <div className="relative z-10 hidden md:block">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600">Our Process</h2>
            <p className="mt-5 text-xl text-gray-800 font-bold font-inter">
              From Idea to Installation—Made Simple
            </p>
          </div>

          <div className="relative">
            {/* SVG Connector Lines */}
            <svg
              className="absolute top-0 left-0 w-full pointer-events-none"
              style={{ height: "100%", zIndex: 1 }}
              viewBox={`0 0 100 ${svgHeight}`}
              preserveAspectRatio="none"
            >
              {steps.map((s, i) => {
                if (i === steps.length - 1) return null;
                const isLeft = s.side === "left";
                const nextIsLeft = steps[i + 1].side === "left";
                const yStart = i * 220 + 60;
                const yEnd = (i + 1) * 200 + 30;

                const xStart = isLeft ? 45 : 55;
                const xEnd = nextIsLeft ? 25 : 75;

                return (
                  <path
                    key={i}
                    d={`M ${xStart} ${yStart} L ${xEnd} ${yStart} L ${xEnd} ${yEnd}`}
                    stroke="#9ca3af"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            <div className="relative" style={{ zIndex: 2 }}>
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="relative mb-8 last:mb-0"
                  style={{ minHeight: "120px" }}
                >
                  <div
                    className={`md:w-[45%] ${
                      s.side === "left" ? "" : "md:ml-auto"
                    }`}
                  >
                    <div className="bg-slate-800 text-white rounded-xl px-8 py-6 shadow-xl">
                      <h3 className="font-bold text-xl">{s.title}</h3>
                      <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
