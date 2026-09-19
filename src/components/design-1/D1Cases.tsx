import Image from "next/image";
import { GALLERY } from "@/data/team";

export function D1Cases() {
  const featured = GALLERY[0];
  const rest = GALLERY.slice(1, 5);

  return (
    <section id="moments" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-[90rem]">
        <p className="d1-label mb-4 text-[#999]">Case studies</p>
        <h2 className="d1-heading mb-12 text-[clamp(2.5rem,10vw,8rem)] text-white">
          Moments
        </h2>

        <article className="d1-case mb-6 overflow-hidden border border-white/10 bg-[#111]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
            <span className="h-3 w-3 rounded-full bg-[#eab308]" />
            <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
            <span className="ml-3 d1-label text-[10px] text-[#999]">
              {featured.caption} · BusinessBar
            </span>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={featured.src}
              alt={featured.caption}
              fill
              className="object-cover"
              sizes="90rem"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 sm:p-10">
              <h3 className="d1-heading text-3xl text-white sm:text-5xl">
                {featured.caption}
              </h3>
              <p className="mt-3 max-w-lg text-[1.125rem] font-light text-white/70">
                {featured.line}
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((shot) => (
            <article
              key={shot.caption}
              className="d1-case overflow-hidden border border-white/10 bg-[#111]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <h3 className="d1-heading text-2xl text-white">{shot.caption}</h3>
                <p className="mt-2 text-[1rem] font-light text-[#999]">{shot.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
