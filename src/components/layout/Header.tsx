"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { navItems, primaryPhone } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300",
        scrolled
          ? "bg-white/95 py-2 shadow-[0_1px_0_rgb(23_33_43/0.06),0_8px_24px_-12px_rgb(23_33_43/0.18)] backdrop-blur"
          : "bg-gradient-to-b from-deep-900/70 to-transparent py-4",
      )}
    >
      <div className="container-page flex items-center justify-between gap-6">
        <a href="#trang-chu" aria-label="Hà Thủy Anh — về đầu trang" className="rounded-xl">
          <Logo tone={scrolled ? "light" : "dark"} />
        </a>

        <nav aria-label="Điều hướng chính" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-[0.9rem] font-semibold transition-colors 2xl:px-3.5",
                    scrolled
                      ? "text-ink/80 hover:bg-brand-50 hover:text-brand"
                      : "text-white/85 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${primaryPhone.tel}`}
            className={cn(
              "hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold lg:inline-flex xl:hidden 2xl:inline-flex",
              scrolled ? "text-ink" : "text-white",
            )}
          >
            <Phone aria-hidden className="size-4 text-brand" />
            {primaryPhone.display}
          </a>
          <a
            href="#lien-he"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:inline-flex"
          >
            Nhận báo giá
          </a>
          <MobileNavigation light={!scrolled} />
        </div>
      </div>
    </header>
  );
}
