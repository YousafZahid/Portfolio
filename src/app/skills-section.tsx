  "use client";
  import Section from "./components/Section";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "JavaScript",
  "C++",
  "Django (DRF)",
  "Flask",
  "FastAPI",
  "React.js",
  "Node.js",
  "Selenium",
  "Puppeteer",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Supabase",
];


export default function SkillsSection() {
  const row1 = skills.slice(0, 3);
  const row2 = skills.slice(3, 9);
  const row3 = skills.slice(9, 14);

  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-row gap-4 justify-center mb-4">
        {row1.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold shadow-md text-lg cursor-pointer select-none"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center mb-4 flex-wrap">
        {row2.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold shadow-md text-lg cursor-pointer select-none"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-center flex-wrap">
        {row3.map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold shadow-md text-lg cursor-pointer select-none"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
