import Link from "next/link";
import { StatusBadge } from "./primitives";
import type { Vertical } from "@/lib/content";

export function VerticalsGrid({ verticals }: { verticals: Vertical[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {verticals.map((v) => (
        <Link
          key={v.slug}
          href={v.href}
          className="group flex min-h-[240px] flex-col justify-between rounded-[4px] border border-line bg-bg p-7 transition-colors duration-200 hover:border-line-strong hover:bg-surface-2"
        >
          <div>
            <div className="mb-4 text-3xl" aria-hidden>
              {v.icon}
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.3px] text-fg">
              {v.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {v.tagline}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <StatusBadge status={v.status} label={v.statusLabel} />
            <span className="text-sm text-faint transition-colors duration-200 group-hover:text-accent">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
