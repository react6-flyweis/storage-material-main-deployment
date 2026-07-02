"use client";

import Container from "../Container";
import Image from "next/image";
import { motion } from "framer-motion";
import icon11 from "@/assets/home/11.png";
import icon12 from "@/assets/home/12.png";
import icon13 from "@/assets/home/13.png";
import icon14 from "@/assets/home/14.png";
import icon15 from "@/assets/home/15.png";
import icon17 from "@/assets/home/17.png";
import icon18 from "@/assets/home/18.png";
import customizableIcon from "@/assets/home/customizable.png";

const cards = [
  {
    _id: "1",
    icon: icon11,
    title: "Engineered Strength",
    desc: "Built to meet or exceed local building codes for maximum durability.",
  },
  {
    _id: "2",
    icon: icon12,
    title: "Fast & Easy Installation",
    desc: "Pre-cut and pre-drilled components for quick, hassle-free assembly.",
  },
  {
    _id: "3",
    icon: icon13,
    title: "Transparent Pricing",
    desc: "Upfront quotes with no hidden fees what you see is what you pay.",
  },
  {
    _id: "4",
    icon: icon14,
    title: "Expert Support",
    desc: "Guidance from design to delivery and beyond.",
  },
  {
    _id: "5",
    icon: icon15,
    title: "Quality Materials",
    desc: "High-grade steel designed for long-lasting performance.",
  },
  {
    _id: "6",
    icon: customizableIcon,
    title: "Customizable Designs",
    desc: "Flexible layouts and options tailored to your needs.",
  },
  {
    _id: "7",
    icon: icon17,
    title: "American-Made Materials",
    desc: "Sourced and manufactured in the USA for trusted quality.",
  },
  {
    _id: "8",
    icon: icon18,
    title: "No Fluff",
    desc: "Simple, straightforward experience with no unnecessary steps.",
  },
];

import OurPromiseMobile from "./OurPromiseMobile";

export default function OurPromise() {
  // const { data: cards = [], isLoading } = useWhyUs();

  const isLoading = false; // --- MOCK ---

  return (
    <section className="py-14 bg-secondary/95 overflow-hidden">
      <Container>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-primary ">Our Promise</span> to Every Customer
          </h2>
        </motion.div>

        {/* Desktop View Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-md p-4 py-8 flex flex-col items-center gap-3 shadow-md animate-pulse"
                  aria-hidden
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-neutral-700" />
                  <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-3/4 mt-3" />
                  <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-5/6 mt-2" />
                </div>
              ))
            : cards.map((c, idx) => (
                <motion.div
                  key={c._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1.0, 
                    delay: (idx % 4) * 0.2,
                    ease: "easeOut"
                  }}
                  className="bg-white text-gray-900 dark:bg-card dark:text-card-foreground rounded-md p-4 py-8 flex flex-col items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 relative">
                    <Image src={c.icon} alt={c.title} fill className="object-contain" />
                  </div>
                  <h3 className="font-semibold text-lg text-center">
                    {c.title}
                  </h3>
                  <p className="text-sm text-center text-muted-foreground max-w-48">
                    {c.desc}
                  </p>
                </motion.div>
              ))}
        </div>

        {/* Mobile View Component */}
        {!isLoading && <OurPromiseMobile cards={cards} />}
      </Container>
    </section>
  );
}
