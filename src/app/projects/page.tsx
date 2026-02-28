"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "../data/projects";

function ProjectCard({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="group relative"
    >
      <div
        className={`relative bg-gradient-to-br ${project.gradient} border-2 ${project.borderColor} rounded-2xl p-8 h-full transition-all duration-300 ${
          hoveredIndex === index ? "scale-[1.02] shadow-2xl shadow-purple-500/20" : ""
        }`}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-purple-300 mb-4">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-300 mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/10 text-xs text-gray-300 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-300">
                <span className="text-purple-400 mr-2">▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {project.url && (
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            <span>Visit Project</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>
        )}
        {hoveredIndex === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl -z-10`}
          />
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{
            backgroundImage: "linear-gradient(to right, #fde047, #fbbf24, #ec4899, #a855f7, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            All Projects
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A full list of projects I’ve worked on — SaaS products, web apps, mobile apps, and ML applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
