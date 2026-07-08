"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#08080a]/80 backdrop-blur-md border-b border-[var(--border)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-white">
          Yousaf<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                active === link.id ? "text-white" : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:yousaf.zhd3@gmail.com"
            className="text-sm font-semibold text-white border border-[var(--border-strong)] rounded-lg px-4 py-2 hover:bg-white/5 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#08080a]/95 backdrop-blur-md border-b border-[var(--border)]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[var(--muted)] hover:text-white border-b border-[var(--border)] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 mt-3">
                <a href="/Yousaf-Zahid-CV.pdf" download onClick={() => setOpen(false)} className="btn-ghost flex-1 justify-center text-sm">
                  Download CV
                </a>
                <a href="mailto:yousaf.zhd3@gmail.com" onClick={() => setOpen(false)} className="btn-primary flex-1 justify-center text-sm">
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
