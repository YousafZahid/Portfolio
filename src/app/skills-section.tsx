  "use client";
  import Section from "./components/Section";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "UI/UX Design",
  "Figma",
  "API Integration",
  "Performance Optimization",
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
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
