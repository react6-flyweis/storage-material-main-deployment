import React from "react";

const processSteps = [
  {
    title: "Consultation",
    desc: "Share your project details and goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
        <circle cx="18" cy="19" r="3" />
        <path d="m17 19 1 1 2-2" />
        <circle cx="12" cy="13" r="3" />
        <path d="M12 16v-2" />
      </svg>
    ),
  },
  {
    title: "Engineering & Design",
    desc: "Custom plans created by experienced engineers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="m2 22 5-5" />
        <path d="M9.5 14.5L16 8" />
        <path d="m17 2 5 5-8.5 8.5L9 11l.5-4.5L18 2Z" />
        <path d="M7 2h5" />
        <path d="M2 7h5" />
      </svg>
    ),
  },
  {
    title: "Quote & Approval",
    desc: "Transparent pricing with no hidden fees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 12v4" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
  {
    title: "Manufacturing & Delivery",
    desc: "Precision-fabricated components shipped to your site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M2 20V9l4-2v13" />
        <path d="M6 20V5l4-2v17" />
        <path d="M10 20V9l4-2v13" />
        <path d="M14 18h4v4h-4z" />
        <path d="M18 18l3-3v7h-3z" />
      </svg>
    ),
  },
  {
    title: "Build & Support",
    desc: "DIY-friendly or installer-assisted construction with ongoing support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function OurProcessMobile() {
  return (
    <div className="flex flex-col items-center px-6 py-12 md:hidden">
      {/* Title */}
      <h2 className="text-[32px] font-semibold text-center text-blue-600 mb-2">
        Our Process
      </h2>
      <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
      
      {/* Subtitle */}
      <p className="text-slate-900 font-semibold text-center text-[18px] mb-10 leading-tight">
        From Idea to Installation—Made Simple
      </p>
      
      {/* Cards List */}
      <div className="w-full space-y-4">
        {processSteps.map((step, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 p-5 rounded-[18px] border border-white/5 bg-[#16213e] shadow-xl"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full border-[1.5px] border-blue-600/50 flex items-center justify-center bg-[#1e2a4a]">
              {step.icon}
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-1">
              <h3 className="text-white font-semibold text-[17px] leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-300 text-[13px] leading-snug font-normal">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
