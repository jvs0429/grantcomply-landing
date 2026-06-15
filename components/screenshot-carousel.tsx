"use client";

import { useEffect, useState } from "react";
import type { Screenshot } from "@/lib/content";

export function ScreenshotCarousel({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [active, setActive] = useState(0);
  // Track which images actually exist/loaded. Until then we render a designed
  // placeholder. This is robust to images 404-ing during SSR (where onError
  // never reaches React after hydration). Drop real PNGs in and they appear.
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const count = screenshots.length;

  useEffect(() => {
    screenshots.forEach((shot, i) => {
      const img = new Image();
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
      img.src = shot.src;
    });
  }, [screenshots]);

  const go = (next: number) => setActive((next + count) % count);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-[4px] border border-line bg-surface">
        {/* Browser-chrome frame */}
        <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>

        <div className="relative aspect-[16/10] w-full">
          {screenshots.map((shot, i) => (
            <div
              key={shot.src}
              className="absolute inset-0 transition-opacity duration-300 ease-in-out"
              style={{
                opacity: i === active ? 1 : 0,
                pointerEvents: i === active ? "auto" : "none",
              }}
              aria-hidden={i !== active}
            >
              {loaded[i] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(135deg,#15171e_0%,#1a1a1a_100%)] p-8 text-center">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-[4px] border border-line text-xl text-faint"
                    aria-hidden
                  >
                    ▦
                  </span>
                  <p className="max-w-md text-sm leading-relaxed text-muted">
                    {shot.alt}
                  </p>
                  <span className="text-xs uppercase tracking-[0.15em] text-faint">
                    Product screenshot
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[4px] border border-line bg-bg/80 text-fg backdrop-blur transition-colors duration-200 hover:bg-bg"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-[4px] border border-line bg-bg/80 text-fg backdrop-blur transition-colors duration-200 hover:bg-bg"
            >
              ›
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === active
                  ? "w-6 bg-accent"
                  : "w-2 bg-line-strong hover:bg-muted"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
