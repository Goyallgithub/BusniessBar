"use client";

import { FormEvent, useState } from "react";

export function D6Contact() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section
      id="access"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="d6-mono mb-6 text-[10px] text-[#3d7068]">Stay in the room</p>
          <h2 className="d6-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-[-0.03em]">
            Request Access
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#1c1c1c]/65">
            Get the most insightful content every month. Be part of the community.
            Witness the best startup mixers across the country, and keep sipping
            at BusinessBar.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {[
              ["https://in.linkedin.com/company/business-bar", "LinkedIn"],
              ["http://x.com/businessbarbb", "X / Twitter"],
              ["https://www.instagram.com/businessbar.x", "Instagram"],
              ["mailto:businessbar.blog@gmail.com", "Email"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="d6-mono text-[10px] text-[#1c1c1c]/50 underline decoration-[#e5e4de] underline-offset-8 transition hover:text-[#3d7068] hover:decoration-[#3d7068]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          {done ? (
            <p className="d6-display border border-[#e5e4de] p-8 text-3xl leading-snug">
              You&apos;re on the list.
              <br />
              <span className="italic text-[#B4B4B4]">See you at the Bar.</span>
            </p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="sr-only" htmlFor="d6-name">
                  Name
                </label>
                <input
                  id="d6-name"
                  name="name"
                  required
                  placeholder="Full name"
                  className="d6-input"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="d6-email">
                  Email
                </label>
                <input
                  id="d6-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="d6-input"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="d6-note">
                  Note
                </label>
                <input
                  id="d6-note"
                  name="note"
                  placeholder="What brings you to the Bar?"
                  className="d6-input"
                />
              </div>
              <button type="submit" className="d6-btn d6-btn-shadow h-12 w-full">
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
