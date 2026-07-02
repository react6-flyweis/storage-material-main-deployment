"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterAccordionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export default function FooterAccordion({
  title,
  children,
  className,
  defaultOpen = false,
}: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("w-full md:w-auto border-b border-slate-100 md:border-none", className)}>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 md:hidden"
      >
        <span className="text-sm font-bold text-primary uppercase tracking-wider">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "size-5 text-primary transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Content Area */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out md:block",
          isOpen
            ? "max-h-[1000px] opacity-100 pb-6 md:pb-0"
            : "max-h-0 opacity-0 md:max-h-none md:opacity-100 overflow-hidden md:overflow-visible"
        )}
      >
        <div className="hidden md:block text-sm font-semibold text-primary mb-6 uppercase tracking-wider">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
