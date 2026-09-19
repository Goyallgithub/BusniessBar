"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DesignSwitcher } from "@/components/DesignSwitcher";

const links = [
  { href: "#moments", label: "Moments" },
  { href: "#access", label: "Access" },
  { href: "#team", label: "Team" },
];

export function D1Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="d1-nav">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4">
          <Link href="/design-1" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="d1-pulse" aria-hidden />
            <span className="text-[13px] font-black uppercase tracking-[0.18em] text-white">
              BusinessBar
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="d1-label text-[11px] text-white/80 transition duration-200 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DesignSwitcher tone="cinematic" className="hidden sm:inline-flex !mix-blend-normal" />
            <a href="#access" className="d1-btn hidden h-10 px-5 mix-blend-normal md:inline-flex">
              Request Access
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white md:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-3.5 flex-col gap-1">
                <span className={`h-px w-full bg-current transition ${open ? "translate-y-[2.5px] rotate-45" : ""}`} />
                <span className={`h-px w-full bg-current transition ${open ? "-translate-y-[2.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-[#050505] md:hidden">
          <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-24">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="d1-heading border-b border-white/10 py-4 text-5xl text-white"
              >
                {l.label}
              </a>
            ))}
            <a href="#access" onClick={() => setOpen(false)} className="d1-btn mt-8 h-12 w-full">
              Request Access
            </a>
            <div className="mt-6">
              <DesignSwitcher tone="cinematic" compact={false} onNavigate={() => setOpen(false)} />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
