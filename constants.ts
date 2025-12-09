
import { HighlightSlide, NavItem } from "./types";

export const NAV_LIST: NavItem[] = [
  { name: "Home", link: "#" },
  { name: "Olive Oil", link: "#highlights" },
  { name: "Dates", link: "#highlights" },
  { name: "Honey", link: "#highlights" },
  { name: "Wholesale", link: "#wholesale" },
  { name: "Contact", link: "#contact" },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["Extra Virgin.", "Sun & Rain Grown.", "Super Organic."],
    videoDuration: 15,
    video: "https://cdn.pixabay.com/video/2023/10/22/186115-877196623_large.mp4", // Olive Oil
  },
  {
    id: 2,
    textLists: ["Deglet Nour.", "Queen of Dates.", "Sahara Gold."],
    videoDuration: 10,
    video: "https://cdn.pixabay.com/video/2020/05/25/40118-424930154_large.mp4", // Dates/Desert
  },
  {
    id: 3,
    textLists: ["Wild Honey.", "Atlas Mountains.", "Pure & Unfiltered."],
    videoDuration: 12,
    video: "https://cdn.pixabay.com/video/2023/04/16/159048-818270146_large.mp4", // Honey
  },
  {
    id: 4,
    textLists: ["Premium Tuna.", "Mediterranean.", "Rich Flavor."],
    videoDuration: 18,
    video: "https://cdn.pixabay.com/video/2021/08/04/83896-583277717_large.mp4", // Sea/Tuna
  },
];
