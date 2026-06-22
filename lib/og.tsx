import { ImageResponse } from "next/og";

// Shared renderer for the Open Graph + Twitter card image. The route files
// (app/opengraph-image.tsx, app/twitter-image.tsx) re-export the constants and
// the default image function from here so both cards stay identical.
//
// Direction: "Emerald Editorial" — deep emerald gradient, faint engineering
// grid, a soft radial glow, Fraunces serif headline, and a corner stat.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "GrantComply — Grants, without the dread.";

// A generous glyph set so Google serves a small-but-safe subset regardless of
// copy tweaks or letter-casing.
const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.·$+&'-";

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
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!src) throw new Error(`Failed to resolve a ttf for ${family}`);
  return (await fetch(src[1])).arrayBuffer();
}

const EMERALD = "#34d399"; // bright emerald — accent
const DARK = "#053d2e"; // deep emerald — badge text
const GRID = "rgba(255,255,255,0.035)";

const { width: W, height: H } = size;
const GAP = 48; // grid pitch

export async function ogImage(): Promise<ImageResponse> {
  const [fr500, fr700, plex400, plex500, plex600, plex700] = await Promise.all([
    loadGoogleFont("Fraunces", 500, GLYPHS),
    loadGoogleFont("Fraunces", 700, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 400, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 500, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 600, GLYPHS),
    loadGoogleFont("IBM+Plex+Sans", 700, GLYPHS),
  ]);

  // Explicit grid lines — Satori doesn't render repeating-linear-gradient, so
  // draw faint hairlines as absolutely-positioned divs.
  const verticals = [];
  for (let x = GAP; x < W; x += GAP) {
    verticals.push(
      <div
        key={`v${x}`}
        style={{
          position: "absolute",
          top: 0,
          left: x,
          width: 1,
          height: H,
          background: GRID,
        }}
      />,
    );
  }
  const horizontals = [];
  for (let y = GAP; y < H; y += GAP) {
    horizontals.push(
      <div
        key={`h${y}`}
        style={{
          position: "absolute",
          top: y,
          left: 0,
          width: W,
          height: 1,
          background: GRID,
        }}
      />,
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: W,
          height: H,
          background: "linear-gradient(150deg, #053d2e 0%, #02231b 100%)",
          fontFamily: "Plex",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        {/* Engineering grid texture */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: W,
            height: H,
            display: "flex",
          }}
        >
          {verticals}
          {horizontals}
        </div>

        {/* Soft radial glow, top-right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 620,
            height: 620,
            background:
              "radial-gradient(circle, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0) 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: W,
            height: H,
            padding: 64,
          }}
        >
          {/* TOP ROW */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "#ffffff",
                  color: DARK,
                  fontFamily: "PlexBold",
                  fontSize: 19,
                }}
              >
                GC
              </div>
              <div
                style={{
                  marginLeft: 14,
                  fontFamily: "PlexSemi",
                  fontSize: 20,
                  letterSpacing: "-0.01em",
                }}
              >
                GrantComply
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "PlexMed",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.05em",
              }}
            >
              CITIES · COUNTIES · NONPROFITS
            </div>
          </div>

          {/* CENTER — headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Fraunces",
              fontSize: 82,
              lineHeight: 0.96,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ display: "flex" }}>Grants, without</div>
            <div style={{ display: "flex" }}>
              the dread<span style={{ color: EMERALD }}>.</span>
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                maxWidth: 720,
                fontSize: 21,
                fontWeight: 400,
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Discover, qualify for, and manage every grant in one platform.
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  color: EMERALD,
                }}
              >
                <span style={{ fontFamily: "FrauncesBold", fontSize: 32 }}>
                  $100M
                </span>
                <span style={{ fontFamily: "PlexBold", fontSize: 26 }}>+</span>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: 4,
                  fontFamily: "PlexMed",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                MANAGED
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fr500, weight: 500, style: "normal" },
        { name: "FrauncesBold", data: fr700, weight: 700, style: "normal" },
        { name: "Plex", data: plex400, weight: 400, style: "normal" },
        { name: "PlexMed", data: plex500, weight: 500, style: "normal" },
        { name: "PlexSemi", data: plex600, weight: 600, style: "normal" },
        { name: "PlexBold", data: plex700, weight: 700, style: "normal" },
      ],
    },
  );
}
