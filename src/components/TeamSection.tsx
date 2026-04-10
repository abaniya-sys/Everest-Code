"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "@/components/Modal";
import type { TeamMember } from "@/lib/content";
import { team } from "@/lib/content";
import { cn } from "@/lib/utils";

function TeamCard({
  member,
  onOpen,
  index,
}: {
  member: TeamMember;
  onOpen: () => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        delay: index * 0.05,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-shadow",
        "hover:border-sky-300/35 hover:shadow-[0_28px_100px_rgba(56,189,248,0.22)]",
      )}
    >
      <div
        className={cn(
          "mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-semibold text-white shadow-inner ring-1 ring-white/20",
          member.accent,
        )}
      >
        {member.initials}
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{member.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-200/85">
        {member.roleLabel}
        {member.focus ? ` · ${member.focus}` : ""}
      </p>
      <p className="relative mt-4 min-h-[2.75rem] text-sm leading-relaxed">
        <span className="block text-zinc-300/70 transition group-hover:opacity-0">
          Tap to meet them
        </span>
        <span className="absolute left-0 top-0 block text-zinc-100/90 opacity-0 transition duration-300 group-hover:opacity-100">
          {member.short}
        </span>
      </p>
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-sky-400/15 blur-3xl transition group-hover:bg-sky-300/25" />
    </motion.button>
  );
}

export function TeamSection() {
  const [open, setOpen] = useState<TeamMember | null>(null);

  return (
    <section
      id="team"
      className="relative scroll-mt-28 border-t border-white/10 bg-gradient-to-b from-mountain-900 via-mountain-950 to-black py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200/70">
            Team
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            The people behind the mission
          </h2>
          <p className="mt-4 text-pretty text-zinc-300/75">
            Startup energy, nonprofit heart — leads across every lane.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <TeamCard key={m.id} member={m} index={i} onOpen={() => setOpen(m)} />
          ))}
        </div>
      </div>

      <Modal open={!!open} onClose={() => setOpen(null)} title={open?.name ?? ""}>
        {open ? (
          <div className="space-y-5 text-sm leading-relaxed text-zinc-100/88">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200/90">
                {open.roleLabel}
              </span>
              {open.focus ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200/75">
                  {open.focus}
                </span>
              ) : null}
            </div>
            <p>{open.intro}</p>
            <p className="rounded-2xl border border-sky-400/25 bg-sky-500/10 px-4 py-3 text-xs text-sky-100/90">
              <span className="font-semibold text-white">Vibe: </span>
              {open.vibe}
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
