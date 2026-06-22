"use client";

import { useEffect, useRef, useState } from "react";

const fmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/**
 * The hero hook: a large currency figure that counts up on load. Anchored to a
 * defensible floor for open federal + foundation grant funding a city, county,
 * or nonprofit could pursue. Tabular figures keep the digits from jittering as
 * they tick; prefers-reduced-motion shows the final value immediately.
 */
export function FundingCounter({
  target = 1_000_000_000,
  suffix = "+",
  durationMs = 2200,
}: {
  target?: number;
  suffix?: string;
  durationMs?: number;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setValue(target);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setValue(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    };

    const el = ref.current;
    if (!el) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {fmt.format(value)}
        {suffix}
      </span>
      {/* Screen readers get the stable final value, not the ticking digits */}
      <span className="sr-only">
        {fmt.format(target)}
        {suffix}
      </span>
    </span>
  );
}
