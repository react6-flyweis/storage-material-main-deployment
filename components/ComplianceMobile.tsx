import React from "react";
import { ClipboardCheck, Calculator, Box, ShieldCheck, FileCheck } from "lucide-react";

const complianceItems = [
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
        <circle cx="18" cy="19" r="3" />
        <path d="m17 19 1 1 2-2" />
        <path d="M8 11h4" />
        <path d="M8 15h4" />
        <path d="M8 19h2" />
      </svg>
    ),
    title: "Engineer-approved designs",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <rect x="8" y="10" width="2" height="2" />
        <rect x="11" y="10" width="2" height="2" />
        <rect x="14" y="10" width="2" height="2" />
        <rect x="8" y="14" width="2" height="2" />
        <rect x="11" y="14" width="2" height="2" />
        <rect x="14" y="14" width="2" height="2" />
        <rect x="8" y="18" width="2" height="2" />
        <rect x="11" y="18" width="2" height="2" />
        <rect x="14" y="18" width="2" height="2" />
      </svg>
    ),
    title: "Code-compliant structural calculations",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h12M6 8h12M9 4v4M15 4v4" />
        <path d="M6 10h12M6 14h12M9 10v4M15 10v4" />
        <path d="M6 16h12M6 20h12M9 16v4M15 16v4" />
      </svg>
    ),
    title: "High-grade steel materials",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Tested coatings and finishes",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h4" />
        <circle cx="18" cy="19" r="3" />
        <path d="m17 19 1 1 2-2" />
      </svg>
    ),
    title: "Documented quality checks",
  },
];


export default function ComplianceMobile() {
  return (
    <div className="flex flex-col items-center px-6 py-12 md:hidden bg-[#1e2a4a]">
      {/* Heading */}
      <h2 className="text-[28px] font-semibold text-center text-white mb-2 leading-tight">
        Quality and Compliance
      </h2>

      {/* Blue Bar */}
      <div className="w-10 h-1 bg-blue-600 rounded-full mb-6" />
      
      {/* Description */}
      <p className="text-gray-300 text-center text-[15px] leading-relaxed mb-10 max-w-sm">
        At Steel Building Depot, we follow strict engineering and quality
        standards to ensure every building meets or exceeds industry
        requirements.
      </p>
      
      {/* Items List */}
      <div className="w-full space-y-4">
        {complianceItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center gap-5 p-5 rounded-[18px] border border-white/5 bg-[#16213e]/80 shadow-lg"
          >
            {/* Icon Circle */}
            <div className="flex-shrink-0 w-14 h-14 rounded-full border-[1.5px] border-blue-600/50 flex items-center justify-center bg-[#1e2a4a]">
              {/* Icon rendered directly */}
              {item.icon}
            </div>
            
            {/* Text */}
            <span className="text-white  text-[15px] leading-tight">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

