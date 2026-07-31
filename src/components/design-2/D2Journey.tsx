"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const beats = [
  {
    id: "arrive",
    n: "01",
    title: "Arrive",
    line: "Countryside ease, villa charm. The door opens slowly.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "converse",
    n: "02",
    title: "Converse",
    line: "Real people, fresh ideas. Talk that isn’t over-planned.",
    image:
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "connect",
    n: "03",
    title: "Connect",
    line: "Entropy of people. Osmosis of ideas. Maximum serendipity.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
];

/** Three short beats that animate in together, not a long chapter scroll. */
export function D2Journey() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const cards = wrap.querySelectorAll<HTMLElement>(".d2-beat");
    cards.forEach((c) => c.classList.add("is-prepared"));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        cards.forEach((c) => c.classList.add("is-visible"));
        io.disconnect();
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <section id="journey" className="d2-panel relative py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5 md:px-8 lg:px-10">
        <div className="max-w-xl">
          <p className="d2-label text-[12px] font-semibold tracking-[0.22em]">
            ONE EVENING
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,6vw,3rem)] font-bold tracking-[-0.03em] text-[#f4f7fa]">
            Three beats. Then the room takes over.
          </h2>
        </div>

        <div
          ref={wrapRef}
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {beats.map((b, i) => (
            <article
              key={b.id}
              className={`d2-beat d2-beat-d${i + 1} group overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.08] shadow-[0_20px_50px_-28px_rgba(0,0,0,0.5)] backdrop-blur-md sm:rounded-[24px]`}
            >
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/11]">
                <Image
                  src={b.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151e]/80 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/35 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
                  {b.n}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-[family-name:var(--font-syne)] text-[1.2rem] font-bold text-[#f4f7fa] sm:text-[1.35rem]">
                  {b.title}
                </h3>
                <p className="d2-panel-soft mt-2 text-[13px] leading-relaxed">
                  {b.line}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
