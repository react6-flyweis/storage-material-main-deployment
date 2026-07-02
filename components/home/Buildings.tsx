"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants } from "framer-motion";
import garageImg from "@/assets/buildings/garage.png";
import workshopImg from "@/assets/buildings/workshop.png";
import bardominiusImg from "@/assets/buildings/bardominius.png";
import agricultureImg from "@/assets/buildings/agriculture.png";
import aviationImg from "@/assets/buildings/aviation.png";
import inventoryImg from "@/assets/buildings/inventory.png";
import commercialImg from "@/assets/buildings/commercial.png";
import storageImg from "@/assets/buildings/storage.png";
import buildingsBg from "@/assets/buildings/buildings-bg.png";
import Container from "../Container";
import GetAQuoteDialog from "../GetAQuoteDialog";
import useBuildingTypes, { BuildingType } from "@/lib/hooks/useBuildingTypes";

const items: BuildingType[] = [
  {
    _id: "1",
    title: "Garages",
    description: "Secure & customizable for vehicles, tools, or storage.",
    image: garageImg.src,
  },
  {
    _id: "2",
    title: "Workshops",
    description: "Clear-span interiors for productivity.",
    image: workshopImg.src,
  },
  {
    _id: "3",
    title: "Barndominiums",
    description: "Live + work under one roof.",
    image: bardominiusImg.src,
  },
  {
    _id: "4",
    title: "Agricultural",
    description: "Barns, sheds, feed storage engineered to farm needs.",
    image: agricultureImg.src,
  },
  {
    _id: "5",
    title: "Aviation",
    description: "Hangars with wide clear spans for aircraft.",
    image: aviationImg.src,
  },
  {
    _id: "6",
    title: "Clearance Inventory",
    description: "Expandable & cost-efficient spaces.",
    image: inventoryImg.src,
  },
  {
    _id: "7",
    title: "Commercial",
    description: "Simple, durable protection from sun & rain.",
    image: commercialImg.src,
  },
  {
    _id: "8",
    title: "Self Storage",
    description: "Quick shelter solutions",
    image: storageImg.src,
  },
];

const cardVariants: Variants = {
  hidden: (idx: number) => ({ 
    opacity: 0, 
    x: idx % 2 === 0 ? -100 : 100 
  }),
  visible: (idx: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: (idx % 3) * 0.15,
      ease: "easeOut",
    },
  }),
};

export default function Buildings() {
  // const { data: items = [], isLoading, isError } = useBuildingTypes();
  const [isLoading, isError] = [false, false]; // --- MOCK ---

  return (
    <section className="relative py-16 bg-secondary text-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${buildingsBg.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.04,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold">
          <span className="text-primary">Steel Buildings for</span> Every
          Purpose
        </h2>
        <p className="mt-3 text-sm text-white/80 max-w-2xl mx-auto">
          Check a building type to explore designs, features, and get instant
          quotes.
        </p>

        <Container className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : isError ? (
            <div className="text-sm text-red-300">
              Unable to load building types.
            </div>
          ) : items.length === 0 ? (
            <div className="text-sm text-white/70">
              No building types available.
            </div>
          ) : (
            items.map((it, idx) => (
              <motion.div
                key={it._id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                style={{ willChange: "transform, opacity" }}
                className="w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[370px]"
              >
                <BuildingCard item={it} />
              </motion.div>
            ))
          )}
        </Container>

        <div className="mt-10 flex justify-center">
          <GetAQuoteDialog>
            <Button size="lg" className="min-w-44 rounded">
              Get a Quote
            </Button>
          </GetAQuoteDialog>
        </div>
      </div>
    </section>
  );
}

function BuildingCard({ item }: { item: BuildingType }) {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-card/10 border border-white/5 h-full w-full">
      <div className="flex items-center justify-center shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="object-contain h-full w-full"
          width={96}
          height={96}
        />
      </div>

      <div className="text-center sm:text-left w-full">
        <div className="font-semibold text-sm sm:text-lg">{item.title}</div>
        <div className="text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1 line-clamp-2">
          {item.description}
        </div>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-xl bg-card/10 border border-white/5 w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-[370px] animate-pulse">
      <div className="flex items-center justify-center shrink-0 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded" />
      </div>

      <div className="text-center sm:text-left w-full">
        <div className="h-4 sm:h-5 bg-white/10 rounded w-3/5 mx-auto sm:mx-0 mb-1 sm:mb-2" />
        <div className="h-3 sm:h-4 bg-white/6 rounded w-4/5 mx-auto sm:mx-0" />
      </div>
    </article>
  );
}