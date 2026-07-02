import designerEditImg from "@/assets/designer/designer-edit.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import PreviewOverlay from "./PreviewOverlay";

type TabNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
};

export default function EditTab({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: TabNavProps) {
  return (
    <div className="flex-1 flex h-full flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-[360px] bg-secondary text-white p-4 overflow-y-auto pb-28 md:pb-6 min-h-[45vh] md:min-h-0">
        <h2 className="text-lg font-semibold mb-2">Color</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-white p-2 rounded-lg">
            <div className="size-13 bg-gray-700 rounded" />
            <div className="flex-1">
              <Label className="text-base font-medium text-black mb-1 block">
                Wall Color
              </Label>
              <Select defaultValue="charcoal-gray">
                <SelectTrigger className="w-full border-gray-300 text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="charcoal-gray">Charcoal Gray</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-lg">
            <div className="size-13 bg-slate-400 rounded" />
            <div className="flex-1">
              <Label className="text-base font-medium text-black mb-1 block">
                Roof Color
              </Label>
              <Select defaultValue="charcoal-plus">
                <SelectTrigger className="w-full border-gray-300 text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="charcoal-plus">Charcoal Plus</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-lg">
            <div className="size-13 bg-slate-300 rounded" />
            <div className="flex-1">
              <Label className="text-base font-medium text-black mb-1 block">
                Trim Color
              </Label>
              <Select defaultValue="snow-white">
                <SelectTrigger className="w-full border-gray-300 text-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="snow-white">Snow white</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold mt-8 mb-1">Sheeting profile</h2>
        <Select defaultValue="pbr-panel-24g">
          <SelectTrigger className="w-full bg-white text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pbr-panel-24g">PBR Panel 24G</SelectItem>
          </SelectContent>
        </Select>

        <h2 className="font-semibold mt-6 mb-1">Wainscot</h2>
        <div className="bg-white p-2 rounded-lg flex items-center justify-between">
          <Label className="text-base text-gray-600">Has Wainscot</Label>
          <Switch />
        </div>

        <h2 className="font-semibold mt-6 mb-1">Roof Only Bays</h2>
        <div className="space-y-3">
          <Input
            className="bg-white text-black"
            placeholder="Bays with roof only - Endwall A"
          />

          <Input
            className="bg-white text-black"
            placeholder="Bays with roof only - Endwall B"
          />
        </div>

        <div className="hidden md:flex mt-8 gap-2">
          <Button
            size="sm"
            onClick={() => onPrev?.()}
            disabled={prevDisabled}
            className="flex-1 bg-white/20 rounded"
          >
            <ArrowLeftIcon />
            Back to Dimensions
          </Button>
          <Button
            size="sm"
            onClick={() => onNext?.()}
            disabled={nextDisabled}
            className="flex-1 rounded"
          >
            Next to Leantos
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex-1 bg-[#0b1220] relative min-h-[45vh] md:min-h-0">
        <Image
          src={designerEditImg}
          alt="Building design preview"
          fill
          className="object-cover"
        />
        <PreviewOverlay />
      </div>
    </div>
  );
}
