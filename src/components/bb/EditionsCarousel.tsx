"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  { src: "/events/ev-rooftop.jpeg", city: "Bangalore" },
  { src: "/events/ev-signage.jpeg", city: "Gurugram" },
  { src: "/events/ev-04.jpeg", city: "San Francisco" },
  { src: "/events/ev-villa.jpeg", city: "Gurugram" },
  { src: "/events/ev-07.jpeg", city: "Gurugram" },
  { src: "/events/ev-sf-loft.jpeg", city: "San Francisco" },
] as const;

export function EditionsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = SLIDES[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, 4500);
    return () => window.clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className="bb-editions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bb-editions__head">
        <h2>
          <Link href="/library" className="bb-editions__title-link">
            From the last few editions
          </Link>
        </h2>
      </div>

      <div className="bb-stage">
        <Link
          href="/library"
          className="bb-stage__frame"
          aria-label="Open photo library"
        >
          {SLIDES.map((slide, i) => (
            <div
              key={slide.src}
              className={`bb-stage__slide${i === index ? " is-active" : ""}`}
              aria-hidden={i !== index}
            >
              <div className="bb-stage__media">
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
          <div className="bb-stage__scrim" aria-hidden />
          <div className="bb-stage__meta">
            <span className="bb-stage__city">{active.city}</span>
          </div>
          <div
            className="bb-stage__nav"
            onClick={(e) => e.preventDefault()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="bb-editions__arrow"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <span className="bb-editions__count">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="bb-editions__arrow"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </Link>

        <div className="bb-stage__thumbs" role="tablist" aria-label="Editions">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`bb-stage__thumb${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={slide.city}
            >
              <span className="bb-stage__media">
                <Image src={slide.src} alt="" fill sizes="160px" />
              </span>
            </button>
          ))}
          <Link href="/library" className="bb-stage__more">
            <span>Full library</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
