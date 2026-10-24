export interface CaseStudy {
  overview: string;
  problem: string;
  build: string[];
  impact: string;
  role: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  gradient: string;
  borderColor: string;
  url: string | null;
  featured?: boolean;
  slug?: string;
  image?: string;
  galleryCount?: number;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    title: "Deelmap",
    category: "SaaS Product",
    description: "Enterprise-grade real estate email processing and property extraction platform with AI-powered data extraction, automated listing management, and comprehensive property marketplace. Designed for real estate professionals to automatically process and organize property listings from email communications.",
    technologies: ["Next.js", "TypeScript", "React", "Supabase", "Cloudflare Workers", "AI APIs (Groq/OpenAI)", "DigitalOcean Spaces", "NextAuth"],
    features: [
      "Automated email processing via Cloudflare Email Routing",
      "AI-powered property data extraction from emails",
      "Intelligent image classification and filtering",
      "Real-time property marketplace dashboard",
      "Auto-listing with approval workflow",
      "Address verification and property lookup integration",
      "Scheduled URL import and processing",
      "Multi-user support with secure authentication",
      "Property history tracking and duplicate detection"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: "https://deelmap.com/",
    featured: true,
    slug: "deelmap",
    image: "/projects/deelmap/main.png",
    galleryCount: 21,
    caseStudy: {
      overview:
        "A wholesale real-estate marketplace ecosystem: a buyer marketplace, a seller SaaS portal, an admin dashboard, and a React Native mobile app, backed by a shared Supabase/PostgreSQL data layer and 5+ services on Railway.",
      problem:
        "Wholesale property deals are scattered across emails, texts, and dozens of listing sites. Investors waste hours hunting for deals, and sellers have no unified place to list, negotiate, and close.",
      build: [
        "Buyer marketplace with real-time Google Maps (clustering and boundary filters), advanced search, and financial tooling including a DSCR calculator with PDF export.",
        "Seller SaaS with listings, subscriptions, team workspaces, role-based permissions, and a Stripe Connect referral payout system.",
        "AI deal-ingestion pipelines that read inbound email and SMS (Telnyx), extract structured data with Groq LLMs, and auto-select images with Google Vision on scheduled Railway cron workers.",
        "Stripe payments and subscriptions, DocuSeal e-signature contracts, and real-time messaging with offer negotiation.",
      ],
      impact:
        "A single platform that fills itself with deals automatically and lets buyers discover, negotiate, sign, and pay end to end.",
      role: "Full-stack developer across web, mobile, backend services, and AI pipelines.",
    }
  },
  {
    title: "TransWord",
    category: "SaaS Product",
    description: "AI-powered translation platform that breaks language barriers by translating text, PDFs, images, audio, and video across 100+ languages. Unified interface enabling seamless multilingual communication for individuals and businesses worldwide.",
    technologies: ["Next.js", "TypeScript", "React", "Django", "Python", "OpenAI API", "YouTube Data API"],
    features: [
      "Unified multi-format translation platform (text, documents, media, video)",
      "100+ language coverage enabling global accessibility",
      "Real-time video processing with intelligent caption extraction",
      "Advanced customization options (style, context, audience)",
      "Scalable subscription model with automated usage tracking",
      "Robust error handling and fallback systems ensuring 99%+ uptime"
    ],
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/50",
    url: "https://transword.ai/home",
    featured: true,
    slug: "transword",
    image: "/projects/transword/main.png",
    galleryCount: 3,
    caseStudy: {
      overview:
        "An AI translation platform that converts text, PDFs, images, audio, and video across 100+ languages, built on a Django REST Framework backend with a Next.js frontend.",
      problem:
        "Free translators fail on real documents and media. People need accurate translation of certificates, statements, and audio or video, not just single sentences.",
      build: [
        "Unified translation for text, PDFs, images (OCR), audio, and video, plus tools for transcription, summarizing, and rephrasing.",
        "Realistic AI voice output and dubbing via ElevenLabs, with translation powered by OpenAI.",
        "Subscription plans and add-ons with SafePay payments and automated usage tracking.",
        "Django REST Framework backend on AWS EC2 with a Next.js frontend, deployed across AWS and GCP with Nginx and CI/CD.",
      ],
      impact:
        "A production translation product handling real users and payments, with coverage across 100+ languages.",
      role: "Full-stack developer: Django DRF backend, Next.js frontend, and AI integrations.",
    }
  },
  {
    title: "8x Scout",
    category: "SaaS Product",
    description: "Referral platform for 8x, the creator network behind organic video for consumer brands. Students and new graduates in Türkiye become \"scouts\": they refer brands, get them to book a call with 8x, and earn commission when the deal closes. Tracking who brought in which brand honestly is the whole job, so the right scout gets paid.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma", "PostgreSQL", "Supabase Auth", "TanStack Query", "next-intl"],
    features: [
      "Personal referral link and code, with click tracking that ignores link-preview bots",
      "Brand submissions reviewed by 8x before they become a scout's lead",
      "Strict link-or-code attribution, with a human review queue for anything unclear",
      "Deal pipeline (booked, held, won/lost) that creates commissions automatically",
      "Commission ledger (pending, approved, payable, paid) and a scout wallet",
      "Four-level career path with onboarding academy and leaderboard",
      "Role-based admin console with a full audit log",
      "Bilingual interface in English and Turkish"
    ],
    gradient: "from-orange-500/20 to-rose-500/20",
    borderColor: "border-orange-500/50",
    url: "https://8x-scout.vercel.app",
    featured: true,
    slug: "8x-scout",
    image: "/projects/8x-scout/main.png",
    galleryCount: 3,
    caseStudy: {
      overview:
        "A referral platform for an 8x Social pilot in Türkiye that tracks which scout brought in which brand, so the right person gets paid.",
      problem:
        "8x wanted outside referrers to source brands, but attribution that guesses will eventually pay the wrong person and cost the scouts' trust.",
      build: [
        "Multi-file Prisma schema split by domain (identity, claims, bookings, money, onboarding, authz, ops) with CI-generated migrations.",
        "Link-or-code attribution with bot-filtered click tracking, replacing weaker matching (email domain, saved contacts) with a human review queue.",
        "A commission state machine (pending, approved, payable, paid) triggered when a deal is marked won, with every admin change written to the audit log.",
        "Custom RBAC on top of Supabase Auth, staff invites, scheduled cron jobs, and English/Turkish localisation through next-intl.",
      ],
      impact:
        "A documented pilot platform where every payout can be traced back to a link, a code, or a human decision.",
      role: "Full-stack developer: data model, attribution logic, scout dashboard, and admin console.",
    }
  },
  {
    title: "8x Referral",
    category: "SaaS Product",
    description: "B2B partner programme for consultants, agency owners, and founders who introduce brands to 8x. Partners share a personal link; when a brand books a call through it and signs, they earn 2% of the first three monthly payments. Covers every 8x vertical, with a partner portal, an admin console, and an MCP server so managers can work bookings straight from Claude.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Prisma", "Supabase Auth", "Model Context Protocol", "GSAP", "Slack API"],
    features: [
      "Referral links that credit the partner and open a booking page for the brand",
      "Partner portal with link and QR code, referral statuses, and payments",
      "Admin console for partners, bookings, commissions, earnings, team, and audit",
      "Booking slots pulled live from each manager's 8x Meets availability",
      "Slack bot that posts each booking and threads every update under it",
      "Signed payout webhook from the 8x payout gateway",
      "MCP server with OAuth sign-in from claude.ai and hashed personal API keys",
      "Scroll-driven GSAP story that follows one introduction from link to payout"
    ],
    gradient: "from-zinc-500/20 to-neutral-500/20",
    borderColor: "border-zinc-400/50",
    url: "https://8x-referral.vercel.app",
    featured: true,
    slug: "8x-referral",
    image: "/projects/8x-referral/main.png",
    galleryCount: 2,
    caseStudy: {
      overview:
        "The B2B sibling of 8x Scout. It reuses the same attribution and commission core, and covers all 8x verticals (Social, LinkedIn, Research, Sales, Hiring).",
      problem:
        "8x needed one programme where external partners could refer brands to any product, with bookings, manager handoffs, partner updates, and payouts handled without manual tracking.",
      build: [
        "An MCP server over Streamable HTTP with its own OAuth endpoints and per-key rate limiting, so managers can find, claim, assign, and update bookings from Claude.",
        "MCP writes go through the same booking service as the admin UI, so stage rules, audit rows, commissions, and partner emails behave the same whichever way an update arrives.",
        "Integration with the 8x Meets MCP server for live availability and scheduling, with encrypted per-manager tokens and a fixed-slot fallback.",
        "Slack threaded booking alerts, Resend email templates, Google Meet OAuth, and a signed payout webhook feeding an outbox delivery service.",
      ],
      impact:
        "Managers can work bookings from the admin console or directly from Claude, and partners are kept informed by email at each stage.",
      role: "Full-stack developer: partner portal, admin console, booking flow, integrations, and MCP server.",
    }
  },
  {
    title: "8x Signals",
    category: "Internal Tool / Lead Intelligence",
    description: "Lead sourcing platform that finds companies showing buying intent (LinkedIn posts, Meta ads, App Store reviews, hiring and launches) and turns them into a deduplicated lead pool for each 8x product. Sales reps claim, qualify, and hand leads over to the 8x CRM from a keyboard-driven web app or from an AI client over MCP.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Groq LLMs", "MCP + OAuth (jose)", "Vercel Cron"],
    features: [
      "Intent signals per product: UGC need, Meta ads, hiring, product friction, announcements",
      "Staged pipeline: fetch, free rule filters, one cheap AI read, route, enrich, dedupe",
      "Cross-product cascade: one company, keyed on domain, can be a lead for several products",
      "App-review signal only fires when 3+ distinct reviews raise the same complaint",
      "Website analyzer that grades a company's site and turns its flaws into a pitch opener",
      "Claim/release, statuses, not-a-fit reasons, notes, and CRM handover checks",
      "Keyboard-first lead queue with filters by ICP, signal, route, country, and product",
      "MCP server with per-person OAuth: search, read, and claim leads from an AI client"
    ],
    gradient: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-400/50",
    url: null,
    featured: true,
    slug: "8x-signals",
    image: "/projects/8x-signals/main.png",
    galleryCount: 2,
    caseStudy: {
      overview:
        "A standalone app that sources and qualifies intent-based leads for six 8x products and feeds them to the 8x Global CRM.",
      problem:
        "The CRM did no sourcing of its own and signal alerts were scattered across Slack. Sales needed one place to find, qualify, and route buyers for each product.",
      build: [
        "A staged pipeline (plan, search, classify, extract, enrich, route, backfill, hand over) where only fetch and enrich cost credits, with per-step cost tracked.",
        "Groq model calls, logged to an ai_usage table, that extract company, country, and buying intent after free rule filters remove the noise.",
        "A domain-keyed company model so one company can be a lead in several products while staying a single row, with dedupe per company per product.",
        "An MCP server where the app is its own OAuth authorization server, so every AI-client call is tied to one person.",
      ],
      impact:
        "Gives the sales team one deduplicated lead pool per product, sourced on a schedule and reachable from the web UI or an AI client.",
      role: "Engineer on the project: scrapers, pipeline, UI, and MCP server, built against requirements from the sales lead.",
    }
  },
  {
    title: "Rislix GRC (R-Trax)",
    category: "Compliance SaaS",
    description: "Multi-tenant governance, risk, and compliance portal that Rislix uses to track its customers against frameworks such as ISO 27001, SOC 2, PCI DSS, and ISO 9001. Built by forking the source-available Fair TPRM platform, then rebranding and extending it with per-organisation tenancy, a client-specified RBAC model, a redesigned UI, and a threat-intelligence module, deployed on AWS.",
    technologies: ["PHP 8", "MariaDB", "Apache + ModSecurity", "Docker", "AWS EC2", "Nginx", "Cloudflare", "GitHub Actions"],
    features: [
      "Separate database per customer organisation, with provisioning and decommission scripts",
      "7-role RBAC built from the client's role-by-page matrix",
      "Departments with per-record \"read assigned\" visibility scoping",
      "Evidence library with review workflow and assigned reviewers",
      "3x3 risk register with heatmap and residual scoring",
      "Per-organisation branding, colours, and module toggles",
      "In-app and email notifications, plus magic-link sign-in",
      "Threat intel module (CISA KEV, NVD, HIBP, email posture checks)"
    ],
    gradient: "from-indigo-600/20 to-emerald-500/20",
    borderColor: "border-indigo-500/50",
    url: "https://rislix.com/trax/",
    featured: true,
    slug: "rislix",
    image: "/projects/rislix/main.png",
    galleryCount: 0,
    caseStudy: {
      overview:
        "Rislix sells GRC services and needed a portal where each customer organisation tracks its own compliance. Rather than build from scratch, an existing GRC engine was adapted into a branded multi-tenant product.",
      problem:
        "Fair TPRM had a solid compliance engine but was single-tenant, centred on vendor risk, and had no role model matching how Rislix's clients work.",
      build: [
        "Chose one database per organisation over a tenant column, with provisioning, migrate-all, and decommission scripts around a central registry.",
        "Implemented the client's 7-role RBAC matrix across 40+ SQL migrations, splitting \"read all\" from \"read assigned\", with shell test suites for RBAC and security.",
        "Wrote a native multi-arch Dockerfile and tuned the stack to run on a small AWS instance behind Nginx and Cloudflare.",
        "Added a redesigned UI kit, a 3x3 risk register, an evidence review workflow, notifications, magic links, and a threat-intel feed module.",
      ],
      impact:
        "Live at rislix.com/trax, set up so each customer organisation can be onboarded independently.",
      role: "Sole freelance developer. Forked and extended the Fair TPRM platform (whose core assessment engine is upstream), adding multi-tenancy, RBAC, the redesign, new modules, and the AWS deployment.",
    }
  },
  {
    title: "ilmVault for Institutions",
    category: "EdTech / AI SaaS",
    description: "Institutional version of the ilmVault AI reading coach for schools, universities, and training organisations. Each institution gets its own workspace with admin, teacher, and student roles. Students \"think first\" on assigned reading, the AI coaches and scores their reasoning across five lenses, and teachers review the evidence and build a Thinking Profile for each student.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Better Auth", "Vercel AI SDK", "Gemini / Claude / OpenAI", "Cloudflare R2"],
    features: [
      "Multi-tenant workspaces with super-admin, school admin, teacher, and student dashboards",
      "Email invites, class groups, and subjects",
      "Think First assignments built from 11 thinking techniques, with AI-generated questions",
      "Understanding Checks with a secure fullscreen mode that logs integrity events",
      "AI coach grounded in the assigned book, scoring answers 0-4 on five lenses",
      "Teacher review queue with follow-ups, revision requests, and AI Understanding Reports",
      "Guided learning paths: diagnostic, milestones, then assessments",
      "Built-in PDF/EPUB reader with highlights and per-subject \"Ask\" chat"
    ],
    gradient: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/50",
    url: "https://institute.ilmvault.ai",
    featured: true,
    slug: "ilmvault",
    image: "/projects/ilmvault/main.png",
    galleryCount: 2,
    caseStudy: {
      overview:
        "A multi-tenant, institution-facing version of the ilmVault AI reading coach, letting schools run classes, assignments, and evidence-based assessment of student thinking on the same coaching engine.",
      problem:
        "In an AI-rich classroom a polished assignment says little. Schools need students to show real understanding of what they read, and teachers need structured, reviewable evidence rather than a general chatbot.",
      build: [
        "A tenancy and role layer (institution memberships, admin/teacher/student checks) that sits outside the existing coaching engine instead of forking it.",
        "Roughly 100 Postgres tables across 10 Drizzle schema modules: institutions, subject vaults, assignments, guided learning, reading coach, reader, invitations, and AI.",
        "A Thinking Assignments system: 11 techniques with per-technique Zod schemas, AI question generation with validation and repair, an AI job queue, and secure fullscreen checks.",
        "A model registry across four AI providers, RAG retrieval grounded in the book text, answer guardrails, and speech-to-text for spoken answers.",
      ],
      impact:
        "Live at institute.ilmvault.ai for a 10-institution pilot, giving teachers rubric-scored evidence of how each student reasons about assigned reading.",
      role: "Sole developer: architecture, schema design, AI pipeline, full-stack implementation, and deployment.",
    }
  },
  {
    title: "ScraperGlass",
    category: "SaaS Product",
    description: "Enterprise-grade Instagram data extraction and analysis platform with bulk operations, advanced filtering, and real-time tracking capabilities. Designed for scalability and multi-user support.",
    technologies: ["Next.js", "TypeScript", "React", "Python", "Backend APIs"],
    features: [
      "Bulk Instagram data extraction",
      "Real-time tracking dashboard",
      "Advanced filtering and search",
      "Multi-user support with secure authentication",
      "Automated data storage and processing"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50",
    url: "https://www.scraperglass.com/",
    featured: true,
    slug: "scraperglass",
    image: "/projects/scraperglass/main.png",
    galleryCount: 1,
    caseStudy: {
      overview:
        "An enterprise Instagram data extraction and analysis platform with bulk operations, advanced filtering, and real-time tracking.",
      problem:
        "Teams need large-scale social data for lead generation and market analysis, but manual collection does not scale.",
      build: [
        "Bulk Instagram data extraction with a real-time tracking dashboard.",
        "Advanced filtering and search across large datasets.",
        "Multi-user support with secure authentication and automated storage and processing.",
      ],
      impact: "Reliable, high-throughput data extraction that powers business intelligence.",
      role: "Full-stack developer.",
    }
  },
  {
    title: "Commerce Social",
    category: "SaaS Product",
    description: "Comprehensive platform for TikTok Shop partners to register accounts and manage shop operations. Integrated with TikTok Shop APIs for complete business management.",
    technologies: ["FastAPI", "Python", "React", "JavaScript", "TikTok Shop APIs"],
    features: [
      "Shop registration and account management",
      "Finance analytics and reporting",
      "Inventory alerts and management",
      "Creator and sample management",
      "Responsive and efficient user interface"
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/50",
    url: "https://dashboard.commercesocial.co/",
    featured: true,
    slug: "commercesocial",
    image: "/projects/commercesocial/main.png",
    galleryCount: 0,
    caseStudy: {
      overview:
        "A platform for TikTok Shop partners to register and manage shop operations, integrated directly with TikTok Shop APIs.",
      problem:
        "TikTok Shop partners lack a single place to manage finances, inventory, and creators across their operations.",
      build: [
        "Shop registration and account management.",
        "Finance analytics, inventory alerts, and creator and sample management.",
        "A FastAPI and React application integrating TikTok Shop APIs for real-time reporting.",
      ],
      impact: "Operational dashboards that turn shop, creator, and transaction data into decisions.",
      role: "Full-stack developer: FastAPI backend and React frontend.",
    }
  },
  {
    title: "Fiscal - Smart Financial Freedom Advisor",
    category: "Full Stack Web Application",
    description: "A comprehensive financial management platform providing researched and effective financial advice based on user's finances. Built with modern tech stack ensuring security and scalability.",
    technologies: ["Python", "Django (DRF)", "React", "PostgreSQL", "JWT Authentication"],
    features: [
      "Personalized financial advice engine",
      "Secure JWT authentication system",
      "Financial data analysis and recommendations",
      "User-friendly dashboard interface"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/50",
    url: null,
    featured: true
  },
  {
    title: "Stock Price Prediction Platform",
    category: "AI/ML Web Application",
    description: "Advanced stock price prediction system using machine learning models. Provides next-day stock price forecasts with high accuracy using time series analysis.",
    technologies: ["Flask", "Python", "LSTM", "Linear Regression", "Pandas", "AI/ML"],
    features: [
      "Next-day stock price prediction",
      "LSTM neural network model",
      "Linear Regression model",
      "Time series analysis",
      "Feature engineering and data processing"
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50",
    url: null,
    featured: true
  },
  {
    title: "SMS Ableman Tool (SMS Monday)",
    category: "SaaS / Internal Tool",
    description: "Modern SMS campaign management platform integrated with Monday.com and OpenPhone. Enables teams to manage SMS campaigns, configurations, and workspace collaboration with real-time dashboards.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Monday.com API", "OpenPhone API"],
    features: [
      "Real-time dashboard for campaigns and statistics",
      "Monday.com and OpenPhone API configuration management",
      "Workspace support for shared campaigns",
      "Responsive UI with professional seller platform patterns",
      "CRUD operations for configurations and campaigns"
    ],
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/50",
    url: null,
    featured: false
  },
  {
    title: "Deelmap Admin Portal",
    category: "Web Application",
    description: "Next.js admin portal for the Deelmap real estate platform. Manages listings, users, and platform configuration with a streamlined admin experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Listing and user management",
      "Platform configuration",
      "Admin dashboard",
      "Integrated with Deelmap backend"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: null,
    featured: false
  },
  {
    title: "Seller Dashboard (Deelmap)",
    category: "Web Application",
    description: "Seller portal for Deelmap allowing sellers to manage their listings, view analytics, and handle inquiries through a dedicated Next.js dashboard.",
    technologies: ["Next.js", "React", "TypeScript"],
    features: [
      "Seller listing management",
      "Analytics and insights",
      "Inquiry management",
      "Portal-specific workflows"
    ],
    gradient: "from-indigo-500/20 to-blue-500/20",
    borderColor: "border-indigo-500/50",
    url: null,
    featured: false
  },
  {
    title: "Call and SMS (Deelmap)",
    category: "Web Application",
    description: "Next.js application for SMS and call integration with property extraction workflows. Integrates Telnyx WebRTC, Stripe, Supabase, and AI (Groq) for lead and property handling.",
    technologies: ["Next.js", "React", "Supabase", "Telnyx", "Stripe", "Groq SDK", "Tailwind CSS"],
    features: [
      "SMS and call integration",
      "Property extraction from conversations",
      "Stripe payments integration",
      "AI-powered extraction with Groq"
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/50",
    url: null,
    featured: false
  },
  {
    title: "GHL Dashboard",
    category: "Full Stack Web Application",
    description: "Professional dashboard with GoHighLevel (GHL) API integration. Displays business metrics through interactive charts and analytics with a modern React and Node.js stack.",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "Tailwind CSS", "Recharts", "Framer Motion"],
    features: [
      "GoHighLevel API integration",
      "Interactive bar, donut, and line charts",
      "Responsive design",
      "Smooth animations and modern UI"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/50",
    url: null,
    featured: false
  },
  {
    title: "DSCR Calculator",
    category: "Mobile Application",
    description: "Flutter mobile app for calculating Debt Service Coverage Ratio (DSCR). Helps real estate and lending professionals quickly compute DSCR for loan and investment decisions.",
    technologies: ["Flutter", "Dart", "iOS", "Android"],
    features: [
      "DSCR calculation",
      "Cross-platform iOS and Android",
      "Clean, focused UI",
      "Real estate and lending use cases"
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/50",
    url: null,
    featured: false
  },
  {
    title: "Skillens (ML Recommendation)",
    category: "AI/ML Research & Application",
    description: "Machine learning project for recommendation and cold-start scenarios. Uses scikit-learn, LightGBM, sentence transformers, and SHAP for model training, evaluation, and explainability.",
    technologies: ["Python", "scikit-learn", "LightGBM", "sentence-transformers", "SHAP", "Streamlit", "Pandas", "Plotly"],
    features: [
      "Recommendation and cold-start modeling",
      "Model evaluation and ablation",
      "Explainability with SHAP",
      "Streamlit-based visualization"
    ],
    gradient: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/50",
    url: null,
    featured: false
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const nonFeaturedProjects = projects.filter((p) => !p.featured);
