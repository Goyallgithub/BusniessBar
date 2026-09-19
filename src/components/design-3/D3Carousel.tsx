"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "@/data/team";
import { D3Reveal } from "./D3Reveal";

export function D3Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % GALLERY.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(next, 4200);
    return () => clearInterval(id);
  }, [next, paused]);

  const shot = GALLERY[index];

  return (
    <section id="library" className="d3-band">
      <div className="d3-shell">
        <D3Reveal>
          <div className="d3-eyebrow d3-mono">
            <span>02 · Library</span>
          </div>
          <div className="d3-band-head">
            <h2>Moments from the room</h2>
            <p>
              A quiet carousel of evenings. Slide through the villa, the table,
              and the signal in between.
            </p>
          </div>
        </D3Reveal>

        <D3Reveal>
          <div
            className="d3-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="d3-carousel__stage">
              {GALLERY.map((g, i) => (
                <div
                  key={g.caption}
                  className={`d3-carousel__slide ${i === index ? "is-active" : ""}`}
                >
                  <Image
                    src={g.src}
                    alt={g.caption}
                    fill
                    sizes="(max-width: 1152px) 100vw, 1152px"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="d3-carousel__scrim" aria-hidden />
              <div className="d3-carousel__caption">
                <div>
                  <p className="d3-mono" style={{ color: "#5CC4C4", marginBottom: 8 }}>
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(GALLERY.length).padStart(2, "0")}
                  </p>
                  <h3>{shot.caption}</h3>
                  <p>{shot.line}</p>
                </div>
                <div className="d3-carousel__controls">
                  <button type="button" onClick={prev} aria-label="Previous">
                    ←
                  </button>
                  <button type="button" onClick={next} aria-label="Next">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d3-carousel__dots" role="tablist" aria-label="Slides">
            {GALLERY.map((g, i) => (
              <button
                key={g.caption}
                type="button"
                className={i === index ? "is-on" : ""}
                aria-label={`Show ${g.caption}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </D3Reveal>
      </div>
    </section>
  );
}
