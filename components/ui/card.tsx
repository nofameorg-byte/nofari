import { type HTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-[#2A2A2A] bg-[#1A1A1A] p-6 text-[#F5F0E6]",
        className,
      )}
      {...props}
    />
  );
}
