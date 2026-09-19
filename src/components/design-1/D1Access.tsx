"use client";

import { useState } from "react";

const tiers = [
  {
    name: "Guest Night",
    price: "Invite",
    blurb: "One evening. Arrive, converse, connect.",
    features: ["Single night access", "Curated guest list", "Villa setting"],
    featured: false,
  },
  {
    name: "Season Pass",
    price: "Priority",
    blurb: "Maximum serendipity across the season.",
    features: [
      "Priority invites",
      "Member circle intros",
      "Monthly insights",
      "Early seating",
    ],
    featured: true,
  },
  {
    name: "Host Circle",
    price: "Partner",
    blurb: "Collaborate on evenings that shape rooms.",
    features: ["Co-host opportunities", "Brand presence", "Custom nights"],
    featured: false,
  },
];

export function D1Access() {
  const [guests, setGuests] = useState(8);
  const estimate = guests * 125;

  return (
    <section id="access" className="d1-pricing scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <div className="d1-pricing__glow" aria-hidden />

      <div className="relative mx-auto max-w-[90rem]">
        <p className="d1-label mb-4 text-center text-white/60">Access</p>
        <h2 className="d1-heading mb-16 text-center text-[clamp(2.5rem,10vw,7rem)] text-white">
          Join the room
        </h2>

        <div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`rounded-3xl p-7 transition ${
                t.featured
                  ? "scale-100 bg-white text-[#111] lg:scale-105"
                  : "d1-glass text-white"
              }`}
            >
              <p
                className={`d1-label mb-6 ${t.featured ? "text-[#111]/50" : "text-[#999]"}`}
              >
                {t.price}
              </p>
              <h3 className="d1-heading text-3xl">{t.name}</h3>
              <p
                className={`mt-4 text-[1.05rem] font-light leading-relaxed ${
                  t.featured ? "text-[#111]/70" : "text-[#999]"
                }`}
              >
                {t.blurb}
              </p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm font-light ${
                      t.featured ? "text-[#111]/75" : "text-white/70"
                    }`}
                  >
                    — {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 flex h-11 w-full items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition hover:scale-[1.02] ${
                  t.featured
                    ? "bg-[#111] text-white"
                    : "bg-gradient-to-r from-[#06B6D4] to-[#EC4899] text-white"
                }`}
              >
                Request
              </a>
            </article>
          ))}
        </div>

        <div
          id="contact"
          className="mx-auto mt-16 max-w-3xl scroll-mt-24 rounded-[32px] bg-[#1A0B2E] p-8 sm:p-10"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="d1-label mb-3 text-white/50">Night estimator</p>
              <h3 className="d1-heading text-3xl text-white sm:text-4xl">
                Intimate scale
              </h3>
            </div>
            <p className="d1-heading text-5xl text-white sm:text-6xl">
              ${estimate.toLocaleString()}
            </p>
          </div>
          <p className="mt-4 text-[1rem] font-light text-white/55">
            Guests: <span className="font-medium text-white">{guests}</span> ·
            modeled at $125 / seat for planning only.
          </p>
          <input
            type="range"
            min={4}
            max={24}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="d1-slider mt-8"
            aria-label="Guest count"
          />
          <div className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            <span>04</span>
            <span>24</span>
          </div>
        </div>
      </div>
    </section>
  );
}
