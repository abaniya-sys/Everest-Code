"use client";

import type { ReactNode } from "react";
import { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { storyLines } from "@/lib/content";
import { cn } from "@/lib/utils";

function highlightWord(
  raw: string,
  keywords: readonly string[],
): ReactNode[] {
  const m = raw.match(/^(\W*)([\w'-]+)(\W*)$/);
  if (!m) return [raw];
  const [, lead, core, trail] = m;
  const lower = core.toLowerCase();
  const hit = keywords.some(
    (k) => lower === k || lower.startsWith(k) || lower.includes(k),
  );
  if (!hit) return [raw];
  return [
    lead,
    <span
      key={`${core}-${lower}`}
      className={cn(
        "relative inline-block rounded-md px-1 font-semibold",
        "bg-gradient-to-r from-sky-600/20 to-indigo-500/20 ring-1 ring-sky-500/35",
        "decoration-sky-400 underline-offset-4",
      )}
    >
      {core}
    </span>,
    trail,
  ];
}

function StoryLine({
  text,
  keywords,
  i,
}: {
  text: string;
  keywords: readonly string[];
  i: number;
}) {
  const parts = useMemo(() => {
    return text.split(/(\s+)/).flatMap((chunk) => {
      if (/^\s+$/.test(chunk)) return [chunk];
      return highlightWord(chunk, keywords);
    });
  }, [text, keywords]);

  return (
    <motion.p
      className="text-pretty text-lg leading-relaxed sm:text-xl"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        delay: i * 0.08,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {parts}
    </motion.p>
  );
}

export function StoryNarrative() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const overlay = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);
  const fg = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["#0f2744", "#e2e8f0", "#f8fafc"],
  );
  const sub = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    ["rgba(15,39,68,0.55)", "rgba(226,232,240,0.7)", "rgba(248,250,252,0.65)"],
  );

  return (
    <section
      ref={ref}
      id="story"
      className="relative scroll-mt-28 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-indigo-100" />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-mountain-900 via-mountain-950 to-black"
        style={{ opacity: overlay }}
      />
      <motion.div className="relative z-[1] mx-auto max-w-3xl px-6" style={{ color: fg }}>
        <motion.h2
          className="font-display text-center text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Purpose &amp; story
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-xl text-center text-sm"
          style={{ color: sub }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Scroll slowly — the tone deepens as the narrative unfolds.
        </motion.p>
        <div className="mt-14 flex flex-col gap-8">
          {storyLines.map((line, i) => (
            <StoryLine key={i} i={i} text={line.text} keywords={line.keywords} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
