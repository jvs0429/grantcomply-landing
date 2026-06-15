import Link from "next/link";
import type { ReactNode } from "react";

/* Button-styled link. Square corners (4px max). No animations — hover transition only. */
type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-transparent text-fg border border-line-strong hover:border-fg hover:bg-surface",
  ghost: "bg-transparent text-muted hover:text-fg border border-transparent",
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

/* Section wrapper with alternating background support and generous vertical rhythm. */
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

/* Centered section heading with optional kicker label and subheading. */
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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {label}
        </p>
      )}
      <h2 className="font-sans text-3xl font-semibold tracking-[-0.5px] text-fg md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-muted">{sub}</p>}
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
      className={`inline-flex items-center gap-2 rounded-[4px] px-2.5 py-1 text-xs font-medium ${
        live ? "text-live" : "text-coming"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          live ? "bg-live" : "bg-coming"
        }`}
        aria-hidden
      />
      {label}
    </span>
  );
}
