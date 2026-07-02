"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PromiseCard {
  _id: string;
  icon: any;
  title: string;
  desc: string;
}

interface OurPromiseMobileProps {
  cards: PromiseCard[];
}

export default function OurPromiseMobile({ cards }: OurPromiseMobileProps) {
  return (
    <div className="md:hidden flex flex-col gap-3 px-2 pb-12">
      {cards.map((c, idx) => (
        <motion.div
          key={c._id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5px" }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="bg-white rounded-[18px] p-4 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50/50"
        >
          {/* Icon Container with subtle glow */}
          <div className="flex-shrink-0 w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />
            <div className="w-10 h-10 relative z-10">
              <Image src={c.icon} alt={c.title} fill className="object-contain" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-0.5 flex-1">
            <h3 className="font-extrabold text-[15px] text-[#0F172A] tracking-tight leading-tight">
              {c.title}
            </h3>
            <p className="text-[11.5px] text-gray-500 leading-tight font-medium line-clamp-2">
              {c.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
