"use client";

import { FormEvent, useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section id="subscribe" className="relative bg-[#f7f6f3]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:gap-14 sm:px-5 sm:py-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-14 lg:py-32">
        <div className="reveal">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-[#8a8a8a]">
            NEWSLETTER
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument)] text-[clamp(1.9rem,7vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-[#1a1a1a]">
            Get the most insightful content delivered every month.
          </h2>
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-[#5c5c5c] sm:mt-5 sm:text-[15px]">
            Be a part of the community. Witness the best startup mixers across
            the country: stories where business meets casual and numbers meet
            narratives.
          </p>
        </div>

        <div className="reveal flex flex-col justify-center">
          {done ? (
            <p className="font-[family-name:var(--font-instrument)] text-xl text-[#1a1a1a] sm:text-2xl">
              You&apos;re on the list. Keep sipping at BusinessBar.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-[rgba(26,26,26,0.1)] bg-[#e8e6e1] px-6 text-[14px] text-[#1a1a1a] outline-none transition focus:border-[#1a1a1a]/40"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#1a1a1a] px-8 text-[12px] font-semibold tracking-[0.18em] text-[#f7f6f3] transition hover:scale-[1.02] hover:bg-[#1a1a1a]/90"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap gap-5 text-[13px] font-medium tracking-wide text-[#5c5c5c] sm:mt-10 sm:gap-6">
            <a
              href="http://www.linkedin.com/company/business-bar"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#1a1a1a]/20 underline-offset-6 transition hover:text-[#1a1a1a] hover:decoration-[#1a1a1a]"
            >
              LinkedIn
            </a>
            <a
              href="http://x.com/businessbarbb"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#1a1a1a]/20 underline-offset-6 transition hover:text-[#1a1a1a] hover:decoration-[#1a1a1a]"
            >
              X / Twitter
            </a>
            <a
              href="https://www.instagram.com/businessbar.x/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#1a1a1a]/20 underline-offset-6 transition hover:text-[#1a1a1a] hover:decoration-[#1a1a1a]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
