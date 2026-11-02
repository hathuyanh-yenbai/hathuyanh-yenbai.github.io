"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import {
  featuredProjects,
  projectCategories,
  type ProjectCategoryId,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";

type Filter = ProjectCategoryId | "all";

const labelOf = (id: ProjectCategoryId) =>
  projectCategories.find((category) => category.id === id)?.label ?? "";

// 13 = featured tile (2×2) + 12 tiles → fills a 4-column grid evenly.
const INITIAL_COUNT = 13;

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const filters = useMemo(
    () =>
      projectCategories.filter((category) =>
        featuredProjects.some((project) => project.category === category.id),
      ),
    [],
  );

  const filtered = useMemo(
    () =>
      filter === "all"
        ? featuredProjects
        : featuredProjects.filter((project) => project.category === filter),
    [filter],
  );
  const visible = expanded || filter !== "all" ? filtered : filtered.slice(0, INITIAL_COUNT);
  const active = activeIndex === null ? null : filtered[activeIndex];

  const open = (index: number) => {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta: number) =>
      setActiveIndex((index) =>
        index === null ? index : (index + delta + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, step]);

  return (
    <>
      <div role="group" aria-label="Lọc công trình theo loại" className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {[{ id: "all" as const, label: "Tất cả" }, ...filters].map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition-colors",
              filter === item.id
                ? "border-deep bg-deep text-white"
                : "border-line bg-white text-ink/80 hover:border-brand hover:text-brand",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Đang hiển thị {filtered.length} công trình
      </p>

      <motion.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => {
            const featured = filter === "all" && index === 0;
            return (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(featured && "sm:col-span-2 lg:row-span-2")}
              >
                <ProjectCard
                  project={project}
                  categoryLabel={labelOf(project.category)}
                  featured={featured}
                  onOpen={() => open(index)}
                />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {filter === "all" && filtered.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="min-h-12 rounded-full border border-ink/15 px-7 text-[0.95rem] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            {expanded ? "Thu gọn" : `Xem thêm ${filtered.length - INITIAL_COUNT} công trình nhà dân`}
          </button>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-label={active ? `Ảnh công trình: ${active.name}` : "Ảnh công trình"}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-auto max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-deep-900/90 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-8">
            <div className="flex items-start justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
                  {labelOf(active.category)} · {activeIndex! + 1}/{filtered.length}
                </p>
                <p className="mt-1 text-lg font-bold sm:text-2xl">{active.name}</p>
                {active.location && (
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                    <MapPin aria-hidden className="size-3.5" />
                    {active.location}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Đóng"
                autoFocus
                className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <X aria-hidden className="size-5" />
              </button>
            </div>
            <div className="relative mt-5 aspect-[4/3] max-h-[72vh] w-full overflow-hidden rounded-2xl bg-black/40 sm:aspect-[16/10]">
              <Image
                key={active.image}
                src={active.image}
                alt={active.name}
                fill
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Ảnh trước"
                className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white hover:bg-black/70 sm:left-4"
              >
                <ChevronLeft aria-hidden className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Ảnh tiếp theo"
                className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white hover:bg-black/70 sm:right-4"
              >
                <ChevronRight aria-hidden className="size-6" />
              </button>
            </div>
            <p className="mt-4 text-center text-xs text-white/55">
              Ảnh trích từ Hồ sơ năng lực Hà Thủy Anh 2026. Dùng phím ← → để chuyển ảnh, Esc để đóng.
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
