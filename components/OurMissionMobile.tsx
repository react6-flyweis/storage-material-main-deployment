import React from "react";
import { Target, Eye } from "lucide-react";

export default function OurMissionMobile() {
  return (
    <section className="lg:hidden bg-[#272C42] py-16 px-2 font-['Inter']">
      <div className="w-full max-w-full mx-auto space-y-10">

        {/* Our Mission Section */}
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-[28px] font-extrabold tracking-tight">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-[#2563EB] mt-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
          </div>

          <div className="bg-[#16213e]/80 backdrop-blur-md border border-white/5 rounded-[20px] p-4 flex items-center gap-4 shadow-2xl">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1e2a4a] border border-[#2563EB]/50 flex items-center justify-center relative overflow-hidden">
              <Target className="text-white w-7 h-7 relative z-10" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[13px] font-bold leading-tight mb-1">Mission Statement</p>
              <p className="text-gray-400 text-[12px] leading-relaxed font-medium">
                To simplify steel construction by delivering engineered, affordable and durable steel buildings—while providing transparent pricing and exceptional customer support at every step.
              </p>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-[28px] font-extrabold tracking-tight">
              Our Vision
            </h2>
            <div className="w-16 h-1 bg-[#2563EB] mt-2 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
          </div>

          <div className="bg-[#16213e]/80 backdrop-blur-md border border-white/5 rounded-[20px] p-4 flex items-center gap-4 shadow-2xl">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#1e2a4a] border border-[#2563EB]/50 flex items-center justify-center relative overflow-hidden">
              <Eye className="text-white w-7 h-7 relative z-10" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[13px] font-bold leading-tight mb-1">Vision Statement</p>
              <p className="text-gray-400 text-[12px] leading-relaxed font-medium">
                To become a leading name in steel building solutions, known for innovation, reliability and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
