"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-accent text-sm font-semibold text-white">
            G
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.3px] text-ink">
            GrantComply
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={nav.ctas.login.href}
            className="text-sm text-muted transition-colors duration-200 hover:text-ink"
          >
            {nav.ctas.login.label}
          </a>
          <Link
            href={nav.ctas.signup.href}
            className="btn-base bg-accent px-4 py-3 text-sm text-white shadow-[var(--shadow-card)] transition-colors duration-200 hover:bg-accent-hover"
          >
            {nav.ctas.signup.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-ink md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="container-site flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-[6px] px-2 py-2.5 text-fg transition-colors duration-200 hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            <a
              href={nav.ctas.login.href}
              className="rounded-[6px] px-2 py-2.5 text-fg"
            >
              {nav.ctas.login.label}
            </a>
            <Link
              href={nav.ctas.signup.href}
              onClick={() => setMobileOpen(false)}
              className="btn-base mt-1 bg-accent text-white"
            >
              {nav.ctas.signup.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
