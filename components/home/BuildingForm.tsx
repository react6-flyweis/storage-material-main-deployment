"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import googleBusinessLogo from "@/assets/home/google-business.png";
import bbbLogo from "@/assets/home/bbb.png";
import iasLogo from "@/assets/home/ias.png";

import {
  buildingTypeSchema,
  dimensionsSchema,
  locationSchema,
  nameSchema,
  contactSchema,
  type BuildingTypeFormData,
  type DimensionsFormData,
  type LocationFormData,
  type NameFormData,
  type ContactFormData,
  type FullBuildingFormData,
} from "@/lib/building-form-schemas";

import { BuildingTypeStep } from "./BuildingTypeStep";
import { DimensionsStep } from "./DimensionsStep";
import { LocationStep } from "./LocationStep";
import { NameStep } from "./NameStep";
import { ContactStep } from "./ContactStep";
import { ConfirmationStep } from "./ConfirmationStep";
import { PhoneIcon } from "lucide-react";
import useSendQuote from "@/lib/hooks/useSendQuote";
import getErrorMessage from "@/lib/getErrorMessage";

export default function BuildingForm({
  isDialog = false,
  onClose,
}: {
  isDialog?: boolean;
  onClose?: () => void;
}) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<FullBuildingFormData>>({});
  const [phone, setPhone] = useState<string>("+1 888-868-8680");

  useEffect(() => {
    let mounted = true;
    const fetchContact = async () => {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) return;
        const json = await res.json();
        const cd = json?.data ?? null;
      } catch (e) {
        // ignore and keep fallback
      }
    };
    fetchContact();
    return () => {
      mounted = false;
    };
  }, []);

  const totalSteps = 6;
  const progressPercentage = `${(step / totalSteps) * 100}%`;

  const buildingTypeForm = useForm<BuildingTypeFormData>({
    resolver: zodResolver(buildingTypeSchema),
    defaultValues: {
      buildingType: formData.buildingType || "",
    },
  });

  const dimensionsForm = useForm<DimensionsFormData>({
    resolver: zodResolver(dimensionsSchema),
    defaultValues: {
      width: formData.width || "",
      length: formData.length || "",
      height: formData.height || "",
      roofPitch: formData.roofPitch || "",
    },
  });

  const locationForm = useForm<LocationFormData>({
    resolver: zodResolver(locationSchema),
    defaultValues: {
      postalCode: formData.postalCode || "",
    },
  });

  const nameForm = useForm<NameFormData>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
    },
  });

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: formData.email || "",
      countryCode: formData.countryCode || "+1",
      phoneNumber: formData.phoneNumber || "",
    },
  });

  const handleBuildingTypeNext = (data: BuildingTypeFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleDimensionsNext = (data: DimensionsFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleLocationNext = (data: LocationFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(4);
  };

  const handleNameNext = (data: NameFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(5);
  };

  const handleContactSubmit = async (data: ContactFormData) => {
    const finalData = {
      ...formData,
      ...data,
    } as Partial<FullBuildingFormData> & ContactFormData;
    setFormData(finalData);
    setSubmissionStatus("loading");
    try {
      await sendQuote(finalData);
    } catch (e) {
    }
  };

  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | undefined>(
    undefined
  );

  const sendQuoteMutation = useSendQuote();
  const sendQuote = async (
    payload: Partial<FullBuildingFormData> & ContactFormData
  ) => {
    let formattedPhone = (payload.phoneNumber as string).replace(/[^0-9+]/g, "");
    if (!formattedPhone.startsWith("+")) {
      if (formattedPhone.length === 10) {
        formattedPhone = "+1" + formattedPhone;
      } else if (
        formattedPhone.length === 11 &&
        formattedPhone.startsWith("1")
      ) {
        formattedPhone = "+" + formattedPhone;
      }
    }

    const apiPayload = {
      buildingTypeId: (payload.buildingType as string) || "",
      width: payload.width || "",
      length: payload.length || "",
      height: payload.height || "",
      roofPitch: payload.roofPitch || "",
      zipCode: (payload.postalCode as string) || "",
      firstName: payload.firstName || "",
      lastName: payload.lastName || "",
      email: payload.email || "",
      phoneNumber: formattedPhone,
    };

    try {
      setSubmissionStatus("loading");
      const res = await sendQuoteMutation.mutateAsync(apiPayload);
      setServerMessage(res?.message ?? "Request submitted successfully.");
      setSubmissionStatus("success");
      setStep(6);
    } catch (err) {
      const message = getErrorMessage(err);
      setServerMessage(message ?? "Failed to send request. Please try again.");
      setSubmissionStatus("error");
      setStep(6);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="relative flex flex-col rounded-xl overflow-hidden h-full">
      <div className={cn(
        "flex-1 p-5 mx-auto flex flex-col items-center justify-center w-full transition-all duration-500",
        (step === 2 || step === 3 || step === 4 || step === 5) ? "max-w-3xl" : "max-w-xl"
      )}>
        {step !== 6 && (
          <div className="flex gap-3 md:gap-6 mb-5 items-center w-full">
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={googleBusinessLogo}
                alt="Google Business Logo"
                className="max-h-10 md:max-h-16 object-contain"
              />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src={bbbLogo}
                alt="Better Business Bureau Logo"
                className="max-h-10 md:max-h-16 object-contain"
              />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Image
                src={iasLogo}
                alt="IAS Logo"
                className="max-h-10 md:max-h-16 object-contain"
              />
            </div>
          </div>
        )}

        <div className="w-full relative overflow-visible flex flex-col items-center min-h-[350px] justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              {step === 1 && (
                <BuildingTypeStep
                  form={buildingTypeForm}
                  onNext={handleBuildingTypeNext}
                />
              )}

              {step === 2 && (
                <DimensionsStep
                  form={dimensionsForm}
                  onNext={handleDimensionsNext}
                  onBack={goBack}
                  isDialog={isDialog}
                />
              )}

              {step === 3 && (
                <LocationStep
                  form={locationForm}
                  onNext={handleLocationNext}
                  onBack={goBack}
                />
              )}

              {step === 4 && (
                <NameStep form={nameForm} onNext={handleNameNext} onBack={goBack} />
              )}

              {step === 5 && (
                <ContactStep
                  form={contactForm}
                  onSubmit={handleContactSubmit}
                  onBack={goBack}
                  isSubmitting={submissionStatus === "loading"}
                />
              )}

              {step === 6 && (
                <div className="w-full max-w-xl mx-auto text-center">
                  <ConfirmationStep
                    isDialog={isDialog}
                    status={submissionStatus}
                    message="A Building Specialist is looking at which Clearance Buildings we have in stock that meet the wind, snow and seismic loads for your exact location. They will be in touch within 1 business day with your free quote."
                    onBack={() => {
                      setSubmissionStatus("idle");
                      if (isDialog) {
                        onClose?.();
                      } else {
                        setStep(1);
                      }
                    }}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {(isDialog || step === 1) && (
          <div className="w-full">
            <div className="mt-6 flex items-center w-full">
              <span className="flex-1 h-px bg-linear-to-r from-black/10 via-black/30 to-black/10" />
              <span className="px-4 text-sm text-muted-foreground">Or</span>
              <span className="flex-1 h-px bg-linear-to-l from-black/10 via-black/30 to-black/10" />
            </div>

            <div className="mt-4 flex items-center justify-center">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-full shadow-md"
              >
                <PhoneIcon className="fill-primary text-primary" />
                {phone}
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 h-3 w-full">
        <div
          className="bg-linear-to-r from-[#003880] to-primary h-full transition-all duration-500 rounded-r-full"
          style={{ width: progressPercentage }}
        ></div>
      </div>
    </div>
  );
}
