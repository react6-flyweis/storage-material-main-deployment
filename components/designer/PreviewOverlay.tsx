"use client";

import React from "react";

type PreviewOverlayProps = {
  title?: string;
  subtitle?: string;
  width?: string;
  height?: string;
  fontSize?: string;
};

export default function PreviewOverlay({
  title = "3D Builder Preview — \n Full Version Coming Soon",
  subtitle,
  width = "min(631px, 95%)",
  height,
  fontSize,
}: PreviewOverlayProps) {
  return (
    <div
      className="absolute inset-x-0 top-4 md:top-10 z-20 pointer-events-none flex items-center justify-center p-4"
    >
      <div
        className="flex flex-col items-center justify-center p-4 md:p-8 text-center bg-black/25 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl transition-all duration-300"
        style={{
          width: width,
          minHeight: height || "auto",
        }}
      >
        <h2
          className="text-white font-bold whitespace-pre-line leading-[1.1] tracking-tight"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: fontSize || "clamp(1.25rem, 4vw, 2.5rem)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-white/80 font-medium text-xs md:text-base mt-2 md:mt-4 uppercase tracking-[0.2em]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
