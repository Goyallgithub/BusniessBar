import Image from "next/image";
import { TEAM } from "@/data/team";
import { Reveal } from "./Reveal";

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.57-.03-3.59-2.19-3.59-2.19 0-2.53 1.71-2.53 3.48V23h-4V8.5z" />
    </svg>
  );
}

export function SiteTeam() {
  return (
    <section id="team" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="bb-label mb-4">The team</p>
              <h2 className="bb-display text-[clamp(2rem,5vw,3.5rem)] text-white">
                Faces of the night
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-white/55 lg:text-right">
              Hosts, connectors, and keepers of the vibe behind every
              BusinessBar evening.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {TEAM.map((person, i) => (
            <Reveal key={person.name} delay={i * 70}>
              <article className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.35rem] border border-[rgba(92,196,196,0.15)] bg-[#101618]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 45vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-transparent to-transparent opacity-90" />
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-[#5CC4C4] backdrop-blur-md transition hover:border-[#5CC4C4] hover:bg-[#5CC4C4] hover:text-[#041011]"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <div className="mt-4 flex items-start justify-between gap-2 px-1">
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/40">
                      {person.role}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
