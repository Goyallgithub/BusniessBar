"use client";

import { useState } from "react";

const rooms = [
  {
    id: "founders",
    label: "Founders",
    title: "For people who build",
    body: "Operators and founders who want unforced conversation with peers who understand the weight of building.",
    benefits: [
      "Peer density without pitch theater",
      "Ideas that move sideways",
      "Relationships that outlast the night",
    ],
    ghost: "01",
  },
  {
    id: "investors",
    label: "Investors",
    title: "For people who allocate",
    body: "Investors who prefer signal over spectacle. Meet builders in a room designed for clarity, not performance.",
    benefits: [
      "High-context introductions",
      "Quiet diligence in conversation",
      "Access without the conference floor",
    ],
    ghost: "02",
  },
  {
    id: "thinkers",
    label: "Thinkers",
    title: "For people who see around corners",
    body: "Writers, operators, and curious minds who thrive when the talk stays unfinished on purpose.",
    benefits: [
      "Entropy of good minds",
      "Osmosis of unfinished ideas",
      "A table worth returning to",
    ],
    ghost: "03",
  },
];

export function D6Tabs() {
  const [active, setActive] = useState(0);
  const room = rooms[active];

  return (
    <section
      id="rooms"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="d6-mono mb-4 text-[10px] text-[#3d7068]">Use cases</p>
          <h2 className="d6-display text-4xl tracking-[-0.03em] sm:text-5xl">
            Who the room is for
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {rooms.map((r, i) => (
            <button
              key={r.id}
              type="button"
              data-active={i === active}
              className="d6-tab h-10 px-5"
              onClick={() => setActive(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden border border-[#e5e4de] bg-[#f7f6f2] p-8 sm:p-12">
          <span
            className="d6-display pointer-events-none absolute -right-4 -top-8 text-[min(40vw,240px)] leading-none text-[#1c1c1c]/[0.05]"
            aria-hidden
          >
            {room.ghost}
          </span>

          <div className="relative max-w-2xl">
            <p className="d6-mono mb-4 text-[10px] text-[#1c1c1c]/45">
              Room / {room.label}
            </p>
            <h3 className="d6-display text-3xl tracking-[-0.02em] sm:text-4xl">
              {room.title}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-[#1c1c1c]/65 sm:text-base">
              {room.body}
            </p>
          </div>

          <div className="relative mt-12 grid gap-0 border-t border-[#e5e4de] sm:grid-cols-3">
            {room.benefits.map((b, i) => (
              <div
                key={b}
                className={`py-6 sm:px-6 sm:py-8 ${
                  i < room.benefits.length - 1 ? "sm:border-r sm:border-[#e5e4de]" : ""
                } ${i > 0 ? "border-t border-[#e5e4de] sm:border-t-0" : ""}`}
              >
                <p className="d6-mono mb-3 text-[10px] text-[#3d7068]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-[14px] leading-relaxed text-[#1c1c1c]/75">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
