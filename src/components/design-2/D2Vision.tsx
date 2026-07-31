"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { InView } from "./InView";

export function D2Vision() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const section = sectionRef.current;
      const el = imgRef.current;
      if (!section || !el) return;
      const rect = section.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = Math.max(-40, Math.min(40, mid * -0.08));
      el.style.transform = `translate3d(0, ${shift}px, 0) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24 md:py-32"
    >
      <div className="absolute inset-3 overflow-hidden rounded-[22px] sm:inset-6 sm:rounded-[32px] md:inset-10">
        <div ref={imgRef} className="absolute inset-[-8%] will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1824]/88 via-[#152536]/82 to-[#1e3348]/75" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:px-10 lg:py-24">
        <InView>
          <p className="d2-label text-[12px] font-semibold tracking-[0.22em]">
            OUR VISION
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-syne)] text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:mt-5">
            Maximise serendipity.
          </h2>
        </InView>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 md:gap-16">
          <InView delay={1}>
            <p className="text-[15px] font-light leading-relaxed text-white/88 sm:text-[17px]">
              We believe in the entropy of impactful people and the osmosis of
              transformative ideas and shared knowledge.
            </p>
          </InView>
          <InView delay={2}>
            <p className="text-[15px] font-light leading-relaxed text-white/88 sm:text-[17px]">
              Witness the best startup mixers across the country: evenings
              designed so the right conversations find you.
            </p>
          </InView>
        </div>
      </div>
    </section>
  );
}
