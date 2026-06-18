import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where leads are delivered. Override with env vars in production if needed.
const TO = process.env.CONTACT_TO || "jonathanvstuart@gmail.com";
// `onboarding@resend.dev` works out of the box (test mode delivers to the
// Resend account owner). Set RESEND_FROM to a verified domain for production.
const FROM = process.env.RESEND_FROM || "GrantComply Leads <onboarding@resend.dev>";

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const role = String(body.role ?? "").trim();
  const orgType = String(body.orgType ?? "").trim();
  const message = String(body.message ?? "").trim();
  const plan = String(body.plan ?? "").trim();
  const sourcePage = String(body.sourcePage ?? "").trim();

  if (!fullName || !email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Full name and a valid work email are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact-sales] RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const subject = `New lead: ${fullName} from ${organization || "—"} (${orgType || "—"})`;

  const fields: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ["Organization", organization || "—"],
    ["Role", role || "—"],
    ["Organization Type", orgType || "—"],
    ["Plan", plan || "—"],
    ["Source Page", sourcePage || "—"],
  ];

  const text = [
    ...fields.map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message || "—",
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;line-height:1.5">
      <h2 style="margin:0 0 16px">New Contact Sales lead</h2>
      <table style="border-collapse:collapse;font-size:14px">
        ${fields
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#666;vertical-align:top"><strong>${esc(
                k,
              )}</strong></td><td style="padding:4px 0">${esc(v)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:20px 0 6px">Message</h3>
      <p style="white-space:pre-wrap;font-size:14px;margin:0">${esc(message || "—")}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact-sales] Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact-sales] send failed:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
