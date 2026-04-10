"use client";

import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { missionIconFor } from "@/components/icons";
import { Modal } from "@/components/Modal";
import { missionPillars } from "@/lib/content";
import { cn } from "@/lib/utils";

export function InteractiveMission() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = missionPillars.find((p) => p.id === openId);

  return (
    <section
      id="mission"
      className="relative scroll-mt-28 border-t border-white/60 bg-gradient-to-b from-sky-50/80 via-white to-zinc-50 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">
            Interactive mission
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mountain-950 sm:text-4xl">
            Four pillars. One climb.
          </h2>
          <p className="mt-4 text-pretty text-mountain-900/70">
            Hover to expand. Click to read the full story behind each pillar.
          </p>
        </motion.div>

        <LayoutGroup>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missionPillars.map((p, i) => (
              <motion.button
                key={p.id}
                type="button"
                layout
                onClick={() => setOpenId(p.id)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border border-sky-100/80 bg-white/70 p-6 text-left shadow-[0_18px_60px_rgba(15,39,68,0.08)] backdrop-blur-md transition-shadow",
                  "hover:border-sky-200/90 hover:shadow-[0_26px_80px_rgba(14,165,233,0.18)]",
                )}
              >
                <motion.div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-800 ring-1 ring-sky-200/60"
                  whileHover={{ rotate: [0, -4, 4, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {missionIconFor(p.icon, { animate: false })}
                </motion.div>
                <motion.div layout className="relative z-[1]">
                  <h3 className="font-display text-xl font-semibold text-mountain-950">{p.title}</h3>
                  <motion.p
                    layout
                    className="mt-2 text-sm leading-relaxed text-mountain-900/70"
                    initial={false}
                    whileHover={{ opacity: [0.75, 1] }}
                  >
                    {p.blurb}
                  </motion.p>
                  <motion.p
                    layout
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-sky-700/80 opacity-0 transition group-hover:opacity-100"
                  >
                    Open story →
                  </motion.p>
                </motion.div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/35 blur-2xl transition group-hover:bg-sky-300/45" />
              </motion.button>
            ))}
          </div>
        </LayoutGroup>
      </div>

      <Modal
        open={!!active}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ""}
      >
        {active ? (
          <div className="space-y-4 text-sm leading-relaxed text-zinc-100/85">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-sky-200/90">
              {missionIconFor(active.icon, { animate: true, className: "h-4 w-4" })}
              Mission pillar
            </div>
            <p>{active.story}</p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
