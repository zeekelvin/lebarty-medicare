"use client";

import { CinematicAtmosphere } from "@/components/ui/CinematicAtmosphere";

type Tone = "care" | "warm" | "cool" | "foundation" | "trust";

/**
 * Fixed full-viewport atmospheric backdrop behind every section.
 * Pass `tone` to match the page theme.
 */
export function PageBackground({
  tone = "care",
  intensity = 0.5,
}: {
  tone?: Tone;
  intensity?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
    >
      <CinematicAtmosphere intensity={intensity} tone={tone} />
    </div>
  );
}
