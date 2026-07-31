"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Arrive",
    body: "Countryside ease, villa charm. The door opens slowly. You settle in before the night begins.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Converse",
    body: "Real people, fresh ideas. Talk that isn’t over-planned. The room finds its own rhythm.",
    image:
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Connect",
    body: "Entropy of people. Osmosis of ideas. Maximum serendipity. What starts here continues after.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
];

export function D6Workflow() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section
      id="evening"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="lg:border-r lg:border-[#e5e4de] lg:pr-12">
          <p className="d6-mono mb-8 text-[10px] text-[#3d7068]">Evening protocol</p>
          <h2 className="d6-display mb-12 text-4xl tracking-[-0.03em] sm:text-5xl">
            How the night moves
          </h2>

          <ol className="space-y-0">
            {steps.map((s, i) => {
              const isActive = i === active;
              return (
                <li
                  key={s.id}
                  className="border-t border-[#e5e4de] transition-opacity duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                  style={{ opacity: isActive ? 1 : 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span className="d6-mono pt-1 text-[10px] text-[#3d7068]">{s.id}</span>
                    <span className="flex-1">
                      <span className="d6-display block text-2xl sm:text-3xl">{s.title}</span>
                      <span
                        className={`mt-3 block overflow-hidden text-[14px] leading-relaxed text-[#1c1c1c]/65 transition-all duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
                          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {s.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start lg:pl-12">
          <div className="border border-[#e5e4de] bg-[#f7f6f2] p-3 sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e5e4de]">
              <Image
                key={step.image}
                src={step.image}
                alt={step.title}
                fill
                className="object-cover opacity-60 grayscale mix-blend-multiply transition duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="d6-mono text-[10px] text-[#1c1c1c]/55">
                Scanning · {step.title}
              </p>
              <p className="d6-mono text-[10px] text-[#3d7068]">
                {String(active + 1).padStart(2, "0")} / 03
              </p>
            </div>
            <div className="d6-scan mt-3" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
