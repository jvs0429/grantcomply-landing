import Link from "next/link";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-accent text-sm font-bold text-white">
                G
              </span>
              <span className="text-[17px] font-semibold tracking-[-0.3px] text-fg">
                GrantComply
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-faint">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors duration-200 hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} GrantComply. All rights reserved.</p>
          <p>Discovery → Application → Compliance → Closeout.</p>
        </div>
      </div>
    </footer>
  );
}
