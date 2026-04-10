"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<string, ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 17.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 9.5zM17.8 6.3a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v9h-4v-8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4v8.3h-4V8z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64V9.4a6.34 6.34 0 00-1-.09A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.14-5.1v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  ),
  linktree: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M7 3h10v4H7V3zm0 7h10v4H7v-4zm-4 7h18v4H3v-4z" />
    </svg>
  ),
};

export function SocialSection() {
  return (
    <section
      id="connect"
      className="relative scroll-mt-28 border-t border-white/60 bg-gradient-to-b from-sky-50/90 via-white to-zinc-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">
            Community
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mountain-950 sm:text-4xl">
            Stay in the loop
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-mountain-900/70">
            Follow the climb — updates, behind-the-scenes, and ways to get involved.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-8%" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {socialLinks.map((s) => (
            <motion.a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/25",
                `bg-gradient-to-r ${s.gradient}`,
              )}
            >
              <motion.span
                className="relative z-[1] flex items-center gap-2"
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                <motion.span
                  className="grid place-items-center"
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.45 }}
                >
                  {icons[s.id]}
                </motion.span>
                {s.label}
              </motion.span>
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-white/20 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              <span className="pointer-events-none absolute -inset-8 rounded-full bg-white/25 opacity-0 blur-2xl transition group-hover:opacity-40" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
