"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudyView({ project }: { project: Project }) {
  const cs = project.caseStudy!;
  const base = (project.image ?? "").replace("main.png", "");
  const gallery = project.image
    ? [project.image, ...Array.from({ length: project.galleryCount ?? 0 }, (_, i) => `${base}${i + 1}.png`)]
    : [];

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-28">
        <Link
          href="/projects"
          className="flex w-fit items-center gap-2 text-sm text-[var(--muted)] hover:text-white mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="kicker block">{project.category}</span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-3 mb-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
              {project.title}
            </h1>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Visit live
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-3xl">{cs.overview}</p>
        </motion.div>

        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border)] mt-10 bg-[#0a0a0c]"
          >
            <Image src={project.image} alt={project.title} fill sizes="900px" className="object-cover object-top" priority />
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="font-display text-sm uppercase tracking-wider text-[var(--muted-2)] mb-3">The problem</h2>
              <p className="text-[var(--muted)] leading-relaxed">{cs.problem}</p>
            </section>
            <section>
              <h2 className="font-display text-sm uppercase tracking-wider text-[var(--muted-2)] mb-3">What I built</h2>
              <ul className="space-y-3">
                {cs.build.map((b, i) => (
                  <li key={i} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-sm uppercase tracking-wider text-[var(--muted-2)] mb-3">Impact</h2>
              <p className="text-[var(--muted)] leading-relaxed">{cs.impact}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm uppercase tracking-wider text-[var(--muted-2)] mb-2">My role</h3>
              <p className="text-sm text-[var(--text)] leading-relaxed">{cs.role}</p>
            </div>
            <div className="card p-6">
              <h3 className="text-sm uppercase tracking-wider text-[var(--muted-2)] mb-3">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {gallery.length > 1 && (
          <section className="mt-16">
            <h2 className="font-display text-sm uppercase tracking-wider text-[var(--muted-2)] mb-5">Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {gallery.map((src, i) => (
                <a
                  key={i}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--border)] bg-[#0a0a0c] hover:border-[var(--border-strong)] transition-colors"
                >
                  <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 440px" className="object-cover object-top" loading="lazy" />
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
