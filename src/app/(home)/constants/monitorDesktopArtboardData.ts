/** 모니터 아트보드에 배치되는 폴더 아이콘 레이아웃 정보를 정의한다. */
import { icons, images } from "@/utils/assetPaths";

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
  /** 시각적 표시 너비를 vw 단위로 고정 (브라우저 줌·뷰포트와 무관하게 모니터 비율 유지) */
  sizeClassName: string;
  labelPosition: "top" | "bottom";
  shadowClassName: string;
  preview?: {
    alt: string;
    fileLabel: string;
    src: string;
    sizes: string;
    width: number;
    height: number;
    sizeClassName: string;
    wrapperClassName?: string;
  };
};

/** 1440px 뷰포트 기준으로 모니터(46% ≈ 662px) 대비 비율을 vw로 환산 */
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
    sizeClassName: "w-[7vw] h-auto max-w-none",
    labelPosition: "bottom",
    shadowClassName: "h-4 w-28",
    preview: {
      alt: "Web Publishing 폴더 미리보기",
      fileLabel: "img_seven_browser.jpg",
      src: images.imgSevenBrowser,
      sizes: "12.3vw",
      width: 177,
      height: 118,
      sizeClassName: "w-[8.5vw] h-auto max-w-none",
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
    sizeClassName: "w-[3.4vw] h-auto max-w-none",
    labelPosition: "bottom",
    shadowClassName: "h-5 w-32",
    preview: {
      alt: "Other Designs 폴더 미리보기",
      fileLabel: "img_dang_browser.jpg",
      src: images.imgDangBrowser,
      sizes: "11.5vw",
      width: 165,
      height: 110,
      sizeClassName: "w-[8vw] h-auto max-w-none",
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
    sizeClassName: "w-[3.4vw] h-auto max-w-none",
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
    preview: {
      alt: "Web Design 폴더 미리보기",
      fileLabel: "img_pr_browser.jpg",
      src: images.imgPrBrowser,
      sizes: "11.7vw",
      width: 168,
      height: 112,
      sizeClassName: "w-[8vw] h-auto max-w-none",
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
    sizeClassName: "w-[7vw] h-auto max-w-none",
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
    preview: {
      alt: "Frontend 폴더 미리보기",
      fileLabel: "img_taskify_browser.png",
      src: images.imgTaskifyBrowser,
      sizes: "12.9vw",
      width: 186,
      height: 117,
      sizeClassName: "w-[9vw] h-auto max-w-none",
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
    sizeClassName: "w-[6.3vw] h-auto max-w-none",
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
    sizeClassName: "w-[7.2vw] h-auto max-w-none",
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
    sizeClassName: "w-[6.3vw] h-auto max-w-none",
    labelPosition: "bottom",
    shadowClassName: "h-6 w-40",
  },
];
