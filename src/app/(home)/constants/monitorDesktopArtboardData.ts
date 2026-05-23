/** 모니터 아트보드에 배치되는 폴더 아이콘 레이아웃 정보를 정의한다. */
import { icons, images } from "@/constants/ASSETS";

export type DecoItem = {
  key: string;
  alt: string;
  enterDelayClassName: string;
  label: string;
  note?: string;
  src: string;
  href?: string;
  position: string;
  width: number;
  height: number;
  labelPosition: "top" | "bottom";
  shadowClassName: string;
  preview?: {
    alt: string;
    fileLabel: string;
    src: string;
    sizes: string;
    width: number;
    height: number;
    wrapperClassName?: string;
  };
};

export const DECO_ITEMS: DecoItem[] = [
  {
    key: "web-publishing-folder",
    alt: "Web Publishing",
    enterDelayClassName: "desktop-pop-delay-0",
    label: "Web Publishing",
    src: icons.iconFolder,
    position: "left-[5%] top-[20%]",
    width: 148,
    height: 119,
    labelPosition: "bottom",
    shadowClassName: "h-4 w-28",
    preview: {
      alt: "Web Publishing 폴더 미리보기",
      fileLabel: "img_seven_browser.jpg",
      src: images.imgSevenBrowser,
      sizes: "177px",
      width: 177,
      height: 118,
      wrapperClassName: "-rotate-3",
    },
  },
  {
    key: "other-designs-folder",
    alt: "Other Designs",
    enterDelayClassName: "desktop-pop-delay-1",
    label: "Other Designs",
    src: icons.iconFolder,
    position: "right-[6%] top-[17%]",
    width: 70,
    height: 56,
    labelPosition: "bottom",
    shadowClassName: "h-5 w-32",
    preview: {
      alt: "Other Designs 폴더 미리보기",
      fileLabel: "img_dang_browser.jpg",
      src: images.imgDangBrowser,
      sizes: "165px",
      width: 165,
      height: 110,
      wrapperClassName: "rotate-3",
    },
  },
  {
    key: "web-design-folder",
    alt: "Web Design",
    enterDelayClassName: "desktop-pop-delay-5",
    label: "Web Design",
    src: icons.iconFolder,
    position: "left-[10%] bottom-[10%]",
    width: 70,
    height: 56,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
    preview: {
      alt: "Web Design 폴더 미리보기",
      fileLabel: "img_pr_browser.jpg",
      src: images.imgPrBrowser,
      sizes: "168px",
      width: 168,
      height: 112,
      wrapperClassName: "-rotate-2",
    },
  },
  {
    key: "frontend-folder",
    alt: "Frontend",
    enterDelayClassName: "desktop-pop-delay-6",
    label: "Frontend",
    src: icons.iconFolder,
    position: "right-[5%] bottom-[10%]",
    width: 148,
    height: 119,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
    preview: {
      alt: "Frontend 폴더 미리보기",
      fileLabel: "img_taskify_browser.png",
      src: images.imgTaskifyBrowser,
      sizes: "186px",
      width: 186,
      height: 117,
      wrapperClassName: "rotate-2",
    },
  },
  {
    key: "bts-project",
    alt: "BTS Project",
    enterDelayClassName: "desktop-pop-delay-3",
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
    key: "coworkers-project",
    alt: "Coworkers Project",
    enterDelayClassName: "desktop-pop-delay-4",
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
    key: "hello-icon",
    alt: "Hello",
    enterDelayClassName: "desktop-pop-delay-2",
    label: "",
    src: icons.iconHello,
    position: "right-[22%] top-[22%]",
    width: 130,
    height: 62,
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
];
