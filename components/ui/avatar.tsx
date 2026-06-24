import { type SVGAttributes } from "react";

import { cn } from "@/lib/styles";

type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends SVGAttributes<SVGSVGElement> {
  size?: AvatarSize;
  title?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: "size-16",
  md: "size-28",
  lg: "size-44 sm:size-52",
};

export function Avatar({ className, size = "md", title = "NOFARI avatar", ...props }: AvatarProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label={title}
      className={cn(sizes[size], className)}
      {...props}
    >
      <title>{title}</title>
      <rect width="240" height="240" rx="72" fill="#1A1A1A" />
      <path
        d="M120 36c44 0 76 34 76 78v44c0 27-22 49-49 49H93c-27 0-49-22-49-49v-44c0-44 32-78 76-78Z"
        fill="#090909"
        stroke="#D4AF37"
        strokeWidth="6"
      />
      <path
        d="M73 116c5-30 23-48 47-48s42 18 47 48c-12-14-27-21-47-21s-35 7-47 21Z"
        fill="#D4AF37"
      />
      <path
        d="M75 124c0-25 20-45 45-45s45 20 45 45v21c0 25-20 45-45 45s-45-20-45-45v-21Z"
        fill="#F5F0E6"
      />
      <path
        d="M81 123c12-18 25-27 39-27s27 9 39 27v-11c0-25-17-43-39-43S81 87 81 112v11Z"
        fill="#090909"
      />
      <circle cx="102" cy="137" r="5" fill="#090909" />
      <circle cx="138" cy="137" r="5" fill="#090909" />
      <path
        d="M105 162c9 7 21 7 30 0"
        fill="none"
        stroke="#090909"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M54 174c16 22 38 33 66 33s50-11 66-33"
        fill="none"
        stroke="#D4AF37"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  );
}
