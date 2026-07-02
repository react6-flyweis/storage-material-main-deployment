"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Container from "../Container";
import DreamBuildingForm from "./DreamBuildingForm";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export default function DreamBuilding({
  image,
}: {
  image: StaticImageData | string;
}) {
  return (
    <section className="bg-secondary text-white">
      <div className="w-full h-full">
        <Image
          src={image}
          alt="dream steel building"
          className="object-cover w-full"
          priority
        />
      </div>

      <div className="relative -mt-20 pb-20">
        <div className="absolute w-full top-0 h-40 -translate-y-12 x-auto  bg-linear-to-t from-secondary to-secondary/80 blur-sm z-0" />

        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={textVariants}
            className="relative mb-32 mt-5 z-10 text-center"
          >
            <h2 className="text-2xl font-bold">
              Ready to Build Your Dream Project with Steel Building Depot?
            </h2>
            <p className="mt-3 text-xl text-gray-200">
              Get a free engineered drawing & quote in just 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={formVariants}
            className=""
          >
            <DreamBuildingForm />
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
