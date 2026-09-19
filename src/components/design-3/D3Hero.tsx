"use client";

import { useEffect, useMemo, useState } from "react";
import { D3ShaderCanvas } from "./D3Shader";

export function D3Hero({ ready }: { ready: boolean }) {
  const [animate, setAnimate] = useState(false);
  const title = "Maximum serendipity";
  const glyphs = useMemo(() => title.split(""), []);

  useEffect(() => {
    if (!ready) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(true);
      return;
    }
    const t = window.setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, [ready]);

  return (
    <section className="d3-hero">
      <D3ShaderCanvas />
      <div className="d3-hero__veil" aria-hidden />
      <div className="d3-hero__content">
        <div className="d3-hero__meta d3-mono">
          <span>Intimate evenings · live signal</span>
        </div>
        <h1 className={`d3-display ${animate ? "is-ready" : ""}`}>
          {glyphs.map((ch, i) => (
            <span
              key={`${ch}-${i}`}
              className="d3-glyph"
              style={{ transitionDelay: `${i * 42}ms` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>
        <p className="d3-hero__lede">
          Intimate evenings for entrepreneurs, investors, operators, and thinkers
          who thrive on meaningful conversation.
        </p>
        <div className="d3-hero__actions">
          <a href="#close" className="d3-btn d3-btn--fill">
            Request invite
          </a>
          <a href="#library" className="d3-btn">
            Browse the night
          </a>
        </div>
      </div>
    </section>
  );
}
