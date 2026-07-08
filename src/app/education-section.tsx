"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function EducationSection() {
  return (
    <Section id="education" title="Education" kicker="Background" customClass="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="card p-8 md:p-10"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-white">
            BS in Computer Science
          </h3>
          <span className="text-sm text-[var(--muted-2)]">August 2021 – June 2025</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 text-[var(--accent)] font-medium">
          <span>FAST NUCES</span>
          <span className="text-[var(--muted-2)] font-normal">Lahore, Pakistan</span>
        </div>
        <p className="mt-5 text-[var(--muted)] leading-relaxed">
          Studied algorithms, data structures, software engineering, databases, and modern web
          technologies, with a focus on building real full-stack products and applied AI/ML.
        </p>
      </motion.div>
    </Section>
  );
}
