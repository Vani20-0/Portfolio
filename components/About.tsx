"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="max-w-5xl mx-auto px-12 py-28 border-t border-white/8"
    >
      <div className="grid grid-cols-2 gap-20 items-center">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full aspect-[3/4] rounded-2xl bg-[#111] border border-white/8 flex items-center justify-center overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating tag */}
          <div className="absolute -bottom-4 -right-4 bg-[#111] border border-white/8 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-inter text-[#888]">
                Open to opportunities
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#888] mb-4 font-inter">
            About me
          </p>
          <h2 className="font-space font-bold text-4xl tracking-tight leading-tight mb-6">
            Engineer by training.
            <br />
            Creative by nature.
          </h2>
          <p className="text-[#888] font-inter text-base leading-relaxed mb-4">
            I'm <span className="text-white">Sanjeebani Pariyar</span>, a
            third-year Computer Engineering student at Kathmandu University. I
            build full-stack products; and I care about every layer, from how
            data moves in the backend to how a button feels on screen.
          </p>
          <p className="text-[#888] font-inter text-base leading-relaxed mb-8">
            Outside of code I draw, dance, sing, cook and design. I have a thing
            for beautiful, polished designs with soft spot for cute details. I'm
            hungry to learn, hard to stop, and on my way to working towards
            creative softwares that make a difference. If that sounds
            interesting, let's connect!
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React / Next.js",
              "TypeScript",
              "React Native",
              "Node.js",
              "MongoDB",
              "C/C++",
              "UI/UX",
              "Figma",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 border border-white/8 rounded-full text-xs text-[#888] font-inter"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Currently building */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#111] border border-white/8 rounded-xl">
            <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
            <p className="text-xs font-inter text-[#888]">
              Currently: <span className="text-white font-medium">Retinex</span>{" "}
              — AI that detects diabetic retinopathy. Leading frontend.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
