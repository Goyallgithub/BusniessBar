"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;

float ribbon(vec2 uv, float phase, float freq, float amp, float thickness) {
  float y = 0.5 + amp * (
    sin(uv.x * freq + u_time * 0.55 + phase) * 0.55 +
    sin(uv.x * (freq * 1.7) - u_time * 0.35 + phase * 1.3) * 0.45
  );
  float d = abs(uv.y - y);
  return smoothstep(thickness, 0.0, d);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float r1 = ribbon(uv, 0.0, 6.28, 0.12, 0.055);
  float r2 = ribbon(uv, 1.7, 5.1, 0.16, 0.05);
  float r3 = ribbon(uv, 3.4, 7.4, 0.1, 0.045);

  vec3 teal = vec3(0.361, 0.769, 0.769);
  vec3 cyan = vec3(0.2, 0.9, 0.95);
  vec3 soft = vec3(0.55, 0.7, 0.95);

  vec3 col = teal * r1 + cyan * r2 + soft * r3;
  float glow = 0.08 * smoothstep(0.55, 0.0, distance(uv, vec2(0.5, 0.42)));
  col += teal * glow;

  float a = clamp(r1 + r2 + r3 + glow, 0.0, 1.0);
  gl_FragColor = vec4(col, a * 0.92);
}
`;

function drawFallback(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
) {
  ctx.clearRect(0, 0, w, h);
  ctx.lineCap = "round";
  const ribbons = [
    { color: "rgba(92,196,196,0.75)", phase: 0, freq: 0.008, amp: 0.12 },
    { color: "rgba(80,220,230,0.55)", phase: 1.7, freq: 0.0065, amp: 0.16 },
    { color: "rgba(140,180,240,0.45)", phase: 3.4, freq: 0.009, amp: 0.1 },
  ];
  for (const r of ribbons) {
    ctx.beginPath();
    ctx.strokeStyle = r.color;
    ctx.lineWidth = Math.max(18, h * 0.035);
    for (let x = 0; x <= w; x += 4) {
      const y =
        h * 0.5 +
        h *
          r.amp *
          (Math.sin(x * r.freq + t * 0.55 + r.phase) * 0.55 +
            Math.sin(x * r.freq * 1.7 - t * 0.35 + r.phase * 1.3) * 0.45);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

export function D3ShaderCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let disposed = false;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };
    resize();

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
    });

    if (!gl) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const loop = (now: number) => {
        if (disposed) return;
        resize();
        drawFallback(ctx, canvas.width, canvas.height, now / 1000);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      window.addEventListener("resize", resize);
      return () => {
        disposed = true;
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", resize);
      };
    }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const loop = (now: number) => {
      if (disposed) return;
      resize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="d3-hero__canvas" aria-hidden />;
}
