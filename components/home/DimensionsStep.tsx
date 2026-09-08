"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { DimensionsFormData } from "@/lib/building-form-schemas";
import Image from "next/image";
import buildingDimensionsImg from "@/assets/building-dimensions.webp";
import dimension2Img from "@/assets/dimensions-2.png";
import { cn } from "@/lib/utils";

interface DimensionsStepProps {
  form: UseFormReturn<DimensionsFormData>;
  onNext: (data: DimensionsFormData) => void;
  onBack: () => void;
  isDialog?: boolean;
}

const WIDTH_OPTIONS = ["20", "30", "40", "50", "60", "80", "100", "120", "150", "200", "250", "300"];
const LENGTH_OPTIONS = ["20", "30", "40", "50", "60", "80", "100", "120", "150", "200", "250", "300"];
const HEIGHT_OPTIONS = ["10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30"];
const ROOF_PITCH_OPTIONS = ["0.25:12", "0.5:12", "1:12", "2:12", "3:12", "4:12", "5:12", "6:12"];

export function DimensionsStep({
  form,
  onNext,
  onBack,
  isDialog,
}: DimensionsStepProps) {
  const initialWidth = form.getValues("width") || "";
  const initialLength = form.getValues("length") || "";
  const initialHeight = form.getValues("height") || "";
  const initialRoofPitch = form.getValues("roofPitch") || "";

  const [isCustomWidth, setIsCustomWidth] = useState(
    () => !!initialWidth && !WIDTH_OPTIONS.includes(initialWidth)
  );
  const [isCustomLength, setIsCustomLength] = useState(
    () => !!initialLength && !LENGTH_OPTIONS.includes(initialLength)
  );
  const [isCustomHeight, setIsCustomHeight] = useState(
    () => !!initialHeight && !HEIGHT_OPTIONS.includes(initialHeight)
  );
  const [isCustomRoofPitch, setIsCustomRoofPitch] = useState(
    () => !!initialRoofPitch && !ROOF_PITCH_OPTIONS.includes(initialRoofPitch)
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="w-full space-y-4">
        <h3 className="text-2xl font-bold mb-5 text-center ">
          Building Dimensions
        </h3>

        {isDialog ? (
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2.5fr_1.2fr] gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              {/* Width */}
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700!">
                        Width <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomWidth && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomWidth(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter width (e.g. 45)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomWidth(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue placeholder="Width" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {WIDTH_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Length */}
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700!">
                        Length <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomLength && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomLength(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter length (e.g. 75)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomLength(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue placeholder="Length" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LENGTH_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center items-center order-first md:order-0 mb-4 md:mb-0">
              <Image
                src={isDialog ? dimension2Img : buildingDimensionsImg}
                alt="Building Dimensions"
                className="object-contain w-3/4 md:w-full h-auto scale-105 md:scale-110"
              />
            </div>

            <div className="space-y-4 md:space-y-6">
              {/* Height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700!">
                        Height <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomHeight && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomHeight(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter height (e.g. 15)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomHeight(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue placeholder="Height" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {HEIGHT_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Roof Pitch */}
              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700!">
                        Roof Pitch <span className="text-red-500">*</span>
                      </FormLabel>
                      {isCustomRoofPitch && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomRoofPitch(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                    </div>
                    {isCustomRoofPitch ? (
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="e.g. 1.5:12"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none rounded-md"
                          autoFocus
                        />
                      </FormControl>
                    ) : (
                      <Select
                        onValueChange={(val) => {
                          if (val === "custom" || val === "other") {
                            setIsCustomRoofPitch(true);
                            field.onChange("");
                          } else {
                            field.onChange(val);
                          }
                        }}
                        value={field.value || undefined}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                            <SelectValue placeholder="Roof Pitch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ROOF_PITCH_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom" className="font-semibold text-primary">
                            Custom...
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ) : (
          <>
            <div className="w-full flex justify-center mb-6">
              <div className="max-h-48 relative w-full flex justify-center">
                <Image
                  src={buildingDimensionsImg}
                  alt="Building Dimensions"
                  className="object-contain max-h-56 w-auto scale-105"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              {/* Width */}
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700! text-left">
                        Width <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomWidth && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomWidth(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter width (e.g. 45)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomWidth(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue placeholder="Width" className="text-black" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {WIDTH_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Length */}
              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700! text-left">
                        Length <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomLength && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomLength(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter length (e.g. 75)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomLength(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue placeholder="Length" className="text-black" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {LENGTH_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700! text-left">
                        Height <span className="text-red-500">*</span>
                      </FormLabel>
                      {/* Preset option hidden for now
                      {isCustomHeight && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomHeight(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                      */}
                    </div>
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <Input
                          type="text"
                          placeholder="Enter height (e.g. 15)"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none pr-8 rounded-md"
                        />
                        <span className="absolute right-3 text-xs font-semibold text-slate-500 pointer-events-none">
                          ft
                        </span>
                      </div>
                    </FormControl>
                    {/* Presets and Select commented out for now
                    <Select
                      onValueChange={(val) => {
                        if (val === "custom") {
                          setIsCustomHeight(true);
                          field.onChange("");
                        } else {
                          field.onChange(val);
                        }
                      }}
                      value={field.value || undefined}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-gray-100 text-black border-none">
                          <SelectValue placeholder="Height" className="text-black" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {HEIGHT_OPTIONS.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt} ft
                          </SelectItem>
                        ))}
                        <SelectItem value="custom" className="font-semibold text-primary">
                          Custom...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Roof Pitch */}
              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1">
                      <FormLabel className="text-[13px] font-semibold text-slate-700! text-left">
                        Roof Pitch <span className="text-red-500">*</span>
                      </FormLabel>
                      {isCustomRoofPitch && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomRoofPitch(false);
                            field.onChange("");
                          }}
                          className="text-xs text-primary underline hover:opacity-80"
                        >
                          Select preset
                        </button>
                      )}
                    </div>
                    {isCustomRoofPitch ? (
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="e.g. 1.5:12"
                          value={field.value || ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-full bg-gray-100 text-black border-none rounded-md"
                          autoFocus
                        />
                      </FormControl>
                    ) : (
                      <Select
                        onValueChange={(val) => {
                          if (val === "custom" || val === "other") {
                            setIsCustomRoofPitch(true);
                            field.onChange("");
                          } else {
                            field.onChange(val);
                          }
                        }}
                        value={field.value || undefined}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full border-none bg-gray-100 text-black">
                            <SelectValue placeholder="Roof Pitch" className="text-black" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ROOF_PITCH_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                          <SelectItem value="custom" className="font-semibold text-primary">
                            Custom...
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        )}

        <div className="flex-1"></div>

        <div className="mt-6 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
