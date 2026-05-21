/** 메인 배경 장면과 전원 버튼을 렌더링하는 레트로 포트폴리오 배경 컴포넌트. */
"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { type PowerState } from "@/app/(home)/components/retro-constants";
import {
  POWER_BUTTON_POSITION_CLASS,
  SCENE_CONTAINER_CLASS,
  getSceneZoomClass,
} from "@/app/(home)/components/retroPortfolioClasses";
import { cn } from "@/utils/cn";

type Props = {
  buttonLit: boolean;
  children: ReactNode;
  powerState: PowerState;
  onTogglePower: () => void;
};

export default function RetroPortfolioBackground({
  buttonLit,
  children,
  powerState,
  onTogglePower,
}: Props) {
  return (
    <div className={SCENE_CONTAINER_CLASS}>
      <div className={getSceneZoomClass(powerState)}>
        <Image
          src="/asset/img/img_main.jpg"
          alt="레트로 컴퓨터 책상 장면"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(0,0,0,0.18)_100%)]" />
        <button
          type="button"
          onClick={onTogglePower}
          aria-label={powerState === "off" ? "컴퓨터 전원 켜기" : "컴퓨터 전원 끄기"}
          className={cn(
            "absolute z-20 aspect-7/3 translate-x-[-35%] translate-y-[-65%] transition-transform duration-300 hover:scale-105",
            POWER_BUTTON_POSITION_CLASS,
          )}
        >
          <Image
            src={buttonLit ? "/asset/img/img_button_on.jpg" : "/asset/img/img_button_off.jpg"}
            alt=""
            fill
            loading="eager"
            sizes="4vw"
            className="rounded object-cover"
          />
        </button>
      </div>
      {children}
    </div>
  );
}
