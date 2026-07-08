"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const services = [
  {
    title: "Marketplaces & platforms",
    description:
      "Two-sided marketplaces and multi-service platforms with search, maps, payments, messaging, and dashboards.",
  },
  {
    title: "SaaS dashboards",
    description:
      "Subscription products with authentication, roles and permissions, billing, and admin panels.",
  },
  {
    title: "AI automation",
    description:
      "LLM-powered features and pipelines that automate manual work: data extraction, document processing, and outreach.",
  },
  {
    title: "Brand & business websites",
    description:
      "Fast, responsive, SEO-friendly marketing sites that reflect your brand and convert visitors.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function ServicesSection() {
  return (
    <Section id="services" title="What I build" kicker="Services" customClass="max-w-5xl">
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="card p-7"
          >
            <span className="font-display text-sm text-[var(--accent)]">0{i + 1}</span>
            <h3 className="font-display text-lg font-semibold text-white mt-3 mb-2">{s.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
