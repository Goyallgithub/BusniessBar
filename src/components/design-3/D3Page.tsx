"use client";

import { useCallback, useState } from "react";
import { D3Intro } from "@/components/design-3/D3Intro";
import { D3Nav } from "@/components/design-3/D3Nav";
import { D3Hero } from "@/components/design-3/D3Hero";
import { D3Engine } from "@/components/design-3/D3Engine";
import { D3Carousel } from "@/components/design-3/D3Carousel";
import { D3Stats, D3Faq, D3Close } from "@/components/design-3/D3Rest";
import "@/components/design-3/design-3.css";

export function D3Page() {
  const [heroReady, setHeroReady] = useState(false);
  const onIntroDone = useCallback(() => setHeroReady(true), []);

  return (
    <div className="d3">
      <D3Intro onDone={onIntroDone} />
      <D3Nav />
      <main>
        <D3Hero ready={heroReady} />
        <D3Engine />
        <D3Carousel />
        <D3Stats />
        <D3Faq />
        <D3Close />
      </main>
    </div>
  );
}
