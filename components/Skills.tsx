"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C", "C++", "Python"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "MongoDB", "REST APIs", "Express.js"],
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Git / GitHub", "Vercel", "VS Code"],
  },
  {
    title: "Exploring",
    skills: ["Python for AI/ML", "FastAPI", "PostgreSQL", "LLM APIs"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-5xl mx-auto px-12 py-28 border-t border-white/8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-inter">
          Toolkit
        </p>
        <h2 className="font-space font-bold text-4xl tracking-tight">
          What I work with
        </h2>
      </motion.div>

      <div className="flex flex-col gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: gi * 0.08 }}
            className="bg-[#0A0A0A] hover:bg-[#111] transition-colors duration-200 px-9 py-6 flex items-center gap-8"
          >
            <span className="text-xs uppercase tracking-widest text-[#444] font-inter w-28 flex-shrink-0">
              {group.title}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-inter px-3 py-1.5 bg-[#1A1A1A] border border-white/5 rounded-lg text-[#888] hover:text-white hover:border-white/15 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
