"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#story", label: "Story" },
  { href: "#values", label: "Values" },
  { href: "#team", label: "Team" },
  { href: "#connect", label: "Connect" },
] as const;

export function Navigation() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-[70] px-4 pt-4 sm:px-6"
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5",
          solid
            ? "border-white/15 bg-white/55 shadow-[0_12px_50px_rgba(15,39,68,0.12)] backdrop-blur-xl"
            : "border-white/25 bg-white/35 shadow-[0_8px_40px_rgba(15,39,68,0.08)] backdrop-blur-md",
        )}
      >
        <a href="#top" className="group flex items-center gap-2 text-mountain-950">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-md ring-1 ring-white/30">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
              <path
                d="M12 4l8 10H4L12 4z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Everest Allegiance
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-mountain-900/80 transition hover:bg-white/50 hover:text-mountain-950"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#connect"
          className="hidden rounded-full bg-mountain-950 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-mountain-900 sm:inline-flex"
        >
          Join us
        </a>
      </div>
    </motion.header>
  );
}
