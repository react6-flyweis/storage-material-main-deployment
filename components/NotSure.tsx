"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import NotSureImage from "@/assets/not-sure.png";
import Container from "./Container";
import { Button } from "./ui/button";
import GetAQuoteDialog from "./GetAQuoteDialog";
import ContactUsDialog from "./ContactUsDialog";

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function NotSure() {
  return (
    <section className="bg-muted overflow-hidden">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: text + actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={leftVariants}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-semibold text-primary">
              Not Sure Which
            </h2>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-secondary md:text-4xl">
              Building Type Fits Your Needs?
            </h2>

            <p className="mt-4 text-muted-foreground max-w-xl text-lg">
              Talk to one of our building experts and get a free recommendation
              + quote in 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <GetAQuoteDialog>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Get a Free Quote
                </Button>
              </GetAQuoteDialog>

              <ContactUsDialog>
                <Button size="lg" className="rounded hover:scale-105 transition-transform">
                  Talk to an Expert
                </Button>
              </ContactUsDialog>
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightVariants}
            className="w-full flex justify-end"
          >
            <div className="w-full max-w-[700px] relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
              <Image
                src={NotSureImage}
                alt="red steel building"
                className="w-full h-auto object-cover rounded-2xl "
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
