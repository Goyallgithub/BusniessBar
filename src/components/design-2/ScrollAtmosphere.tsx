"use client";

import { useEffect } from "react";

/** Calm light-blue sky that gently deepens on scroll. */
export function ScrollAtmosphere() {
  useEffect(() => {
    const root = document.querySelector(".d2") as HTMLElement | null;
    if (!root) return;

    const update = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      root.style.setProperty("--d2-p", p.toFixed(4));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="d2-atmosphere" aria-hidden>
      <div className="d2-atmosphere__sky" />
      <div className="d2-atmosphere__sun" />
      <div className="d2-atmosphere__horizon" />
      <div className="d2-atmosphere__night" />
      <div className="d2-atmosphere__sheen" />
      <div className="d2-atmosphere__grain" />
    </div>
  );
}
