"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

export default function AboutSection() {
  const highlights = [
    {
      title: "Full Stack Expertise",
      description: "Proficient in building end-to-end solutions from backend APIs to responsive frontends",
      icon: "🚀"
    },
    {
      title: "SaaS Development",
      description: "Experience building scalable SaaS platforms with multi-user support and secure authentication",
      icon: "☁️"
    },
    {
      title: "Performance Focus",
      description: "Committed to building applications with optimal performance and scalability",
      icon: "⚡"
    },
    {
      title: "Modern Technologies",
      description: "Up-to-date with latest frameworks and tools in the industry",
      icon: "💡"
    }
  ];

  return (
    <Section id="about" title="About Me" customClass="max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Summary */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 mb-8">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center">
            Recent Computer Science graduate from FAST NUCES (2025) with hands-on experience in full stack 
            development, API design, and building SaaS platforms. Skilled in Python/Django (DRF), Flask, 
            FastAPI, Next.js, React, and TypeScript. Experienced in developing responsive UIs and backend 
            logic with a focus on performance and scalability.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#232526] to-[#18181b] border-2 border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-4">
            Why Choose Me?
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            I bring a unique combination of technical expertise, business understanding, and a passion for 
            creating solutions that make a real impact. From building SaaS platforms to developing automation 
            tools, I focus on delivering results that exceed expectations.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
