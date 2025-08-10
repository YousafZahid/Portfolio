  "use client";
import Section from "./components/Section";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Stunning SaaS Dashboard",
    description: "A beautiful, data-rich dashboard for SaaS analytics with real-time charts and dark mode.",
    image: "/images/saas-dashboard.png",
    link: "#",
  },
  {
    title: "Creative Portfolio",
    description: "A visually striking portfolio template for designers and developers.",
    image: "/images/creative-portfolio.png",
    link: "#",
  },
  {
    title: "E-commerce Experience",
    description: "A modern, conversion-focused e-commerce UI with smooth animations.",
    image: "/images/ecommerce.png",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
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
    </Section>
  );
}
