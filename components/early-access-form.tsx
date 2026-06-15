"use client";

import { useState } from "react";

type State = "idle" | "submitting" | "success" | "error";

export function EarlyAccessForm({
  vertical = "general",
  heading = "Request Early Access",
  sub,
}: {
  vertical?: string;
  heading?: string;
  sub?: string;
}) {
  const [state, setState] = useState<State>("idle");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organization: org, email, vertical }),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      setOrg("");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  return (
    <div
      id="early-access"
      className="mx-auto max-w-xl scroll-mt-24 rounded-[4px] border border-line bg-surface p-8 md:p-10"
    >
      <h3 className="text-center text-2xl font-semibold tracking-[-0.3px] text-fg">
        {heading}
      </h3>
      {sub && (
        <p className="mt-3 text-center text-[15px] leading-relaxed text-muted">
          {sub}
        </p>
      )}

      {state === "success" ? (
        <p className="mt-8 rounded-[4px] border border-accent-alt/40 bg-accent-alt/10 px-5 py-4 text-center text-accent-alt">
          Thanks! We&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">Organization name</span>
            <input
              type="text"
              required
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="City of Hearne"
              className="rounded-[4px] border border-line bg-bg px-4 py-3 text-fg outline-none transition-colors duration-200 placeholder:text-faint focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">Contact email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@organization.gov"
              className="rounded-[4px] border border-line bg-bg px-4 py-3 text-fg outline-none transition-colors duration-200 placeholder:text-faint focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="btn-base mt-2 w-full bg-accent text-white transition-colors duration-200 hover:bg-accent-hover disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : "Request Access"}
          </button>
          {state === "error" && (
            <p className="text-center text-sm text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
