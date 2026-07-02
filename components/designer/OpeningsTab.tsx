import designerOpeningsImg from "@/assets/designer/designer-openings.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import PreviewOverlay from "./PreviewOverlay";
import { useState } from "react";
import NumberStepper from "./NumberStepper";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function OpeningsTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [type, setType] = useState("Personnel Door");

  return (
    <div className="flex-1 flex h-full flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[360px] bg-secondary p-6 overflow-y-auto pb-28 md:pb-6 flex flex-col min-h-[45vh] md:min-h-0">
        <h2 className="text-lg font-semibold mb-2 text-white">Openings</h2>

        <div className="mt-4">
          <Label className="mb-2 block text-white/90">Type</Label>
          <Select defaultValue={type} onValueChange={(v) => setType(v)}>
            <SelectTrigger className="w-full bg-white text-black rounded-md">
              <SelectValue>{type}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Personnel Door">Personnel Door</SelectItem>
              <SelectItem value="Window">Window</SelectItem>
              <SelectItem value="Roll up Door">Roll up Door</SelectItem>
              <SelectItem value="Sectional Door">Sectional Door</SelectItem>
              <SelectItem value="Framing only">Framing only</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-2 block text-white/90">Width</Label>
            <NumberStepper value={width} onChange={setWidth} />
          </div>
          <div>
            <Label className="mb-2 block text-white/90">Height</Label>
            <NumberStepper value={height} onChange={setHeight} />
          </div>
        </div>

        <div className="mt-6">
          <Button className="w-full">Add Opening</Button>
        </div>

        <div className="hidden md:flex gap-2 mt-auto">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Leantos
          </Button>
          <Button
            size="sm"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="flex-1 rounded"
          >
            Next to Bays
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex-1 bg-[#0b1220] relative min-h-[45vh] md:min-h-0">
        <Image
          src={designerOpeningsImg}
          alt="Openings preview"
          fill
          className="object-cover"
        />
        <PreviewOverlay />
      </div>
    </div>
  );
}
