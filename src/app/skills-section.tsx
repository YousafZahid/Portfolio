"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const skillGroups = [
  { title: "Languages", skills: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "React Native (Expo)", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Django (DRF)", "FastAPI", "Flask", "REST APIs", "WebSockets"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "TimescaleDB"] },
  { title: "Cloud & DevOps", skills: ["AWS", "GCP", "Docker", "Railway", "Vercel", "Nginx", "CI/CD", "Git"] },
  { title: "AI & Integrations", skills: ["OpenAI", "Groq", "Google Vision", "Stripe", "Telnyx", "DocuSeal"] },
  { title: "AI Dev Tools", skills: ["Claude Code", "Codex", "Cursor", "GitHub Copilot"] },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Tools" kicker="Toolbox" customClass="max-w-5xl">
      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.05, ease }}
            className="grid md:grid-cols-4 gap-4 border-b border-[var(--border)] pb-8 last:border-0"
          >
            <div className="font-display text-sm font-semibold text-[var(--muted-2)] uppercase tracking-wider pt-1">
              {group.title}
            </div>
            <div className="md:col-span-3 flex flex-wrap gap-2.5">
              {group.skills.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
