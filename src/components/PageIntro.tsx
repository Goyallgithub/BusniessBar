"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_MS = 3400;
const STORAGE_KEY = "bb-intro-seen";

type Phase = "image" | "brand" | "settle" | "done";

type PageIntroProps = {
  onReveal?: () => void;
};

export function PageIntro({ onReveal }: PageIntroProps) {
  const [phase, setPhase] = useState<Phase | "skip" | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";

    if (reduce || seen) {
      document.documentElement.classList.remove("intro-pending");
      setPhase("skip");
      return;
    }

    document.documentElement.classList.remove("intro-pending");
    document.body.classList.add("intro-lock", "intro-playing");
    setPhase("image");

    const t1 = window.setTimeout(() => setPhase("brand"), 500);
    const t2 = window.setTimeout(() => {
      setPhase("settle");
      onReveal?.();
      // Let the remounted hero animate in under the fading intro veil.
      requestAnimationFrame(() => {
        document.body.classList.remove("intro-playing");
      });
    }, 1750);
    const t3 = window.setTimeout(() => {
      setPhase("done");
      document.body.classList.remove("intro-lock", "intro-playing");
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, INTRO_MS);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      document.body.classList.remove("intro-lock", "intro-playing");
    };
  }, [onReveal]);

  if (phase === null || phase === "skip" || phase === "done") {
    return null;
  }

  const showBrand = phase === "brand" || phase === "settle";
  const settling = phase === "settle";

  return (
    <div
      className={`page-intro fixed inset-0 z-60 overflow-hidden ${settling ? "page-intro--settle" : ""}`}
      aria-hidden="true"
    >
      <div
        className={`page-intro__media ${showBrand ? "page-intro__media--back" : ""}`}
      >
        <Image
          src="https://businessbar.net/wp-content/uploads/2025/06/image-518.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="page-intro__veil" />
      <div className="page-intro__wash" />

      <div
        className={`page-intro__brand ${showBrand ? "page-intro__brand--in" : ""} ${settling ? "page-intro__brand--out" : ""}`}
      >
        <p className="page-intro__eyebrow">An evening club for builders</p>
        <p className="page-intro__wordmark">BusinessBar</p>
        <span className="page-intro__rule" />
      </div>
    </div>
  );
}
