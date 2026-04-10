"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

const MOUNTAIN =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80";

function Particles() {
  const reduce = useReducedMotion();
  const items = Array.from({ length: 18 }, (_, i) => i);
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const dim = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.3 });
  const smy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.3 });
  const tiltX = useTransform(smy, [-0.5, 0.5], [4, -4]);
  const tiltY = useTransform(smx, [-0.5, 0.5], [-4, 4]);
  const panelTransform = useMotionTemplate`perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

  const onMove = (e: MouseEvent) => {
    if (reduce) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 1;
    const y = (e.clientY / window.innerHeight - 0.5) * 1;
    mx.set(x);
    my.set(y);
  };

  const scrollMission = () => {
    document.getElementById("mission")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <Image
          src={MOUNTAIN}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-mountain-950/55 via-mountain-900/35 to-sky-100/90"
          style={{ opacity: dim }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0">
        <div className="animate-drift-slow absolute -left-1/4 top-0 h-[55%] w-[70%] rounded-full bg-sky-200/25 blur-3xl" />
        <div className="animate-drift-slower absolute -right-1/4 bottom-0 h-[50%] w-[65%] rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      <Particles />

      <div className="relative z-[2] mx-auto flex max-w-4xl flex-col items-center px-6 pb-28 pt-32 text-center">
        <motion.div
          style={{ transform: panelTransform, transformStyle: "preserve-3d" }}
          className="glass-panel px-8 py-10 sm:px-12 sm:py-12"
        >
          <motion.h1
            className="font-display text-4xl font-semibold tracking-tight text-mountain-950 sm:text-6xl"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.11 } },
            }}
          >
            {["Everest", "Allegiance"].map((word) => (
              <motion.span
                key={word}
                className="inline-block pr-[0.2em]"
                variants={{
                  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-balance text-lg italic text-mountain-900/85 sm:text-xl"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Climbing together towards a better future
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton onClick={scrollMission}>Explore our mission</MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border border-white/40"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/80"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
