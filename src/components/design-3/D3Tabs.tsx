"use client";

import { useState } from "react";

const tabs = [
  {
    id: "arrive",
    label: "Arrive",
    title: "Countryside ease, villa charm",
    body: "The door opens slowly. Soft light, quiet introductions, and space to arrive as yourself before the evening finds its pace.",
  },
  {
    id: "converse",
    label: "Converse",
    title: "Real people, fresh ideas",
    body: "Unscripted talk that actually sticks. Operators, investors and thinkers sharing what they are building, reading and questioning.",
  },
  {
    id: "connect",
    label: "Connect",
    title: "Entropy of people, osmosis of ideas",
    body: "Maximum serendipity. The room takes over once the right conversations start finding each other.",
  },
];

export function D3Tabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="evening" className="relative px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="d3-label mb-6">Fig. 02 · One evening</p>

        <div className="relative z-10 mb-[-1px] flex flex-wrap gap-2 sm:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`d3-tab rounded-t-[18px] border border-[rgba(15,36,51,0.1)] border-b-0 px-4 py-3 text-[14px] font-semibold sm:px-5 ${
                active === tab.id
                  ? "is-active"
                  : "bg-[#f7fbfe] text-[#0f2433]/75"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="d3-serrated relative z-[1]" aria-hidden />

      <div className="d3-grid-bg relative bg-[#dceaf4] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-14">
          <div>
            <p className="font-mono text-[11px] tracking-wide text-[#0f2433]/45">
              Folder / {current.label}
            </p>
            <h2 className="d3-serif mt-3 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] text-[#0f2433]">
              {current.title}
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[rgba(15,36,51,0.62)] sm:text-[18px]">
              {current.body}
            </p>
          </div>
          <div className="rounded-[24px] border border-[rgba(15,36,51,0.1)] bg-[#f7fbfe] p-6 sm:p-8">
            <p className="d3-label">Why it works</p>
            <p className="mt-3 text-[15px] leading-relaxed text-[rgba(15,36,51,0.7)] sm:text-[16px]">
              We host intimate evenings, not stages. Curated guests, soft
              structure, and enough openness for serendipity to do the rest.
            </p>
          </div>
        </div>
      </div>

      <div className="d3-serrated d3-serrated--flip" aria-hidden />
    </section>
  );
}
