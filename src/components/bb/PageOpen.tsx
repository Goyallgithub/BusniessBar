"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function labelFor(path: string) {
  if (path.startsWith("/library")) return "Library";
  if (path === "/" || path === "") return "Home";
  return "BusinessBar";
}

export function PageOpen({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"enter" | "idle" | "leave">("idle");
  const [label, setLabel] = useState(() => labelFor(pathname));
  const leavingTo = useRef<string | null>(null);
  const fromNav = useRef(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!fromNav.current) {
      setPhase("idle");
      return;
    }
    fromNav.current = false;
    setLabel(labelFor(pathname));
    setPhase("enter");
    leavingTo.current = null;
    const id = window.setTimeout(() => setPhase("idle"), 680);
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
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      const next = url.pathname + url.search + url.hash;
      const current =
        window.location.pathname +
        window.location.search +
        window.location.hash;
      if (next === current) return;

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
      fromNav.current = true;
      setLabel(labelFor(path));
      setPhase("leave");

      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        router.push(next);
      }, 380);
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
        className={`bb-route${phase === "enter" ? " is-enter" : ""}${
          phase === "leave" ? " is-leave" : ""
        }`}
      >
        {children}
      </div>
      <div
        className={`bb-type-open${phase === "leave" ? " is-leave" : ""}${
          phase === "enter" ? " is-enter" : ""
        }`}
        aria-hidden
      >
        <p className="bb-type-open__word">{label}</p>
      </div>
    </>
  );
}
