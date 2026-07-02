import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { LocationFormData } from "@/lib/building-form-schemas";

interface LocationStepProps {
  form: UseFormReturn<LocationFormData>;
  onNext: (data: LocationFormData) => void;
  onBack: () => void;
}

export function LocationStep({ form, onNext, onBack }: LocationStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-4">
        <h3 className="text-3xl font-bold mb-2 text-center max-w-5xl mx-auto">
          Where will your new building be located?
        </h3>

        <p className="text-center text-muted-foreground mb-8 px-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Where will your new building be located? This is the location where
          the building will be erected. Please be accurate, as the location
          impacts the building codes and restrictions, which impacts the cost.
        </p>

        <FormField
          control={form.control}
          name="postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-center">Zip or Postal Code <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <div className="flex justify-center">
                  <Input
                    {...field}
                    placeholder="Zip or Postal Code"
                    className="w-[400px] h-16 py-4 px-3 text-2xl font-medium rounded-lg bg-gray-100 text-center placeholder:text-muted-foreground placeholder:text-2xl border-none"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-center" />
            </FormItem>
          )}
        />

        <div className="mt-6 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
