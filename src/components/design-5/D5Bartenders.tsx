import Image from "next/image";
import { TEAM } from "@/data/team";

export function D5Bartenders() {
  return (
    <section id="bartenders" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              The team
            </p>
            <h2 className="d5-display d5-glitch text-[clamp(2.4rem,7vw,5.5rem)] text-white">
              Faces of the
              <br />
              <span className="italic text-[#FF00FF]">night</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55 lg:text-right">
            The people who hold the room. Hosts, connectors, and keepers of the
            vibe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {TEAM.map((person, i) => (
            <article key={person.name} className="group relative">
              <div
                className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]"
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "20% 80% 30% 70% / 50% 20% 80% 50%"
                      : "70% 30% 60% 40% / 40% 70% 30% 60%",
                }}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover contrast-125 saturate-150 transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex items-start gap-2">
                <span className="d5-thorn mt-1 shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#00F0FF]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-extrabold uppercase leading-tight tracking-[-0.02em] text-white">
                    {person.name}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
