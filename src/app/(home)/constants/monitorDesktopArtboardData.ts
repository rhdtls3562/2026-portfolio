/** 모니터 아트보드에 배치되는 폴더 아이콘 레이아웃 정보를 정의한다. */
import { icons } from "@/constants/ASSETS";

export type DecoItem = {
  alt: string;
  label: string;
  note?: string;
  src: string;
  position: string;
  width: number;
  height: number;
  labelPosition: "top" | "bottom";
  shadowClassName: string;
};

export const DECO_ITEMS: DecoItem[] = [
  {
    alt: "web design 폴더",
    label: "web design",
    src: icons.iconFolder,
    position: "left-[6%] top-[15%]",
    width: 148,
    height: 119,
    labelPosition: "bottom",
    shadowClassName: "h-4 w-28",
  },
  {
    alt: "social media 폴더",
    label: "social media",
    src: icons.iconFolder,
    position: "right-[6%] top-[17%]",
    width: 182,
    height: 146,
    labelPosition: "bottom",
    shadowClassName: "h-5 w-32",
  },
  {
    alt: "portfolio 폴더",
    label: "portfolio",
    note: "(2025)",
    src: icons.iconFolder,
    position: "left-[4%] top-[60%]",
    width: 214,
    height: 171,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
];
