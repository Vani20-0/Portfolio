"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CV() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cv"
      ref={ref}
      className="max-w-5xl mx-auto px-12 py-16 border-t border-white/8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between bg-[#111] border border-white/8 rounded-2xl px-10 py-10"
      >
        <div>
          <h3 className="font-space font-semibold text-2xl tracking-tight mb-2">
            Want the full picture?
          </h3>
          <p className="text-sm text-[#888] font-inter">
            Download my CV for education, coursework and everything not on this
            page.
          </p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="flex-shrink-0 px-7 py-4 bg-white text-[#0A0A0A] rounded-xl font-space font-semibold text-sm hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200"
        >
          Download CV ↓
        </a>
      </motion.div>
    </section>
  );
}
