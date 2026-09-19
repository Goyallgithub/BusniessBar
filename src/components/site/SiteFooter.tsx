import Link from "next/link";
import { BusinessBarLogo } from "@/components/BusinessBarLogo";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="bb-divider mb-10" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <BusinessBarLogo onDark className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/40">
              Exclusive networking, maximum serendipity.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
            <Link href="/" className="transition hover:text-[#5CC4C4]">
              Home
            </Link>
            <Link href="/design-1" className="transition hover:text-[#5CC4C4]">
              Design 1
            </Link>
            <Link href="/design-5" className="transition hover:text-[#5CC4C4]">
              Design 5
            </Link>
            <Link href="/design-6" className="transition hover:text-[#5CC4C4]">
              Design 6
            </Link>
          </div>
        </div>
        <p className="mt-10 text-[11px] uppercase tracking-[0.16em] text-white/25">
          © {new Date().getFullYear()} BusinessBar
        </p>
      </div>
    </footer>
  );
}
