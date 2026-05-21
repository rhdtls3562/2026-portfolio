"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import {
  type AppKey,
  type PowerState,
  type FolderKey,
  BUTTON_POSITION,
} from "./retro-constants";
import MonitorDesktop from "./MonitorDesktop";
import CrtPowerOn from "./CrtPowerOn";

/**
 * img_main.jpg 원본 치수: 3506 × 1972 (≈ 16:9)
 *
 * 씬 컨테이너를 이 비율로 고정하면:
 * - 이미지가 object-cover로 잘리지 않는다.
 * - 모든 % 기반 오버레이가 뷰포트 크기와 무관하게 이미지의 동일 지점에 고정된다.
 * - 뷰포트가 16:9보다 넓으면 상하 레터박스, 좁으면 좌우 레터박스.
 */
const SCENE_W = 3506;
const SCENE_H = 1972;
const SCENE_RATIO = SCENE_W / SCENE_H; // ≈ 1.7778

export default function RetroPortfolio() {
  const [powerState, setPowerState] = useState<PowerState>("off");
  const [buttonLit, setButtonLit] = useState(false);
  const [screenVisible, setScreenVisible] = useState(false);
  const [activeApp, setActiveApp] = useState<AppKey | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<FolderKey>("profile");

  useEffect(() => {
    if (powerState !== "powering") return;
    const timers = [
      window.setTimeout(() => setButtonLit(true), 80),
      window.setTimeout(() => setPowerState("desktop"), 1080),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [powerState]);

  const handlePowerToggle = () => {
    if (powerState === "powering" || powerState === "powering-off") return;
    if (powerState === "off") {
      setActiveApp(null);
      setSelectedFolder("profile");
      setButtonLit(false);
      setScreenVisible(true);
      setPowerState("powering");
      return;
    }
    setButtonLit(false);
    setPowerState("powering-off");
  };

  const handlePowerOffFinished = () => {
    setPowerState("off");
    setScreenVisible(false);
    setActiveApp(null);
    setSelectedFolder("profile");
  };

  return (
    /* 뷰포트 전체를 덮는 컨테이너 */
    <main className="relative h-screen overflow-hidden bg-black text-white">
      {/*
       * object-cover 방식 씬 컨테이너
       * width: max(100vw, 177.79vh) 로 뷰포트 비율에 관계없이
       * 씬이 항상 뷰포트를 꽉 덮는다. 초과분은 overflow-hidden으로 클립.
       * - 뷰포트가 16:9보다 넓으면  → 너비 = 100vw, 높이가 뷰포트 밖으로 나가서 클립
       * - 뷰포트가 16:9보다 좁으면  → 너비 = 177.79vh, 너비가 뷰포트 밖으로 나가서 클립
       * 오버레이 %값은 씬 컨테이너 기준이므로 이미지와 항상 일치.
       */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          aspectRatio: `${SCENE_W} / ${SCENE_H}`,
          width: `max(100vw, ${(SCENE_RATIO * 100).toFixed(2)}vh)`,
        }}
      >
        {/* ── 배경 줌 레이어 ── */}
        <div
          className={cn(
            "absolute inset-0 will-change-transform transition-transform duration-slow ease-spring",
            powerState === "off"
              ? "scale-100"
              : "scale-[1.34] sm:scale-[1.46] md:scale-[1.62] lg:scale-[1.82]",
          )}
          style={{ transformOrigin: "50% 49%" }}
        >
          <Image
            src="/asset/img/img_main.jpg"
            alt="레트로 컴퓨터 책상 장면"
            fill
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* 비네트 */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(0,0,0,0.18)_100%)]" />

          {/* 전원 버튼 */}
          <button
            type="button"
            onClick={handlePowerToggle}
            className="absolute z-20 aspect-7/3 translate-x-[-35%] translate-y-[-65%] transition-transform duration-300 hover:scale-105"
            style={BUTTON_POSITION}
            aria-label={
              powerState === "off" ? "컴퓨터 전원 켜기" : "컴퓨터 전원 끄기"
            }
          >
            <Image
              src={
                buttonLit
                  ? "/asset/img/img_button_on.jpg"
                  : "/asset/img/img_button_off.jpg"
              }
              alt=""
              fill
              loading="eager"
              sizes="4vw"
              className="rounded object-cover"
            />
          </button>
        </div>

        {/*
         * ── 모니터 스크린 오버레이 ──
         * 씬 컨테이너 기준 % 위치.
         * 줌 배율별로 (scale × 원본값)을 pre-계산해 둔다.
         *   origin = 49% (transformOrigin: "50% 49%")
         *   top_zoomed  = 49% + (50% - 49%) × scale
         *   width_zoomed = 24.5% × scale
         *   height_zoomed = 30% × scale
         *
         * scale 1.34 → top: 50.34%, w: 32.83%, h: 40.20%
         * scale 1.46 → top: 50.46%, w: 35.77%, h: 43.80%
         * scale 1.62 → top: 50.62%, w: 39.69%, h: 48.60%
         * scale 1.82 → top: 50.82%, w: 44.59%, h: 54.60%
         */}
        <div
          className={cn(
            "retro-screen absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md",
            "border-8 border-black bg-black",
            "shadow-[0_0_24px_rgba(0,0,0,0.55)]",
            "transition-[top,width,height] duration-slow ease-spring",
            powerState === "desktop"
              ? "pointer-events-auto"
              : "pointer-events-none",
            powerState === "off"
              ? "top-[50%] h-[32%] w-[22%]"
              : [
                  "top-[50.34%] h-[42.9%]  w-[29.5%]",
                  "sm:top-[50.46%] sm:h-[46.7%]  sm:w-[32.1%]",
                  "md:top-[50.62%] md:h-[51.8%]  md:w-[35.6%]",
                  "lg:top-[50.82%] lg:h-[53.2%]  lg:w-[40.5%]",
                ],
            screenVisible ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className="absolute inset-0 will-change-[clip-path]"
            style={
              powerState === "powering"
                ? {
                    animation:
                      "crt-screen-open 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 300ms both",
                  }
                : powerState === "powering-off"
                  ? {
                      animation:
                        "crt-screen-close 450ms cubic-bezier(0.215, 0.61, 0.355, 1) 200ms forwards",
                    }
                  : powerState === "desktop"
                    ? {
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                      }
                    : {
                        clipPath: "polygon(50% 50%, 50% 50%, 50% 51%, 50% 51%)",
                      }
            }
            onAnimationEnd={
              powerState === "powering-off"
                ? (e: React.AnimationEvent<HTMLDivElement>) => {
                    if (e.animationName === "crt-screen-close") {
                      handlePowerOffFinished();
                    }
                  }
                : undefined
            }
          >
            <MonitorDesktop
              activeApp={activeApp}
              isInteractive={powerState === "desktop"}
              selectedFolder={selectedFolder}
              onCloseApp={() => setActiveApp(null)}
              onOpenApp={setActiveApp}
              onSelectFolder={setSelectedFolder}
            />
          </div>
          <CrtPowerOn isPoweringOff={powerState === "powering-off"} />
        </div>
      </div>
    </main>
  );
}
