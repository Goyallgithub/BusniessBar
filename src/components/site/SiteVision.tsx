import { Reveal } from "./Reveal";

export function SiteVision() {
  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="bb-divider mb-16" />
        <Reveal>
          <p className="bb-label mb-6">Vision</p>
          <h2 className="bb-display max-w-[18ch] text-[clamp(2.2rem,6vw,4.5rem)] text-white">
            Maximise <span className="italic text-[#5CC4C4]">serendipity</span>.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-12">
            <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">
              We gather people who build, invest, and think. The room does the
              rest. No forced intros. No pitch theater. Just density of good
              minds and room to collide.
            </p>
            <p className="text-[15px] leading-relaxed text-white/60 sm:text-base">
              Witness the best startup mixers across the country: evenings
              designed so the right conversations find you.
            </p>
          </div>
        </Reveal>
        <div className="bb-divider mt-16" />
      </div>
    </section>
  );
}
