"use client";

import Section from "./components/Section";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpleda");
  
  const contactInfo = [
    {
      label: "Email",
      value: "yousaf.zhd3@gmail.com",
      href: "mailto:yousaf.zhd3@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+92 330 4390239",
      href: "tel:+923304390239",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      href: "#",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <Section id="contact" title="Get In Touch" customClass="max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat 
              about technology and development. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-purple-500/30">
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/yousaf-zahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/yousaf-zahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-pink-500/20 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#232526] to-[#18181b] border-2 border-purple-500/50 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-purple-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-5 py-3 rounded-lg bg-[#0a0a0a] text-white placeholder-gray-500 border-2 border-purple-500/30 focus:outline-none focus:border-purple-500 transition-all duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-purple-300 mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="w-full px-5 py-3 rounded-lg bg-[#0a0a0a] text-white placeholder-gray-500 border-2 border-purple-500/30 focus:outline-none focus:border-purple-500 transition-all duration-300"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-purple-300 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hello! I'd like to discuss..."
              required
              rows={6}
              className="w-full px-5 py-3 rounded-lg bg-[#0a0a0a] text-white placeholder-gray-500 border-2 border-purple-500/30 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          
          <motion.button
            type="submit"
            disabled={state.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
          
          {state.succeeded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/20 border-2 border-green-500/50 rounded-lg text-green-400 text-center"
            >
              Thank you for reaching out! I&apos;ll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
