import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] sm:text-sm",
          dark ? "text-brand-300" : "text-brand",
        )}
      >
        <span aria-hidden className="hex inline-block size-3 bg-current" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/75" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
