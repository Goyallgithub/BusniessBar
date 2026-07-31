"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HEADLINE = ["Exclusive", "Networking,", "Maximum", "Serendipity"];

/** One complete landing viewport: light villa under the nav, centered copy. */
export function D2Hero() {
  const [taglineIn, setTaglineIn] = useState(false);
  const [taglineHover, setTaglineHover] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enter = window.setTimeout(() => setTaglineIn(true), reduce ? 0 : 280);

    const scene = document.querySelector(".d2-hero-scene") as HTMLElement | null;
    const onScroll = () => {
      if (!scene) return;
      const fade = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.85)));
      scene.style.opacity = String(1 - fade);
      scene.style.visibility = fade >= 0.98 ? "hidden" : "visible";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(enter);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const replayTagline = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTaglineIn(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTaglineIn(true);
        setTaglineHover(true);
      });
    });
  };

  return (
    <section
      id="primary"
      className="d2-hero relative flex min-h-[100svh] flex-col"
    >
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-12 pt-24 text-center sm:px-5 sm:pb-16 sm:pt-28 md:px-8">
        <div className="d2-hero-plate w-full max-w-[920px]">
          <div
            className={`d2-tagline d2-tagline--center w-full ${taglineIn || taglineHover ? "is-in" : ""} ${taglineHover ? "is-hover" : ""}`}
            onMouseEnter={replayTagline}
            onMouseLeave={() => setTaglineHover(false)}
          >
            <p className="d2-tagline__full mb-4 text-[11px] font-semibold tracking-[0.22em] text-[#0b1520]/70 sm:mb-6 sm:text-[12px] sm:tracking-[0.28em]">
              BusinessBar
            </p>

            <h1 className="d2-tagline__stack mx-auto">
              {HEADLINE.map((word, i) => (
                <span
                  key={word}
                  className="d2-tagline__line"
                  style={{ ["--i" as string]: i }}
                >
                  <span className="d2-tagline__word">
                    {word}
                    {word === "Serendipity" ? (
                      <span className="align-super text-[0.35em] tracking-normal">
                        ®
                      </span>
                    ) : null}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <p className="d2-anim-rise d2-anim-rise-d1 mx-auto mt-5 max-w-[20rem] text-[14px] font-medium leading-relaxed text-[#0b1520]/78 sm:mt-7 sm:max-w-md sm:text-[15px]">
            Intimate evenings for entrepreneurs, investors and thinkers
          </p>

          <div className="d2-anim-rise d2-anim-rise-d2 mt-7 sm:mt-9">
            <a
              href="#journey"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#0b1520] py-3 pl-5 pr-3 text-[12px] font-semibold text-white transition hover:scale-[1.03] sm:gap-3 sm:py-3.5 sm:pl-7 sm:pr-3.5 sm:text-[13px]"
            >
              Begin the evening
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 sm:h-8 sm:w-8">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Fixed villa backdrop under the navbar for the first viewport. */
export function D2HeroScene() {
  return (
    <div className="d2-hero-scene pointer-events-none fixed inset-0" aria-hidden>
      <div className="d2-hero-bg absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover object-[50%_45%]"
          sizes="100vw"
        />
      </div>
      <div className="d2-hero-wash absolute inset-0" />
    </div>
  );
}
