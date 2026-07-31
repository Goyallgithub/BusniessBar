"use client";

import Image from "next/image";

const bartenders = [
  {
    name: "Sahil Dhingra",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/sahil-500x500.jpeg",
  },
  {
    name: "Nevil Kathiria",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-27-at-1.36.25-PM-500x500.jpeg",
  },
  {
    name: "Shivam Jindal",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/shivam-500x500.jpeg",
  },
  {
    name: "Abhigyan Joshi",
    image:
      "https://businessbar.net/wp-content/uploads/2021/05/abhigyan-500x500.jpg",
  },
  {
    name: "Yashvardhan Didwania",
    image:
      "https://businessbar.net/wp-content/uploads/2022/01/DSC_0369_3_portrait-500x500.jpg",
  },
  {
    name: "Keerthana Sreekanth Rao",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-28-at-8.40.31-PM-500x500.jpeg",
  },
  {
    name: "Tanmay Lad",
    image: "https://businessbar.net/wp-content/uploads/2021/05/tanmay.png",
  },
  {
    name: "Sunil Maurya",
    image:
      "https://businessbar.net/wp-content/uploads/2021/10/Untitled-1-500x500.jpg",
  },
  {
    name: "Priya Manjunath",
    image:
      "https://businessbar.net/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-15-at-1.14.05-PM-500x500.jpeg",
  },
];

export function D5Bartenders() {
  return (
    <section id="bartenders" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              The bartenders
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
      </div>

      <div className="-mx-0 overflow-x-auto pb-4 [scrollbar-width:thin]">
        <div className="flex w-max gap-5 px-4 sm:gap-6 sm:px-6 lg:px-10">
          {bartenders.map((person, i) => (
            <article
              key={person.name}
              className={`group relative w-[200px] shrink-0 sm:w-[230px] ${
                i % 2 === 1 ? "translate-y-6" : ""
              }`}
            >
              <div
                className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A]"
                style={{
                  borderRadius:
                    i % 3 === 0
                      ? "20% 80% 30% 70% / 50% 20% 80% 50%"
                      : i % 3 === 1
                        ? "70% 30% 60% 40% / 40% 70% 30% 60%"
                        : "45% 55% 35% 65% / 55% 35% 65% 45%",
                }}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover contrast-125 saturate-150 transition duration-500 group-hover:scale-110 group-hover:[filter:url(#d5-wavy)]"
                  sizes="230px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#00F0FF]/15 opacity-90 mix-blend-multiply" />
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 mix-blend-screen shadow-[2px_0_0_#ff00ff,-2px_0_0_#00f0ff]" />
                </div>
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
