import React from "react";
import { PlusIcon, MinusIcon } from "lucide-react";

export default function NumberStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="inline-flex items-center bg-white border border-input rounded-md h-9 overflow-hidden">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="px-3 text-lg text-muted-foreground h-full flex items-center justify-center"
        aria-label="decrease"
      >
        <MinusIcon className="w-4 h-4" />
      </button>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const digits = e.target.value.replace(/\D/g, "");
          onChange(digits ? Number(digits) : 0);
        }}
        className="w-20 text-center bg-transparent outline-none h-full"
      />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="px-3 text-lg text-primary h-full flex items-center justify-center"
        aria-label="increase"
      >
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
