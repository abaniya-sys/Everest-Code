"use client";

import type { MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { valueIconFor } from "@/components/icons";
import { Modal } from "@/components/Modal";
import { coreValues } from "@/lib/content";
import { cn } from "@/lib/utils";

function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setRot({ x: py * -10, y: px * 12 });
  };

  const reset = () => setRot({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("perspective-dramatic", className)}
      animate={
        reduce
          ? {}
          : {
              y: [0, -5, 0],
            }
      }
      transition={
        reduce
          ? {}
          : {
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="tilt-wrap h-full"
        animate={{ rotateX: rot.x, rotateY: rot.y }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function CoreValues() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = coreValues.find((v) => v.id === openId);

  return (
    <section
      id="values"
      className="relative scroll-mt-28 border-t border-white/70 bg-gradient-to-b from-zinc-50 via-white to-sky-50/60 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700/80">
            Core values
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mountain-950 sm:text-4xl">
            What we protect in the climb
          </h2>
          <p className="mt-4 text-pretty text-mountain-900/70">
            Tilt the cards. Click to go deeper — examples included.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {coreValues.map((v, i) => (
            <TiltCard key={v.id}>
              <motion.button
                type="button"
                onClick={() => setOpenId(v.id)}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-8 text-left shadow-[0_22px_70px_rgba(15,39,68,0.1)] backdrop-blur-md transition-shadow hover:shadow-[0_30px_90px_rgba(14,165,233,0.2)]"
              >
                <motion.div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-800 ring-1 ring-sky-200/70"
                  whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
                  transition={{ duration: 0.55 }}
                >
                  {valueIconFor(v.icon, { animate: true })}
                </motion.div>
                <h3 className="font-display text-2xl font-semibold text-mountain-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mountain-900/70">{v.summary}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-sky-700/80 opacity-0 transition group-hover:opacity-100">
                  Expand value →
                </p>
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl transition group-hover:bg-sky-300/50" />
              </motion.button>
            </TiltCard>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setOpenId(null)} title={active?.title ?? ""}>
        {active ? (
          <div className="space-y-5 text-sm leading-relaxed text-zinc-100/88">
            <p>{active.detail}</p>
            <p className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-sky-100/90">
              {active.example}
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
