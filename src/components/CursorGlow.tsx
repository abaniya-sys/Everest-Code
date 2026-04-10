"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const enter = () => setOn(true);
    const leave = () => setOn(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.body.addEventListener("pointerenter", enter);
    document.body.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.body.removeEventListener("pointerenter", enter);
      document.body.removeEventListener("pointerleave", leave);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[85] mix-blend-screen"
      style={{ left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: on ? 0.55 : 0, scale: on ? 1 : 0.85 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_65%)] blur-2xl" />
    </motion.div>
  );
}
