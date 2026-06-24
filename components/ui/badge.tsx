import { type HTMLAttributes } from "react";

import { cn } from "@/lib/styles";

type BadgeVariant = "gold" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  gold: "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]",
  neutral: "border-[#343434] bg-[#1A1A1A] text-[#BFB8A8]",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.18em] uppercase",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
