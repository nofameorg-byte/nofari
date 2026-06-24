import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/styles";

type MessageTone = "user" | "nofari" | "system";

export interface MessageBubbleProps extends HTMLAttributes<HTMLDivElement> {
  tone?: MessageTone;
  meta?: ReactNode;
}

const tones: Record<MessageTone, string> = {
  user: "ml-auto border-[#D4AF37] bg-[#D4AF37] text-[#090909]",
  nofari: "mr-auto border-[#343434] bg-[#1A1A1A] text-[#F5F0E6]",
  system: "mx-auto border-[#343434] bg-transparent text-[#BFB8A8]",
};

export function MessageBubble({
  children,
  className,
  meta,
  tone = "nofari",
  ...props
}: MessageBubbleProps) {
  return (
    <div
      className={cn(
        "max-w-[min(42rem,85%)] rounded-[1.75rem] border px-5 py-4 text-base leading-7",
        tones[tone],
        className,
      )}
      {...props}
    >
      {meta ? (
        <div className="mb-2 text-xs font-semibold tracking-[0.18em] uppercase">{meta}</div>
      ) : null}
      {children}
    </div>
  );
}
