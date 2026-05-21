/** 모니터 아트보드에 배치되는 장식 아이콘의 위치와 크기 정보를 정의한다. */
export type DecoItem = {
  src: string;
  position: string;
  width: number;
  height: number;
  delay: string;
  rotate: string;
  depth: "front" | "back";
};

export const DECO_ITEMS: DecoItem[] = [
  { src: "/asset/icon/icon_bubble_ready.svg", position: "-top-[1%] left-[0%]", width: 453, height: 278, delay: "float-delay-0", rotate: "-rotate-6", depth: "back" },
  { src: "/asset/icon/icon_sunglasses.svg", position: "top-[10%] left-[18%]", width: 164, height: 36, delay: "float-delay-1", rotate: "rotate-3", depth: "front" },
  { src: "/asset/icon/icon_bubble_fire.svg", position: "-top-[2%] -right-[24%]", width: 378, height: 301, delay: "float-delay-2", rotate: "rotate-4", depth: "back" },
  { src: "/asset/icon/icon_question.svg", position: "top-[15%] right-[18%]", width: 110, height: 97, delay: "float-delay-3", rotate: "-rotate-3", depth: "front" },
  { src: "/asset/icon/icon_bubble_hello.svg", position: "top-[45%] left-[-15%]", width: 176, height: 84, delay: "float-delay-4", rotate: "-rotate-3", depth: "front" },
  { src: "/asset/icon/icon_bubble_love.svg", position: "top-[26%] right-[1%]", width: 181, height: 175, delay: "float-delay-0", rotate: "rotate-2", depth: "front" },
  { src: "/asset/icon/icon_heart.svg", position: "top-[43%] left-[10%]", width: 91, height: 77, delay: "float-delay-2", rotate: "-rotate-6", depth: "front" },
  { src: "/asset/icon/icon_bubble_electric.svg", position: "top-[42%] right-[8%]", width: 84, height: 111, delay: "float-delay-1", rotate: "rotate-6", depth: "front" },
  { src: "/asset/icon/icon_emoji.svg", position: "bottom-[45%] left-[-15%]", width: 322, height: 98, delay: "float-delay-3", rotate: "rotate-2", depth: "front" },
  { src: "/asset/icon/icon_game.svg", position: "bottom-[28%] right-[2%]", width: 124, height: 71, delay: "float-delay-4", rotate: "-rotate-2", depth: "front" },
  { src: "/asset/icon/icon_hourglass.svg", position: "bottom-[22%] left-[14%]", width: 49, height: 71, delay: "float-delay-0", rotate: "rotate-3", depth: "front" },
  { src: "/asset/icon/icon_jellyfish.svg", position: "bottom-[18%] right-[15%]", width: 59, height: 72, delay: "float-delay-2", rotate: "-rotate-3", depth: "front" },
  { src: "/asset/icon/icon_shine.svg", position: "top-[21%] left-[28%]", width: 85, height: 78, delay: "float-delay-4", rotate: "rotate-6", depth: "back" },
  { src: "/asset/icon/icon_smile.svg", position: "top-[20%] right-[23%]", width: 227, height: 72, delay: "float-delay-1", rotate: "-rotate-4", depth: "back" },
  { src: "/asset/icon/icon_bubble_smile.svg", position: "bottom-[14%] left-[24%]", width: 120, height: 133, delay: "float-delay-2", rotate: "rotate-5", depth: "back" },
  { src: "/asset/icon/icon_bubble_error.svg", position: "bottom-[12%] -right-[23%]", width: 323, height: 204, delay: "float-delay-3", rotate: "-rotate-5", depth: "back" },
];
