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
        className="max-w-2xl mx-auto text-center text-lg md:text-2xl text-gray-200"
      >
        <p>
          Hi, I’m <span className="text-pink-400 font-bold">Yousaf Zahid</span> — a passionate developer and designer who loves building digital experiences that make people say “wow.” My work blends creativity, technology, and strategy to help brands and individuals stand out in a crowded world.
        </p>
        <p className="mt-6">
          Whether you need a stunning website, a high-converting product, or a unique brand identity, I’m here to help you shine.
        </p>
      </motion.div>
    </Section>
  );
}
