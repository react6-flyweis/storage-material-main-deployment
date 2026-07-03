"use client";

import { PropsWithChildren, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from "./ui/dialog";
import { X } from "lucide-react";
import BuildingForm from "./home/BuildingForm";
import tinShed from "@/assets/tin-shed.png";
import Image from "next/image";

type GetAQuoteDialogProps = PropsWithChildren<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

export default function GetAQuoteDialog({
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}: GetAQuoteDialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = (next: boolean) => {
    if (isControlled) {
      controlledOnOpenChange?.(next);
    } else {
      setUncontrolledOpen(next);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isControlled ? (
        children
      ) : (
        <DialogTrigger asChild>{children}</DialogTrigger>
      )}
      <DialogContent className="sm:max-w-4xl p-0 rounded-xl border-0 max-h-[90vh] overflow-y-auto" showCloseButton={false}>
        <DialogTitle className="sr-only">Get a Quote</DialogTitle>
        <DialogDescription className="sr-only">
          Fill out the form below to get a custom quote for your steel building
          project.
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

        <div className="relative overflow-hidden">
          <Image
            src={tinShed}
            alt="Tin Shed"
            className="absolute -top-96 -left-68 opacity-15 -rotate-225 h-full object-cover rounded-r-xl pointer-events-none"
          />
          <BuildingForm isDialog={true} onClose={() => setOpen(false)} />
          <Image
            src={tinShed}
            alt="Tin Shed"
            className="absolute -bottom-96 -right-64 opacity-15 -rotate-45 h-full object-cover rounded-r-xl pointer-events-none"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
