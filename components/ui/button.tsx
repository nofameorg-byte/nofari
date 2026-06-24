import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/styles";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary: "border-[#D4AF37] bg-[#D4AF37] text-[#090909] hover:bg-[#C9A331] hover:border-[#C9A331]",
  secondary:
    "border-[#343434] bg-[#1A1A1A] text-[#F5F0E6] hover:border-[#D4AF37] hover:text-[#D4AF37]",
  ghost: "border-transparent bg-transparent text-[#BFB8A8] hover:bg-[#1A1A1A] hover:text-[#D4AF37]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-7 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full border font-semibold tracking-[0.18em] uppercase transition-colors duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]",
          "disabled:cursor-not-allowed disabled:border-[#2A2A2A] disabled:bg-[#222222] disabled:text-[#6E6A61]",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
