"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Airosofts",
    period: "December 2025 – June 2026",
    location: "On-site · Lahore",
    points: [
      "Building Deelmap, a wholesale real-estate marketplace ecosystem with a buyer portal, seller SaaS, admin portal, and a React Native (Expo) mobile app, on Next.js, React 19, TypeScript, and Supabase/PostgreSQL, shipped as 5+ services on Railway with CI/CD.",
      "Engineered AI-driven deal-ingestion pipelines that read inbound email and SMS (Telnyx), extract structured data with Groq LLMs, and auto-select listing images with Google Vision, running on scheduled Railway cron workers.",
      "Integrated Stripe subscriptions, add-on purchases and Stripe Connect referral payouts, DocuSeal e-signature contracts, real-time messaging with offer negotiation, and a DSCR calculator with PDF export.",
      "Built real-time Google Maps with marker clustering and boundary filtering, role-based admin portals, and AI seller-outreach SMS campaigns (Airophone) powered by OpenAI and Groq.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "BitBash",
    period: "June 2025 – January 2026",
    location: "On-site · Lahore",
    points: [
      "Architected DataHighOnLikes, a distributed influencer-intelligence platform managing 9.5M+ Instagram profiles across 160GB+ of data (PostgreSQL/TimescaleDB) through parallel workers and fault-tolerant pipelines.",
      "Designed and shipped a data-intensive internal analytics platform on Django (DRF) and PostgreSQL, with normalized schemas, indexed queries across millions of rows, and async background workers that cut reporting latency.",
      "Built CommerceSocial (FastAPI + React) for TikTok Shop partners, integrating TikTok Shop APIs into real-time finance analytics, inventory alerts, and operational dashboards.",
      "Developed Insta-Scrapper (Next.js + TypeScript) with cron-based background jobs and concurrent processing for high-throughput data extraction.",
    ],
  },
  {
    title: "Freelance & Personal Projects",
    company: "Independent",
    period: "2024 – Present",
    location: "Remote",
    points: [
      "Design and deliver SaaS applications and custom web platforms for international clients, owning architecture, backend, frontend, deployment, and maintenance.",
      "Built Transword.ai, an AI translation platform on a Django REST Framework backend with a Next.js frontend, integrating OpenAI and ElevenLabs, deployed on AWS and GCP.",
      "Built QuantMind, an explainable-AI portfolio advisor combining reinforcement learning over S&P 500 data with from-scratch Shapley explanations and backtesting.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "WebDev Masters",
    period: "June 2024 – August 2024",
    location: "On-site · Lahore",
    points: [
      "Built responsive client websites with HTML, CSS, JavaScript, and jQuery, with reusable UI components and cross-browser compatibility.",
      "Improved page-load performance and optimized layouts for a cleaner user experience.",
    ],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" kicker="Career" customClass="max-w-4xl">
      <div className="relative border-l border-[var(--border)] pl-8 md:pl-10 space-y-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05, ease }}
            className="relative"
          >
            <span className="absolute -left-[35px] md:-left-[43px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white">{exp.title}</h3>
              <span className="font-medium" style={{ color: "var(--accent)" }}>{exp.company}</span>
            </div>
            <div className="mt-1.5 text-sm text-[var(--muted-2)] flex flex-wrap gap-x-4 gap-y-1">
              <span>{exp.period}</span>
              <span>{exp.location}</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {exp.points.map((p, idx) => (
                <li key={idx} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
