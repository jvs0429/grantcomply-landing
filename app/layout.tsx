import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { buildMetadata, pageMeta, SITE_URL } from "@/lib/metadata";
import "./globals.css";

// Display — Fraunces: a high-contrast old-style serif with optical sizing. At
// hero sizes the opsz axis gives it a confident, characterful display cut;
// authority + warmth that reads as a deliberate choice, not a stock system serif.
const fraunces = Fraunces({
  // Omitting `weight` makes the full wght axis variable (required to also vary
  // the opsz axis); font-weight utilities still control weight across the range.
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI — civic-tech heritage; engineered legibility, institutional but not cold.
const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

// Data / labels — the signature "audit ledger" voice for stats and numerals.
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(pageMeta.home),
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <Script
          id="vtag-ai-js"
          strategy="afterInteractive"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="jjaYODotQzQ993Pb"
          data-version="062024"
        />
      </body>
    </html>
  );
}
