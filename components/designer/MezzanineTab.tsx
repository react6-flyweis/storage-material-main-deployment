import designerMezzImg from "@/assets/designer/designer-mezzanine.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import PreviewOverlay from "./PreviewOverlay";
import { useState } from "react";
import NumberStepper from "./NumberStepper";
import { Switch } from "@/components/ui/switch";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function MezzanineTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  const [enabled, setEnabled] = useState(true);
  const [height, setHeight] = useState(0);

  return (
    <div className="flex-1 flex h-full flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[360px] bg-secondary p-6 overflow-y-auto pb-28 md:pb-6 flex flex-col min-h-[45vh] md:min-h-0">
        <div className="">
          <Label className="mb-2 block text-white/90">Mezzanine</Label>
          <div className="flex items-center gap-4 bg-white/5 p-3 rounded">
            <div className="flex-1 text-white">Mezzanine</div>
            <Switch
              checked={enabled}
              onCheckedChange={(v) => setEnabled(!!v)}
            />
          </div>
        </div>

        <div className="mt-6">
          <Label className="mb-2 block text-white/90">Height</Label>
          <NumberStepper value={height} onChange={setHeight} />
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Bays
          </Button>
          <Button
            size="sm"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="flex-1 rounded"
          >
            Next to Props
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex-1 bg-[#0b1220] relative min-h-[45vh] md:min-h-0">
        <Image
          src={designerMezzImg}
          alt="Mezzanine preview"
          fill
          className="object-cover"
        />
        <PreviewOverlay />
      </div>
    </div>
  );
}
