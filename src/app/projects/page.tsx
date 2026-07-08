"use client";

import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "../projects-section";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-28">
        <Link
          href="/#projects"
          className="flex w-fit items-center gap-2 text-sm text-[var(--muted)] hover:text-white mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        <span className="kicker block">Portfolio</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mt-3 mb-4">
          All Projects
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-2xl mb-14">
          A full list of things I&apos;ve built: SaaS products, web and mobile apps, and ML applications.
        </p>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
