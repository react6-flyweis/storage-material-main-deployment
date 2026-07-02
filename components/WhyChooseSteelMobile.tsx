"use client";

import React from "react";
import { motion } from "framer-motion";
import { BicepsFlexed, Box, Zap, HandCoins, Leaf } from "lucide-react";

const items = [
  { 
    title: "Stronger & more durable", 
    desc: "Designed to withstand extreme weather and heavy loads for decades.",
    icon: BicepsFlexed 
  },
  { 
    title: "Resistant to fire, pests, and rot", 
    desc: "Non-combustible steel protects your building and everything inside.",
    icon: Box 
  },
  { 
    title: "Faster installation", 
    desc: "Pre-engineered components make construction quick and hassle-free.",
    icon: Zap 
  },
  { 
    title: "Cost-effective over time", 
    desc: "Lower maintenance and longer lifespan save you money in the long run.",
    icon: HandCoins 
  },
  { 
    title: "Eco-friendly choice", 
    desc: "Steel is 100% recyclable and a sustainable solution for the future.",
    icon: Leaf 
  },
];

export default function WhyChooseSteelMobile() {
  return (
    <div className="md:hidden flex flex-col items-center bg-secondary px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-[28px] font-bold text-white leading-tight mb-3">
          Why Choose <span className="text-primary">Steel</span> <br />
          Over Traditional Materials?
        </h2>
        <div className="w-16 h-1 bg-[#2563EB] mx-auto rounded-full" />
        <p className="mt-6 text-gray-400 text-[15px] px-2 leading-relaxed">
          Check a building type to explore designs, features, and get instant quotes.
        </p>
      </div>

      {/* Items List */}
      <div className="w-full space-y-0">
        {items.map((item, idx) => (
          <div key={idx}>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-5 py-8"
            >
              {/* Icon Container with Multi-Layered Glow */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-[#0F172A]/40 relative border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                {/* Inner Focused Glow */}
                <div className="absolute inset-2 rounded-full bg-blue-600/20 blur-md" />
                <div className="absolute inset-4 rounded-full bg-blue-500/10 blur-sm" />
                
                <item.icon className="w-7 h-7 text-white relative z-10" strokeWidth={1.5} />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5 pt-2 flex-1">
                <h3 className="text-white font-extrabold text-[17px] leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[13px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
            
            {/* Subtle Blue Divider (except last item) */}
            {idx !== items.length - 1 && (
              <div className="w-full h-px bg-blue-400/10 ml-16" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
