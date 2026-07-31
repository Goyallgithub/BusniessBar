import Image from "next/image";

const people = [
  {
    name: "Sahil Dhingra",
    fig: "Fig. 3A",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/sahil-500x500.jpeg",
    offset: false,
  },
  {
    name: "Nevil Kathiria",
    fig: "Fig. 3B",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-27-at-1.36.25-PM-500x500.jpeg",
    offset: true,
  },
  {
    name: "Shivam Jindal",
    fig: "Fig. 3C",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/shivam-500x500.jpeg",
    offset: false,
  },
  {
    name: "Abhigyan Joshi",
    fig: "Fig. 3D",
    image:
      "https://businessbar.net/wp-content/uploads/2021/05/abhigyan-500x500.jpg",
    offset: false,
  },
];

export function D3Showcase() {
  return (
    <section id="bartenders" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="d3-label">Fig. 03 · The team</p>
            <h2 className="d3-serif mt-3 text-[clamp(2.2rem,5vw,3.5rem)] text-[#0f2433]">
              Bartenders
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[rgba(15,36,51,0.6)] sm:text-[16px]">
            Curious business observers hosting evenings where ideas meet in
            person.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {people.map((person) => (
            <article
              key={person.name}
              className={`d3-showcase-card group overflow-hidden rounded-[24px] bg-[#c9dce9] ${
                person.offset ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="d3-catalog">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-wide text-white/80">
                      {person.fig}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3d8fbf]" />
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="d3-serif text-[1.15rem] italic text-[#0f2433] sm:text-[1.25rem]">
                  {person.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
