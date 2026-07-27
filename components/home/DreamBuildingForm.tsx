"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import useSendQuote from "@/lib/hooks/useSendQuote";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import getErrorMessage from "@/lib/getErrorMessage";

const dreamSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(
      /^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
      "Please enter a valid phone number"
    ),
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  use: z.string().min(1, "Intended use is required"),
  notes: z.string().min(1, "Notes are required"),
});

type DreamFormData = z.infer<typeof dreamSchema>;

export default function DreamBuildingForm() {
  const [success, setSuccess] = React.useState<string | undefined>(undefined);
  const form = useForm<DreamFormData>({
    resolver: zodResolver(dreamSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+1",
      phone: "",
      state: "",
      city: "",
      use: "",
      notes: "",
    },
  });

  const mutation = useSendQuote();

  function onSubmit(data: DreamFormData) {
    setSuccess(undefined);

    // Format phone number
    const rawPhone = data.phone.replace(/[^0-9]/g, "");
    let formattedPhone = data.countryCode + rawPhone;

    if (data.phone.startsWith("+")) {
      formattedPhone = data.phone.replace(/[^0-9+]/g, "");
    }

    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: formattedPhone,
      state: data.state ?? "",
      city: data.city ?? "",
      intendedUse: data.use ?? "",
      notes: data.notes ?? "",
    };

    mutation.mutate(payload, {
      onSuccess: (res) => {
        setSuccess(res?.message ?? "Request sent. We'll be in touch.");
        form.reset();
      },
      onError: (err: unknown) => {
        const msg = getErrorMessage(err, "Submission failed");
        form.setError("root", { message: msg });
      },
    });
  }

  const submitting = mutation.isPending;

  return (
    <div className="mx-auto max-w-lg bg-white text-gray-900 rounded-xl shadow-lg p-6 -mt-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-3"
          noValidate
        >
          <FormField<DreamFormData>
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">First Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<DreamFormData>
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Last Name <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<DreamFormData>
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Email <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full">
            <FormField<DreamFormData>
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm">Phone <span className="text-red-500">*</span></FormLabel>
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
                        containerClass="!w-full !h-10"
                        inputClass="!w-full !h-10 !pl-12 !pr-3 !rounded-md !bg-white !text-sm !border !border-gray-200"
                        buttonClass="!h-10 !bg-white !border !border-gray-200 !rounded-l-md"
                        dropdownClass="!bg-white !text-black !rounded-md !shadow-xl"
                        placeholder="Phone Number"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField<DreamFormData>
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">State <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<DreamFormData>
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">City <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<DreamFormData>
            control={form.control}
            name="use"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Intended Use <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="e.g., garage, warehouse, workshop" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField<DreamFormData>
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Notes <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    rows={3}
                    placeholder="Tell us about your project (size, timeline, special requirements)"
                    className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 bg-white text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <p className="text-sm text-destructive text-center">
              {form.formState.errors.root.message}
            </p>
          )}
          {success && (
            <div className="flex items-center gap-2 justify-center">
              <CheckCircle className="text-green-600" size={18} aria-hidden />
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          <div className="pt-2 flex justify-center">
            <Button
              className="rounded bg-secondary min-w-40"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Get My Quote"}
              <ArrowRight />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
