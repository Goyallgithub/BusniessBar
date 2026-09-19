"use client";

import Image from "next/image";
import { useRef } from "react";
import { GALLERY } from "@/data/team";
import { Reveal } from "./Reveal";

export function SiteGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(440, el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section id="library" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="bb-label mb-4">Photo library</p>
              <h2 className="bb-display text-[clamp(2rem,5vw,3.5rem)] text-white">
                Moments from the room
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(92,196,196,0.28)] text-[#5CC4C4] transition hover:bg-[rgba(92,196,196,0.12)]"
                aria-label="Previous photos"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(92,196,196,0.28)] text-[#5CC4C4] transition hover:bg-[rgba(92,196,196,0.12)]"
                aria-label="Next photos"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div ref={trackRef} className="bb-gallery">
          {GALLERY.map((shot) => (
            <article key={shot.caption} className="bb-gallery__card">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 78vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="bb-label mb-2">{shot.caption}</p>
                <p className="text-[14px] text-white/80">{shot.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
