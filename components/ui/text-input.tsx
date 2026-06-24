import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "min-h-12 w-full rounded-2xl border border-[#343434] bg-[#1A1A1A] px-5 text-base text-[#F5F0E6]",
          "placeholder:text-[#6E6A61]",
          "focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className,
        )}
        {...props}
      />
    );
  },
);

TextInput.displayName = "TextInput";
