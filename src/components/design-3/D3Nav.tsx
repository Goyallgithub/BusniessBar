"use client";

import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";

export function D3Nav() {
  return (
    <header className="d3-nav">
      <div className="d3-nav__inner">
        <Link href="/design-3" className="d3-wordmark">
          business<span>bar</span>
        </Link>
        <nav className="d3-nav__links d3-mono" aria-label="Sections">
          <a href="#evening">Evening</a>
          <a href="#library">Library</a>
          <a href="#team-signal">Signal</a>
          <a href="#faq">Faq</a>
        </nav>
        <div className="flex items-center gap-3">
          <DesignSwitcher tone="kiln" className="hidden lg:inline-flex" />
          <a href="#close" className="d3-btn d3-btn--fill">
            Request access
          </a>
        </div>
      </div>
    </header>
  );
}
