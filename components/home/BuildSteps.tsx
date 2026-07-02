"use client";
import Image from "next/image";
import houseSteps from "@/assets/home/house-steps.png";
import Container from "../Container";
import { motion, Variants } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "Tell us about your project, budget and timeline we’ll guide you every step of the way.",
  },
  {
    id: 2,
    title: "Engineering & Design",
    desc: "Custom-engineered plans designed to meet your local building codes and requirements.",
  },
  {
    id: 3,
    title: "Delivery & Logistics",
    desc: "Your building kit is manufactured and shipped directly to your job site on time.",
  },
  {
    id: 4,
    title: "Build & Support",
    desc: "Choose DIY or professional installation, backed by expert support and warranty coverage.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function BuildSteps() {
  return (
    <Container className="relative overflow-hidden py-16 bg-[#EDF1F4]" fluid>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={imageVariants}
          className="w-full relative overflow-visible flex items-center justify-start order-last md:order-first"
        >
          <div className="md:absolute md:-left-80 md:-top-50 mt-6 md:mt-0 mx-auto">
            <Image
              src={houseSteps}
              alt="building steps"
              className="scale-x-[-1] scale-150"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold mb-8"
          >
            From Consultation to Completion
            <br />
            We&apos;re With You.
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map((s) => (
              <motion.div
                key={s.id}
                variants={itemVariants}
                whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                className="flex items-center gap-5 bg-linear-to-r from-gray-200 to-transparent dark:bg-muted/60 p-3 rounded-full cursor-default transition-colors"
              >
                <div className="flex items-center justify-center size-11 md:size-16 rounded-full bg-[#6D6D6D66] text-xl dark:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold">
                  {s.id}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="text-sm mt-2">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Container>
  );
}
