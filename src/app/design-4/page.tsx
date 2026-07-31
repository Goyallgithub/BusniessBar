import type { Metadata } from "next";
import { D4Nav } from "@/components/design-4/D4Nav";
import { D4Hero } from "@/components/design-4/D4Hero";
import { D4Scenarios } from "@/components/design-4/D4Scenarios";
import { D4Room } from "@/components/design-4/D4Room";
import { D4Stories } from "@/components/design-4/D4Stories";
import { D4Waitlist } from "@/components/design-4/D4Waitlist";
import { D4Faq, D4Footer } from "@/components/design-4/D4Faq";
import "@/components/design-4/design-4.css";

export const metadata: Metadata = {
  title: "BusinessBar Design 4 | Softly",
  description:
    "A soft, mobile-first BusinessBar landing: intimate evenings, maximum serendipity.",
};

export default function DesignFourPage() {
  return (
    <div className="d4 min-h-full flex flex-col">
      <div className="d4-grain" aria-hidden />
      <a
        href="#moments"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#292524] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <D4Nav />
      <main className="flex-1">
        <D4Hero />
        <D4Scenarios />
        <D4Room />
        <D4Stories />
        <D4Waitlist />
        <D4Faq />
      </main>
      <D4Footer />
    </div>
  );
}
