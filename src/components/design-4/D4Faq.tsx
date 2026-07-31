"use client";

import { useState } from "react";
import { D4Reveal } from "./D4Reveal";

const faqs = [
  {
    q: "Who is BusinessBar for?",
    a: "Entrepreneurs, investors, operators and thinkers who prefer intimate evenings over loud mixer floors.",
  },
  {
    q: "How many people are in a room?",
    a: "We keep evenings intentionally small, usually around forty guests, so conversations stay human.",
  },
  {
    q: "Is it only for startups?",
    a: "No. Operators, creatives and curious builders are welcome when the chemistry fits.",
  },
  {
    q: "How do I get invited?",
    a: "Join the list above. We share dates and details with the community first.",
  },
];

export function D4Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[720px]">
        <D4Reveal className="mb-8 text-center">
          <p className="text-[14px] font-medium text-[#78716c]">Questions</p>
          <h2 className="mt-2 text-[clamp(1.85rem,5vw,2.5rem)] font-medium tracking-[-0.025em] text-[#292524]">
            Soft answers
          </h2>
        </D4Reveal>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <D4Reveal key={item.q} delay={i * 60}>
                <div className={`d4-faq-item ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="text-[16px] font-medium text-[#292524] sm:text-[18px]">
                      {item.q}
                    </span>
                    <span
                      className="d4-faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fafaf9] text-[#292524]"
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div className="d4-faq-panel">
                    <div>
                      <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#78716c]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </D4Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function D4Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-[960px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] font-medium text-[#292524]">BusinessBar</p>
        <p className="d4-script text-[22px] text-[#78716c]">
          soft evenings, sharp minds
        </p>
          <div className="flex flex-wrap gap-3 text-[13px] text-[#78716c]">
            {[
              ["/", "Design 1"],
              ["/design-2", "Design 2"],
              ["/design-3", "Design 3"],
              ["/design-4", "Design 4"],
              ["/design-5", "Design 5"],
              ["/design-6", "Design 6"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-[#292524]">
                {label}
              </a>
            ))}
          </div>
      </div>
    </footer>
  );
}
