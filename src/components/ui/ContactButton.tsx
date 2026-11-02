import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-light" | "outline" | "ghost-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_24px_-8px_rgb(33_139_33/0.6)] hover:bg-brand-600 active:bg-brand-700",
  outline: "border border-ink/15 text-ink hover:border-brand hover:text-brand",
  "outline-light": "border border-white/35 text-white hover:border-white hover:bg-white/10",
  "ghost-light": "text-white/85 hover:text-white",
};

interface ContactButtonProps extends ComponentProps<"a"> {
  variant?: Variant;
}

export function ContactButton({ variant = "primary", className, ...props }: ContactButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
