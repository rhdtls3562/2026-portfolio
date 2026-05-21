"use client";

import Image from "next/image";

type DecoItem = {
  src: string;
  alt: string;
  position: string;
  size: string;
  delay: string;
  rotate: string;
};

const DECO_ITEMS: DecoItem[] = [
  {
    src: "/asset/img/img_note.svg",
    alt: "노트 데코 요소",
    position: "top-[38%] right-[1%]",
    size: "w-1/5",
    delay: "float-delay-0",
    rotate: "-rotate-6",
  },
  {
    src: "/asset/img/img_code.svg",
    alt: "코드 데코 요소",
    position: "top-[6%] right-[3%]",
    size: "w-1/4",
    delay: "float-delay-1",
    rotate: "rotate-3",
  },
  {
    src: "/asset/img/img_web.svg",
    alt: "웹 데코 요소",
    position: "top-[32%] left-[1%]",
    size: "w-1/6",
    delay: "float-delay-2",
    rotate: "-rotate-2",
  },
  {
    src: "/asset/img/img_photo.svg",
    alt: "포토 데코 요소",

    position: "top-[5%] left-[10%]",
    size: "w-1/6",
    delay: "float-delay-3",
    rotate: "rotate-6",
  },
  {
    src: "/asset/img/img_setting.svg",
    alt: "세팅 데코 요소",
    position: "bottom-[26%] left-[2%]",
    size: "w-1/6",
    delay: "float-delay-4",
    rotate: "-rotate-3",
  },
  {
    src: "/asset/img/img_slide.svg",
    alt: "슬라이드 데코 요소",
    position: "bottom-[22%] right-[2%]",
    size: "w-1/5",
    delay: "float-delay-0",
    rotate: "rotate-2",
  },
  {
    src: "/asset/img/img_gard.svg",
    alt: "가드 데코 요소",
    position: "top-[20%] right-[1%]",
    size: "w-1/6",
    delay: "float-delay-2",
    rotate: "-rotate-4",
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
          sizes="45vw"
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

      {/* 플로팅 데코 요소 — SVG 벡터, 최상단 레이어 */}
      {DECO_ITEMS.map((item) => (
        <div
          key={item.src}
          className={[
            "icon-float pointer-events-none absolute z-30 drop-shadow-sm",
            item.position,
            item.size,
            item.delay,
            item.rotate,
          ].join(" ")}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={200}
            height={200}
            className="h-auto w-full"
          />
        </div>
      ))}
    </>
  );
}
