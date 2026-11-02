import Image from "next/image";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-11 shrink-0 place-items-center rounded-xl sm:size-12",
          tone === "dark" ? "bg-white" : "bg-white ring-1 ring-line",
        )}
      >
        <Image
          src="/images/branding/logo-mark.png"
          alt=""
          width={507}
          height={341}
          className="h-auto w-9 sm:w-10"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "whitespace-nowrap text-lg font-extrabold tracking-wide sm:text-xl",
            tone === "dark" ? "text-white" : "text-brand",
          )}
        >
          {company.brand}
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.12em] sm:text-[0.66rem]",
            tone === "dark" ? "text-white/60" : "text-muted",
          )}
        >
          {company.tagline}
        </span>
      </span>
    </span>
  );
}
