import Image from "next/image";
import { MapPin, Maximize2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  categoryLabel: string;
  onOpen: () => void;
  featured?: boolean;
}

export function ProjectCard({ project, categoryLabel, onOpen, featured }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Xem ảnh lớn: ${project.name}`}
      className={cn(
        "group relative block h-full w-full overflow-hidden rounded-2xl bg-deep text-left text-white sm:rounded-3xl",
        featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]",
      )}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-deep-900/95 via-deep-900/50 via-45% to-deep-900/0" />
      <span
        aria-hidden
        className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/15 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <Maximize2 className="size-4" />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-300">
          {categoryLabel}
        </span>
        <span className={cn("mt-1.5 block font-bold leading-snug", featured ? "text-xl sm:text-2xl" : "text-lg")}>
          {project.name}
        </span>
        {project.location && (
          <span className="mt-1.5 flex items-center gap-1.5 text-sm text-white/75">
            <MapPin aria-hidden className="size-3.5 shrink-0" />
            {project.location}
          </span>
        )}
      </span>
    </button>
  );
}
