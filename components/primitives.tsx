import Link from "next/link";
import type { ReactNode } from "react";

/* Button-styled link. Softly rounded (6px). Hover transition only. */
type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClass: Record<ButtonVariant, string> = {
  // Blue, the single action color.
  primary:
    "bg-accent text-white border border-transparent shadow-[var(--shadow-card)] hover:bg-accent-hover",
  // Outline — accessible on white, doesn't compete with the primary.
  secondary:
    "bg-bg text-ink border border-line-strong hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-muted border border-transparent hover:text-ink",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  const external = href.startsWith("http");
  const cls = `btn-base ${variantClass[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* Section wrapper with alternating background and generous vertical rhythm. */
export function Section({
  children,
  alt = false,
  id,
  className = "",
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-surface" : "bg-bg"} py-20 md:py-28 ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

/* Centered section heading with optional eyebrow label and subheading. */
export function SectionHeading({
  label,
  title,
  sub,
}: {
  label?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {label && (
        <p className="eyebrow mb-4 text-accent-alt-strong">{label}</p>
      )}
      <h2 className="font-serif text-3xl font-medium tracking-[-0.4px] text-ink md:text-[40px] md:leading-[1.1]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{sub}</p>
      )}
    </div>
  );
}

export function StatusBadge({
  status,
  label,
}: {
  status: "live" | "coming";
  label: string;
}) {
  const live = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${
        live
          ? "bg-accent-alt-soft text-accent-alt-strong"
          : "bg-surface-2 text-muted"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-accent-alt" : "bg-coming"
        }`}
        aria-hidden
      />
      {label}
    </span>
  );
}
