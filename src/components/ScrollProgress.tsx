"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const [p, setP] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const next = height > 0 ? scrollTop / height : 0;
      setP(Math.min(1, Math.max(0, next)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduce]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[90] h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400"
        style={{ transformOrigin: "0% 50%" }}
        animate={{ scaleX: p }}
        initial={{ scaleX: 0 }}
        transition={{ type: "tween", ease: "linear", duration: 0.06 }}
      />
    </div>
  );
}
