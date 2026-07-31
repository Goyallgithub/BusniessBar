"use client";

import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#evening", label: "Evening" },
  { href: "#vision", label: "Vision" },
  { href: "#bartenders", label: "Bartenders" },
];

export function D3Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`d3-nav ${scrolled ? "bg-[rgba(234,243,249,0.72)] backdrop-blur-md" : ""}`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="/design-3"
          className="relative z-50 flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(15,36,51,0.12)] bg-white text-[11px] font-semibold tracking-wide text-[#0f2433]">
            BB
          </span>
          <span className="text-[13px] font-semibold tracking-[0.14em] text-[#0f2433]">
            BUSINESSBAR
          </span>
        </a>

        <nav className="d3-nav__pill hidden items-center gap-1 rounded-full border border-[rgba(15,36,51,0.08)] bg-[rgba(15,36,51,0.05)] p-1.5 backdrop-blur-[8px] lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[14px] font-medium text-[#0f2433]/75"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2">
          <DesignSwitcher tone="light" className="hidden sm:inline-flex" />
          <a href="#join" className="d3-cta hidden h-10 px-5 xl:inline-flex">
            Contact Us
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(15,36,51,0.12)] bg-white/80 text-[#0f2433] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#eaf3f9]/96 backdrop-blur-xl transition md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-6 pb-10 pt-24">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="d3-serif rounded-2xl px-4 py-4 text-[2.2rem] text-[#0f2433]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setOpen(false)}
            className="d3-cta mt-4 h-12 w-fit px-6"
          >
            Contact Us
          </a>
          <div className="mt-6">
            <DesignSwitcher
              tone="light"
              compact={false}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
