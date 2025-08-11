  "use client";
import Section from "./components/Section";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Financial Management Website",
    description: "Secure, JWT-authenticated platform providing personalized financial advice.",
    image: "/images/saas-dashboard.png",
    link: "#",
  },
  {
    title: "AI-Powered Pet Adoption Platform",
    description: "Matches pets with owners using AI recommendations.",
    image: "/images/creative-portfolio.png",
    link: "#",
  },
  {
    title: "E-commerce Partner Dashboard",
    description: "TikTok Shop partner system for analytics, inventory, and creator management.",
    image: "/images/ecommerce.png",
    link: "#",
  },
  {
    title: "Stock Price Prediction Tool",
    description: "Predictive models with LSTM & regression for next-day forecasts.",
    image: "/images/saas-dashboard.png",
    link: "#",
  },
];




export default function ProjectsSection() {
  const [start, setStart] = useState(0);
  const visibleCount = 3;
  const total = projects.length;

  const handlePrev = () => setStart((prev) => (prev - visibleCount + total) % total);
  const handleNext = () => setStart((prev) => (prev + visibleCount) % total);

  // Get the visible projects, wrapping around if needed
  const visibleProjects = Array.from({ length: visibleCount }, (_, i) =>
    projects[(start + i) % total]
  );

  return (
    <Section id="projects" title="Projects">
      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        <button
          aria-label="Previous projects"
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-[#18181b] hover:bg-pink-500/80 text-yellow-300 hover:text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="w-full px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(255, 0, 128, 0.2)" }}
                className="block bg-[#232526] rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-pink-500/30 to-yellow-500/20 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={256}
                    height={128}
                    className="object-contain h-32 drop-shadow-xl w-auto mx-auto"
                    style={{ maxHeight: 128 }}
                    priority={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-pink-400">{project.title}</h3>
                  <p className="text-gray-200 mb-2">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
        <button
          aria-label="Next projects"
          onClick={handleNext}
          className="absolute right-0 z-10 bg-[#18181b] hover:bg-yellow-400/80 text-pink-400 hover:text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(total / visibleCount) }).map((_, i) => (
          <span
            key={i}
            className={`inline-block w-3 h-3 rounded-full ${(i * visibleCount) === start ? 'bg-yellow-400' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </Section>
  );
}
