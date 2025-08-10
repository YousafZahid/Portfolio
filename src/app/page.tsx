
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
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] mb-6">
          Stand Out. <span className="whitespace-nowrap">Be Unforgettable.</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-2xl text-gray-200 mb-8">
          I craft digital experiences that captivate, inspire, and convert. Let’s build something extraordinary together.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          Work With Me
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
