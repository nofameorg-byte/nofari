import { type HTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export type SectionContainerProps = HTMLAttributes<HTMLElement>;

export function SectionContainer({ className, ...props }: SectionContainerProps) {
  return (
    <section
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
