"use client";

import type { MouseEvent, ReactNode } from "react";

interface ZaloLinkProps {
  /** https://zalo.me/<phone> — used as-is on desktop and as the fallback on mobile. */
  href: string;
  className?: string;
  children: ReactNode;
}

// On phones, zalo.me only redirects to the app via script, which browsers block when it runs
// in a new tab without a user gesture. So on mobile, open the app scheme directly from the tap
// (the same URLs zalo.me itself uses), and fall back to zalo.me if the app did not open.
function appUrl(phone: string) {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return `zalo://qr/link/${phone}`;
  if (/Android/i.test(ua)) return `zalo://zaloapp.com/qr/link/${phone}`;
  return null;
}

export function ZaloLink({ href, className, children }: ZaloLinkProps) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    const url = appUrl(href.split("/").pop() ?? "");
    if (!url) return;
    event.preventDefault();
    const fallback = window.setTimeout(() => {
      if (!document.hidden) window.location.href = href;
    }, 1500);
    document.addEventListener("visibilitychange", () => window.clearTimeout(fallback), { once: true });
    window.location.href = url;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
