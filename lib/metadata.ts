import type { Metadata } from "next";

export const SITE_URL = "https://grantcomply.app";
export const SITE_NAME = "GrantComply";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/" ? title : `${title} · ${SITE_NAME}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    // Note: og:image / twitter:image are supplied automatically by the
    // app/opengraph-image.tsx and app/twitter-image.tsx file conventions,
    // which are inherited by every route. Don't set `images` here or it would
    // override the dynamically generated card.
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "GrantComply — Grants, without the dread.",
    description:
      "Discover, qualify for, and manage grants in one platform. Built for cities, counties, and nonprofits tired of the paperwork, the rules, and the audit fear.",
    path: "/",
  },
  government: {
    title: "Government grants done right",
    description:
      "Unify discovery, application tracking, post-award workspaces, compliance, and funding intelligence for city grant teams. One workspace. All opportunities.",
    path: "/government",
  },
  nonprofit: {
    title: "Grants without the grants team",
    description:
      "Discovery, eligibility assessment, AI-assisted proposal drafting, and funder relationship management for nonprofits—without hiring a consultant.",
    path: "/nonprofit",
  },
  healthcare: {
    title: "Hospital funding at scale",
    description:
      "One platform for discovery, application, and compliance across federal, state, foundation, and local funding for health systems. Coming Q4 2026.",
    path: "/healthcare",
  },
  education: {
    title: "University funding, unified",
    description:
      "Unify research, infrastructure, workforce, and community funding across departments. Coming Q1 2027. Early access for 15 universities.",
    path: "/education",
  },
  "public-safety": {
    title: "Public safety funding, ready when you are",
    description:
      "Federal, state, and local funding for equipment, training, and operations—coordinated in one place. Coming Q4 2026. Early access for 25 agencies.",
    path: "/public-safety",
  },
  "small-business": {
    title: "Growth funding made simple",
    description:
      "Discover the federal, state, and local funding your business qualifies for. Coming Q1 2027. Early access for 50 small businesses.",
    path: "/small-business",
  },
  pricing: {
    title: "Transparent pricing",
    description:
      "Start free or with a 30-day trial. Transparent pricing across every GrantComply vertical. No credit card required.",
    path: "/pricing",
  },
  about: {
    title: "About",
    description:
      "GrantComply is one platform, one engine, applied across organization types—built to make the grant lifecycle work the same everywhere.",
    path: "/about",
  },
  blog: {
    title: "Blog",
    description:
      "Notes on grants, funding strategy, and building GrantComply across verticals.",
    path: "/blog",
  },
  privacy: {
    title: "Privacy Policy",
    description: "How GrantComply collects, uses, and protects your data.",
    path: "/privacy",
  },
  security: {
    title: "Security",
    description:
      "GrantComply's approach to security, data protection, and compliance.",
    path: "/security",
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that govern your use of GrantComply.",
    path: "/terms",
  },
};
