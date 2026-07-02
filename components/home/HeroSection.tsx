"use client";

// import Image from "next/image";
// import heroHouse from "@/assets/home/hero-house-img.png";
import { Button } from "../ui/button";
import { 
  BoxIcon, 
  HandCoinsIcon, 
  Shield as ShieldIcon, 
  ScrollText as ScrollTextIcon, 
  Globe as GlobeIcon 
} from "lucide-react";
import Container from "../Container";
import Link from "next/link";
import GetAQuoteDialog from "../GetAQuoteDialog";
import Typewriter from "../Typewriter";
import React from "react";
import { cn } from "@/lib/utils";
// import cloud from "@/assets/home/cloud.png";

export default function HeroSection() {
  const [headingDone, setHeadingDone] = React.useState(false);

  return (
    <section className="relative overflow-hidden md:min-h-[calc(100vh-80px)] flex flex-col bg-slate-950">
      {/* Video background (full-height behind everything) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-slate-950">
        {/* <Image
          src={cloud}
          alt="clouds"
          fill
          className="w-full h-full object-cover opacity-30"
        /> */}
        <video
          poster="/video-poster.webp"
          src="/steel-building-depot-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* layer */}
        <div className="absolute inset-0 bg-linear-to-r from-black to-transparent" />
      </div>

      {/* take up remaining space */}
      <Container className="flex min-h-112 flex-col flex-1 justify-end relative z-10 pb-10">
        <h1 className="text-3xl md:text-4xl max-w-lg font-bold leading-tight text-white">
          <Typewriter
            segments={[{ text: "Why Thousands Trust Steel Building Depot",       className: "text-primary", }]}
            delay={40}
            className="leading-tight"
            onComplete={() => setHeadingDone(true)}
          />
        </h1>

        <p
          className={cn(
            "mt-2 text-sm md:text-base text-white max-w-lg transition-all duration-1000",
            headingDone ? "opacity-100 animate-slide-in-left" : "opacity-0"
          )}
        >
        We don’t just supply buildings—we deliver engineered solutions designed for durability, efficiency and long-term value.
        </p>

        <div
          className={cn(
            "mt-6 flex gap-5 transition-all duration-1000 delay-300",
            headingDone ? "opacity-100 animate-slide-in-left" : "opacity-0"
          )}
        >
          <Link href="/designer">
            <Button
              className="rounded border-primary text-primary min-w-32"
              size="lg"
              variant="outline"
            >
              <BoxIcon />
              Design in 3D
            </Button>
          </Link>
          <GetAQuoteDialog>
            <Button size="lg" className="rounded">
              <HandCoinsIcon />
              Price Your Building
            </Button>
          </GetAQuoteDialog>
        </div>
      </Container>

      {/* Stats band */}
      <div className="py-6 bg-secondary text-white mt-auto order-last relative z-10">
        <Container>
          {/* Desktop View (Simple Text Grid) */}
          <div className="hidden md:grid grid-cols-4 gap-6">
            <div className="flex flex-col gap-4 justify-start">
              <div className="text-2xl">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-sm">“4.9/5 Rated by 1,200+ Customers”</div>
            </div>

            <div className="flex flex-col pl-5 justify-center border-l border-white/50">
              <div className="text-3xl font-semibold">30</div>
              <div className="text-sm">Year Panel Warranty</div>
            </div>

            <div className="flex flex-col pl-5 justify-center border-l border-white/50">
              <div>
                <div className="text-2xl font-semibold">Engineered</div>
                <div className="text-sm">Drawings Included</div>
              </div>
            </div>

            <div className="flex flex-col pl-5 justify-center border-l border-white/50">
              <div>
                <div className="text-2xl font-semibold">Delivery</div>
                <div className="text-sm">Nationwide/Worldwide</div>
              </div>
            </div>
          </div>

          {/* Mobile View (Icons + List Style) */}
          <div className="md:hidden space-y-6">
            {/* Rating */}
            <div className="flex flex-col gap-2 justify-center border-b border-white/20 pb-4">
              <div className="text-xl">⭐️⭐️⭐️⭐️⭐️</div>
              <div className="text-xs">“4.9/5 Rated by 1,200+ Customers”</div>
            </div>

            {/* Stat 1 */}
            <div className="flex items-center gap-4 justify-start border-b border-white/20 pb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <ShieldIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-semibold">30</div>
                <div className="text-xs text-white/70">Year Panel Warranty</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 justify-start border-b border-white/20 pb-4">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <ScrollTextIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xl font-semibold">Engineered</div>
                <div className="text-xs text-white/70">Drawings Included</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 justify-start">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                <GlobeIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xl font-semibold">Delivery</div>
                <div className="text-xs text-white/70">Nationwide/Worldwide</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
