"use client";

import { FormEvent, useState } from "react";
import { InView } from "./InView";

export function D2Join() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section id="join" className="d2-panel relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,180,74,0.28),transparent_68%)] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-4 sm:gap-12 sm:px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8 lg:gap-20 lg:px-10">
        <InView>
          <p className="d2-label text-[12px] font-semibold tracking-[0.22em]">
            STAY IN THE ROOM
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-syne)] text-[clamp(1.85rem,7vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#f4f7fa]">
            Get the most insightful content every month.
          </h2>
          <p className="d2-panel-soft mt-4 max-w-md text-[14px] leading-relaxed sm:mt-5 sm:text-[15px]">
            Be part of the community. Witness the best startup mixers across the
            country, and keep sipping at BusinessBar.
          </p>
        </InView>

        <InView delay={1} className="flex flex-col justify-center">
          {done ? (
            <p className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#f4f7fa] sm:text-2xl">
              You&apos;re on the list. See you at the Bar.
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 rounded-[22px] border border-white/20 bg-white/12 p-3 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md sm:rounded-[28px] sm:flex-row sm:p-3"
            >
              <label className="sr-only" htmlFor="d2-email">
                Email
              </label>
              <input
                id="d2-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full bg-transparent px-5 text-[14px] text-[#f4f7fa] outline-none placeholder:text-white/45"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#e8b44a] px-7 text-[12px] font-semibold tracking-[0.14em] text-[#12141a] transition hover:scale-[1.02]"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap gap-4 text-[13px] font-medium text-white/70 sm:mt-8 sm:gap-5">
            <a
              href="http://www.linkedin.com/company/business-bar"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="http://x.com/businessbarbb"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              X / Twitter
            </a>
            <a
              href="https://www.instagram.com/businessbar.x/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </InView>
      </div>
    </section>
  );
}
