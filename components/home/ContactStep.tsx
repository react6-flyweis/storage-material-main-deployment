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
import { ContactFormData, COUNTRY_CODES } from "@/lib/building-form-schemas";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ContactStepProps {
  form: UseFormReturn<ContactFormData, any, any>;
  onSubmit: (data: ContactFormData) => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export function ContactStep({
  form,
  onSubmit,
  onBack,
  isSubmitting,
}: ContactStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6 text-center">
          What is your email address? <span className="text-red-500">*</span>
        </h3>

        <div className="flex flex-col gap-4 mb-2 w-full max-w-[450px]">
          <FormField<ContactFormData>
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left">Email Address <span className="text-red-500">*</span></FormLabel> */}
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 rounded-xl !h-16 !text-2xl !font-medium bg-gray-100 text-center placeholder:text-muted-foreground placeholder:text-2xl border-0 focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full max-w-[450px]">
            <FormField<ContactFormData>
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-left">Phone Number <span className="text-red-500">*</span></FormLabel> */}
                  <FormControl>
                    <div className="phone-input-container">
                      <PhoneInput
                        country={"us"}
                        value={form.getValues("countryCode") + field.value}
                        onChange={(value, country: any) => {
                          const code = country.dialCode;
                          const number = value.slice(code.length);
                          form.setValue("countryCode", "+" + code);
                          field.onChange(number);
                        }}
                        containerClass="!w-full !h-16"
                        inputClass="!w-full !h-16 !pl-16 !pr-6 !rounded-xl !bg-gray-100 !text-2xl !font-medium !border-none !placeholder:text-muted-foreground !placeholder:text-2xl"
                        buttonClass="!h-16 !bg-gray-100 !border-none !rounded-l-xl !pl-4"
                        dropdownClass="!bg-white !text-black !rounded-xl !shadow-xl !mt-2"
                        dropdownStyle={{ zIndex: 9999 }}
                        placeholder="Phone Number"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Button
            type="submit"
            size="lg"
            className="px-10 py-4 h-16 w-72 text-xl font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
              </span>
            ) : (
              "Price my Building"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
