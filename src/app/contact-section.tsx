"use client";

import Section from "./components/Section";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpleda");

  const contactInfo = [
    { label: "Email", value: "yousaf.zhd3@gmail.com", href: "mailto:yousaf.zhd3@gmail.com" },
    { label: "Phone", value: "+92 330 4390239", href: "tel:+923304390239" },
    { label: "Location", value: "Lahore, Pakistan", href: "#contact" },
  ];

  return (
    <Section id="contact" title="Get in touch" kicker="Contact" customClass="max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="card p-8"
        >
          <p className="text-[var(--muted)] leading-relaxed mb-8">
            I&apos;m open to full-time roles and freelance projects. Whether you want to build
            something or just talk shop, feel free to reach out.
          </p>

          <div className="space-y-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center justify-between py-3 border-b border-[var(--border)] group"
              >
                <span className="text-sm text-[var(--muted-2)]">{info.label}</span>
                <span className="text-white group-hover:text-[var(--accent)] transition-colors">
                  {info.value}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/YousafZahid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--border-strong)] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/yousaf-zhd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-white hover:border-[var(--border-strong)] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="card p-8 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--muted)] mb-2">Name</label>
            <input
              type="text" id="name" name="name" placeholder="Your name" required
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0c] text-white placeholder-[var(--muted-2)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-[var(--muted)] mb-2">Email</label>
            <input
              id="email" type="email" name="email" placeholder="you@example.com" required
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0c] text-white placeholder-[var(--muted-2)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--muted)] mb-2">Message</label>
            <textarea
              id="message" name="message" placeholder="Tell me about your project or role..." required rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[#0a0a0c] text-white placeholder-[var(--muted-2)] border border-[var(--border)] focus:border-[var(--accent)] transition-colors resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button type="submit" disabled={state.submitting} className="btn-primary justify-center disabled:opacity-50">
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          {state.succeeded && (
            <div className="p-3 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-sm text-center">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
