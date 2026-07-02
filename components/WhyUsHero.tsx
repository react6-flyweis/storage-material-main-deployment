"use client";

import whyUsHero from "@/assets/why-us-hero.webp";
import { Button } from "@/components/ui/button";
import GetAQuoteDialog from "./GetAQuoteDialog";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyUsHero() {
  const line1Part1 = "Why Thousands Trust";
  const line1Part2 = "Steel Building";
  const line2Part1 = "Depot";
  const line2Part2 = "for Their Steel Building Projects";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${whyUsHero.src})` }}
        aria-hidden
      />

      <div className="absolute bottom-0 w-full bg-linear-to-b h-1/2 from-transparent via-black/30 to-black/80" />

      <div className="relative z-10 flex items-center md:items-end justify-center h-full px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="text-center w-full max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              {" "}
              <span className="text-blue-500">
                {line1Part1.split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>{" "}
              <span className="text-white">
                {line1Part2.split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>{" "}
            </h1>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
              {line2Part1.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}{" "}
              <span className="text-blue-500">
                {line2Part2.split("").map((char, i) => (
                  <motion.span key={i} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-4 sm:mt-3 text-sm sm:text-base text-gray-200 max-w-2xl mx-auto px-2 sm:px-0"
          >
            We don’t just sell steel buildings—we engineer lasting solutions,
            backed by expertise, service, and unmatched reliability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="mt-6 sm:mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <GetAQuoteDialog>
              <Button className="rounded w-full sm:w-40 h-12 sm:h-10 text-base sm:text-sm font-semibold">
                Get a Quote
              </Button>
            </GetAQuoteDialog>

            <Link href="/projects" className="w-full sm:w-auto">
              <Button className="bg-white border-primary text-primary hover:bg-gray-100 rounded w-full sm:w-40 h-12 sm:h-10 text-base sm:text-sm font-semibold">
                See Our Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
