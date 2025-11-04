"use client";
import Section from "./components/Section";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "TypeScript", "HTML", "CSS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend Frameworks",
    skills: ["Django (DRF)", "Flask", "FastAPI", "Python"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Automation & Tools",
    skills: ["Selenium", "Puppeteer"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Anaconda"],
    color: "from-indigo-500 to-purple-500"
  }
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills" customClass="max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-gradient-to-br from-[#232526] to-[#18181b] border-2 border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-300"
          >
            <h3 
              className="text-xl font-bold mb-4"
              style={{
                backgroundImage: 'linear-gradient(to right, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-sm shadow-lg cursor-default select-none hover:shadow-xl transition-all duration-300`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional Skills Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border-2 border-purple-500/50 rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-white">Specialized Expertise</h3>
        <p className="text-gray-300 mb-6 text-lg">
          Full Stack Development • API Design • SaaS Platform Development • 
          Responsive UI Development • Performance Optimization • Scalability Solutions
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["SaaS Development", "API Integration", "Automation", "Performance Optimization", "Security"].map((expertise) => (
            <span
              key={expertise}
              className="px-4 py-2 rounded-full bg-white/10 text-purple-300 border border-purple-500/50 text-sm font-semibold"
            >
              {expertise}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
