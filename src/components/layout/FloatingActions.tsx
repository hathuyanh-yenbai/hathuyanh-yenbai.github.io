"use client";

import { useEffect, useState } from "react";
import { ArrowUp, FileText, Phone } from "lucide-react";
import { primaryPhone } from "@/data/company";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#trang-chu"
        aria-label="Lên đầu trang"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
        className={cn(
          "fixed bottom-6 right-6 z-40 hidden size-12 place-items-center rounded-full bg-deep text-white shadow-lg ring-1 ring-white/10 transition-all duration-300 hover:bg-brand lg:grid",
          visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp aria-hidden className="size-5" />
      </a>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden",
          "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
          visible ? "translate-y-0" : "translate-y-full",
        )}
        aria-hidden={!visible}
      >
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={`tel:${primaryPhone.tel}`}
            tabIndex={visible ? 0 : -1}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-brand font-semibold text-brand"
          >
            <Phone aria-hidden className="size-4" />
            <span className="whitespace-nowrap">Gọi ngay</span>
            <span className="sr-only"> {primaryPhone.display}</span>
          </a>
          <a
            href="#lien-he"
            tabIndex={visible ? 0 : -1}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand font-semibold text-white"
          >
            <FileText aria-hidden className="size-4" />
            Nhận báo giá
          </a>
        </div>
      </div>
    </>
  );
}
