"use client";

import { useEffect, useRef } from "react";

/** Reveal on scroll. Without JS, content stays fully visible. */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("is-prepared");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { rootMargin, threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return ref;
}

export function InView({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  const ref = useInView<HTMLDivElement>();
  const delayClass =
    delay === 1
      ? "d2-inview-delay-1"
      : delay === 2
        ? "d2-inview-delay-2"
        : delay === 3
          ? "d2-inview-delay-3"
          : "";

  return (
    <div ref={ref} className={`d2-inview ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
