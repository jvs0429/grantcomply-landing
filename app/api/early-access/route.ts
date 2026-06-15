import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const organization = String(body.organization ?? "").trim();
    const email = String(body.email ?? "").trim();
    const vertical = String(body.vertical ?? "general").trim();

    if (!organization || !email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Organization and a valid email are required." },
        { status: 400 },
      );
    }

    const entry = {
      organization,
      email,
      vertical,
      submittedAt: new Date().toISOString(),
    };

    // Persist to a local JSONL log. On read-only/serverless filesystems this
    // gracefully falls back to logging so the request still succeeds.
    try {
      const dir = path.join(process.cwd(), "data");
      await fs.mkdir(dir, { recursive: true });
      await fs.appendFile(
        path.join(dir, "early-access.jsonl"),
        JSON.stringify(entry) + "\n",
        "utf8",
      );
    } catch {
      console.log("[early-access]", JSON.stringify(entry));
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 },
    );
  }
}
