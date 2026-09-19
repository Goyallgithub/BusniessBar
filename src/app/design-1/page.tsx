import { D1Nav } from "@/components/design-1/D1Nav";
import { D1Hero } from "@/components/design-1/D1Hero";
import { D1Cases } from "@/components/design-1/D1Cases";
import { D1Access } from "@/components/design-1/D1Access";
import { D1Team, D1Footer } from "@/components/design-1/D1Team";
import "@/components/design-1/design-1.css";

export const metadata = {
  title: "BusinessBar | Design 1 · Cinematic",
  description:
    "Exclusive networking, maximum serendipity. A cinematic reading of BusinessBar evenings.",
};

export default function Design1Page() {
  return (
    <div className="d1">
      <D1Nav />
      <main>
        <D1Hero />
        <D1Cases />
        <D1Access />
        <D1Team />
      </main>
      <D1Footer />
    </div>
  );
}
