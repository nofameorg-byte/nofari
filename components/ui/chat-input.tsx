import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/styles";

export interface ChatInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ className, containerClassName, rows = 5, ...props }, ref) => {
    return (
      <div
        className={cn(
          "rounded-[2rem] border border-[#343434] bg-[#1A1A1A] p-4 transition-colors duration-200",
          "focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20",
          containerClassName,
        )}
      >
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            "min-h-36 w-full resize-none bg-transparent px-3 py-2 text-lg leading-8 text-[#F5F0E6] outline-none",
            "placeholder:text-[#6E6A61]",
            "disabled:cursor-not-allowed disabled:opacity-60",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

ChatInput.displayName = "ChatInput";
