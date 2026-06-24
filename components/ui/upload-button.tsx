import { type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export interface UploadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function UploadButton({ className, label, type = "button", ...props }: UploadButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-16 items-center justify-center gap-3 rounded-3xl border border-[#343434] bg-[#1A1A1A] px-6 text-sm font-semibold tracking-[0.18em] text-[#F5F0E6] uppercase transition-colors duration-200",
        "hover:border-[#D4AF37] hover:text-[#D4AF37]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="text-lg leading-none text-[#D4AF37]">
        +
      </span>
      {label}
    </button>
  );
}
