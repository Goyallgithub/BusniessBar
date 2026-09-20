import Image from "next/image";
import Link from "next/link";
import { TEAM } from "@/data/team";

export function D1Team() {
  return (
    <section id="team" className="scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <p className="d1-label mb-4 text-[#999]">Roster</p>
        <h2 className="d1-heading mb-12 text-[clamp(2.5rem,10vw,7rem)] text-white">
          The team
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
          {TEAM.map((person) => (
            <article
              key={person.name}
              className="d1-case group overflow-hidden border border-white/10 bg-[#111]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-white/10 p-4">
                <div>
                  <h3 className="d1-heading text-lg text-white">{person.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#999]">
                    {person.role}
                  </p>
                </div>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 transition duration-200 hover:text-white"
                >
                  In
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function D1Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <h2 className="d1-heading text-[clamp(3rem,14vw,11rem)] text-white">
          Business
          <br />
          Bar
        </h2>
        <p className="mt-6 max-w-lg text-[1.125rem] font-light text-[#999]">
          Exclusive networking. Maximum serendipity. Intimate evenings for people
          who build.
        </p>

        <div className="mt-12 flex flex-wrap gap-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          <Link href="/" className="transition duration-200 hover:text-white">
            Home
          </Link>
          <span className="text-white">Design 1</span>
          <Link href="/design-2" className="transition duration-200 hover:text-white">
            Design 2
          </Link>
          <Link href="/design-3" className="transition duration-200 hover:text-white">
            Design 3
          </Link>
          <Link href="/design-5" className="transition duration-200 hover:text-white">
            Design 5
          </Link>
          <Link href="/design-6" className="transition duration-200 hover:text-white">
            Design 6
          </Link>
          <a
            href="mailto:businessbar.blog@gmail.com"
            className="transition duration-200 hover:text-white"
          >
            Contact
          </a>
        </div>

        <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/25">
          © {new Date().getFullYear()} BusinessBar
        </p>
      </div>
    </footer>
  );
}
