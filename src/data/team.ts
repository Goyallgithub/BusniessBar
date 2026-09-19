export const TEAM = [
  {
    name: "Sahil",
    role: "Curation",
    initial: "S",
    num: "01",
    linkedin: "https://www.linkedin.com/in/sahildhingra782",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/sahil-500x500.jpeg",
  },
  {
    name: "Abhigyan",
    role: "Partnerships",
    initial: "A",
    num: "02",
    linkedin: "https://www.linkedin.com/in/abhigyan-joshi",
    image:
      "https://businessbar.net/wp-content/uploads/2021/05/abhigyan-500x500.jpg",
  },
  {
    name: "Yash",
    role: "Community",
    initial: "Y",
    num: "03",
    linkedin: "https://www.linkedin.com/in/yd98",
    image:
      "https://businessbar.net/wp-content/uploads/2022/01/DSC_0369_3_portrait-500x500.jpg",
  },
  {
    name: "Nevil",
    role: "Operations",
    initial: "N",
    num: "04",
    linkedin: "https://www.linkedin.com/in/nevilkathiria",
    image:
      "https://businessbar.net/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-27-at-1.36.25-PM-500x500.jpeg",
  },
  {
    name: "Shivam",
    role: "Growth",
    initial: "S",
    num: "05",
    linkedin: "https://www.linkedin.com/in/jindal-shivam",
    image:
      "https://businessbar.net/wp-content/uploads/2021/04/shivam-500x500.jpeg",
  },
] as const;

export const EVENT_SHOTS = [
  { src: "/events/ev-rooftop.jpeg", span: "tall" as const },
  { src: "/events/ev-sf-loft.jpeg", span: "wide" as const },
  { src: "/events/ev-villa.jpeg", span: "tall" as const },
  { src: "/events/ev-signage.jpeg", span: "normal" as const },
  { src: "/events/ev-04.jpeg", span: "tall" as const },
  { src: "/events/ev-07.jpeg", span: "normal" as const },
  { src: "/events/ev-08.jpeg", span: "wide-short" as const },
] as const;

export const GALLERY = [
  {
    src: "/events/ev-rooftop.jpeg",
    caption: "Arrive",
    line: "Countryside ease, villa charm.",
  },
  {
    src: "/events/ev-sf-loft.jpeg",
    caption: "Converse",
    line: "Real people, fresh ideas.",
  },
  {
    src: "/events/ev-villa.jpeg",
    caption: "Connect",
    line: "Entropy of people. Osmosis of ideas.",
  },
  {
    src: "/events/ev-signage.jpeg",
    caption: "The room",
    line: "Intimate scale. Maximum signal.",
  },
  {
    src: "/events/ev-04.jpeg",
    caption: "The table",
    line: "Conversations that stay unfinished on purpose.",
  },
  {
    src: "/events/ev-07.jpeg",
    caption: "The night",
    line: "Witness the best startup mixers.",
  },
] as const;
