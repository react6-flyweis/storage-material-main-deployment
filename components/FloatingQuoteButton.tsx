"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import AlexChatDialog from "./AlexChatDialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const TEASER_MESSAGES = [
  "Get a free quote",
  "Engineered for your build",
  "We typically reply within 24 hours",
] as const;

const TEASER_FIRST_DELAY_MS = 5_000;
const TEASER_INTERVAL_MS = 22_000;
const TEASER_VISIBLE_MS = 5_200;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

import { usePathname } from "next/navigation";

export default function FloatingQuoteButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const hideTeaserRef = useRef<number | null>(null);
  const [teaserCycleId, setTeaserCycleId] = useState(0);

  const isDesigner = pathname === "/designer";

  const handleChatOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (next) {
      setTeaserVisible(false);
      if (hideTeaserRef.current !== null) {
        window.clearTimeout(hideTeaserRef.current);
        hideTeaserRef.current = null;
      }
    }
  }, []);

  const runTeaser = useCallback(() => {
    if (hideTeaserRef.current !== null) {
      window.clearTimeout(hideTeaserRef.current);
    }
    setTeaserCycleId((id) => id + 1);
    setTeaserVisible(true);
    hideTeaserRef.current = window.setTimeout(() => {
      setTeaserVisible(false);
      setMessageIndex((i) => (i + 1) % TEASER_MESSAGES.length);
      hideTeaserRef.current = null;
    }, TEASER_VISIBLE_MS);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const first = window.setTimeout(runTeaser, TEASER_FIRST_DELAY_MS);
    const interval = window.setInterval(runTeaser, TEASER_INTERVAL_MS);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(interval);
      if (hideTeaserRef.current !== null) {
        window.clearTimeout(hideTeaserRef.current);
        hideTeaserRef.current = null;
      }
    };
  }, [reducedMotion, runTeaser]);

  return (
    <AlexChatDialog open={open} onOpenChange={handleChatOpenChange}>
      <div
        className={cn(
          "fixed bottom-5 right-5 z-40 flex max-w-[min(100vw-2rem,20rem)] flex-row-reverse items-center gap-3 md:bottom-8 md:right-8",
          isDesigner && "hidden md:flex"
        )}
      >
        <div className="relative shrink-0">
          {!reducedMotion && (
            <span
              className="animate-fab-ring-pulse pointer-events-none absolute inset-0 rounded-full bg-primary"
              aria-hidden
            />
          )}
          <Button
            type="button"
            size="icon"
            onClick={() => handleChatOpenChange(true)}
            className={cn(
              "relative h-14 w-14 rounded-full shadow-lg md:h-16 md:w-16",
              "hover:scale-105 active:scale-95 transition-transform",
              !reducedMotion && "animate-fab-soft-bob"
            )}
            aria-label="Chat with Alex"
          >
            <MessageCircle className="!size-7 shrink-0" aria-hidden />
          </Button>
        </div>

        {reducedMotion ? (
          <p className="bg-card text-card-foreground border-border max-w-[13rem] rounded-2xl border px-3 py-2 text-right text-sm font-semibold shadow-md sm:px-4 sm:py-3">
            {TEASER_MESSAGES[0]}
            <span className="text-muted-foreground mt-1 block text-xs font-normal">
              Tap the button to start
            </span>
          </p>
        ) : (
          <div
            className={cn(
              "pointer-events-auto min-w-0 transition-[opacity,visibility,transform] duration-300 ease-out",
              teaserVisible
                ? "visible translate-x-0 opacity-100"
                : "invisible translate-x-2 opacity-0 pointer-events-none"
            )}
            role="status"
            aria-live="polite"
          >
            <button
              key={teaserCycleId}
              type="button"
              onClick={() => handleChatOpenChange(true)}
              className={cn(
                "bg-card text-card-foreground border-border hover:bg-accent/90 w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold shadow-lg transition-colors",
                teaserVisible && "animate-quote-teaser-in"
              )}
            >
              {TEASER_MESSAGES[messageIndex]}
              <span className="text-muted-foreground mt-1 block text-xs font-normal">
                Tap to start — no obligation
              </span>
            </button>
          </div>
        )}
      </div>
    </AlexChatDialog>
  );
}
