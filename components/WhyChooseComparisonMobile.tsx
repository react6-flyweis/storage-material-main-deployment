"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
  Check,
  Shield,
  Droplet,
  CircleDollarSign,
  Clock,
  Recycle
} from "lucide-react";

interface Feature {
  _id: string;
  feature: string;
  steelBuilding: string;
  wordConcerte: string;
}

interface WhyChooseComparisonMobileProps {
  displayFeatures: Feature[];
  ICON_MAP: Record<string, any>;
}

// Internal icon mapping to ensure we match the image exactly regardless of parent
const MOBILE_ICON_MAP: Record<string, any> = {
  "Durability & Strength": Shield,
  "Strength": Shield,
  "Fire, Pest & Rot Proof": Droplet,
  "Pest & Fire Proof": Droplet,
  "Cost-Effective": CircleDollarSign,
  "Long Term Value": CircleDollarSign,
  "Installation Speed": Clock,
  "Construction Time": Clock,
  "Eco-Friendly & Recyclable": Recycle,
  "Recyclable": Recycle,
};

export default function WhyChooseComparisonMobile({ displayFeatures }: WhyChooseComparisonMobileProps) {
  return (
    <div className="md:hidden px-4 space-y-6 mt-8 font-['Inter']">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-gray-200">
              <th className="w-[40%] p-4 text-[13px] font-bold text-gray-900 border-r border-gray-200 text-center">
                Feature
              </th>
              <th className="w-[30%] p-4 text-[13px] font-bold text-[#2563EB] border-r border-gray-200">
                <div className="flex flex-col items-center gap-1">
                  <span>Steel Building</span>
                  <div className="w-5 h-5 bg-[#22C55E] rounded-[4px] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </th>
              <th className="w-[30%] p-4 text-[13px] font-bold text-gray-900 text-center">
                Wood/Concrete
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {displayFeatures.map((f) => {
              const Icon = MOBILE_ICON_MAP[f.feature] || Shield;
              return (
                <tr key={f._id} className="items-stretch">
                  {/* Feature Column */}
                  <td className="p-3 border-r border-gray-200">
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[12px] font-bold text-gray-900 leading-tight">
                        {f.feature}
                      </span>
                    </div>
                  </td>
                  
                  {/* Steel Building Column */}
                  <td className="p-3 text-[12px] font-bold text-[#2563EB] text-center border-r border-gray-200 align-middle">
                    {f.steelBuilding}
                  </td>
                  
                  {/* Wood/Concrete Column */}
                  <td className="p-3 text-[12px] font-medium text-gray-600 text-center align-middle">
                    {f.wordConcerte}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Action Button */}
      <div className="pt-2">
        <Link href="/building-types">
          <Button className="w-full h-16 bg-[#1D4ED8] hover:bg-[#1e40af] text-white rounded-xl text-[18px] font-bold flex items-center justify-center gap-4 shadow-lg shadow-blue-500/10">
            <span className="flex-1 text-center pl-8">See Building Types</span>
            <ArrowRight className="w-6 h-6 mr-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
