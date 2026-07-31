"use client";

import { FormEvent, useState } from "react";

export function D5Join() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  }

  return (
    <section id="join" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div
        className="d5-drift-alt pointer-events-none absolute -right-[15%] top-0 h-[50vmin] w-[50vmin] opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #ff00ff 0%, #ccff00 40%, transparent 70%)",
          borderRadius: "40% 60% 50% 50%",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF00FF]">
            Stay in the room
          </p>
          <h2 className="d5-display d5-glitch text-[clamp(2.2rem,6vw,4.5rem)] text-white">
            Get the most
            <br />
            <span className="d5-chrome-text">insightful</span>
            <br />
            content every month
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            Be part of the community. Witness the best startup mixers across the
            country, and keep sipping at BusinessBar.
          </p>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6">
          <div className="d5-liquid-card d5-blob-shape-alt relative p-6 sm:p-8">
            {done ? (
              <p className="d5-display text-3xl text-[#CCFF00] sm:text-4xl">
                You&apos;re on the list.
                <br />
                <span className="d5-glitch text-white">See you at the Bar.</span>
              </p>
            ) : (
              <form onSubmit={onSubmit} className="relative z-10 flex flex-col gap-4">
                <label className="sr-only" htmlFor="d5-email">
                  Email
                </label>
                <input
                  id="d5-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-14 rounded-full border border-white/20 bg-black/60 px-6 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#CCFF00]"
                />
                <button type="submit" className="d5-btn-chrome h-14 text-xs">
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
            <a
              href="http://www.linkedin.com/company/business-bar"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#CCFF00]"
            >
              LinkedIn
            </a>
            <a
              href="http://x.com/businessbarbb"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#CCFF00]"
            >
              X / Twitter
            </a>
            <a
              href="mailto:hello@businessbar.net"
              className="transition hover:text-[#CCFF00]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
