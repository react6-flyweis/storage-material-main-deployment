"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import buildingWhiteImage from "@/assets/buildings/building-white.png";
import buildingBlueImage from "@/assets/buildings/building-blue.png";
import buildingGreenImage from "@/assets/buildings/building-green.png";
import buildingBrownImage from "@/assets/buildings/building-brown.png";
import buildingWhiteBlueImage from "@/assets/buildings/white-building-blue-trim.png";
import buildingWhiteGreyImage from "@/assets/buildings/building-melbourne.png";
import buildingBrownWhiteImage from "@/assets/buildings/brown-building-white-edge.png";
import buildingBrownBlueImage from "@/assets/buildings/brown-building-blue-edge.png";
import buildingBrownGreenImage from "@/assets/buildings/brown-bulidning-green edge.png";
import buidlingGreenBrownImage from "@/assets/buildings/buidling-green-brown-trim.png";
import buildingGreenBlueImage from "@/assets/buildings/building-green-blue-trim.png";
import buildingGreenWhiteImage from "@/assets/buildings/building-green-white-trim.png";
import buildingBlueGreenImage from "@/assets/buildings/blue-building-green-trim.png";
import buildingBlueBrownImage from "@/assets/buildings/blue-building-brown-trim.png.png";
import buildingBlueWhiteImage from "@/assets/buildings/blue-building-white-trim.png";
import buildingWhiteGreenImage from "@/assets/buildings/white-building-green-trim.png";
import buildingWhiteBrownImage from "@/assets/buildings/white-building-brown-trim.png";

export const colorMap = [
  { id: "green", color: "#3D584B", image: buildingGreenImage },
  { id: "blue", color: "#0066E4", image: buildingBlueImage },
  { id: "brown", color: "#83371E", image: buildingBrownImage },
  { id: "white", color: "#F0F0F7", image: buildingWhiteImage },
];

const getImageByCombination = (panelId: string, trimId: string) => {
  // Specific combinations
  if (panelId === "white" && trimId === "blue") return buildingWhiteBlueImage;
  if (panelId === "white" && trimId === "grey") return buildingWhiteGreyImage;
  if (panelId === "white" && trimId === "green") return buildingWhiteGreenImage;
  if (panelId === "white" && trimId === "brown") return buildingWhiteBrownImage;
  if (panelId === "brown" && trimId === "white") return buildingBrownWhiteImage;
  if (panelId === "brown" && trimId === "blue") return buildingBrownBlueImage;
  if (panelId === "brown" && trimId === "green") return buildingBrownGreenImage;
  if (panelId === "green" && trimId === "brown") return buidlingGreenBrownImage;
  if (panelId === "green" && trimId === "blue") return buildingGreenBlueImage;
  if (panelId === "green" && trimId === "white") return buildingGreenWhiteImage;
  if (panelId === "blue" && trimId === "green") return buildingBlueGreenImage;
  if (panelId === "blue" && trimId === "brown") return buildingBlueBrownImage;
  if (panelId === "blue" && trimId === "white") return buildingBlueWhiteImage;

  // Fallback to panel color image
  const panel = colorMap.find((c) => c.id === panelId);
  return panel ? panel.image : buildingWhiteImage;
};

export default function DesignPreview({}) {
  const [selectedPanel, setSelectedPanel] = useState(colorMap[3].id); // Default to white
  const [selectedTrim, setSelectedTrim] = useState(colorMap[3].id); // Default to white
  
  const currentImage = getImageByCombination(selectedPanel, selectedTrim);

  return (
    <div className=" flex flex-col items-center w-full">
      <div className="w-full ">
        <div className="relative w-full h-[250px] sm:h-[300px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedPanel}-${selectedTrim}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={currentImage}
                alt="building preview"
                className="object-contain"
                fill
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs font-semibold text-black/80 uppercase tracking-wider">Select Panel Color</p>
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
            {colorMap.map((p) => (
              <motion.button
                key={p.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPanel(p.id)}
                aria-label={`panel-${p.id}`}
                className={`size-8 sm:size-9 rounded-full shadow-lg focus:outline-none cursor-pointer transition-all duration-300 ${
                  selectedPanel === p.id
                    ? "ring-2 ring-offset-2 ring-offset-secondary ring-primary scale-105"
                    : "ring-1 ring-black/5 hover:ring-black/20"
                }`}
                style={{ backgroundColor: p.color }}
              />
            ))}
          </div>

          <p className="text-xs font-semibold text-black/80 uppercase tracking-wider mt-4">Select Trim Color</p>
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
            {colorMap.map((t) => (
              <motion.button
                key={t.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTrim(t.id)}
                aria-label={`trim-${t.id}`}
                className={`size-8 sm:size-9 rounded-full shadow-lg focus:outline-none cursor-pointer transition-all duration-300 ${
                  selectedTrim === t.id
                    ? "ring-2 ring-offset-2 ring-offset-secondary ring-primary scale-105"
                    : "ring-1 ring-black/5 hover:ring-black/20"
                }`}
                style={{ backgroundColor: t.color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
