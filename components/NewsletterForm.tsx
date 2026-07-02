"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useNewsletter from "@/lib/hooks/useNewsletter";
import { useEffect } from "react";
import { CheckCircleIcon, Mail } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type FormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values.email);
  };

  const mutation = useNewsletter();

  useEffect(() => {
    if (mutation.isSuccess) {
      form.reset();
    }
  }, [mutation.isSuccess, form]);

  return (
    <div className="w-full max-w-md mx-auto sm:mx-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AAC2] size-5 transition-colors group-focus-within:text-[#0847C2]" />
                    <Input
                      {...field}
                      aria-label="Your email"
                      placeholder="Your email here"
                      className="h-12 pl-12 rounded-lg border-[#E0E3EB] bg-white text-base text-black font-work-sans placeholder:text-[#A3AAC2] focus:ring-2 focus:ring-blue-500/20 focus:border-[#0847C2] transition-all shadow-sm"
                      type="email"
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="h-12 bg-[#0847C2] hover:bg-[#003880] text-white px-8 rounded-lg text-base font-bold transition-all active:scale-95 font-work-sans shadow-md"
            disabled={mutation.isPending || mutation.isSuccess}
          >
            {mutation.isPending ? "..." : "Subscribe"}
          </Button>
        </form>
      </Form>
      
      {form.formState.errors.email && (
        <p className="mt-2 text-xs text-red-500 font-medium">
          {form.formState.errors.email.message}
        </p>
      )}

      {mutation.isError && (
        <p className="mt-2 text-xs text-red-500 font-medium">
          Something went wrong. Please try again.
        </p>
      )}

      {mutation.isSuccess && (
        <p className="mt-2 text-sm text-green-600 flex items-center font-medium">
          <CheckCircleIcon className="mr-1.5 size-4" />
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
}
