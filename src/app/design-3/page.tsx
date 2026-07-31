import type { Metadata } from "next";
import { D3Nav } from "@/components/design-3/D3Nav";
import { D3Hero } from "@/components/design-3/D3Hero";
import { D3Tabs } from "@/components/design-3/D3Tabs";
import { D3Showcase } from "@/components/design-3/D3Showcase";
import { D3Vision, D3StickyCta, D3Footer } from "@/components/design-3/D3Vision";
import "@/components/design-3/design-3.css";

export const metadata: Metadata = {
  title: "BusinessBar Design 3 | Editorial Evening",
  description:
    "An editorial BusinessBar landing: exclusive networking, maximum serendipity, calm light blue.",
};

export default function DesignThreePage() {
  return (
    <div className="d3 min-h-full flex flex-col">
      <div className="d3-noise" aria-hidden />
      <a
        href="#evening"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#0f2433] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <D3Nav />
      <main className="flex-1">
        <D3Hero />
        <D3Tabs />
        <D3Vision />
        <D3Showcase />
        <D3StickyCta />
      </main>
      <D3Footer />
    </div>
  );
}
