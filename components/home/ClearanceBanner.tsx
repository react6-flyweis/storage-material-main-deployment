"use client";

import React from "react";
import { Button } from "../ui/button";
import GetAQuoteDialog from "../GetAQuoteDialog";

export default function ClearanceBanner() {
  return (
    <section className="w-full bg-white border-y border-gray-100 overflow-hidden">
      <div className="w-full h-auto flex flex-col md:flex-row items-stretch">
        {/* Left Section - Grey Box */}
        <div className="w-full md:w-[40%] lg:w-[35%] bg-[#D9D9D9] flex items-center justify-center md:justify-end shrink-0 px-6 py-10 md:py-12 md:pr-8 lg:pr-12">
          <h2 className="text-[#6D6D6D] text-[24px] sm:text-[32px] md:text-[28px] lg:text-[40px] xl:text-[56px] 2xl:text-[64px] font-normal leading-[1.2] text-center md:text-right text-balance">
            First come, <br className="hidden sm:block" />
            first served.
          </h2>
        </div>

        {/* Right Section - Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-10 md:py-4 bg-white gap-6 lg:gap-8">
          <div className="flex flex-col gap-2 md:gap-3 text-center lg:text-left justify-center h-full">
            {/* Heading Group */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6">
              <h3 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] xl:text-[56px] font-black bg-gradient-to-br from-[#0065E6] to-[#74ADF4] bg-clip-text text-transparent leading-none whitespace-nowrap">
                70% OFF
              </h3>
              <h4 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-bold text-[#1E1E1E] leading-tight whitespace-nowrap">
                Clearance Inventory
              </h4>
            </div>

            {/* Subtext */}
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-medium text-[#6D6D6D] leading-tight max-w-[600px]">
              Click the button below to get a FREE quote.
            </p>
          </div>

          {/* Button Container */}
          <div className="shrink-0 w-full lg:w-auto flex items-center h-full">
            <GetAQuoteDialog>
              <Button 
                className="w-full lg:w-[180px] xl:w-[220px] h-[50px] xl:h-[60px] bg-[#0065E6] hover:bg-[#0052b9] text-white text-[16px] xl:text-[18px] font-bold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide"
              >
                Get a Quote
              </Button>
            </GetAQuoteDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
