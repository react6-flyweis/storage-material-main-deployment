"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../ui/button";

import b1 from "@/assets/home/b1.png";
import b2 from "@/assets/home/b2.png";
import b3 from "@/assets/home/b3.png";
import b4 from "@/assets/home/b4.png";
import b5 from "@/assets/home/b5.png";
import b6 from "@/assets/home/b6.png";

const items = [
  {
    title: "30' × 40' Workshop",
    location: "Texas",
    img: b1,
  },
  {
    title: "50' × 60' Agricultural Barn",
    location: "Ontario",
    img: b2,
  },
  {
    title: "80' × 100' Commercial Warehouse",
    location: "Melbourne",
    img: b3,
  },
  {
    title: "30' × 40' Warehouse",
    location: "Ontario",
    img: b4,
  },
  {
    title: "50' × 60' Agricultural Barn",
    location: "Texas",
    img: b5,
  },
  {
    title: "80' × 100' Commercial Warehouse",
    location: "Paris",
    img: b6,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function BuildingInAction() {
  // const { data: projects = [], isLoading } = useProjects();

  // const items = (projects || []).map((p) => ({
  //   title: p.title || "",
  //   location: p.description || "",
  //   img: p.image || "",
  // }));

  const showSkeleton = false; // isLoading || items.length === 0;

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            See Our Buildings in Action
          </h2>
        </motion.div>

        <div className="relative">
          <Carousel
            opts={{ align: "start", containScroll: "trimSnaps" }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {showSkeleton
                ? [0, 1, 2, 3].map((_, idx) => (
                  <CarouselItem
                    key={"skel-" + idx}
                    className="pl-4 basis-[85%] sm:basis-[48%] lg:basis-[31%]"
                  >
                    <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-sm">
                      <div className="animate-pulse bg-slate-200 rounded-xl h-52 w-full mb-4" />
                      <div className="space-y-3 px-1">
                         <div className="h-5 bg-slate-200 rounded w-3/4 animate-pulse" />
                         <div className="h-4 bg-slate-200 rounded w-1/2 animate-pulse" />
                      </div>
                    </div>
                  </CarouselItem>
                ))
                : items.map((it, idx) => (
                  <CarouselItem
                    key={idx}
                    className="pl-6 basis-[85%] sm:basis-[48%] lg:basis-[31%]"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ 
                        duration: 0.8, 
                        delay: idx * 0.15,
                        ease: "easeOut"
                      }}
                      className="group rounded-3xl bg-white border border-slate-100 p-4"
                    >
                      <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] relative shadow-inner">
                        {typeof it.img === "string" ? (
                          <img
                            src={it.img}
                            alt={it.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <Image
                            src={it.img}
                            alt={it.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <div className="text-left mt-6 px-1">
                        <h3 className="font-extrabold text-slate-900 text-xl leading-tight group-hover:text-primary transition-colors">
                          {it.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          </div>
                          <span className="text-slate-500 font-medium text-sm">
                            {it.location}
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  </CarouselItem>
                ))}
            </CarouselContent>
            {/* Custom styled arrows for better visibility */}
            <div className="hidden md:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-slate-900 hover:bg-primary text-white border-none shadow-lg" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-slate-900 hover:bg-primary text-white border-none shadow-lg" />
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12"
        >
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 hover:bg-primary hover:text-white transition-all gap-2"
            >
              Explore All Projects
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}