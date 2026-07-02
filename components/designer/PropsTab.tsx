import designerPropsImg from "@/assets/designer/designer-props.png";
import solarImg from "@/assets/designer/solar.png";
import prop1 from "@/assets/designer/prop-1.png";
import prop2 from "@/assets/designer/prop-2.png";
import prop3 from "@/assets/designer/prop-3.png";
import prop4 from "@/assets/designer/prop-4.png";
import prop5 from "@/assets/designer/prop-5.png";
import prop6 from "@/assets/designer/prop-6.png";
import prop7 from "@/assets/designer/prop-7.png";
import prop8 from "@/assets/designer/prop-8.png";
import prop9 from "@/assets/designer/prop-9.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import PreviewOverlay from "./PreviewOverlay";
import { useState } from "react";
import SimpleQuoteDialog from "./SimpleQuoteDialog";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function PropsTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  const [tab, setTab] = useState<"general" | "solar">("general");

  const generalProps = [
    prop1,
    prop2,
    prop3,
    prop4,
    prop5,
    prop6,
    prop7,
    prop8,
    prop9,
  ];
  const solarProps = [
    solarImg,
    solarImg,
    solarImg,
    solarImg,
    solarImg,
    solarImg,
  ];

  return (
    <div className="flex-1 flex h-full flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[360px] bg-secondary p-6 overflow-y-auto pb-28 md:pb-6 flex flex-col min-h-[45vh] md:min-h-0">
        <div className="mb-6">
          <div className="flex items-end gap-4 mb-3">
            <button
              onClick={() => setTab("general")}
              className={`text-base font-semibold pb-2 ${
                tab === "general" ? "text-blue-500" : "text-gray-300"
              }`}
            >
              General
            </button>

            <button
              onClick={() => setTab("solar")}
              className={`text-base font-semibold pb-2 ${
                tab === "solar" ? "text-blue-500" : "text-gray-300"
              }`}
            >
              Rooftop Solar
            </button>
          </div>

          <div className="mb-4">
            {tab === "general" ? (
              <div className="h-1 w-20 bg-white/20 rounded" />
            ) : (
              <div className="h-1 w-28 bg-white/20 rounded" />
            )}
          </div>

          {tab === "general" ? (
            <div className="grid grid-cols-3 gap-3">
              {generalProps.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl p-2 flex items-center justify-center h-20"
                >
                  <Image
                    src={src}
                    alt={`prop-${idx + 1}`}
                    width={64}
                    height={64}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {solarProps.map((src, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-xl p-2 flex flex-col items-center justify-center h-20"
                >
                  <Image
                    src={src}
                    alt={`solar-${idx + 1}`}
                    width={64}
                    height={64}
                  />
                  <div className="text-white mt-1 text-sm font-medium">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Mezzanine
          </Button>
          <SimpleQuoteDialog>
            <Button size="sm" className="flex-1 rounded">
              Get a Quote
              <ArrowRightIcon />
            </Button>
          </SimpleQuoteDialog>
        </div>
      </div>

      <div className="order-1 md:order-2 flex-1 relative min-h-[45vh] md:min-h-0">
        <Image
          src={designerPropsImg}
          alt="Props preview"
          fill
          className="object-cover"
        />
        <PreviewOverlay />
      </div>
    </div>
  );
}
