import Image from "next/image";

const avatars = [
  "https://businessbar.net/wp-content/uploads/2021/04/sahil-500x500.jpeg",
  "https://businessbar.net/wp-content/uploads/2021/04/shivam-500x500.jpeg",
  "https://businessbar.net/wp-content/uploads/2021/05/abhigyan-500x500.jpg",
  "https://businessbar.net/wp-content/uploads/2021/05/tanmay.png",
];

export function D3Hero() {
  return (
    <section className="relative px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-[1200px] items-end gap-10 lg:grid-cols-[5fr_7fr] lg:gap-12">
        <div className="pb-2 lg:pb-8">
          <p className="d3-label mb-5">Fig. 01 · Cover</p>
          <h1 className="d3-serif text-[clamp(2.6rem,7vw,4.75rem)] leading-[1.02] text-[#0f2433]">
            Exclusive networking,{" "}
            <em className="italic text-[#3d8fbf]">maximum</em> serendipity
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[rgba(15,36,51,0.6)] sm:text-[18px]">
            Intimate evenings for entrepreneurs, investors and thinkers who
            thrive on conversation that is not over-planned.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#evening" className="d3-cta h-12 px-6">
              Begin the evening
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatars.map((src) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-[#eaf3f9] grayscale-[70%]"
                  >
                    <Image src={src} alt="" fill className="object-cover" sizes="36px" />
                  </span>
                ))}
              </div>
              <p className="text-[13px] font-medium text-[rgba(15,36,51,0.55)]">
                Hosted by the bartenders
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="d3-arch relative aspect-[4/5] overflow-hidden bg-[#dceaf4] sm:aspect-[5/6] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
              alt="Modern villa evening for BusinessBar"
              fill
              priority
              className="object-cover object-[50%_55%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="d3-catalog">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-wide text-white/80">
                  Fig. 1A
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#3d8fbf]" />
              </div>
              <p className="mt-1 text-[12px] font-medium text-white">
                Villa cover · live
              </p>
            </div>
          </div>

          <div className="d3-sticky-note absolute -bottom-4 right-3 z-10 w-[150px] sm:-bottom-6 sm:right-8 sm:w-[170px]">
            <p className="font-mono text-[10px] tracking-wide text-[#0f2433]/55">
              Note 01
            </p>
            <p className="d3-serif mt-2 text-[1.15rem] leading-snug">
              Intimate · 40 guests
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
