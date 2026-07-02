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
import { NameFormData } from "@/lib/building-form-schemas";

interface NameStepProps {
  form: UseFormReturn<NameFormData>;
  onNext: (data: NameFormData) => void;
  onBack: () => void;
}

export function NameStep({ form, onNext, onBack }: NameStepProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6 w-full max-w-2xl mx-auto flex flex-col items-center">
        <h3 className="text-3xl font-bold mb-6 text-center">
          What is your name? <span className="text-red-500">*</span>
        </h3>

        <div className="flex flex-col gap-4 mb-8 w-full items-center">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full max-w-[400px]">
                {/* <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 ">First Name <span className="text-red-500">*</span></FormLabel> */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="First Name"
                    className="w-full h-16 py-4 px-6 text-2xl font-medium rounded-lg bg-gray-100 text-center placeholder:text-muted-foreground placeholder:text-2xl border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full max-w-[400px]">
                {/* <FormLabel className="text-[13px] font-semibold mb-1 block !text-slate-700 text-center">Last Name <span className="text-red-500">*</span></FormLabel> */}
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Last Name"
                    className="w-full h-16 py-4 px-6 text-2xl font-medium rounded-lg bg-gray-100 text-center placeholder:text-muted-foreground placeholder:text-2xl border-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-40 flex items-center justify-center">
          <Button type="submit" size="lg" className="px-8 py-3 h-14 w-40">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
}
