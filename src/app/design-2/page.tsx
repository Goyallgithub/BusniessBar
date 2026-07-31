import type { Metadata } from "next";
import { SmoothScroll } from "@/components/design-2/SmoothScroll";
import { ScrollAtmosphere } from "@/components/design-2/ScrollAtmosphere";
import { D2Nav } from "@/components/design-2/D2Nav";
import { D2Hero, D2HeroScene } from "@/components/design-2/D2Hero";
import { D2Journey } from "@/components/design-2/D2Journey";
import { D2Vision } from "@/components/design-2/D2Vision";
import { D2Bartenders } from "@/components/design-2/D2Bartenders";
import { D2Join } from "@/components/design-2/D2Join";
import { D2Footer } from "@/components/design-2/D2Footer";
import "@/components/design-2/design-2.css";

export const metadata: Metadata = {
  title: "BusinessBar Design 2 | The Evening Journey",
  description:
    "A scroll journey through exclusive networking evenings: countryside villa spirit, maximum serendipity.",
};

export default function DesignTwoPage() {
  return (
    <SmoothScroll>
      <div className="d2 min-h-full flex flex-col">
        <ScrollAtmosphere />
        <D2HeroScene />
        <a
          href="#journey"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#12141a] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <D2Nav />
        <main className="relative z-10 flex-1">
          <D2Hero />
          <D2Journey />
          <D2Vision />
          <D2Bartenders />
          <D2Join />
        </main>
        <D2Footer />
      </div>
    </SmoothScroll>
  );
}
