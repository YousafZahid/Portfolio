
  "use client";
import { motion } from "framer-motion";
import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import SplineSection from "./spline-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] mb-4">
          Yousaf Zahid — Full Stack & AI Developer
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-200 mb-8">
          Helping Businesses & Individuals Build High-Impact Websites, AI Tools & Automation Solutions
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Let&apos;s Build Something Amazing
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-transparent to-transparent pointer-events-none"
      />
      <SplineSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
