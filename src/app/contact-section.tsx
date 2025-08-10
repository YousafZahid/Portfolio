  "use client";

import Section from "./components/Section";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';


export default function ContactSection() {
  const [state, handleSubmit] = useForm("xyzpleda");
  return (
    <Section id="contact" title="Contact">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-[#232526] rounded-2xl p-8 shadow-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-5 py-3 rounded-lg bg-[#181a1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-5 py-3 rounded-lg bg-[#181a1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="px-5 py-3 rounded-lg bg-[#181a1b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
        {state.succeeded && (
          <p className="text-green-400 text-center mt-4">Thank you for reaching out! I&apos;ll get back to you soon.</p>
        )}
      </motion.form>
    </Section>
  );
}
