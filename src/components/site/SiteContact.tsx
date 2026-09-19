"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

export function SiteContact() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="bb-label mb-4">Stay in the room</p>
          <h2 className="bb-display text-[clamp(2.2rem,5vw,3.75rem)] text-white">
            Request access
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/55">
            Get the most insightful content every month. Be part of the
            community, witness the best startup mixers, and keep sipping at
            BusinessBar.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {[
              ["http://www.linkedin.com/company/business-bar", "LinkedIn"],
              ["http://x.com/businessbarbb", "X"],
              ["https://www.instagram.com/businessbar.x/", "Instagram"],
              ["mailto:team@businessbar.net", "Email"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 underline decoration-white/15 underline-offset-8 transition hover:text-[#5CC4C4] hover:decoration-[#5CC4C4]"
              >
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bb-glass rounded-[1.75rem] p-6 sm:p-8">
            {done ? (
              <p className="bb-display text-3xl leading-snug text-white sm:text-4xl">
                You&apos;re on the list.
                <br />
                <span className="italic text-[#5CC4C4]">See you at the Bar.</span>
              </p>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className="bb-label mb-2 block text-white/40" htmlFor="bb-name">
                    Name
                  </label>
                  <input
                    id="bb-name"
                    name="name"
                    required
                    className="h-12 w-full rounded-full border border-white/10 bg-black/30 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#5CC4C4]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="bb-label mb-2 block text-white/40" htmlFor="bb-email">
                    Email
                  </label>
                  <input
                    id="bb-email"
                    name="email"
                    type="email"
                    required
                    className="h-12 w-full rounded-full border border-white/10 bg-black/30 px-5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#5CC4C4]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="bb-label mb-2 block text-white/40" htmlFor="bb-note">
                    Note
                  </label>
                  <textarea
                    id="bb-note"
                    name="note"
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#5CC4C4]"
                    placeholder="What brings you to the Bar?"
                  />
                </div>
                <button type="submit" className="bb-btn h-12 w-full">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
