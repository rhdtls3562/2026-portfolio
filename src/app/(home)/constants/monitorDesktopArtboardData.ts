/** 모니터 아트보드에 배치되는 폴더 아이콘 레이아웃 정보를 정의한다. */
import { icons, images } from "@/constants/ASSETS";

export type DecoItem = {
  alt: string;
  label: string;
  note?: string;
  src: string;
  href?: string;
  position: string;
  width: number;
  height: number;
  labelPosition: "top" | "bottom";
  shadowClassName: string;
};

export const DECO_ITEMS: DecoItem[] = [
  {
    alt: "Web Publishing",
    label: "Web Publishing",
    src: icons.iconFolder,
    position: "left-[5%] top-[20%]",
    width: 148,
    height: 119,
    labelPosition: "bottom",
    shadowClassName: "h-4 w-28",
  },
  {
    alt: "Other Designs",
    label: "Other Designs",
    src: icons.iconFolder,
    position: "right-[6%] top-[17%]",
    width: 70,
    height: 56,
    labelPosition: "bottom",
    shadowClassName: "h-5 w-32",
  },
  {
    alt: "Web Design",
    label: "Web Design",
    src: icons.iconFolder,
    position: "left-[10%] bottom-[10%]",
    width: 70,
    height: 56,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
  {
    alt: "Frontend",
    label: "Frontend",
    src: icons.iconFolder,
    position: "right-[5%] bottom-[10%]",
    width: 148,
    height: 119,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
  {
    alt: "BTS Project",
    label: "BTS Project",
    src: images.imgBts,
    href: "https://buly.kr/jbS2Pq",
    position: "right-[5%] bottom-[40%]",
    width: 190,
    height: 136,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
  {
    alt: "Coworkers Project",
    label: "Coworkers Project",
    src: images.imgCoworkers,
    href: "https://coworkers-blond.vercel.app",
    position: "left-[10%] bottom-[30%]",
    width: 150,
    height: 107,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
  {
    alt: "Hello",
    label: "",
    src: icons.iconHello,
    position: "right-[22%] top-[22%]",
    width: 130,
    height: 62,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
];
