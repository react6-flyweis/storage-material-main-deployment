"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Clock,
  Unlock,
  X,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import contactImg from "@/assets/contactusPage/img1.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSendInquire from "@/lib/hooks/useSendInquire";
import getErrorMessage from "@/lib/getErrorMessage";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

// Import react-phone-input-2
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactUsDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Fix hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "1", // Default to US (+1)
      phone: "",
      message: "",
    },
  });

  const mutation = useSendInquire();

  async function onSubmit(data: ContactFormValues) {
    try {
      let formattedPhone = data.phone || "";
      if (formattedPhone) {
        const rawPhone = formattedPhone.replace(/[^0-9]/g, "");
        formattedPhone = "+" + data.countryCode + rawPhone;
      }

      await mutation.mutateAsync({
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: formattedPhone,
        message: data.message,
      });
      form.reset();
      setSuccess(true);
      setTimeout(() => setOpen(false), 2000);
    } catch (err) {
      const message = getErrorMessage(err, "Failed to send message");
      form.setError("root", { type: "server", message });
    }
  }

  React.useEffect(() => {
    if (!open) {
      setSuccess(false);
      form.reset();
    }
  }, [open, form]);

  // Prevent hydration error by returning only children until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-w-[95vw] lg:max-w-[1000px] p-0 rounded-2xl border-white border-2 overflow-y-auto shadow-2xl max-h-[85vh] flex flex-col"
      >
        <DialogTitle className="sr-only">Contact Us</DialogTitle>
        <DialogDescription className="sr-only">
          Get in touch with Steel Building Depot.
        </DialogDescription>

        {/* Fixed Close Button */}
        <DialogClose asChild>
          <button
            className="absolute top-4 right-4 p-2 rounded-full transition-all z-[100] bg-black/60 text-white hover:bg-black/80 lg:bg-black/20 lg:text-white lg:hover:bg-black/40"
            aria-label="Close dialog"
          >
            <X className="size-5 md:size-6" />
          </button>
        </DialogClose>

        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] relative">
            {/* Left Sidebar */}
            <div className="bg-[#07132B] text-white p-8 relative flex flex-col">
              <div className="flex flex-col gap-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-serif font-bold text-[36px] leading-tight text-white">
                    Get in Touch
                  </h2>
                  <p className="font-['Roboto'] font-normal text-[16px] text-white/80 leading-relaxed">
                    Have questions or need a quote? <br /> We’re here to help.
                  </p>
                </div>

                {/* Contact List */}
                <div className="flex flex-col gap-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] bg-[#0932A2]/20 border border-[#0065E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="size-[22px] text-white fill-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Roboto'] font-normal text-[16px]">
                        +1 888-868-8680
                      </span>
                      <span className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">
                        TOLL FREE
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] bg-[#0932A2]/20 border border-[#0065E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="size-[22px] text-white fill-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Roboto'] font-normal text-[16px] break-all">
                        info@steelbuildingdepot.com
                      </span>
                      <span className="text-[11px] text-white/40 uppercase tracking-widest font-semibold">
                        SUPPORT
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] bg-[#0932A2]/20 border border-[#0065E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-[22px] text-white fill-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Roboto'] font-normal text-[16px] leading-tight">
                        1995 G Ave, <br /> Red Oak, IA 51566
                      </span>
                    </div>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="flex flex-col gap-3 mt-2">
                  <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-[2px]">
                    FOLLOW US
                  </h3>
                  <div className="flex items-center gap-3">
                    <Link
                      href="https://www.facebook.com/profile.php?id=61582635286885"
                      className="w-[42px] h-[42px] bg-[#0932A2]/40 border border-[#0065E6] rounded-full flex items-center justify-center transition-all hover:bg-[#0065E6]"
                    >
                      <Facebook className="size-5 text-white" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/113053006/"
                      className="w-[42px] h-[42px] bg-[#0932A2]/40 border border-[#0065E6] rounded-full flex items-center justify-center transition-all hover:bg-[#0065E6]"
                    >
                      <Linkedin className="size-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Image Backdrop */}
              <div className="absolute bottom-14 left-0 right-0 h-[160px] w-full opacity-30 pointer-events-none">
                <Image
                  src={contactImg}
                  alt="Background"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Main Area */}
            <div className="bg-white p-8 md:p-10 flex flex-col justify-between relative">


              {success ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4 py-16">
                  <CheckCircle className="text-green-500 w-12 h-12" />
                  <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 text-center text-sm">
                    We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col gap-6 mt-2"
                    >
                      {/* Name Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField<ContactFormValues>
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <FormLabel className="text-[13px] font-semibold text-slate-700">
                                First Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="First Name"
                                  className="h-[42px] border-slate-200 rounded-lg text-[14px] px-3 focus-visible:ring-blue-600"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField<ContactFormValues>
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <FormLabel className="text-[13px] font-semibold text-slate-700">
                                Last Name <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Last Name"
                                  className="h-[42px] border-slate-200 rounded-lg text-[14px] px-3 focus-visible:ring-blue-600"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email and Phone Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <FormField<ContactFormValues>
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="space-y-1">
                              <FormLabel className="text-[13px] font-semibold text-slate-700">
                                Email <span className="text-red-500">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="Email Address"
                                  className="h-[42px] border-slate-200 rounded-lg text-[14px] px-3 focus-visible:ring-blue-600"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-[100px_1fr] gap-3">
                          <FormField<ContactFormValues>
                            control={form.control}
                            name="countryCode"
                            render={({ field }) => (
                              <FormItem className="space-y-1">
                                <FormLabel className="text-[13px] font-semibold text-slate-700">
                                  Country Code
                                </FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <PhoneInput
                                      country={"us"}
                                      value={field.value}
                                      onChange={(value) => field.onChange(value)}
                                      containerClass="!h-[42px] !w-full"
                                      inputClass="!w-full !h-[42px] !pl-[45px] !border-slate-200 !rounded-lg !text-[14px] !bg-white"
                                      buttonClass="!h-[42px] !border-slate-200 !rounded-l-lg !bg-white"
                                      enableSearch={true}
                                      disableDropdown={false}
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField<ContactFormValues>
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem className="space-y-1">
                                <FormLabel className="text-[13px] font-semibold text-slate-700">
                                  Phone <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="h-[42px] border-slate-200 rounded-lg text-[14px] px-3 focus-visible:ring-blue-600"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Message Row */}
                      <FormField<ContactFormValues>
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="space-y-1">
                            <FormLabel className="text-[13px] font-semibold text-slate-700">
                              Message <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <textarea
                                {...field}
                                placeholder="Tell us about your project..."
                                className="w-full min-h-[90px] p-3 border border-slate-200 rounded-lg text-[14px] placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full h-[38px] bg-[#063BBD] hover:bg-blue-800 text-white text-[14px] transition-all tracking-[2px] rounded-md font-bold"
                      >
                        {form.formState.isSubmitting ? "PROCESSING..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>

                  {/* Footer Section */}
                  <div className="mt-8 flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-4">
                      <div className="h-[1px] bg-slate-100 flex-1" />
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="size-5 text-blue-500" />
                          <p className="font-bold text-[14px] text-slate-800">
                            We typically respond within 24 hours.
                          </p>
                        </div>
                        <p className="text-[12px] text-slate-500 mt-0.5">
                          No obligation. Free quote. Fast response.
                        </p>
                      </div>
                      <div className="h-[1px] bg-slate-100 flex-1" />
                    </div>

                    <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                          <ShieldCheck className="size-8 text-[#003880]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[13px] text-slate-900 leading-tight">No Obligation</span>
                          <span className="text-[11px] text-slate-500">100% Free Quote</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                          <Clock className="size-8 text-[#003880]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[13px] text-slate-900 leading-tight">Fast Response</span>
                          <span className="text-[11px] text-slate-500">Within 24 Hours</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-[42px] h-[42px] flex items-center justify-center">
                          <Unlock className="size-8 text-[#003880]" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[13px] text-slate-900 leading-tight">Your Data is Safe</span>
                          <span className="text-[11px] text-slate-500">We Never Share</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
