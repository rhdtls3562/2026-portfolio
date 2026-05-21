/** 모니터 화면 안의 배경, 프로필, 장식 아이콘 레이어를 배치하는 컴포넌트. */
"use client";

import Image from "next/image";
import { DECO_ITEMS } from "@/app/(home)/components/monitorDesktopArtboardData";

export default function MonitorDesktopArtboard() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/img/img_desktop.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
      </div>

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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[5%] z-20">
        <Image
          src="/asset/img/img_profile.png"
          alt="권새롬 프로필 컷아웃"
          fill
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 36vw, 42vw"
          className="object-contain object-bottom"
        />
      </div>

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
