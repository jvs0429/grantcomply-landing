import { ImageResponse } from "next/og";

// Shared renderer for the Open Graph + Twitter card image. The route files
// (app/opengraph-image.tsx, app/twitter-image.tsx) re-export the constants and
// the default image function from here so both cards stay identical.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "GrantComply — Grants, without the dread.";

// Every glyph that appears in the image, so Google serves a tiny subset.
const GLYPHS =
  "Grants, without the dread.GrantComplyThe platform built by someone who's managed $100M+ in federal funding.GC0123456789";

// Fetch a static TrueType cut from Google Fonts for use inside satori. A bare
// fetch (no modern User-Agent) makes Google return ttf rather than woff2, which
// satori can't parse. This mirrors the build-time font dependency the site
// already has via next/font/google.
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(
    text,
  )}`;
  const css = await (await fetch(url)).text();
  const src = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  );
  if (!src) throw new Error(`Failed to resolve a ttf for ${family}`);
  return (await fetch(src[1])).arrayBuffer();
}

const INK = "#1f2937"; // charcoal — text
const MUTED = "#4b5563"; // gray-600 — secondary text
const BLUE = "#2563eb"; // blue-600 — primary accent
const TEAL = "#10b981"; // emerald — signature accent
const LINE = "#e5e7eb"; // gray-200 — hairlines

export async function ogImage(): Promise<ImageResponse> {
  const [fraunces, plex, plexBold] = await Promise.all([
    loadGoogleFont("Fraunces", 600, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 500, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 700, GLYPHS),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "76px 80px",
          fontFamily: "Plex",
          position: "relative",
        }}
      >
        {/* Top accent rule — blue → teal */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: `linear-gradient(90deg, ${BLUE} 0%, ${TEAL} 100%)`,
          }}
        />

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${BLUE} 0%, ${TEAL} 100%)`,
              color: "#ffffff",
              fontFamily: "PlexBold",
              fontSize: 30,
            }}
          >
            GC
          </div>
          <div
            style={{
              fontFamily: "PlexBold",
              fontSize: 34,
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            GrantComply
          </div>
        </div>

        {/* Headline + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Fraunces",
              fontSize: 104,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: INK,
            }}
          >
            <div style={{ display: "flex" }}>Grants, without the</div>
            <div style={{ display: "flex" }}>
              dread<span style={{ color: TEAL }}>.</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 920,
              fontSize: 30,
              lineHeight: 1.4,
              color: MUTED,
            }}
          >
            The grant platform built by someone who&apos;s managed $100M+ in
            federal funding.
          </div>
        </div>

        {/* Footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            borderTop: `1px solid ${LINE}`,
            paddingTop: 26,
            fontSize: 24,
            color: MUTED,
          }}
        >
          <span style={{ color: BLUE, fontFamily: "PlexBold" }}>
            Discover · Qualify · Manage
          </span>
          <span style={{ color: LINE }}>—</span>
          <span>built for cities, counties &amp; nonprofits</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Plex", data: plex, weight: 500, style: "normal" },
        { name: "PlexBold", data: plexBold, weight: 700, style: "normal" },
      ],
    },
  );
}
