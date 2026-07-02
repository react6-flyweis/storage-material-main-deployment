import React from "react";

const whyChooseUsItems = [
  {
    title: "Engineered Strength",
    desc: "Built to meet local building codes and project requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Instant, Transparent Quotes",
    desc: "Get pricing without mandatory login or long delays.",
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
    title: "Flexible Customization",
    desc: "Sizes, layouts, insulation, colors, and roof styles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="2" y1="14" x2="6" y2="14" />
        <line x1="10" y1="8" x2="14" y2="8" />
        <line x1="18" y1="16" x2="22" y2="16" />
      </svg>
    ),
  },
  {
    title: "Manufacturing & Delivery",
    desc: "Precision-fabricated components shipped to your site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
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

export default function WhyChooseUsMobile() {
  return (
    <div className="flex flex-col items-center px-2 py-16 md:hidden bg-[#0F172A]">
      {/* Title */}
      <h2 className="text-[30px] font-extrabold text-center text-white mb-2 leading-tight tracking-tight">
        Why Choose Us
      </h2>
      <div className="w-16 h-1 bg-blue-600 rounded-full mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]" />
      
      {/* Subtitle */}
      <p className="text-gray-400 font-bold text-center text-[16px] mb-10 leading-tight">
        What Sets Us Apart
      </p>
      
      {/* Cards List */}
      <div className="w-full space-y-3">
        {whyChooseUsItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 p-4 rounded-[20px] bg-[#16213e]/80 backdrop-blur-md border border-white/5 shadow-2xl"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full border-[1.5px] border-blue-600/50 flex items-center justify-center bg-[#1e2a4a]">
              {React.cloneElement(item.icon as React.ReactElement<any>, { 
                className: "w-6 h-6",
                stroke: "#FFFFFF" 
              })}
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-0.5 flex-1">
              <h3 className="text-white font-extrabold text-[16px] leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-[12px] leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
