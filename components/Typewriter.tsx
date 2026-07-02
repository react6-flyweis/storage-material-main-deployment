"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TypewriterSegment {
  text: string;
  className?: string;
}

interface TypewriterProps {
  segments: TypewriterSegment[];
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

export default function Typewriter({
  segments,
  className,
  delay = 40,
  onComplete,
}: TypewriterProps) {
  const [charsTyped, setCharsTyped] = useState(0);
  const totalLength = segments.reduce((acc, s) => acc + s.text.length, 0);

  useEffect(() => {
    if (charsTyped < totalLength) {
      const timer = setTimeout(() => {
        setCharsTyped((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [charsTyped, totalLength, delay, onComplete]);

  // Derive the visible segments based on charsTyped
  const visibleSegments: { text: string; className?: string }[] = [];
  let remainingChars = charsTyped;

  for (const segment of segments) {
    if (remainingChars <= 0) break;
    const charsToShow = Math.min(remainingChars, segment.text.length);
    visibleSegments.push({
      text: segment.text.slice(0, charsToShow),
      className: segment.className,
    });
    remainingChars -= charsToShow;
  }

  return (
    <span className={cn("inline", className)}>
      {visibleSegments.map((segment, i) => (
        <span key={i} className={segment.className}>
          {segment.text}
        </span>
      ))}
      {charsTyped < totalLength && (
        <span className="inline-block w-[2px] h-[1em] ml-1 bg-primary animate-pulse align-middle" />
      )}
    </span>
  );
}
