"use client";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useWhyUsData from "@/lib/hooks/useWhyUsData";
import WhyChooseComparisonMobile from "./WhyChooseComparisonMobile";
import { 
  Shield, 
  Flame, 
  CircleDollarSign, 
  Clock, 
  Recycle, 
  Check,
  X
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  "Durability & Strength": Shield,
  "Strength": Shield,
  "Fire, Pest & Rot Proof": Flame,
  "Pest & Fire Proof": Flame,
  "Cost-Effective": CircleDollarSign,
  "Long Term Value": CircleDollarSign,
  "Installation Speed": Clock,
  "Construction Time": Clock,
  "Eco-Friendly & Recyclable": Recycle,
  "Recyclable": Recycle,
};

export default function WhyChooseComparison() {
  const { data: features = [], isLoading } = useWhyUsData();
  const hasFeatures = Array.isArray(features) && features.length > 0;

  // Use fallback data if API fails or is empty for demonstration of the new UI
  const displayFeatures = hasFeatures ? features : [
    { _id: "f1", feature: "Strength", steelBuilding: "50+ years", wordConcerte: "10–20 years" },
    { _id: "f2", feature: "Pest & Fire Proof", steelBuilding: "Yes", wordConcerte: "No" },
    { _id: "f3", feature: "Long Term Value", steelBuilding: "High value", wordConcerte: "Expensive over time" },
    { _id: "f4", feature: "Construction Time", steelBuilding: "Weeks", wordConcerte: "Months" },
    { _id: "f5", feature: "Recyclable", steelBuilding: "Yes", wordConcerte: "Limited" },
  ];

  return (
    <section className="py-16">
      <Container className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold px-2">
          <span className="text-primary">Why Choose Steel</span> Over
          Traditional Materials?
        </h2>
      </Container>

      {/* Desktop View Table (Restored to Original Style with Icons) */}
      <Container as="div" className="hidden md:block mb-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-hide">
          <table className="w-full min-w-[600px] sm:min-w-0 rounded-lg table-fixed table-bordered bg-[#D9D9D957]">
            <thead>
              <tr>
                <th className="w-1/3 p-3 text-left font-semibold text-sm sm:text-base">Feature</th>
                <th className="w-1/3 p-3 text-left font-semibold text-sm sm:text-base text-primary">
                  <div className="flex items-center gap-2">
                    Steel Building 
                    <div className="w-5 h-5 bg-[#22C55E] rounded-[4px] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </th>
                <th className="w-1/3 p-3 text-left font-semibold text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    Wood/Concrete 
                    <div className="w-5 h-5 bg-[#EF4444] rounded-[4px] flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={"skeleton-" + i} className="animate-pulse">
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    </td>
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
                    </td>
                    <td className="p-3">
                      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />
                    </td>
                  </tr>
                ))
              ) : hasFeatures ? (
                features.map((f) => {
                  const Icon = ICON_MAP[f.feature] || Shield;
                  return (
                    <tr key={f._id}>
                      <td className="p-3 font-semibold text-xs sm:text-sm md:text-base">
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-[#2563EB]" />
                          {f.feature}
                        </div>
                      </td>
                      <td className="p-3 text-xs sm:text-sm md:text-base">{f.steelBuilding}</td>
                      <td className="p-3 text-xs sm:text-sm md:text-base">{f.wordConcerte}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="p-3 text-center italic text-sm" colSpan={3}>
                    No features found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/building-types" className="w-full sm:w-auto px-4">
            <Button className="rounded w-full sm:w-auto px-8 h-12 sm:h-10 text-base sm:text-sm">See Building Types</Button>
          </Link>
        </div>
      </Container>

      {/* Mobile View Component */}
      <WhyChooseComparisonMobile 
        displayFeatures={displayFeatures} 
        ICON_MAP={ICON_MAP} 
      />
    </section>
  );
}
