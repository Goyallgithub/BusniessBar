import { D6Nav } from "@/components/design-6/D6Nav";
import { D6Hero } from "@/components/design-6/D6Hero";
import { D6Stats } from "@/components/design-6/D6Stats";
import { D6Reveal } from "@/components/design-6/D6Reveal";
import { D6Workflow } from "@/components/design-6/D6Workflow";
import { D6Vision } from "@/components/design-6/D6Vision";
import { D6Bartenders } from "@/components/design-6/D6Bartenders";
import { D6Tabs } from "@/components/design-6/D6Tabs";
import { D6Contact } from "@/components/design-6/D6Contact";
import { D6Footer } from "@/components/design-6/D6Footer";
import "@/components/design-6/design-6.css";

export const metadata = {
  title: "BusinessBar | Design 6 · Editorial Tech",
  description:
    "Exclusive networking, maximum serendipity. An editorial tech reading of BusinessBar evenings.",
};

export default function Design6Page() {
  return (
    <div className="d6">
      <div className="d6-grid-bg" aria-hidden>
        <div className="d6-grid-bg__squares" />
        <div className="d6-grid-bg__cols">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="d6-shell">
        <D6Nav />
        <main>
          <D6Hero />
          <D6Stats />
          <D6Reveal />
          <D6Workflow />
          <D6Vision />
          <D6Bartenders />
          <D6Tabs />
          <D6Contact />
        </main>
        <D6Footer />
      </div>
    </div>
  );
}
