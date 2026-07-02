import designerLeantosImg from "@/assets/designer/designer-leantos.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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

export default function LeantosTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  const [enabled, setEnabled] = useState(true);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [pitch, setPitch] = useState("3:12");

  return (
    <div className="flex-1 flex h-full flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[360px] bg-secondary p-6 overflow-y-auto pb-28 md:pb-6 flex flex-col min-h-[45vh] md:min-h-0">
        <h2 className="text-lg font-semibold mb-2 text-white">
          Individual Bays
        </h2>

        <div className="bg-white text-black rounded-lg p-2 flex items-center justify-between">
          <Label className="font-medium block">Individual Bays</Label>

          <Switch
            checked={enabled}
            onCheckedChange={(v) => setEnabled(Boolean(v))}
          />
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
          <Label className="mb-2 block text-white/90">Roof Pitch</Label>
          <Select defaultValue={pitch} onValueChange={(v) => setPitch(v)}>
            <SelectTrigger className="w-full bg-white text-black rounded-md">
              <SelectValue>{pitch}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0:12">0:12</SelectItem>
              <SelectItem value="1:12">1:12</SelectItem>
              <SelectItem value="2:12">2:12</SelectItem>
              <SelectItem value="3:12">3:12</SelectItem>
              <SelectItem value="4:12">4:12</SelectItem>
              <SelectItem value="5:12">5:12</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="hidden md:flex gap-2 mt-auto">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Edit
          </Button>
          <Button
            size="sm"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="flex-1 rounded"
          >
            Next to Openings
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex-1 bg-[#0b1220] relative min-h-[45vh] md:min-h-0">
        <Image
          src={designerLeantosImg}
          alt="Leantos preview"
          fill
          className="object-cover"
        />
        <PreviewOverlay  />
      </div>
    </div>
  );
}
