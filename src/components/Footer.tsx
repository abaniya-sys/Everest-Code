"use client";

import { motion } from "framer-motion";

const company = [
  { href: "#mission", label: "Mission" },
  { href: "#story", label: "Story" },
  { href: "#values", label: "Values" },
  { href: "#team", label: "Team" },
] as const;

const resources = [{ href: "#connect", label: "Connect" }] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-mountain-950 to-mountain-900 text-zinc-200/85">
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-overlay">
        <div className="noise-layer absolute inset-[-200%] h-[400%] w-[400%]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-lg font-semibold text-white">About</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400/90">
              Everest Allegiance is a youth-led nonprofit based in Edmonton — engaging the community
              through arts, education, and empowerment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-lg font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {company.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-lg font-semibold text-white">Resources</p>
            <ul className="mt-4 space-y-2 text-sm">
              {resources.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-zinc-400 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Everest Allegiance. All rights reserved.</p>
          <p className="text-zinc-600">Edmonton · Youth · Community</p>
        </div>
      </div>
    </footer>
  );
}
