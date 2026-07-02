"use client";

import { Button } from "@/components/ui/button";
import projectsHeroImg from "@/assets/projects-hero.png";
import GetAQuoteDialog from "./GetAQuoteDialog";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
    },
  },
};

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${projectsHeroImg.src})` }}
        aria-hidden
      />

      <div className="absolute bottom-0 w-full bg-linear-to-b h-full from-transparent via-black/50 to-black/90" />

      <div className="relative z-10 flex items-center md:items-end justify-center h-full px-6 pb-12">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Our Steel Buildings in Action
            </h1>

            <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">
              From small garages to massive warehouses, our projects speak for
              themselves. Explore real builds completed by homeowners, farmers,
              and businesses across the country.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GetAQuoteDialog>
              <Button className="rounded-full px-8 py-6 text-lg font-semibold min-w-44 transition-all hover:scale-105">
                Get a Quote
              </Button>
            </GetAQuoteDialog>

            <Link href="/building-types">
              <Button 
                variant="outline"
                className="bg-white border-primary text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold min-w-44 transition-all hover:scale-105"
              >
                See Our Building types
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
