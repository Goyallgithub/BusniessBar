"use client";

import Image from "next/image";
import { useState } from "react";

const tags = ["Networking", "Serendipity", "Community"];

const hotspots = [
  {
    id: "guests",
    label: "Curated Guest Lists",
    detail: "Entrepreneurs, investors & operators in one room",
    top: "28%",
    left: "22%",
    delayClass: "anim-hotspot-1",
  },
  {
    id: "talks",
    label: "Meaningful Conversations",
    detail: "Unscripted exchanges that actually stick",
    top: "48%",
    left: "62%",
    delayClass: "anim-hotspot-2",
  },
  {
    id: "ideas",
    label: "Transformative Ideas",
    detail: "Osmosis of knowledge across disciplines",
    top: "72%",
    left: "38%",
    delayClass: "anim-hotspot-3",
  },
];

export function Hero() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="primary" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="kenburns absolute inset-0">
          <Image
            src="https://businessbar.net/wp-content/uploads/2025/06/image-518.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8e6e1]/80 via-[#e8e6e1]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8e6e1]/55 via-transparent to-[#e8e6e1]/20" />
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1400px] grid-cols-1 items-end gap-8 px-4 pb-12 pt-24 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-28 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-14 lg:pb-20 lg:pt-24">
        <div className="relative z-10 max-w-xl">
          {(
            [
              ["Exclusive", "anim-line-1"],
              ["Networking,", "anim-line-2"],
              ["Maximum", "anim-line-3"],
              ["Serendipity", "anim-line-4"],
            ] as const
          ).map(([word, delay]) => (
            <div key={word} className="overflow-hidden">
              <h1
                className={`anim-line ${delay} font-[family-name:var(--font-instrument)] text-[clamp(2.35rem,9vw,5.75rem)] leading-[0.92] tracking-[-0.02em] text-[#1a1a1a]`}
              >
                {word}
                {word === "Serendipity" ? (
                  <span className="align-super text-[0.35em] tracking-normal">
                    ®
                  </span>
                ) : null}
              </h1>
            </div>
          ))}

          <p className="anim-fade-up anim-tagline mt-5 max-w-md text-[14px] font-light tracking-wide text-[#5c5c5c] sm:mt-7 sm:text-[15px]">
            / We host intimate evenings for entrepreneurs, investors &amp;
            thinkers /
          </p>

          <div className="anim-fade-up anim-cta mt-8 sm:mt-10">
            <a
              href="#subscribe"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#1a1a1a] px-8 text-[12px] font-semibold tracking-[0.2em] text-[#f7f6f3] transition duration-300 hover:scale-[1.03] hover:bg-[#1a1a1a]/90 sm:h-12 sm:px-9"
            >
              JOIN US
            </a>
          </div>
        </div>

        <div className="anim-card relative z-10 w-full max-w-[560px] justify-self-stretch sm:justify-self-end lg:mt-8">
          <div className="overflow-hidden rounded-[22px] bg-[#f7f6f3] shadow-[0_30px_80px_-28px_rgba(26,26,26,0.35)] sm:rounded-[28px]">
            <div className="px-5 pt-5 sm:px-8 sm:pt-8">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`anim-pop anim-tag-${i + 1} rounded-full border border-[rgba(26,26,26,0.1)] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#5c5c5c]`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="anim-card-copy mt-5">
                <h2 className="text-[1.35rem] font-semibold leading-tight text-[#1a1a1a] sm:text-[1.5rem]">
                  Intimate evenings &amp; real talk
                </h2>
                <p className="mt-1.5 text-[13px] text-[#8a8a8a]">
                  Countryside ease, villa charm, lifestyle-club spirit.
                </p>
              </div>
            </div>

            <div className="relative mt-5 aspect-[5/4] w-full sm:mt-6">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80"
                alt="BusinessBar evening gathering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              <div className="anim-chip float-y absolute left-4 top-4 flex items-center gap-3 rounded-2xl bg-[#f7f6f3]/95 p-2.5 pr-4 shadow-lg backdrop-blur-sm sm:left-5 sm:top-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl sm:h-14 sm:w-14">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[#1a1a1a]">
                    EVENING TOUR
                  </p>
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1a1a1a]">
                    <span className="ml-0.5 border-y-[4px] border-l-[7px] border-y-transparent border-l-[#f7f6f3]" />
                  </div>
                </div>
              </div>

              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  style={{ top: spot.top, left: spot.left }}
                  className={`anim-hotspot ${spot.delayClass} absolute z-10 -translate-x-1/2 -translate-y-1/2`}
                  onMouseEnter={() => setActive(spot.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(spot.id)}
                  onBlur={() => setActive(null)}
                  aria-label={spot.label}
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="hotspot-ring absolute inset-0 rounded-full bg-white/70" />
                    <span className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.35)]" />
                  </span>

                  <span
                    className={`absolute left-1/2 top-6 w-48 -translate-x-1/2 rounded-2xl bg-[#f7f6f3] px-3.5 py-3 text-left shadow-xl transition duration-300 ${
                      active === spot.id
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-1 opacity-0"
                    }`}
                  >
                    <span className="block text-[12px] font-semibold text-[#1a1a1a]">
                      {spot.label}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-snug text-[#5c5c5c]">
                      {spot.detail}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
