"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <div className="container-site flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-accent text-sm font-bold text-white">
            G
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.3px] text-fg">
            GrantComply
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-fg"
              aria-expanded={productOpen}
            >
              Product
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            {productOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="grid gap-1 rounded-[4px] border border-line bg-surface p-2 shadow-xl shadow-black/40">
                  {nav.product.map((v) => (
                    <Link
                      key={v.slug}
                      href={v.href}
                      className="flex items-center gap-3 rounded-[4px] px-3 py-2 transition-colors duration-200 hover:bg-bg"
                    >
                      <span aria-hidden>{v.icon}</span>
                      <span className="text-sm text-fg">{v.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={nav.ctas.login.href}
            className="text-sm text-muted transition-colors duration-200 hover:text-fg"
          >
            {nav.ctas.login.label}
          </a>
          <Link
            href={nav.ctas.signup.href}
            className="btn-base bg-accent px-4 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            {nav.ctas.signup.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-fg md:hidden"
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
            <p className="px-2 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-faint">
              Product
            </p>
            {nav.product.map((v) => (
              <Link
                key={v.slug}
                href={v.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-[4px] px-2 py-2.5 text-fg transition-colors duration-200 hover:bg-surface"
              >
                <span aria-hidden>{v.icon}</span>
                {v.title}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] px-2 py-2.5 text-fg transition-colors duration-200 hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-line" />
            <a
              href={nav.ctas.login.href}
              className="rounded-[4px] px-2 py-2.5 text-fg"
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
