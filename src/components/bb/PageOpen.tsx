"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function PageOpen({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"enter" | "idle" | "leave">("enter");
  const leavingTo = useRef<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    setPhase("enter");
    leavingTo.current = null;
    const id = window.setTimeout(() => setPhase("idle"), 560);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const next =
        url.pathname + url.search + url.hash;
      const current =
        window.location.pathname + window.location.search + window.location.hash;
      if (next === current) return;

      // Stay inside BB routes only
      const path = url.pathname;
      if (path !== "/" && path !== "/library" && path !== "/team") return;

      event.preventDefault();
      event.stopPropagation();

      if (prefersReducedMotion()) {
        router.push(next);
        return;
      }

      if (leavingTo.current) return;
      leavingTo.current = next;
      setPhase("leave");

      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        router.push(next);
      }, 320);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [router]);

  return (
    <>
      <div
        className={`bb-page${phase === "enter" ? " is-enter" : ""}${
          phase === "leave" ? " is-leave" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`bb-open${phase === "leave" ? " is-closing" : ""}${
          phase === "enter" ? " is-opening" : ""
        }`}
        aria-hidden
      >
        <span className="bb-open__panel bb-open__panel--l" />
        <span className="bb-open__panel bb-open__panel--r" />
      </div>
    </>
  );
}
