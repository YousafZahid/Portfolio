"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "End-to-end delivery",
    description:
      "From database and API design to responsive frontends and cloud deployment, I own features from start to finish.",
  },
  {
    title: "SaaS at scale",
    description:
      "Built multi-service SaaS platforms with subscriptions, payments, and data pipelines handling millions of records.",
  },
  {
    title: "AI integration",
    description:
      "Integrated LLMs (OpenAI, Groq) and vision APIs into production for data extraction, automation, and AI features.",
  },
  {
    title: "AI-assisted workflow",
    description:
      "I build with Claude Code, Codex, and Cursor daily, planning architecture first and shipping fast without dropping quality.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  return (
    <Section id="about" title="About" kicker="Who I am" customClass="max-w-5xl">
      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="lg:col-span-2"
        >
          <p className="text-lg text-[var(--text)] leading-relaxed">
            I&apos;m a full-stack developer with a year of hands-on experience building and shipping
            production software.
          </p>
          <p className="mt-4 text-[var(--muted)] leading-relaxed">
            I&apos;ve built a multi-service real-estate marketplace, a platform handling 9.5M+
            records, and AI-integrated products across real estate, e-commerce, and fintech. I care
            about clean architecture, performance, and getting real things shipped.
          </p>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white mb-2">{h.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
