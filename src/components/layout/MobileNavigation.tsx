"use client";

import { useRef } from "react";
import { Mail, Menu, Phone, X } from "lucide-react";
import { company, navItems } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function MobileNavigation({ light }: { light: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  };
  // Unlock scrolling synchronously so an in-page anchor clicked in the drawer can scroll.
  const close = () => {
    document.documentElement.style.overflow = "";
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label="Mở menu điều hướng"
        aria-haspopup="dialog"
        className={cn(
          "grid size-11 place-items-center rounded-full transition-colors xl:hidden",
          light ? "text-white hover:bg-white/10" : "text-ink hover:bg-mist",
        )}
      >
        <Menu aria-hidden className="size-6" />
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu điều hướng"
        onClose={() => {
          document.documentElement.style.overflow = "";
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-0 ml-auto h-dvh max-h-none w-[min(22rem,100%)] max-w-none bg-white p-0 backdrop:bg-deep-900/60 backdrop:backdrop-blur-sm open:animate-[drawer-in_.3s_var(--ease-out-soft)]"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={close}
              aria-label="Đóng menu"
              className="grid size-11 place-items-center rounded-full text-ink hover:bg-mist"
            >
              <X aria-hidden className="size-6" />
            </button>
          </div>
          <nav aria-label="Điều hướng di động" className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={close}
                    className="flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold text-ink hover:bg-brand-50 hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-line p-5">
            <a
              href="#lien-he"
              onClick={close}
              className="flex min-h-12 items-center justify-center rounded-full bg-brand font-semibold text-white"
            >
              Nhận báo giá
            </a>
            {company.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="flex min-h-11 items-center gap-3 rounded-xl px-2 font-semibold text-ink"
              >
                <Phone aria-hidden className="size-4 text-brand" />
                {phone.display}
              </a>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="flex min-h-11 items-center gap-3 rounded-xl px-2 text-sm font-medium text-muted"
            >
              <Mail aria-hidden className="size-4 text-brand" />
              {company.email}
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
