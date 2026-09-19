import { D5Nav } from "@/components/design-5/D5Nav";
import { D5Hero } from "@/components/design-5/D5Hero";
import { D5Journey } from "@/components/design-5/D5Journey";
import { D5Vision } from "@/components/design-5/D5Vision";
import { D5Bartenders } from "@/components/design-5/D5Bartenders";
import { D5Join } from "@/components/design-5/D5Join";
import { D5Footer } from "@/components/design-5/D5Footer";
import "@/components/design-5/design-5.css";

export const metadata = {
  title: "BusinessBar | Design 5 · Acid Graphic",
  description:
    "Exclusive networking, maximum serendipity. Liquid chrome & techno-surreal BusinessBar evenings.",
};

export default function Design5Page() {
  return (
    <div className="d5">
      <D5Nav />
      <main>
        <D5Hero />
        <D5Journey />
        <D5Vision />
        <D5Bartenders />
        <D5Join />
      </main>
      <D5Footer />
    </div>
  );
}
