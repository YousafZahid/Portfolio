"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const education = {
  degree: "Bachelor's in Computer Science",
  institution: "FAST NUCES",
  location: "Lahore, Pakistan",
  period: "August 2021 – August 2025",
  description: "Comprehensive computer science program covering algorithms, data structures, software engineering, database systems, and modern web technologies. Graduated with hands-on experience in full-stack development and API design.",
  highlights: [
    "Strong foundation in computer science fundamentals",
    "Hands-on experience with modern web technologies",
    "Focus on software engineering best practices",
    "Projects in SaaS development and AI/ML"
  ],
  icon: "🎓"
};

export default function EducationSection() {
  return (
    <Section id="education" title="Education" customClass="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <div className="relative bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-8 md:p-10">
          {/* Icon */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl shadow-xl border-4 border-[#0a0a0a]">
            {education.icon}
          </div>
          
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {education.degree}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-2">
              <span className="text-xl font-semibold text-purple-300">
                {education.institution}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {education.location}
              </span>
            </div>
            <span className="flex items-center gap-1 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {education.period}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 mb-6 text-lg leading-relaxed font-medium">
            {education.description}
          </p>
          
          {/* Highlights */}
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Key Highlights:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {education.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start text-gray-200 font-medium"
                >
                  <span className="text-purple-400 mr-2 mt-1 font-bold">✓</span>
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

