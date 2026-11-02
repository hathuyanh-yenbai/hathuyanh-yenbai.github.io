"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { formatNumber } from "@/lib/utils";

export function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = formatNumber(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  // Server-rendered with the final value so the number is correct without JS.
  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(value)}
    </span>
  );
}
