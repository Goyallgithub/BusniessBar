"use client";

import { useEffect, useRef } from "react";
import { D3Reveal } from "./D3Reveal";

type Kind = "wave" | "blocks" | "stems" | "ring";

const tiles: {
  kind: Kind;
  n: string;
  title: string;
  body: string;
}[] = [
  {
    kind: "wave",
    n: "01",
    title: "Arrive",
    body: "Countryside ease, villa charm. The door opens slowly and the night begins.",
  },
  {
    kind: "blocks",
    n: "02",
    title: "Converse",
    body: "Real people, fresh ideas. Talk that isn’t over-planned or performed.",
  },
  {
    kind: "stems",
    n: "03",
    title: "Connect",
    body: "Entropy of people. Osmosis of ideas. Relationships that outlast the room.",
  },
  {
    kind: "ring",
    n: "04",
    title: "Return",
    body: "Keep sipping at BusinessBar. The best mixers leave a signal you can follow.",
  },
];

function useTileCanvas(kind: Kind) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let disposed = false;
    const accent = "#5CC4C4";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const draw = (t: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = accent;
      ctx.fillStyle = accent;

      if (kind === "wave") {
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        for (let x = 0; x <= w; x++) {
          const amp = 10 + 8 * Math.sin(x * 0.04 + t);
          const y = h * 0.5 + Math.sin(x * 0.05 - t * 2) * amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      if (kind === "blocks") {
        const cols = 14;
        const rows = 2;
        const gw = w / cols;
        const gh = h / (rows + 0.5);
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const a = 0.15 + 0.7 * (0.5 + 0.5 * Math.sin(t * 2 + c * 0.45 + r));
            ctx.globalAlpha = a;
            ctx.fillRect(c * gw + 2, r * gh + h * 0.2, gw - 4, gh - 6);
          }
        }
        ctx.globalAlpha = 1;
      }

      if (kind === "stems") {
        for (let i = 0; i < 4; i++) {
          ctx.globalAlpha = 0.25 + i * 0.2;
          ctx.beginPath();
          ctx.lineWidth = 1.25;
          const base = h * (0.25 + i * 0.16);
          for (let x = 0; x <= w; x++) {
            const y = base + Math.sin(x * 0.03 + t * (1 + i * 0.2) + i) * 6;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      if (kind === "ring") {
        const cx = w / 2;
        const cy = h / 2;
        const rad = Math.min(w, h) * 0.32;
        ctx.lineWidth = 1.25;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, t % (Math.PI * 2), t + 1.2);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      if (disposed) return;
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [kind]);

  return ref;
}

function Tile({
  kind,
  n,
  title,
  body,
}: {
  kind: Kind;
  n: string;
  title: string;
  body: string;
}) {
  const ref = useTileCanvas(kind);
  return (
    <article className="d3-tile">
      <canvas ref={ref} />
      <div className="d3-tile__top">
        <h3>{title}</h3>
        <span className="d3-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
          {n}
        </span>
      </div>
      <p>{body}</p>
    </article>
  );
}

export function D3Engine() {
  return (
    <section id="evening" className="d3-band">
      <div className="d3-shell">
        <D3Reveal>
          <div className="d3-eyebrow d3-mono">
            <span>01 · Evening</span>
          </div>
          <div className="d3-band-head">
            <h2>How the night moves</h2>
            <p>
              Four beats. No agenda theater. Just density of good minds and room
              to collide.
            </p>
          </div>
        </D3Reveal>
        <D3Reveal>
          <div className="d3-engine">
            {tiles.map((t) => (
              <Tile key={t.n} {...t} />
            ))}
          </div>
        </D3Reveal>
      </div>
    </section>
  );
}
