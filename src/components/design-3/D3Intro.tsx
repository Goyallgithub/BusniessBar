"use client";

import { useEffect, useState } from "react";

export function D3Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"boot" | "in" | "up" | "out">("boot");
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSkip(true);
      onDone();
      return;
    }

    const t1 = window.setTimeout(() => setPhase("in"), 180);
    const t2 = window.setTimeout(() => setPhase("up"), 1200);
    const t3 = window.setTimeout(() => {
      setPhase("out");
      onDone();
    }, 1650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  if (skip) return null;

  return (
    <div className={`d3-intro ${phase === "out" ? "is-out" : ""}`} aria-hidden>
      <p
        className={`d3-intro__line ${phase === "in" ? "is-in" : ""} ${
          phase === "up" || phase === "out" ? "is-up" : ""
        }`}
      >
        businessbar
      </p>
    </div>
  );
}
