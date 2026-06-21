"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Retinex — AI Retinopathy Detection",
    desc: "Research project detecting diabetic retinopathy from retinal scans using AI. I lead the frontend — building the interface that makes a complex medical model accessible and usable.",
    tags: ["React", "AI/ML", "Medical Tech", "Research"],
    link: "https://github.com/Vani20-0/Retinex",
    badge: "Research",
  },
  {
    num: "02",
    title: "Sangam — Anonymous Dating App",
    desc: "A privacy-first connection app built for campus. Users match and chat anonymously — identity only revealed on mutual consent.",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "https://github.com/Vani20-0/sangam",
    badge: "Team Project",
  },
  {
    num: "03",
    title: "wePay — Offline Blockchain Payment",
    desc: "A payment system that works without internet — powered by blockchain for trust and transparency. Built for environments where connectivity is unreliable.",
    tags: ["Blockchain", "Node.js", "JavaScript"],
    link: "https://github.com/Vani20-0/wePay",
    badge: "Semester Project",
  },
  {
    num: "04",
    title: "Uni-Kart — Student Marketplace",
    desc: "A circular economy platform for Kathmandu University students to buy and sell used goods on campus. Reduces waste, saves money, builds community.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Vani20-0/Uni-Kart",
    badge: "Semester Project",
  },
  {
    num: "05",
    title: "Portfolio Website",
    desc: "This site. Eye-tracking avatar, lamp switch dark/light toggle, floating orbit cards, scroll animations. Designed and built from scratch.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://github.com/Vani20-0",
    badge: "Personal",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section
      id="projects"
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
          Work
        </p>
        <h2 className="font-space font-bold text-4xl tracking-tight">
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-col gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
        {/* Featured - full width */}
        <motion.a
          href={featured.link}
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="group relative bg-[#0A0A0A] p-9 hover:bg-[#111] transition-colors duration-200"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-inter text-[#555] tracking-widest">
                {featured.num}
              </span>
              <span className="text-[10px] font-inter px-2.5 py-1 rounded-full border border-white/10 text-[#888]">
                {featured.badge}
              </span>
              <span className="text-[10px] font-inter px-2.5 py-1 rounded-full border border-white/15 text-white/50">
                ★ Featured
              </span>
            </div>
            <span className="text-[#555] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
              ↗
            </span>
          </div>
          <div className="grid grid-cols-2 gap-12 items-end">
            <div>
              <h3 className="font-space font-semibold text-2xl tracking-tight mb-3">
                {featured.title}
              </h3>
              <p className="text-sm text-[#888] font-inter leading-relaxed">
                {featured.desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-inter px-2.5 py-1 bg-[#1A1A1A] rounded-md text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Rest - 2 col */}
        <div className="grid grid-cols-2 gap-px bg-white/8">
          {rest.map((project, i) => (
            <motion.a
              key={project.num}
              href={project.link}
              target="_blank"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
              className="group relative bg-[#0A0A0A] p-9 flex flex-col gap-4 hover:bg-[#111] transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-inter text-[#555] tracking-widest">
                  {project.num}
                </span>
                <span className="text-[10px] font-inter px-2.5 py-1 rounded-full border border-white/10 text-[#888]">
                  {project.badge}
                </span>
              </div>
              <span className="absolute top-9 right-9 text-[#555] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200">
                ↗
              </span>
              <h3 className="font-space font-semibold text-xl tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#888] font-inter leading-relaxed flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-inter px-2.5 py-1 bg-[#1A1A1A] rounded-md text-[#666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center text-xs text-[#555] font-inter mt-6"
      >
        More coming — follow on{" "}
        <a
          href="https://github.com/Vani20-0"
          target="_blank"
          className="text-white underline underline-offset-4"
        >
          GitHub
        </a>
      </motion.p>
    </section>
  );
}
