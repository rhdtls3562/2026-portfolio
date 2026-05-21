/** 모니터 화면 안의 배경, 프로필, 장식 아이콘 레이어를 배치하는 컴포넌트. */
"use client";

import Image from "next/image";

type DecoItem = {
  src: string;
  position: string;
  width: number;
  height: number;
  delay: string;
  rotate: string;
  depth: "front" | "back";
};

const DECO_ITEMS: DecoItem[] = [
  {
    src: "/asset/icon/icon_bubble_ready.svg",
    position: "-top-[1%] -left-[30%]",
    width: 453,
    height: 278,
    delay: "float-delay-0",
    rotate: "-rotate-6",
    depth: "back",
  },
  {
    src: "/asset/icon/icon_sunglasses.svg",
    position: "top-[10%] left-[18%]",
    width: 164,
    height: 36,
    delay: "float-delay-1",
    rotate: "rotate-3",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_bubble_fire.svg",
    position: "-top-[2%] -right-[24%]",
    width: 378,
    height: 301,
    delay: "float-delay-2",
    rotate: "rotate-4",
    depth: "back",
  },
  {
    src: "/asset/icon/icon_question.svg",
    position: "top-[15%] right-[18%]",
    width: 110,
    height: 97,
    delay: "float-delay-3",
    rotate: "-rotate-3",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_bubble_hello.svg",
    position: "top-[30%] -left-[6%]",
    width: 176,
    height: 84,
    delay: "float-delay-4",
    rotate: "-rotate-3",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_bubble_love.svg",
    position: "top-[26%] right-[1%]",
    width: 181,
    height: 175,
    delay: "float-delay-0",
    rotate: "rotate-2",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_heart.svg",
    position: "top-[43%] left-[10%]",
    width: 91,
    height: 77,
    delay: "float-delay-2",
    rotate: "-rotate-6",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_bubble_electric.svg",
    position: "top-[42%] right-[8%]",
    width: 84,
    height: 111,
    delay: "float-delay-1",
    rotate: "rotate-6",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_emoji.svg",
    position: "bottom-[20%] -left-[22%]",
    width: 322,
    height: 98,
    delay: "float-delay-3",
    rotate: "rotate-2",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_game.svg",
    position: "bottom-[28%] right-[2%]",
    width: 124,
    height: 71,
    delay: "float-delay-4",
    rotate: "-rotate-2",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_hourglass.svg",
    position: "bottom-[22%] left-[14%]",
    width: 49,
    height: 71,
    delay: "float-delay-0",
    rotate: "rotate-3",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_jellyfish.svg",
    position: "bottom-[18%] right-[15%]",
    width: 59,
    height: 72,
    delay: "float-delay-2",
    rotate: "-rotate-3",
    depth: "front",
  },
  {
    src: "/asset/icon/icon_shine.svg",
    position: "top-[21%] left-[28%]",
    width: 85,
    height: 78,
    delay: "float-delay-4",
    rotate: "rotate-6",
    depth: "back",
  },
  {
    src: "/asset/icon/icon_smile.svg",
    position: "top-[20%] right-[23%]",
    width: 227,
    height: 72,
    delay: "float-delay-1",
    rotate: "-rotate-4",
    depth: "back",
  },
  {
    src: "/asset/icon/icon_bubble_smile.svg",
    position: "bottom-[14%] left-[24%]",
    width: 120,
    height: 133,
    delay: "float-delay-2",
    rotate: "rotate-5",
    depth: "back",
  },
  {
    src: "/asset/icon/icon_bubble_error.svg",
    position: "bottom-[12%] -right-[23%]",
    width: 323,
    height: 204,
    delay: "float-delay-3",
    rotate: "-rotate-5",
    depth: "back",
  },
];

export default function MonitorDesktopArtboard() {
  return (
    <>
      {/* 배경 이미지 — z 최하단 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/img/img_desktop.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
      </div>

      {/* PORTFOLIO 타이포 — 프로필 이미지 뒤 배경 레이어 */}
      <div className="absolute inset-x-0 top-[18%] z-10 select-none text-center">
        <p className="font-retro-terminal text-3xs uppercase tracking-[0.35em] text-d-warm/60">
          ── FRONTEND DEVELOPER ──
        </p>
        <p className="font-retro-display mt-0.5 text-2xl uppercase leading-none tracking-widest text-d-warm/20 sm:text-3xl md:text-4xl lg:text-5xl">
          PORTFOLIO
        </p>
        <p className="font-retro-terminal mt-0.5 text-3xs uppercase tracking-[0.25em] text-d-muted/50">
          KWON · SAEROM · 2026
        </p>
      </div>

      {/* 프로필 컷아웃 — 전체 너비 + 하단 고정 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[5%] z-20">
        <Image
          src="/asset/img/img_profile.png"
          alt="권새롬 프로필 컷아웃"
          fill
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 36vw, 42vw"
          className="object-contain object-bottom"
        />
      </div>

      {/* 플로팅 아이콘 — 아이콘 에셋 레이어 */}
      {DECO_ITEMS.map((item) => (
        <div
          key={item.src}
          className={[
            "icon-float pointer-events-none absolute drop-shadow-sm",
            item.depth === "front" ? "z-30" : "z-15",
            item.position,
            item.delay,
            item.rotate,
          ].join(" ")}
        >
          <Image
            src={item.src}
            alt=""
            width={item.width}
            height={item.height}
            className="h-auto max-w-none"
          />
        </div>
      ))}
    </>
  );
}
