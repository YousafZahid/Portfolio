"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Freelance",
    company: "Self-employed",
    period: "January 2026 – Present",
    location: "Remote",
    responsibilities: [
      "Design and deliver scalable SaaS applications and custom web platforms for international clients",
      "Manage end-to-end development lifecycle including architecture, backend systems, frontend implementation, deployment, and maintenance",
      "Implement secure payment integrations, automation pipelines, and optimized database systems for long-term scalability"
    ],
    icon: "💼",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/50"
  },
  {
    title: "Full Stack Developer",
    company: "BitBash",
    period: "June 2025 – January 2026",
    location: "Remote",
    responsibilities: [
      "Developed and maintained internal software systems supporting business operations, analytics, and automation. Worked closely with engineers to design reliable, maintainable solutions aligned with long-term business needs",
      "Architected a large-scale influencer intelligence platform (DataHighOnLikes) using Remix, Elysia and PostgreSQL/TimescaleDB, managing 9.5M+ Instagram profiles (160GB+) through distributed workers",
      "Designed and implemented a data-intensive internal analytics platform handling millions of records, focusing on performance, data integrity, and reliability. Built background workers, fault-tolerant processing pipelines, and optimized SQL queries to support business reporting and decision-making",
      "Built CommerceSocial, a FastAPI + React business application for TikTok Shop partners, integrating TikTok Shop APIs to process thousands of shop, creator, and transaction records, providing real-time finance analytics, inventory alerts, sample management, and operational dashboards for business decision-making",
      "Developed Insta-Scrapper, a Next.js + TypeScript business application capable of extracting thousands of Instagram profiles and datasets per run, enabling businesses to leverage social data for lead generation and market analysis. Implemented cron-based background jobs and concurrent processing to support bulk operations, high reliability, and efficient data throughput"
    ],
    icon: "💼",
    gradient: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/50"
  },
  {
    title: "Web Development Intern",
    company: "WebDev Masters",
    period: "June 2024 – August 2024",
    location: "Remote",
    responsibilities: [
      "Designed and developed dynamic, responsive websites using HTML, CSS, JavaScript, and jQuery",
      "Implemented reusable UI components and optimized UX through clean layouts and interactivity",
      "Improved page load times and cross-browser compatibility"
    ],
    icon: "🌐",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50"
  },
  {
    title: "Python/Django Intern",
    company: "KK_solutions",
    period: "June 2024 – July 2024",
    location: "Remote",
    responsibilities: [
      "Developed REST APIs and responsive web pages using Python/Django (DRF) and React",
      "Ensured security best practices across authentication and data handling",
      "Assisted in integrating Flask and FastAPI microservices for modular backend architecture"
    ],
    icon: "🐍",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/50"
  }
];

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Professional Experience" customClass="max-w-6xl">
      <div className="space-y-8 mt-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent" />
            )}
            
            <div className={`relative bg-gradient-to-br ${exp.gradient} border-2 ${exp.borderColor} rounded-2xl p-8 ml-0 md:ml-4 hover:shadow-2xl transition-all duration-300`}>
              {/* Icon */}
              <div className="absolute -left-4 top-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-[#0a0a0a]">
                {exp.icon}
              </div>
              
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-purple-300">
                    {exp.company}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>
              
              {/* Responsibilities */}
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-purple-400 mr-3 mt-1">▸</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

