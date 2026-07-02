"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { BuildingTypeFormData } from "@/lib/building-form-schemas";
import useBuildingTypes from "@/lib/hooks/useBuildingTypes";

// export const buildingTypes = [
//   "Garages",
//   "Workshops",
//   "Barndominiums",
//   "Aviation",
//   "Agricultural",
//   "Warehouses",
//   "Carports",
//   "Arch Buildings",
//   "Sales Storage",
//   "Commercial",
// ];

interface BuildingTypeStepProps {
  form: UseFormReturn<BuildingTypeFormData>;
  onNext: (data: BuildingTypeFormData) => void;
}

export function BuildingTypeStep({ form, onNext }: BuildingTypeStepProps) {
  const { data: types = [], isLoading } = useBuildingTypes();

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What Best Describes Your Building?
        </h3>
        <div className="grid grid-cols-2 gap-3 px-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              aria-hidden
              className="h-14 w-full rounded-lg bg-gray-200 dark:bg-neutral-700 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-2xl font-bold mb-4 text-center">
          What Best Describes Your Building? 
        </h3>

        <FormField
          control={form.control}
          name="buildingType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid grid-cols-2 gap-3">
                  {types.length === 0 ? (
                    <div className="col-span-2 text-center text-sm text-muted-foreground">
                      No building types available.
                    </div>
                  ) : (
                    types.map((t) => (
                      <Button
                        key={t._id}
                        type="button"
                        variant="ghost"
                        className={`w-full text-lg py-5 rounded-lg ${
                          field.value === t.title
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        onClick={() => {
                          field.onChange(t._id);
                          form.handleSubmit(onNext)();
                        }}
                      >
                        {t.title}
                      </Button>
                    ))
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
