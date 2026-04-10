"use client";

import { AmbientAudio } from "@/components/AmbientAudio";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScroll } from "@/components/SmoothScroll";

export function SiteChrome() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />
      <AmbientAudio />
    </>
  );
}
