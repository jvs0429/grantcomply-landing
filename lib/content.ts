// All marketing copy, organized by page. Single source of truth for site text.

export type Status = "live" | "coming";

export type CTA = { label: string; href: string };

export type Vertical = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  statusLabel: string;
  status: Status;
  href: string;
};

export type Screenshot = { src: string; alt: string };

export type ProblemCard = { icon: string; title: string; body: string };

export type Step = { kicker: string; title: string; body: string };

export type PricingTier = {
  plan: string;
  price: string;
  cadence?: string;
  description: string;
  features?: string[];
  cta: CTA;
  featured?: boolean;
};

/* ---------------------------------------------------------------- Verticals */

export const VERTICALS: Vertical[] = [
  {
    slug: "government",
    icon: "🏛️",
    title: "Government",
    tagline: "Compliance without spreadsheets",
    statusLabel: "Live & Proven",
    status: "live",
    href: "/government",
  },
  {
    slug: "nonprofit",
    icon: "🤝",
    title: "Nonprofit",
    tagline: "Grants without a grants team",
    statusLabel: "Live & Proven",
    status: "live",
    href: "/nonprofit",
  },
  {
    slug: "healthcare",
    icon: "🏥",
    title: "Healthcare",
    tagline: "Hospital funding at scale",
    statusLabel: "Coming Q4 2026",
    status: "coming",
    href: "/healthcare",
  },
  {
    slug: "education",
    icon: "🎓",
    title: "Education",
    tagline: "University funding, unified",
    statusLabel: "Coming Q1 2027",
    status: "coming",
    href: "/education",
  },
  {
    slug: "public-safety",
    icon: "🚒",
    title: "Public Safety",
    tagline: "Equipment, training, operations",
    statusLabel: "Coming Q4 2026",
    status: "coming",
    href: "/public-safety",
  },
  {
    slug: "small-business",
    icon: "💼",
    title: "Small Business",
    tagline: "Growth funding made simple",
    statusLabel: "Coming Q1 2027",
    status: "coming",
    href: "/small-business",
  },
];

/* ------------------------------------------------------------- Testimonials */
// Representative, un-attributed quotes rotated across the marketing pages.

export const testimonials: string[] = [
  "We demonstrated this to our city manager and county judge in the same week. Both said it was the most impressive grants platform they'd ever seen.",
  "The compliance checking alone—catching requirements we'd miss in a 50-page NOFO—paid for itself before we even submitted the application.",
  "What used to be 6 people working on grants full-time is now doable for 2. That's not just efficiency—that's a capability multiplier.",
  "For a nonprofit with 3 staff members and no grants department, this is the difference between applying for 2 grants a year and 10.",
];

/* ------------------------------------------------------------------ Landing */

export const landing = {
  hero: {
    headline:
      "Every organization needs grants. The cycle is identical. The solution should be too.",
    subheading:
      "GrantComply is the grant-lifecycle platform for cities, nonprofits, hospitals, universities, public safety, and small business.",
    ctas: [
      { label: "See Government", href: "/government" },
      { label: "See Nonprofit", href: "/nonprofit" },
      { label: "Explore Roadmap", href: "/#roadmap" },
    ] as CTA[],
    note: "Start free or with a 30-day trial. No credit card required.",
  },
  thesis: [
    {
      kicker: "The Problem",
      title: "The work is done by hand.",
      body: "Funding opportunities exist. But the cycle is complex: eligibility assessment, gap analysis, application drafting, compliance tracking, closeout audits. Most organizations solve it by hand.",
    },
    {
      kicker: "The Pattern",
      title: "The cycle never changes.",
      body: "The cycle doesn't change by org type. A city asks the same questions as a nonprofit asks as a hospital. Yet each builds their own system. Redundant. Expensive. Error-prone.",
    },
    {
      kicker: "The Vision",
      title: "One engine, every org.",
      body: "GrantComply is one platform, one engine, applied across org types. Discovery. Application. Compliance. Closeout. Built once. Scaled everywhere.",
    },
  ] as Step[],
  socialProof: {
    label: "Trusted by mission-driven orgs",
    quotes: [testimonials[0], testimonials[2]],
    logos: [
      "City of Hearne",
      "Brazos Valley",
      "Robertson County",
      "Hearne EDC",
      "TX Rural Coalition",
      "Community Foundation",
    ],
  },
  roadmap: {
    label: "The Roadmap",
    columns: [
      { heading: "Now", items: ["Government", "Nonprofit"], done: true },
      {
        heading: "Next (2026)",
        items: ["Healthcare", "Public Safety"],
        done: false,
      },
      {
        heading: "2027 & Beyond",
        items: ["Education", "Small Business"],
        done: false,
      },
    ],
    subtext:
      "Same engine, tailored to your organization. Early access available for all coming verticals.",
    cta: { label: "Join Early Access", href: "/#early-access" },
  },
};

/* ------------------------------------------------------------- Government */

export const government = {
  hero: {
    headline: "City grants done right.",
    subheading:
      "Cities pursue funding from federal, state, and local sources—with email alerts, spreadsheets, and legal back-and-forth scattered across departments. No single source of truth. No compliance automation. Award management takes months.",
    body: "GrantComply unifies discovery → application tracking → post-award workspaces → compliance → funding intelligence. One workspace. All opportunities.",
    ctas: [
      { label: "See Live Demo", href: "/#early-access" },
      { label: "Start 30-Day Trial", href: "/#early-access" },
    ] as CTA[],
  },
  problem: {
    heading: "The Reality for City Grant Teams",
    cards: [
      {
        icon: "🔍",
        title: "Fragmented Discovery",
        body: "Opportunities scattered across multiple portals and announcements. No way to know what you're missing or what matters for your priorities.",
      },
      {
        icon: "📋",
        title: "Application Chaos",
        body: "Eligibility assessment by email. Application roadmaps in Word. Compliance questions asked weeks into the process. Deadlines caught by surprise.",
      },
      {
        icon: "📉",
        title: "Post-Award Blindness",
        body: "Awards arrive. Then what? Procurement tracking in one system. Drawdown requests via email. Expenditure visibility scattered. Closeout readiness is a last-minute scramble.",
      },
    ] as ProblemCard[],
  },
  steps: [
    {
      kicker: "Discover",
      title: "See everything that fits.",
      body: "Unified view of available opportunities across federal, state, and local sources. Intelligent assessment tells you what fits your jurisdiction and priorities. You focus on what matters.",
    },
    {
      kicker: "Apply",
      title: "Know the requirements upfront.",
      body: "Structured application process walks your team through requirements, compliance risks, and key questions upfront. AI-assisted drafting. Eligibility assessment before the deadline.",
    },
    {
      kicker: "Manage",
      title: "Audit-ready from day one.",
      body: "Post-award workspace tracks procurement, expenditures, compliance milestones, and closeout readiness. Real-time visibility. Audit-ready documentation. One place for all of it.",
    },
  ] as Step[],
  capabilities: [
    {
      label: "Discovery",
      body: "Unified opportunity identification, intelligent matching",
    },
    {
      label: "Application Tracker",
      body: "Staged workflow, requirement assessment, drafting tools",
    },
    {
      label: "Post-Award Management",
      body: "Procurement, drawdowns, expenditure tracking",
    },
    {
      label: "Compliance",
      body: "Deadline tracking, requirement verification, audit readiness",
    },
    {
      label: "Funding Analysis",
      body: "Opportunity assessment, eligibility evaluation",
    },
    {
      label: "Team & Billing",
      body: "Role-based access, department management, usage controls",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/government-discovery.png",
      alt: "Discovery interface showing filters, opportunity matching, and priorities",
    },
    {
      src: "/screenshots/government-tracker.png",
      alt: "Application tracker with workflow stages, requirement checklist, and assessment",
    },
    {
      src: "/screenshots/government-workspace.png",
      alt: "Post-award workspace with dashboard, procurement, expenditures, compliance, and closeout tabs",
    },
    {
      src: "/screenshots/government-dashboard.png",
      alt: "Funding dashboard with matched opportunities, application timeline, and award status",
    },
  ] as Screenshot[],
  pricing: [
    {
      plan: "Trial",
      price: "Free",
      cadence: "30 days",
      description: "Full access to evaluate GrantComply for your jurisdiction.",
      cta: { label: "Start Trial", href: "/#early-access" },
    },
    {
      plan: "Starter",
      price: "$4,800",
      cadence: "/year",
      description: "For small cities (<100K population). Basic discovery + tracker.",
      cta: { label: "Get Started", href: "/#early-access" },
    },
    {
      plan: "Professional",
      price: "$14,400",
      cadence: "/year",
      description:
        "For mid-size cities. Advanced compliance, team management.",
      featured: true,
      cta: { label: "Get Started", href: "/#early-access" },
    },
    {
      plan: "Enterprise",
      price: "Custom",
      description:
        "For large jurisdictions. Advanced integrations, dedicated support.",
      cta: { label: "Contact Sales", href: "/#early-access" },
    },
  ] as PricingTier[],
  socialProof: {
    quote: testimonials[1],
  },
  cta: {
    headline:
      "See how government teams discover and manage funding at scale.",
    ctas: [
      { label: "Start Your Free Trial", href: "/#early-access" },
      { label: "Schedule a Demo", href: "/#early-access" },
    ] as CTA[],
  },
};

/* -------------------------------------------------------------- Nonprofit */

export const nonprofit = {
  hero: {
    headline: "Grants without the grants team.",
    subheading:
      "Nonprofits have limited staff, multiple funding sources, and a mission to focus on. They need discovery, eligibility assessment, proposal drafting, and funder relationship management—without hiring a $80K consultant.",
    body: "GrantComply unifies discovery (federal opportunities + private foundations) → proposal pipeline (kanban, checklists, staged workflow) → AI-assisted drafting (LOIs, narratives, logic models, budgets) → funder relationship tracking (pipeline, interactions, outcomes). One platform. All funders.",
    ctas: [
      { label: "Start Free", href: "/#early-access" },
      { label: "See a Demo", href: "/#early-access" },
    ] as CTA[],
  },
  problem: {
    heading: "The Reality for Nonprofit Funders",
    cards: [
      {
        icon: "🗺️",
        title: "Scattered Funding Landscape",
        body: "Federal opportunities, foundation databases, local funder lists, announcement newsletters. How do you prioritize? What actually fits?",
      },
      {
        icon: "❓",
        title: "Eligibility Uncertainty",
        body: "Is your organization eligible? Will your budget qualify? What are the real restrictions? Due diligence takes time—time you don't have.",
      },
      {
        icon: "✍️",
        title: "Proposal Bottleneck",
        body: "Proposals require LOIs, logic models, program budgets, narrative sections, compliance statements. That's weeks of work. Or you hire a consultant. Or you don't apply.",
      },
    ] as ProblemCard[],
  },
  steps: [
    {
      kicker: "Discover",
      title: "Federal and private, in one view.",
      body: "Central view of funding opportunities—federal and private. Intelligent matching shows which align with your mission, capacity, and priorities. No guessing.",
    },
    {
      kicker: "Assess",
      title: "Fit and capability, side by side.",
      body: "Two-part evaluation: Does this fit our mission and work? Can we actually apply as-is, or would we need to strengthen something first? Clear yes/no/maybe on both. Gap analysis shows the path forward.",
    },
    {
      kicker: "Draft",
      title: "Days, not weeks.",
      body: "AI assistance generates LOIs, program narratives, logic models, and budget narratives grounded in real funding requirements and your organization profile. Your team refines and submits in days, not weeks.",
    },
    {
      kicker: "Track",
      title: "Every relationship, every outcome.",
      body: "Proposal pipeline visibility (what you're pursuing, where it is, what's won). Funder relationship tracking (who you've approached, what worked, next steps). Outcomes reporting (what funded, what's underway, what to follow up on).",
    },
  ] as Step[],
  capabilities: [
    {
      label: "Organization Profiles",
      body: "Mission, programs, readiness, team capacity",
    },
    {
      label: "Opportunity Discovery",
      body: "Federal and private funding sources, fit analysis",
    },
    {
      label: "Eligibility Assessment",
      body: "Two-axis evaluation (fit + capability), gap analysis",
    },
    {
      label: "Proposal Pipeline",
      body: "Kanban view, requirement checklists, 4 active stages",
    },
    {
      label: "AI-Assisted Drafting",
      body: "LOIs, narratives, logic models, budget frameworks",
    },
    {
      label: "Funder CRM",
      body: "Relationship tracking, contact management, interaction log",
    },
    {
      label: "Outcomes Reporting",
      body: "Proposal tracking, awards, follow-up visibility",
    },
    {
      label: "Team Management",
      body: "Email invites, role-based access, permissions",
    },
  ],
  roadmapCallout: {
    badge: "Expanding Funder Visibility",
    body: "We're continuously expanding the universe of funding sources visible to nonprofits. Enhanced private foundation matching coming Q3 2026.",
  },
  screenshots: [
    {
      src: "/screenshots/nonprofit-discovery.png",
      alt: "Opportunity discovery showing federal and private sources with fit assessment",
    },
    {
      src: "/screenshots/nonprofit-kanban.png",
      alt: "Proposal kanban with four active stages and archived proposals",
    },
    {
      src: "/screenshots/nonprofit-workspace.png",
      alt: "Proposal workspace with requirements, AI drafts, and collaboration",
    },
    {
      src: "/screenshots/nonprofit-crm.png",
      alt: "Funder CRM with pipeline, contacts, and activity timeline",
    },
  ] as Screenshot[],
  pricing: [
    {
      plan: "Free",
      price: "$0",
      cadence: "early access",
      description:
        "Full feature access for nonprofit teams getting started. Upgrade to Premium anytime.",
      featured: true,
      cta: { label: "Start Free", href: "/#early-access" },
    },
    {
      plan: "Premium",
      price: "$999",
      cadence: "/year",
      description:
        "Team management, advanced reporting, and integration capabilities.",
      cta: { label: "Get Premium", href: "/#early-access" },
    },
  ] as PricingTier[],
  socialProof: {
    quote: testimonials[3],
  },
  cta: {
    headline: "Funding is your organization's most accessible revenue source.",
    ctas: [
      { label: "Start Free", href: "/#early-access" },
      { label: "Request a Demo", href: "/#early-access" },
    ] as CTA[],
  },
};

/* ------------------------------------------------------------- Healthcare */

export const healthcare = {
  hero: {
    headline: "Hospital funding at scale.",
    subheading:
      "Health systems manage funding from multiple federal, state, foundation, and local sources simultaneously. No single platform integrates discovery, application, and compliance for complex health organizations.",
    body: "Why it matters: Healthcare is one of the largest funding-consuming sectors. Health systems spend millions annually on grant administration—and still miss opportunities or face compliance surprises. The difference: Same discovery → apply → comply → manage engine, tailored for healthcare organizations.",
    ctas: [
      { label: "Join Early Access", href: "/#early-access" },
      { label: "Request Briefing", href: "/#early-access" },
    ] as CTA[],
  },
  opportunity: {
    heading: "Why Healthcare Needs GrantComply Now",
    intro: "Health systems are managing:",
    streams: [
      "Federal research and clinical funding (multi-year, complex reporting)",
      "Federal infrastructure and workforce funding (equipment, training, capacity)",
      "Foundation grants (innovation, community benefit, specific programs)",
      "State and local programs (specialized services, clinical support)",
    ],
    problem:
      "Each funding stream has different eligibility rules, compliance requirements, and reporting schedules. Health systems manage this with email, spreadsheets, and fragmented systems. Opportunities get missed. Compliance gaps emerge. Administrative overhead is massive—diverting resources from patient care.",
    approach:
      "One platform for all of it. Discovery tuned to healthcare priorities and restrictions. Eligibility assessment aware of healthcare-specific compliance rules. Post-award workspace tracks multi-year grants, clinical milestones, compliance deadlines, and outcome reporting. Your teams focus on patients; the platform handles the funding.",
  },
  access: {
    live: "Q4 2026",
    cohort: "Early access cohort of 10 health systems",
    benefits: [
      "Shape the product with your real-world feedback",
      "Access at steep discount during development",
      "Launch with competitive advantage",
      "Dedicated onboarding and support",
    ],
  },
  cta: {
    headline:
      "The most complex funding environment deserves the most thoughtful platform.",
    ctas: [{ label: "Request Early Access", href: "/#early-access" }] as CTA[],
  },
};

/* ------------------------------------------------------- Coming verticals */

export const education = {
  hero: {
    headline: "University funding, unified.",
    subheading:
      "Universities pursue funding across research, infrastructure, workforce, and community programs—often with fragmented departmental coordination. Compliance rules vary by source. Collaboration is scattered.",
    body: "Coming Q1 2027. Early access for 15 universities.",
    ctas: [{ label: "Request Early Access", href: "/#early-access" }] as CTA[],
  },
  cohort: "Early access for 15 universities",
  live: "Q1 2027",
};

export const publicSafety = {
  hero: {
    headline: "Equipment and operations funded right.",
    subheading:
      "Fire departments, police departments, and public safety agencies pursue federal, state, and local funding for equipment, training, and operations. Coordination is scattered. Readiness is reactive.",
    body: "Coming Q4 2026. Early access for 25 public safety agencies.",
    ctas: [{ label: "Request Early Access", href: "/#early-access" }] as CTA[],
  },
  cohort: "Early access for 25 public safety agencies",
  live: "Q4 2026",
};

export const smallBusiness = {
  hero: {
    headline: "Growth funding made simple.",
    subheading:
      "Small business owners need federal, state, and local funding to grow. Most don't know what they qualify for. GrantComply changes that.",
    body: "Coming Q1 2027. Early access for 50 small businesses.",
    ctas: [{ label: "Request Early Access", href: "/#early-access" }] as CTA[],
  },
  cohort: "Early access for 50 small businesses",
  live: "Q1 2027",
};

/* ---------------------------------------------------------------- Pricing */

export const pricing = {
  heading: "Transparent Pricing",
  sub: "Start free or with a 30-day trial. No credit card required.",
  sections: [
    {
      title: "Government",
      tiers: government.pricing,
    },
    {
      title: "Nonprofit",
      tiers: nonprofit.pricing,
    },
  ],
  comingNote:
    "Healthcare, Public Safety, Education, and Small Business launch as Enterprise + custom pricing. Contact sales for early access.",
};

/* --------------------------------------------------------- Footer / nav */

export const nav = {
  product: VERTICALS,
  links: [
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  ctas: {
    login: { label: "Login", href: "https://app.grantcomply.app/login" },
    signup: { label: "Start Free", href: "/#early-access" },
  },
};

export const footer = {
  tagline:
    "One platform for the grant lifecycle—discovery to closeout—across every kind of organization.",
  columns: [
    {
      heading: "Verticals",
      links: VERTICALS.map((v) => ({ label: v.title, href: v.href })),
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Security", href: "/security" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
};
