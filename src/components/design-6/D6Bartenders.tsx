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

export function D6Bartenders() {
  return (
    <section
      id="bartenders"
      className="scroll-mt-24 border-b border-[#e5e4de] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 border-b border-[#e5e4de] pb-10 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="d6-mono mb-4 text-[10px] text-[#3d7068]">Roster / 09</p>
            <h2 className="d6-display text-4xl tracking-[-0.03em] sm:text-5xl">
              The bartenders
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-[#1c1c1c]/60 sm:text-right">
            The people who hold the room. Hosts, connectors, and keepers of the
            vibe behind every BusinessBar evening.
          </p>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-[#e5e4de] sm:grid-cols-3 lg:grid-cols-3">
          {bartenders.map((person, i) => (
            <article
              key={person.name}
              className="group border-b border-r border-[#e5e4de] bg-transparent transition-[background] duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:bg-white"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e5e4de]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale opacity-80 mix-blend-multiply transition duration-[800ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-4 sm:p-5">
                <div>
                  <p className="d6-mono text-[10px] text-[#1c1c1c]/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[13px] font-medium leading-snug text-[#1c1c1c] sm:text-[14px]">
                    {person.name}
                  </h3>
                </div>
                <span className="d6-mono pt-0.5 text-[9px] text-[#3d7068]">BT</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
