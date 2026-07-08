"use client";
import { motion } from "framer-motion";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import ExperienceSection from "./experience-section";
import EducationSection from "./education-section";
import ServicesSection from "./services-section";

const stack = ["Next.js", "React", "TypeScript", "Node.js", "Python / Django", "FastAPI", "PostgreSQL", "AWS / GCP"];

const stats = [
  { value: "5+", label: "Products shipped to production" },
  { value: "9.5M+", label: "Records handled at scale" },
  { value: "1 yr", label: "Full-stack experience" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-[var(--muted)]">Available for full-stack & freelance work</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease }}
          className="kicker mb-5"
        >
          Full Stack Developer · Lahore, Pakistan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.02] text-white max-w-4xl"
        >
          I build production software,{" "}
          <span className="text-[var(--muted-2)]">from the database to the interface.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-8 max-w-2xl text-lg text-[var(--muted)] leading-relaxed"
        >
          I&apos;m Yousaf Zahid, a full-stack developer who ships SaaS platforms, AI-integrated
          systems, and data-intensive applications. I work across Next.js, Node.js, and
          Python/Django, and I use AI tools like Claude Code and Cursor to move fast without
          dropping quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            View my work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/Yousaf-Zahid-CV.pdf" download className="btn-ghost">
            Download CV
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">Get in touch</a>
          <div className="flex items-center gap-3 ml-1">
            <a href="https://github.com/YousafZahid" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--border-strong)] transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/yousaf-zhd/" target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--border-strong)] transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </motion.div>

        {/* stack strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-2.5"
        >
          {stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl border-t border-[var(--border)] pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-[var(--muted-2)] mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />

      <footer className="max-w-6xl mx-auto px-6 md:px-10 py-10 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[var(--muted-2)]">
        <span>© {new Date().getFullYear()} Yousaf Zahid</span>
        <span>Built with Next.js, Tailwind &amp; Motion</span>
      </footer>
    </main>
  );
}
