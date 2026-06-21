"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const ringRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea')) {
        setIsHover(true);
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], input, textarea')) {
        setIsHover(false);
      }
    };

    const onMouseDown = () => setIsClick(true);
    const onMouseUp = () => setIsClick(false);
    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnterDoc = () => setIsHidden(false);

    // Animate ring with lag
    const animateRing = () => {
      setRing((prev) => ({
        x: prev.x + (ringRef.current.x - prev.x) * 0.25,
        y: prev.y + (ringRef.current.y - prev.y) * 0.25,
      }));
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnterDoc);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener(
        "mouseenter",
        onMouseEnterDoc,
      );
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-white mix-blend-difference"
        animate={{
          x: pos.x - (isClick ? 6 : isHover ? 4 : 4),
          y: pos.y - (isClick ? 6 : isHover ? 4 : 4),
          width: isClick ? 12 : isHover ? 8 : 8,
          height: isClick ? 12 : isHover ? 8 : 8,
        }}
        transition={{ duration: 0, ease: "linear" }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-white/50 mix-blend-difference"
        animate={{
          x: ring.x - (isHover ? 20 : isClick ? 14 : 16),
          y: ring.y - (isHover ? 20 : isClick ? 14 : 16),
          width: isHover ? 40 : isClick ? 28 : 32,
          height: isHover ? 40 : isClick ? 28 : 32,
          opacity: isClick ? 0.5 : 1,
        }}
        transition={{ duration: 0.08, ease: "easeOut" }}
      />
    </>
  );
}
