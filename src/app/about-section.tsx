  "use client";
  import Section from "./components/Section";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-lg md:text-2xl text-gray-200 space-y-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">What I Offer</h3>
        <p>
          I don’t just write code — I create solutions that save you time, increase efficiency, and make your business look professional. Whether you need a modern website, AI integration, or a smart automation script, I can bring your ideas to life.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">Why Choose Me?</h3>
        <ul className="text-left mx-auto max-w-2xl list-disc list-inside text-lg md:text-xl text-gray-200 space-y-2">
          <li><span className="font-bold text-pink-400">Proven Experience</span> — Delivered projects for startups, academic research, and real-world clients</li>
          <li><span className="font-bold text-pink-400">Diverse Tech Stack</span> — From Python to React, I cover both backend and frontend with ease</li>
          <li><span className="font-bold text-pink-400">Business-Driven Development</span> — I focus on results, not just code</li>
          <li><span className="font-bold text-pink-400">End-to-End Delivery</span> — From idea to deployment, I handle the full development cycle</li>
          <li><span className="font-bold text-pink-400">Client-Centric Approach</span> — I listen, adapt, and ensure your vision is translated into a functional product</li>
        </ul>
        <p className="mt-6 text-xl text-yellow-300 font-semibold">Your idea deserves more than just a developer — it deserves someone who cares about its success. That’s exactly what I bring to the table.</p>
      </motion.div>
    </Section>
  );
}
