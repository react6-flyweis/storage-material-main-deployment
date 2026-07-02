import Image from "next/image";
import { useEffect } from "react";
import checkImg from "@/assets/check.png";
import { Button } from "../ui/button";

type Props = {
  status?: "idle" | "loading" | "success" | "error";
  message?: string;
  isDialog?: boolean;
  onBack?: () => void;
};

export function ConfirmationStep({
  status = "idle",
  message,
  isDialog,
  onBack,
}: Props) {
  useEffect(() => {
    if (!isDialog && status === "success" && typeof onBack === "function") {
      const t = setTimeout(() => onBack(), 2000);
      return () => clearTimeout(t);
    }
    return;
  }, [isDialog, status, onBack]);
  if (status === "loading") {
    return (
      <div className="py-8 text-center">
        <div className="text-lg font-medium">Sending request…</div>
        <div className="mt-4 text-sm text-muted-foreground">
          Please wait while we submit your quote request.
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mt-4 text-center">
        <div className="text-6xl">❌</div>
        <h3 className="text-2xl font-bold mb-2">Submission failed</h3>
        <p className="text-sm text-muted-foreground px-6">
          {message ?? "Something went wrong. Please try again."}
        </p>
        {onBack && (
          <div className="mt-6 flex items-center justify-center">
            <button
              className="px-4 py-2 bg-black text-white rounded-full"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-4 text-center py-8">
      <div className="flex justify-center mb-8">
        <Image src={checkImg} alt="Checkmark" className="max-h-52 max-w-52" />
      </div>

      <h3 className="text-4xl font-bold mb-4">Thank you for your request!</h3>
      <p className="text-lg text-muted-foreground px-6 max-w-2xl mx-auto leading-relaxed">
        {message
          ? message
          : "A Building Specialist is looking at which Clearance Buildings we have in stock that meet the wind, snow and seismic loads for your exact location. They will be in touch within 1 business day with your free quote."}
      </p>
      {/* add a back button */}
      {isDialog && (
        <div className="mt-6 flex items-center justify-center">
          <Button size="lg" onClick={onBack}>
            Back to Home
          </Button>
        </div>
      )}
    </div>
  );
}
