"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function MagneticButton({
  children,
  className,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  const handleMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ x: reduce ? 0 : sx, y: reduce ? 0 : sy }}
      whileHover={reduce ? {} : { scale: 1.02 }}
      whileTap={reduce ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-mountain-950 shadow-[0_12px_40px_rgba(14,165,233,0.35)]",
        "bg-gradient-to-r from-sky-200 via-white to-cyan-100 ring-1 ring-white/70",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/50 before:to-white/0 before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className,
      )}
    >
      <span className="relative z-[1]">{children}</span>
    </motion.button>
  );
}
