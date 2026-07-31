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

export function Bartenders() {
  return (
    <section id="bartenders" className="relative bg-[#e8e6e1]">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-5 sm:py-24 md:px-10 lg:px-14 lg:py-32">
        <div className="reveal max-w-2xl">
          <p className="text-[12px] font-semibold tracking-[0.22em] text-[#8a8a8a]">
            THE TEAM
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-instrument)] text-[clamp(2rem,8vw,4rem)] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a]">
            Bartenders
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#5c5c5c] sm:mt-5 sm:text-[16px]">
            At BusinessBar, we are a bunch of curious business observers.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-14 sm:gap-x-5 sm:gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bartenders.map((person) => (
            <article key={person.name} className="reveal group">
              <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#d5d2cb] sm:rounded-[22px]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 220px"
                />
              </div>
              <h3 className="mt-3 text-[13px] font-medium tracking-wide text-[#1a1a1a] sm:mt-4 sm:text-[14px]">
                {person.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
