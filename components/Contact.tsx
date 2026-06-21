"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  {
    label: "Email",
    meta: "sanjeebani.dev@gmail.com",
    href: "mailto:sanjeebani.dev@gmail.com",
  },
  {
    label: "GitHub",
    meta: "See what I'm building",
    href: "https://github.com/Vani20-0",
  },
  {
    label: "LinkedIn",
    meta: "Let's connect",
    href: "https://www.linkedin.com/in/sanjeebani-pariyar-b219541aa/",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="max-w-5xl mx-auto px-12 py-28 border-t border-white/8"
    >
      <div className="grid grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-inter">
            Let's talk
          </p>
          <h2 className="font-space font-bold text-4xl tracking-tight leading-tight mb-6">
            Get in
            <br />
            touch
          </h2>
          <p className="text-sm text-[#888] font-inter leading-relaxed mb-12">
            Open to interesting conversations — whether it's a project, an
            opportunity, or just to say hi.
          </p>
          <span className="text-8xl">👋</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3 pt-16"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              className="group flex items-center justify-between px-6 py-5 bg-[#111] border border-white/8 rounded-xl hover:bg-[#1A1A1A] hover:border-white/15 transition-all duration-200"
            >
              <div>
                <p className="text-sm font-inter font-medium text-white">
                  {link.label}
                </p>
                <p className="text-xs font-inter text-[#555] mt-0.5">
                  {link.meta}
                </p>
              </div>
              <span className="text-[#555] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                ↗
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
