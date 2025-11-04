"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "ScraperGlass",
    category: "SaaS Product",
    description: "Enterprise-grade Instagram data extraction and analysis platform with bulk operations, advanced filtering, and real-time tracking capabilities. Designed for scalability and multi-user support.",
    technologies: ["Next.js", "TypeScript", "React", "Python", "Backend APIs"],
    features: [
      "Bulk Instagram data extraction",
      "Real-time tracking dashboard",
      "Advanced filtering and search",
      "Multi-user support with secure authentication",
      "Automated data storage and processing"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/50",
    icon: "📊",
    url: "https://www.scraperglass.com/"
  },
  {
    title: "Commerce Social",
    category: "SaaS Product",
    description: "Comprehensive platform for TikTok Shop partners to register accounts and manage shop operations. Integrated with TikTok Shop APIs for complete business management.",
    technologies: ["FastAPI", "Python", "React", "JavaScript", "TikTok Shop APIs"],
    features: [
      "Shop registration and account management",
      "Finance analytics and reporting",
      "Inventory alerts and management",
      "Creator and sample management",
      "Responsive and efficient user interface"
    ],
    gradient: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/50",
    icon: "🛍️",
    url: "https://dashboard.commercesocial.co/"
  },
  {
    title: "Fiscal - Smart Financial Freedom Advisor",
    category: "Full Stack Web Application",
    description: "A comprehensive financial management platform providing researched and effective financial advice based on user's finances. Built with modern tech stack ensuring security and scalability.",
    technologies: ["Python", "Django (DRF)", "React", "PostgreSQL", "JWT Authentication"],
    features: [
      "Personalized financial advice engine",
      "Secure JWT authentication system",
      "Financial data analysis and recommendations",
      "User-friendly dashboard interface"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/50",
    icon: "💰",
    url: null
  },
  {
    title: "Stock Price Prediction Platform",
    category: "AI/ML Web Application",
    description: "Advanced stock price prediction system using machine learning models. Provides next-day stock price forecasts with high accuracy using time series analysis.",
    technologies: ["Flask", "Python", "LSTM", "Linear Regression", "Pandas", "AI/ML"],
    features: [
      "Next-day stock price prediction",
      "LSTM neural network model",
      "Linear Regression model",
      "Time series analysis",
      "Feature engineering and data processing"
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/50",
    icon: "📈",
    url: null
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="projects" title="Featured Projects" customClass="max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="group relative"
          >
            <div className={`relative bg-gradient-to-br ${project.gradient} border-2 ${project.borderColor} rounded-2xl p-8 h-full transition-all duration-300 ${hoveredIndex === index ? 'scale-[1.02] shadow-2xl shadow-purple-500/20' : ''}`}>
              {/* Icon */}
              <div className="text-5xl mb-4">{project.icon}</div>
              
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-purple-300 mb-4">
                {project.category}
              </span>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
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
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="text-purple-400 mr-2">▸</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {/* Visit Project Button */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              )}
              
              {/* Hover Effect Glow */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl -z-10`}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
