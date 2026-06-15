// scripts/screenshot-product.ts
//
// Captures product screenshots from the live GrantComply app for use on the
// marketing landing site. Logs in with a test account, navigates to each page,
// and writes a PNG to public/screenshots/.
//
// Driven entirely by env vars (no secrets in source). Run once per vertical:
//
//   SHOT_VERTICAL=nonprofit \
//   SHOT_EMAIL=jonathanvstuart+nptest@gmail.com \
//   SHOT_PASSWORD='NpTestProd2026!' \
//   npx tsx scripts/screenshot-product.ts
//
//   SHOT_VERTICAL=government \
//   SHOT_EMAIL=...city account... \
//   SHOT_PASSWORD=... \
//   npx tsx scripts/screenshot-product.ts
//
// Optional overrides:
//   SHOT_BASE_URL        default https://app.grantcomply.app
//   SHOT_ACTIVE_GRANT_ID explicit id for /active-grants/[id] (else first in list)
//   SHOT_PROPOSAL_ID     explicit id for /nonprofit/proposals/[id] (else first)

import { chromium, type Page } from "playwright";
import path from "path";
import fs from "fs";

const BASE_URL = process.env.SHOT_BASE_URL ?? "https://app.grantcomply.app";
const EMAIL = process.env.SHOT_EMAIL ?? "";
const PASSWORD = process.env.SHOT_PASSWORD ?? "";
const VERTICAL = (process.env.SHOT_VERTICAL ?? "nonprofit") as
  | "nonprofit"
  | "government";

const OUT_DIR = path.resolve(process.cwd(), "public/screenshots");
const VIEWPORT = { width: 1280, height: 800 };
const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

function requireEnv() {
  if (!EMAIL || !PASSWORD) {
    console.error("ERROR: SHOT_EMAIL and SHOT_PASSWORD are required.");
    process.exit(1);
  }
  if (VERTICAL !== "nonprofit" && VERTICAL !== "government") {
    console.error("ERROR: SHOT_VERTICAL must be 'nonprofit' or 'government'.");
    process.exit(1);
  }
}

async function login(page: Page) {
  console.log(`  Logging in as ${EMAIL}...`);
  await page.goto(`${BASE_URL}/login`, { waitUntil: "networkidle" });
  await page.fill("#auth-email", EMAIL);
  await page.fill("#auth-password", PASSWORD);
  await page.click('button[type="submit"]');
  // Client-side Supabase auth sets cookies, then redirects off /login.
  await page.waitForURL((url) => !url.pathname.startsWith("/login"), {
    timeout: 30_000,
  });
  await page.waitForLoadState("networkidle");
  console.log(`  Signed in → ${page.url()}`);
}

async function settle(page: Page) {
  // Let async data / charts / images paint before the shot.
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(2_000);
}

async function shot(page: Page, route: string, file: string) {
  const dest = path.join(OUT_DIR, file);
  console.log(`  → ${route}  =>  ${file}`);
  await page.goto(`${BASE_URL}${route}`, { waitUntil: "networkidle" });
  await settle(page);
  await page.screenshot({ path: dest, fullPage: false });
}

// Find the first detail-page id by scanning links on a list page.
async function firstDetailId(
  page: Page,
  listRoute: string,
  hrefPrefix: string
): Promise<string | null> {
  await page.goto(`${BASE_URL}${listRoute}`, { waitUntil: "networkidle" });
  await settle(page);
  const hrefs = await page.$$eval("a[href]", (els) =>
    els.map((e) => (e as HTMLAnchorElement).getAttribute("href") ?? "")
  );
  for (const h of hrefs) {
    if (h.includes(hrefPrefix)) {
      const m = h.match(UUID_RE);
      if (m) return m[0];
    }
  }
  return null;
}

async function captureGovernment(page: Page) {
  await shot(page, "/discovery", "government-discovery.png");
  await shot(page, "/tracker", "government-tracker.png");
  await shot(page, "/active-grants", "government-dashboard.png");

  const id =
    process.env.SHOT_ACTIVE_GRANT_ID ||
    (await firstDetailId(page, "/active-grants", "/active-grants/"));
  if (id) {
    await shot(page, `/active-grants/${id}`, "government-workspace.png");
  } else {
    console.warn("  ! No active grant found — skipping government-workspace.png");
  }
}

async function captureNonprofit(page: Page) {
  await shot(page, "/nonprofit/discovery", "nonprofit-discovery.png");
  await shot(page, "/nonprofit/proposals", "nonprofit-kanban.png");
  await shot(page, "/nonprofit/funders", "nonprofit-crm.png");

  const id =
    process.env.SHOT_PROPOSAL_ID ||
    (await firstDetailId(page, "/nonprofit/proposals", "/nonprofit/proposals/"));
  if (id) {
    await shot(page, `/nonprofit/proposals/${id}`, "nonprofit-workspace.png");
  } else {
    console.warn("  ! No proposal found — skipping nonprofit-workspace.png");
  }
}

async function main() {
  requireEnv();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`Screenshotting ${VERTICAL} pages from ${BASE_URL}`);
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  try {
    await login(page);
    if (VERTICAL === "government") {
      await captureGovernment(page);
    } else {
      await captureNonprofit(page);
    }
    console.log("Done.");
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
