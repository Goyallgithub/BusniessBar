"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#journey", label: "Journey" },
  { href: "#vision", label: "Vision" },
  { href: "#bartenders", label: "Bartenders" },
  { href: "#join", label: "Join" },
];

export function D5Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
          <Link
            href="/design-5"
            className="d5-display d5-glitch shrink-0 text-[1.35rem] tracking-[-0.04em] text-white sm:text-2xl"
          >
            BusinessBar
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 transition hover:text-[#CCFF00]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <DesignSwitcher tone="acid" className="hidden sm:inline-flex" />
            <a
              href="#join"
              className="d5-btn-chrome hidden h-10 px-5 text-[11px] lg:inline-flex"
            >
              Contact Us
            </a>
            <button
              type="button"
              className="relative z-[60] flex h-11 w-11 items-center justify-center border border-[#CCFF00]/50 bg-black/60 text-[#CCFF00] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/95 lg:hidden">
          <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="d5-display d5-glitch text-5xl text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="d5-btn-acid h-12 w-full text-sm"
              >
                Contact Us
              </a>
              <DesignSwitcher
                tone="acid"
                compact={false}
                onNavigate={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
