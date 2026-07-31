import Image from "next/image";

export function D6Vision() {
  return (
    <section
      id="vision"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-0 border border-[#e5e4de] lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden bg-[#e5e4de] sm:min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=1600&q=80"
            alt="BusinessBar evening"
            fill
            className="object-cover opacity-70 grayscale mix-blend-multiply"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 border-t border-[#e5e4de] bg-[#f7f6f2]/90 px-5 py-4 backdrop-blur-sm">
            <p className="d6-mono text-[10px] text-[#3d7068]">Our vision</p>
            <div className="d6-scan mt-3" aria-hidden />
          </div>
        </div>

        <div className="flex flex-col justify-center border-t border-[#e5e4de] p-8 sm:p-12 lg:border-t-0 lg:border-l">
          <p className="d6-mono mb-6 text-[10px] text-[#3d7068]">Vision / 02</p>
          <h2 className="d6-display text-[clamp(2.25rem,5vw,3.75rem)] tracking-[-0.03em]">
            Maximise <span className="italic text-[#B4B4B4]">serendipity</span>.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className="text-[14px] leading-relaxed text-[#1c1c1c]/70 sm:text-[15px]">
              We believe in the entropy of impactful people and the osmosis of
              transformative ideas and shared knowledge.
            </p>
            <p className="text-[14px] leading-relaxed text-[#1c1c1c]/70 sm:text-[15px]">
              Witness the best startup mixers across the country: evenings
              designed so the right conversations find you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
