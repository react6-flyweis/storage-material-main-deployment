"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useTestimonials from "@/lib/hooks/useTestimonials";
import quotesImg from "@/assets/quotes.png";

import Container from "../Container";
import { QuoteIcon } from "lucide-react";
import * as React from "react";
import autoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

export default function Testimonials() {
  const { data: testimonials = [], isLoading, isError } = useTestimonials();

  const visible = React.useMemo(() => {
    return testimonials.map((t) => ({
      ...t,
      title: t.title.replace(/Storage Material|Storage material|Mr Storage Material/gi, "Steel Building Depot"),
      userName: t.userName.replace(/Storage Material|Storage material|Mr Storage Material/gi, "Steel Building Depot"),
    }));
  }, [testimonials]);

  // compute average rating and total count for dynamic header
  const { averageRating, totalReviews } = React.useMemo(() => {
    const arr = visible.length ? visible : testimonials;
    const total = arr.length;
    const sum = arr.reduce((s, it) => s + (it.rating ?? 0), 0);
    return {
      averageRating: total ? +(sum / total).toFixed(1) : 0,
      totalReviews: total || 0,
    };
  }, [visible, testimonials]);

  const plugin = React.useMemo(() => {
    return autoScroll({
      speed: 2,
      stopOnInteraction: true,
    });
  }, []);

  return (
    <section className="py-16 bg-secondary text-secondary-foreground">
      <Container className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white">
          What Our Customers Say
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">
          {averageRating}/5 Based on {totalReviews}+ Reviews
        </p>
      </Container>

      <Container
        className="py-6 mt-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-10 items-stretch">
            {isLoading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <CarouselItem
                  key={`loading-${i}`}
                  className="pl-10 md:basis-1/2 lg:basis-[30%]"
                >
                  <div className="bg-white/5 rounded-2xl h-full animate-pulse min-h-[400px]" />
                </CarouselItem>
              ))
            ) : isError ? (
              <div className="text-center text-white/70 w-full">
                Failed to load reviews.
              </div>
            ) : visible.length === 0 ? (
              <div className="text-center text-white/70 w-full">
                No reviews to show yet.
              </div>
            ) : (
              visible.map((t) => {
                return (
                  <CarouselItem
                    key={t._id}
                    className="pl-10 md:basis-1/2 lg:basis-[30%] h-full"
                  >
                    <article className="bg-slate-800/50 border border-white/5 rounded-2xl shadow-xl relative h-full flex flex-col group transition-all duration-300 hover:bg-slate-800">
                      <div className="absolute -left-6 top-8 z-30 pointer-events-none hidden lg:block">
                        <Image
                          src={quotesImg}
                          alt="quote"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>

                      {/* Image Section */}
                      <div className="relative aspect-video w-full overflow-hidden shrink-0 rounded-t-2xl">
                        {t.image ? (
                          <img
                            src={t.image}
                            alt={`testimonial ${t._id}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                            <QuoteIcon className="text-white/10 size-12" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="mb-3 text-yellow-400 text-sm" aria-hidden>
                            {"★".repeat(5)}
                          </div>
                          <p className="text-white/90 font-medium leading-relaxed italic line-clamp-4 mb-6">
                            "{t.title}"
                          </p>
                        </div>

                        <div className="mt-auto border-t border-white/5 pt-4">
                          <div className="text-white font-bold tracking-wide">
                            {t.userName}
                          </div>
                          <div className="text-xs text-white/50 mt-1 uppercase tracking-wider">
                            Verified Customer
                          </div>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })
            )}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}
