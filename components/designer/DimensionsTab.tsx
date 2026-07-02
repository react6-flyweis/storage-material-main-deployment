import Image from "next/image";
import { useState } from "react";
import designerDimensionsImg from "@/assets/designer/designer-dimensions.png";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import NumberStepper from "./NumberStepper";
import { ArrowRightIcon } from "lucide-react";
import PreviewOverlay from "./PreviewOverlay";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function DimensionsTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  const [width, setWidth] = useState<number>(33);
  const [length, setLength] = useState<number>(55);
  const [height, setHeight] = useState<number>(76);
  const [roofStyle, setRoofStyle] = useState<string | undefined>(undefined);
  const [roofPitch, setRoofPitch] = useState<string | undefined>(undefined);

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-none md:flex-1 flex items-center justify-center h-[40vh] md:h-auto md:min-h-[50vh]">
        <div className="w-full max-w-7xl h-full">
          <div className="relative h-full overflow-hidden shadow-xl md:rounded-lg">
            <Image
              src={designerDimensionsImg}
              alt="Designer dimensions"
              fill
              className="object-cover"
              priority
            />
            <PreviewOverlay 
              fontSize="clamp(1.5rem, 5vw, 2.5rem)"
              width="min(631px, 90%)"
            />
          </div>
        </div>
      </div>

      <div className="bg-secondary p-4 md:p-6 flex-1 md:flex-none overflow-y-auto pb-24 md:pb-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="flex flex-col">
              <span className="text-sm text-white mb-2">Width (ft)</span>
              <NumberStepper value={width} onChange={setWidth} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-white mb-2">Length (ft)</span>
              <NumberStepper value={length} onChange={setLength} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-white mb-2">Height (ft)</span>
              <NumberStepper value={height} onChange={setHeight} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-white mb-2">Roof Style</span>
              <Select onValueChange={(v) => setRoofStyle(v)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select Roof Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gable">Gable</SelectItem>
                  <SelectItem value="single-slope">Single slope</SelectItem>
                  <SelectItem value="gambrel">Gambrel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-white mb-2">Roof Pitch</span>
              <Select onValueChange={(v) => setRoofPitch(v)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select Roof Pitch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1:12">1:12</SelectItem>
                  <SelectItem value="2:12">2:12</SelectItem>
                  <SelectItem value="3:12">3:12</SelectItem>
                  <SelectItem value="4:12">4:12</SelectItem>
                  <SelectItem value="5:12">5:12</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-end">
            <Button
              type="button"
              onClick={() => onNext?.()}
              disabled={nextDisabled}
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md shadow w-full sm:w-auto"
            >
              Next to Set Color
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
