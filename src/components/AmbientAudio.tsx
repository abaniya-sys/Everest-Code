"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Very subtle wind-like bed using filtered noise. Respects reduced motion (disabled).
 */
export function AmbientAudio() {
  const reduce = useReducedMotion();
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ gain: GainNode; src: AudioBufferSourceNode } | null>(null);

  const stop = useCallback(() => {
    const n = nodesRef.current;
    if (n) {
      try {
        n.src.stop();
      } catch {
        /* noop */
      }
      nodesRef.current = null;
    }
    setOn(false);
  }, []);

  const start = useCallback(() => {
    if (reduce) return;
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = ctxRef.current ?? new AudioCtx();
    ctxRef.current = ctx;

    if (ctx.state === "suspended") void ctx.resume();

    const bufferSize = ctx.sampleRate * 3;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.35;
    }

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 420;

    const gain = ctx.createGain();
    gain.gain.value = 0.018;

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(0);
    nodesRef.current = { gain, src };
    setOn(true);
  }, [reduce]);

  useEffect(() => {
    return () => {
      stop();
      ctxRef.current?.close().catch(() => {});
      ctxRef.current = null;
    };
  }, [stop]);

  const toggle = () => {
    if (reduce) return;
    if (on) stop();
    else start();
  };

  if (reduce) return null;

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn ambient sound off" : "Turn ambient sound on"}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-6 right-6 z-[80] rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/15"
    >
      {on ? "Sound on" : "Ambient"}
    </motion.button>
  );
}
