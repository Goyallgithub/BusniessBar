"use client";

import { useCallback, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Vision } from "@/components/Vision";
import { Bartenders } from "@/components/Bartenders";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";
import { PageIntro } from "@/components/PageIntro";

export function Landing() {
  const [entranceKey, setEntranceKey] = useState(0);

  const handleIntroReveal = useCallback(() => {
    setEntranceKey((k) => k + 1);
  }, []);

  return (
    <>
      <PageIntro onReveal={handleIntroReveal} />
      <Nav key={`nav-${entranceKey}`} />
      <main className="flex-1">
        <Hero key={`hero-${entranceKey}`} />
        <About />
        <Vision />
        <Bartenders />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
