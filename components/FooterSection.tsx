"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function FooterSection({
  title,
  children,
  isOpen,
  onToggle,
  className,
}: FooterSectionProps) {
  return (
    <div className={cn("flex flex-col border-b border-slate-200 md:border-none pb-4 md:pb-0", className)}>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full md:cursor-default md:pointer-events-none group py-2 md:py-0"
      >
        <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs border-l-4 border-primary pl-3 py-1">
          {title}
        </h3>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300 md:hidden text-slate-400 group-hover:text-primary",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:h-auto md:opacity-100 mt-4 md:mt-8",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 md:max-h-none"
        )}
      >
        {children}
      </div>
    </div>
  );
}
