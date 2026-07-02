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

export function DimensionsStep({
  form,
  onNext,
  onBack,
  isDialog,
}: DimensionsStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="w-full space-y-4">
        <h3 className="text-2xl font-bold mb-5 text-center ">
          Building Dimensions
        </h3>

        {isDialog ? (
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2.5fr_1.2fr] gap-6 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700">Width <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue
                            placeholder="Width"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700">Length <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue
                            placeholder="Length"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center items-center order-first md:order-none mb-4 md:mb-0">
                <Image
                  src={isDialog ? dimension2Img : buildingDimensionsImg}
                  alt="Building Dimensions"
                  className="object-contain w-3/4 md:w-full h-auto scale-105 md:scale-110"
                />
            </div>

            <div className="space-y-4 md:space-y-6">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700">Height <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue
                            placeholder="Height"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10 ft</SelectItem>
                        <SelectItem value="12">12 ft</SelectItem>
                        <SelectItem value="14">14 ft</SelectItem>
                        <SelectItem value="16">16 ft</SelectItem>
                        <SelectItem value="18">18 ft</SelectItem>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="22">22 ft</SelectItem>
                        <SelectItem value="24">24 ft</SelectItem>
                        <SelectItem value="26">26 ft</SelectItem>
                        <SelectItem value="28">28 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem className="relative z-20">
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700">Roof Pitch <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || undefined}>
                      <FormControl>
                        <SelectTrigger className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-gray-100 text-black border-none relative z-30 cursor-pointer">
                          <SelectValue
                            placeholder="Roof Pitch"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0.25:12">0.25:12</SelectItem>
                        <SelectItem value="0.5:12">0.5:12</SelectItem>
                        <SelectItem value="1:12">1:12</SelectItem>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="3:12">3:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="5:12">5:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
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
              <FormField
                control={form.control}
                name="width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left w-full">Width <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-14 text-lg font-semibold bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Width"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left w-full">Length <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-14 text-lg font-semibold bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Length"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                        <SelectItem value="40">40 ft</SelectItem>
                        <SelectItem value="50">50 ft</SelectItem>
                        <SelectItem value="60">60 ft</SelectItem>
                        <SelectItem value="80">80 ft</SelectItem>
                        <SelectItem value="100">100 ft</SelectItem>
                        <SelectItem value="120">120 ft</SelectItem>
                        <SelectItem value="150">150 ft</SelectItem>
                        <SelectItem value="200">200 ft</SelectItem>
                        <SelectItem value="250">250 ft</SelectItem>
                        <SelectItem value="300">300 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left w-full">Height <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-14 text-lg font-semibold bg-gray-100 text-black border-none">
                          <SelectValue
                            placeholder="Height"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10">10 ft</SelectItem>
                        <SelectItem value="12">12 ft</SelectItem>
                        <SelectItem value="14">14 ft</SelectItem>
                        <SelectItem value="16">16 ft</SelectItem>
                        <SelectItem value="18">18 ft</SelectItem>
                        <SelectItem value="20">20 ft</SelectItem>
                        <SelectItem value="22">22 ft</SelectItem>
                        <SelectItem value="24">24 ft</SelectItem>
                        <SelectItem value="26">26 ft</SelectItem>
                        <SelectItem value="28">28 ft</SelectItem>
                        <SelectItem value="30">30 ft</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roofPitch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left w-full">Roof Pitch <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full h-14 text-lg font-semibold border-none bg-gray-100 text-black">
                          <SelectValue
                            placeholder="Roof Pitch"
                            className="text-black"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0.25:12">0.25:12</SelectItem>
                        <SelectItem value="0.5:12">0.5:12</SelectItem>
                        <SelectItem value="1:12">1:12</SelectItem>
                        <SelectItem value="2:12">2:12</SelectItem>
                        <SelectItem value="3:12">3:12</SelectItem>
                        <SelectItem value="4:12">4:12</SelectItem>
                        <SelectItem value="5:12">5:12</SelectItem>
                        <SelectItem value="6:12">6:12</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
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
