import type { SVGProps } from "react";

/* Consistent 24px line icons — quiet, single-stroke, currentColor.
   Replaces emoji so the marks read as a designed set, not defaults. */

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export type IconName = "search" | "eligibility" | "post-award" | "audit";

export function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "search":
      return (
        <svg {...base}>
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "eligibility":
      return (
        <svg {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.2 9.3a2.8 2.8 0 0 1 5.3 1c0 1.9-2.8 2.5-2.8 2.5" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "post-award":
      return (
        <svg {...base}>
          <path d="M3.3 7.3 12 12l8.7-4.7" />
          <path d="M12 12v9.5" />
          <path d="M20.5 7.5v9l-8.5 4.5-8.5-4.5v-9L12 3z" />
        </svg>
      );
    case "audit":
      return (
        <svg {...base}>
          <path d="M12 3 5 6v5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6z" />
          <path d="m9.2 11.8 1.9 1.9 3.7-3.8" />
        </svg>
      );
  }
}
