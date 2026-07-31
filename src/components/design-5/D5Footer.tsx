import Link from "next/link";
import { D5Marquee } from "./D5Marquee";

export function D5Footer() {
  return (
    <footer className="border-t border-[#CCFF00]/25 bg-black pb-10 pt-8">
      <D5Marquee />

      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-4 pt-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <p className="d5-display d5-glitch text-4xl text-white sm:text-5xl">
            BusinessBar
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/45">
            Exclusive networking. Maximum serendipity. Intimate evenings for
            people who build.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
          <Link href="/" className="transition hover:text-[#CCFF00]">
            Design 1
          </Link>
          <Link href="/design-2" className="transition hover:text-[#CCFF00]">
            Design 2
          </Link>
          <Link href="/design-3" className="transition hover:text-[#CCFF00]">
            Design 3
          </Link>
          <Link href="/design-4" className="transition hover:text-[#CCFF00]">
            Design 4
          </Link>
          <span className="text-[#CCFF00]">Design 5</span>
          <Link href="/design-6" className="transition hover:text-[#CCFF00]">
            Design 6
          </Link>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1400px] px-4 text-[11px] uppercase tracking-[0.16em] text-white/30 sm:px-6 lg:px-10">
        © {new Date().getFullYear()} BusinessBar
      </p>
    </footer>
  );
}
