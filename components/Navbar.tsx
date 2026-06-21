"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [pulling, setPulling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = async () => {
    if (pulling) return;
    setPulling(true);

    // Pull down animation
    await controls.start({
      y: 18,
      transition: { duration: 0.15, ease: "easeIn" },
    });
    // Bounce back
    await controls.start({
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    });

    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.classList.toggle("light", !next);
      return next;
    });

    setPulling(false);
  };

  return (
    <>
      {/* Shadow vignette top right */}
      <div
        className="fixed top-0 right-0 w-48 h-48 pointer-events-none z-40"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(0,0,0,0.7) 0%, transparent 70%)",
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md bg-[#0A0A0A]/80" : "bg-transparent"
        }`}
      >
        <a
          href="#hero"
          className={`font-space font-bold text-xl tracking-tight transition-opacity duration-700 ${scrolled ? "opacity-100" : "opacity-0"}`}
        >
          Sanjeebani.
        </a>

        <ul
          className={`flex gap-10 list-none transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`}
        >
          {["About", "Projects", "Skills", "CV", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xs font-inter text-[#888] uppercase tracking-widest hover:text-[#F5F5F5] transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Lamp switch */}
        {/* <div
          className={`fixed top-0 right-16 flex flex-col items-center cursor-pointer z-50 transition-opacity duration-700 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onClick={toggleTheme}
        > */}
        {/* Long thread going to middle of screen */}
        {/* <div className="w-px bg-white/25" style={{ height: "36vh" }} />
          {/* Pull tab */}
        {/*<motion.div animate={controls} className="flex flex-col items-center">
            <div className="w-px h-4 bg-white/25" /> */}
        {/* Bulb */}
        {/* <div className="w-9 h-9 rounded-full border border-white/30 bg-[#1A1A1A] flex items-center justify-center shadow-lg hover:border-white/60 transition-colors duration-200">
              <span className="text-base">{isDark ? "☀️" : "🌙"}</span>
            </div> */}
        {/* Small knot below bulb */}
        {/* <div className="w-px h-2 bg-white/15" />
            <div className="w-2 h-2 rounded-full bg-white/15" />
          </motion.div>
        </div> */}
      </nav>
    </>
  );
}
