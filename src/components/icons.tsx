"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type IconProps = { className?: string; animate?: boolean };

export function IconGrowth({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <motion.path
        d="M12 20V8M12 8l-4 4M12 8l4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={
          reduce || !animate
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: [0.2, 1], opacity: [0.6, 1] }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M7 20h10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        initial={false}
        animate={reduce || !animate ? {} : { pathLength: [0, 1] }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
    </svg>
  );
}

export function IconLearning({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      <motion.rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
        initial={false}
        animate={reduce || !animate ? { scale: 1 } : { scale: [1, 1.04, 1] }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.path
        d="M8 9h8M8 12h5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        initial={false}
        animate={reduce || !animate ? { opacity: 1 } : { opacity: [0.45, 1, 0.45] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.8 }}
      />
    </svg>
  );
}

export function IconCommunity({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      {[
        { cx: 8, cy: 10, r: 2.25 },
        { cx: 16, cy: 10, r: 2.25 },
        { cx: 12, cy: 15, r: 2.5 },
      ].map((c, i) => (
        <motion.circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          stroke="currentColor"
          strokeWidth="1.75"
          initial={false}
          animate={
            reduce || !animate
              ? { scale: 1, opacity: 1 }
              : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }
          }
          transition={{ duration: 1.6, delay: i * 0.12, repeat: Infinity, repeatDelay: 1 }}
        />
      ))}
    </svg>
  );
}

export function IconImpact({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      <motion.g
        initial={false}
        animate={reduce || !animate ? { rotate: 0 } : { rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }}
        style={{ transformOrigin: "12px 12px" }}
      >
        <path
          d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.8 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}

export function IconBolt({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      <motion.path
        d="M13 2L4 14h7l-1 8 10-14h-7l0-6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        initial={false}
        animate={reduce || !animate ? { y: 0 } : { y: [0, -2, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 1.4 }}
      />
    </svg>
  );
}

export function IconPeople({ className, animate }: IconProps) {
  return <IconCommunity className={className} animate={animate} />;
}

export function IconBulb({ className, animate }: IconProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-8 w-8", className)} aria-hidden>
      <motion.path
        d="M9 18h6M10 22h4M12 3a5 5 0 015 5c0 2.2-1.5 4-3 5v1H10v-1c-1.5-1-3-2.8-3-5a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={reduce || !animate ? { opacity: 1 } : { opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function missionIconFor(
  id: string,
  props: IconProps,
): ReactNode {
  switch (id) {
    case "growth":
      return <IconGrowth {...props} />;
    case "learning":
      return <IconLearning {...props} />;
    case "community":
      return <IconCommunity {...props} />;
    case "impact":
      return <IconImpact {...props} />;
    default:
      return null;
  }
}

export function valueIconFor(id: string, props: IconProps): ReactNode {
  switch (id) {
    case "empowerment":
      return <IconBolt {...props} />;
    case "community":
      return <IconPeople {...props} />;
    case "innovation":
      return <IconBulb {...props} />;
    default:
      return null;
  }
}
