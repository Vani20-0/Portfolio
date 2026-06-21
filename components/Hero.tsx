"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const pupilL = useRef<HTMLDivElement>(null);
  const pupilR = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyesRef.current) return;
      const eyeEls = eyesRef.current.querySelectorAll(".eye");
      eyeEls.forEach((eye, i) => {
        const pupil = i === 0 ? pupilL.current : pupilR.current;
        if (!pupil) return;
        const rect = eye.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(6, Math.hypot(dx, dy) * 0.15);
        pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const orbitCards = [
    {
      label: "About me",
      href: "#about",
      pos: "top-[-60px] left-[-180px]",
      delay: 0,
    },
    {
      label: "Projects",
      href: "#projects",
      pos: "top-[-40px] right-[-160px]",
      delay: 0.5,
    },
    {
      label: "Contact",
      href: "#contact",
      pos: "bottom-[-20px] right-[-170px]",
      delay: 1,
    },
    {
      label: "CV",
      href: "#cv",
      pos: "bottom-[-50px] left-[-160px]",
      delay: 1.5,
    },
  ];

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Big background text */}
      <span className="absolute font-space font-bold text-[20vw] text-white/[0.03] select-none pointer-events-none tracking-tighter">
        SEM
      </span>

      <div className="relative flex items-center justify-center w-full max-w-4xl px-12">
        {/* Left text */}
        <div className="absolute left-0">
          <h1 className="font-space font-bold text-5xl tracking-tight leading-none mb-3">
            Hi,
            <br />
            I'm Vani.
          </h1>
          <p className="text-sm text-[#888] font-inter leading-relaxed">
            Computer Engineering
            <br />
            Student · Year 3
          </p>
        </div>

        {/* Face */}
        <div
          className="relative w-[220px] h-[220px] flex-shrink-0 z-10"
          style={{ overflow: "visible" }}
        >
          <div className="w-[220px] h-[220px] rounded-full bg-[#111] border border-white/8 flex items-center justify-center relative overflow-hidden">
            {/* Avatar image */}
            <img
              src="/avataaars.svg"
              alt="Sem avatar"
              className="absolute bottom-0 w-[200px] object-contain"
              style={{ transform: "translateX(-50%)", left: "50%" }}
            />
            <div
              ref={eyesRef}
              className="absolute flex gap-4"
              style={{
                top: "43%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="eye w-7 h-7 bg-white rounded-full flex items-center justify-center relative">
                <div
                  ref={pupilL}
                  className="pupil w-3.5 h-3.5 bg-[#0A0A0A] rounded-full absolute transition-transform duration-75"
                >
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
              <div className="eye w-7 h-7 bg-white rounded-full flex items-center justify-center relative">
                <div
                  ref={pupilR}
                  className="pupil w-3.5 h-3.5 bg-[#0A0A0A] rounded-full absolute transition-transform duration-75"
                >
                  <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Orbit cards */}
          {orbitCards.map((card) => (
            <motion.a
              key={card.label}
              href={card.href}
              className={`absolute ${card.pos} bg-[#111] border border-white/8 rounded-xl px-4 py-2.5 text-sm font-space font-medium text-white whitespace-nowrap hover:border-white/25 hover:bg-[#1A1A1A] transition-colors duration-200`}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: card.delay,
                ease: "easeInOut",
              }}
            >
              {card.label} ↗
            </motion.a>
          ))}
        </div>

        {/* Right text */}
        <div className="absolute right-0 text-right">
          <p className="text-sm text-[#888] font-inter leading-relaxed">
            Building at the intersection
            <br />
            of <span className="text-white font-medium">AI</span> and{" "}
            <span className="text-white font-medium">design</span>.<br />
            <br />
            Based in Nepal.
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#888] text-[10px] uppercase tracking-widest animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-[#888] to-transparent" />
        scroll
      </div>
    </section>
  );
}
