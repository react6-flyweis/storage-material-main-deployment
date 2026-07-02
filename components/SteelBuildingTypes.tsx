"use client";

import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import garageImg from "@/assets/building-types/garages.webp";
import workshopImg from "@/assets/building-types/workshops.webp";
import bardominiusImg from "@/assets/building-types/bardominiums.webp";
import agricultureImg from "@/assets/building-types/agriculture.webp";
import aviationImg from "@/assets/building-types/aviation.webp";
import inventoryImg from "@/assets/building-types/inventory.webp";
import commercialImg from "@/assets/building-types/commercials.webp";
import storageImg from "@/assets/building-types/storage.webp";
import { BoxIcon, HandCoinsIcon } from "lucide-react";
import useBuildingTypes from "@/lib/hooks/useBuildingTypes";
import GetAQuoteDialog from "./GetAQuoteDialog";

const BUILDING_TYPES = [
  { title: "Garages", src: garageImg.src },
  { title: "Workshops / Shops", src: workshopImg.src },
  { title: "Barndominiums", src: bardominiusImg.src },
  { title: "Agricultural Buildings", src: agricultureImg.src },
  { title: "Aviation", src: aviationImg.src },
  { title: "Clearance Inventory", src: inventoryImg.src },
  { title: "Commercials", src: commercialImg.src },
  { title: "Self Storage", src: storageImg.src },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: (idx % 4) * 0.2,
      ease: "easeOut",
    },
  }),
};

export default function SteelBuildingTypes() {
  // const { data, isLoading, isError } = useBuildingTypes();
  const [isLoading, isError, data] = [false, false, BUILDING_TYPES];

  return (
    <Container as="section" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold">
          Steel Buildings for Every Purpose
        </h2>
        <p className="mt-2">
          From residential garages to large commercial warehouses, our buildings
          are engineered for strength, flexibility, and long-lasting value.
          Explore the right building type for your project.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
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
      </motion.div>

      {isLoading ? (
        <div className="text-center py-8">Loading building types…</div>
      ) : isError || !data ? (
        <div className="text-center py-8">Unable to load building types.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((b, idx) => {
            return (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
              >
                <Link
                  href="/designer"
                  className="relative rounded-lg overflow-hidden shadow-lg group transition-transform duration-300 ease-out transform hover:scale-105 hover:shadow-2xl cursor-pointer block"
                >
                  <img
                    src={b.src}
                    alt={b.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute w-full bottom-4 text-white text-xl md:text-2xl font-semibold drop-shadow-md text-center">
                    {b.title}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      )}
    </Container>
  );
}
