"use client";

import { useEffect, useRef } from "react";

const text =
  "We believe in the entropy of impactful people and the osmosis of transformative ideas and shared knowledge.";

export function D6Reveal() {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-word]"));

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const start = viewH * 0.85;
      const end = viewH * 0.25;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const active = Math.floor(progress * spans.length);

      spans.forEach((w, i) => {
        w.dataset.on = i <= active ? "true" : "false";
      });
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
    <section
      id="manifesto"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="d6-mono mb-10 text-[10px] text-[#3d7068]">Manifesto / 01</p>
        <p
          ref={ref}
          className="d6-display max-w-5xl text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.2] tracking-[-0.02em]"
        >
          {words.map((word, i) => (
            <span key={`${word}-${i}`} data-word className="d6-word">
              {word}
              {i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
