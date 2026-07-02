"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop || window.scrollY;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Initial check in case page is already scrolled
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-32 right-8 z-[99999]">
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "bg-black text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  );
}
