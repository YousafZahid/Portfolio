"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { featuredProjects, type Project } from "./data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.slug ? `/projects/${project.slug}` : project.url ?? undefined;
  const internal = Boolean(project.slug);
  const features = project.features.slice(0, 3);

  const CardInner = (
    <>
      {project.image && (
        <div className="relative aspect-[16/10] bg-[#0a0a0c] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[var(--muted-2)]">
            {project.category}
          </span>
          {project.url && (
            <span className="text-xs text-[var(--muted-2)] group-hover:text-[var(--accent)] transition-colors">
              {internal ? "Case study →" : "Live ↗"}
            </span>
          )}
        </div>
        <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">{project.description}</p>
        <ul className="space-y-1.5 mb-5">
          {features.map((f, idx) => (
            <li key={idx} className="flex gap-2.5 text-sm text-[var(--muted)]">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
          {project.technologies.slice(0, 6).map((t) => (
            <span key={t} className="text-xs text-[var(--muted-2)]">{t}</span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease }}
      className="h-full"
    >
      {href ? (
        internal ? (
          <Link href={href} className="card group overflow-hidden h-full flex flex-col">
            {CardInner}
          </Link>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer" className="card group overflow-hidden h-full flex flex-col">
            {CardInner}
          </a>
        )
      ) : (
        <div className="card group overflow-hidden h-full flex flex-col">{CardInner}</div>
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const displayProjects = featuredProjects.slice(0, 6);
  return (
    <Section id="projects" title="Featured Projects" kicker="Selected work" customClass="max-w-6xl">
      <div className="grid md:grid-cols-2 gap-5 items-stretch">
        {displayProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="mt-10">
        <Link href="/projects" className="btn-ghost">
          View all projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
