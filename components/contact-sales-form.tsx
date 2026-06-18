"use client";

import { Suspense, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const CALENDLY_URL = "https://calendly.com/jonathanvstuart/30min";

export const ORG_TYPES = [
  "Government",
  "Nonprofit",
  "Healthcare",
  "Education",
  "Public Safety",
  "Small Business",
] as const;

type State = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-[4px] border border-line bg-bg px-4 py-3 text-fg outline-none transition-colors duration-200 placeholder:text-faint focus:border-accent";

function ContactSalesFormInner({
  orgType,
  defaultPlan = "",
  heading = "Contact Sales",
  sub,
}: {
  /** When set, Organization Type is auto-prefilled and shown read-only. */
  orgType?: string;
  /** Fallback plan when no `?plan=` query param is present. */
  defaultPlan?: string;
  heading?: string;
  sub?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // A pricing-tier CTA links with `?plan=Enterprise#contact-sales`; fall back to the prop.
  const plan = searchParams.get("plan") ?? defaultPlan;

  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          organization,
          role,
          orgType: orgType ?? selectedType,
          message,
          plan,
          sourcePage: pathname,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Request failed");
      }
      setState("success");
      // Hand the qualified lead straight to scheduling.
      window.setTimeout(() => {
        window.location.href = CALENDLY_URL;
      }, 1500);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setState("error");
    }
  }

  return (
    <div
      id="contact-sales"
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
          Thanks! Scheduling you now…
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">Full name *</span>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jane Rivera"
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">Work email *</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@organization.gov"
              className={inputClass}
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted">Organization</span>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="City of Hearne"
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-muted">Role / title</span>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Grants Manager"
                className={inputClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">Organization type</span>
            {orgType ? (
              <input
                type="text"
                value={orgType}
                readOnly
                aria-readonly
                className={`${inputClass} cursor-default border-line/60 text-muted focus:border-line/60`}
              />
            ) : (
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={inputClass}
              >
                <option value="">Select…</option>
                {ORG_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            )}
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-muted">
              What are you looking to fund? <span className="text-faint">(optional)</span>
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder="Tell us about your funding goals…"
              className={`${inputClass} resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="btn-base mt-2 w-full bg-accent text-white transition-colors duration-200 hover:bg-accent-hover disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : "Contact Sales"}
          </button>

          {state === "error" && (
            <p className="text-center text-sm text-red-400">{errorMsg}</p>
          )}
        </form>
      )}
    </div>
  );
}

export function ContactSalesForm(props: {
  orgType?: string;
  defaultPlan?: string;
  heading?: string;
  sub?: string;
}) {
  // useSearchParams() requires a Suspense boundary in statically rendered pages.
  return (
    <Suspense
      fallback={
        <div className="mx-auto h-[420px] max-w-xl rounded-[4px] border border-line bg-surface" />
      }
    >
      <ContactSalesFormInner {...props} />
    </Suspense>
  );
}
