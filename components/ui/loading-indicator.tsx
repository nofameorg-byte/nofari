import { type HTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export interface LoadingIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function LoadingIndicator({
  className,
  label = "Loading",
  ...props
}: LoadingIndicatorProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center gap-3 text-sm text-[#BFB8A8]", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="size-5 animate-spin rounded-full border-2 border-[#343434] border-t-[#D4AF37]"
      />
      <span>{label}</span>
    </div>
  );
}
