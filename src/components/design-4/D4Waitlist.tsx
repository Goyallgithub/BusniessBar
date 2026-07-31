"use client";

import { FormEvent, useState } from "react";
import { D4Reveal } from "./D4Reveal";

export function D4Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section id="waitlist" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div
        className="d4-blob d4-blob--peach left-[5%] top-[10%] h-[300px] w-[300px]"
        aria-hidden
      />
      <div
        className="d4-blob d4-blob--lavender d4-blob--delay right-[8%] bottom-[5%] h-[260px] w-[260px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[520px] text-center">
        <D4Reveal>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[#292524]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffb7b2]" />
          </div>
          <h2 className="mt-6 text-[clamp(1.9rem,5vw,2.75rem)] font-medium tracking-[-0.025em] text-[#292524]">
            Stay in the{" "}
            <span className="d4-script text-[1.25em] text-[#ffb7b2]">room</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-[#78716c]">
            Get the most insightful content every month, and first word on the
            next intimate evening.
          </p>

          {done ? (
            <p className="d4-script mt-8 text-[32px] text-[#292524]">
              You are on the list
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="d4-email">
                Email
              </label>
              <input
                id="d4-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-[#e7e5e4] bg-[#fafaf9] px-5 text-[15px] text-[#292524] outline-none placeholder:text-[#a8a29e] focus:border-[#ffb7b2]"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#292524] px-7 text-[14px] font-medium text-[#fdfcf8] transition hover:scale-[1.03]"
              >
                Subscribe
              </button>
            </form>
          )}
        </D4Reveal>
      </div>
    </section>
  );
}
