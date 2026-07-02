"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "reveal" | "fade-in-up" | "slide-in-left" | "fade-in-blur" | "premium-fade-in" | "fade-in";
  delay?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  animation = "premium-fade-in",
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setHasRevealed(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  // Use a stable 'revealed' state that doesn't flicker on re-renders
  return (
    <div
      ref={ref}
      className={cn(
        "will-change-[transform,opacity]",
        !hasRevealed ? "opacity-0 invisible" : `animate-${animation}`,
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards"
      }}
    >
      {children}
    </div>
  );
}
