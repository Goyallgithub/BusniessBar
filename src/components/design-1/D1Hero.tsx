"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const faces = [
  {
    id: "front",
    className: "d1-cube__face--front",
    title: "Arrive",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "bottom",
    className: "d1-cube__face--bottom",
    title: "Converse",
    src: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "back",
    className: "d1-cube__face--back",
    title: "Connect",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "top",
    className: "d1-cube__face--top",
    title: "The Night",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  },
];

export function D1Hero() {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const next = Math.max(0.08, Math.min(0.3, 0.3 - y / 1800));
      setOpacity(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="d1-hero">
      <div className="d1-hero__bg-text" style={{ opacity }} aria-hidden>
        BusinessBar
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-4">
        <div className="d1-cube-scene">
          <div className="d1-cube">
            {faces.map((f) => (
              <div key={f.id} className={`d1-cube__face ${f.className}`}>
                <Image
                  src={f.src}
                  alt={f.title}
                  fill
                  className="object-cover"
                  sizes="420px"
                  priority={f.id === "front"}
                />
                <div className="d1-cube__title">{f.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl text-center">
          <p className="d1-label mb-4 text-[#999]">Exclusive networking</p>
          <h1 className="d1-heading text-[clamp(2.5rem,8vw,5.5rem)] text-white">
            Maximum
            <br />
            Serendipity
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[1.125rem] font-light leading-relaxed text-[#999]">
            Intimate evenings for entrepreneurs, investors, operators, and
            thinkers who thrive on meaningful conversation.
          </p>
        </div>
      </div>
    </section>
  );
}
