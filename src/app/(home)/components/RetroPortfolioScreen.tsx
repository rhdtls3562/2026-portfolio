/** 모니터 스크린 영역의 상태별 연출과 데스크톱 UI를 렌더링하는 컴포넌트. */
"use client";

import { type AnimationEvent } from "react";
import CrtPowerOn from "@/app/(home)/components/CrtPowerOn";
import MonitorDesktop from "@/app/(home)/components/MonitorDesktop";
import {
  type AppKey,
  type FolderKey,
  type PowerState,
} from "@/app/(home)/constants/retroPortfolioData";
import {
  getScreenContentClass,
  getScreenFrameClass,
} from "@/app/(home)/constants/retroPortfolioClasses";

type Props = {
  activeApp: AppKey | null;
  powerState: PowerState;
  screenVisible: boolean;
  selectedFolder: FolderKey;
  onCloseApp: () => void;
  onOpenApp: (app: AppKey) => void;
  onPowerOffFinished: () => void;
  onSelectFolder: (folder: FolderKey) => void;
};

export default function RetroPortfolioScreen({
  activeApp,
  powerState,
  screenVisible,
  selectedFolder,
  onCloseApp,
  onOpenApp,
  onPowerOffFinished,
  onSelectFolder,
}: Props) {
  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (powerState === "powering-off" && event.animationName === "crt-screen-close") {
      onPowerOffFinished();
    }
  };

  return (
    <div className={getScreenFrameClass(powerState, screenVisible)}>
      <div
        className={getScreenContentClass(powerState)}
        onAnimationEnd={powerState === "powering-off" ? handleAnimationEnd : undefined}
      >
        <MonitorDesktop
          activeApp={activeApp}
          isInteractive={powerState === "desktop"}
          selectedFolder={selectedFolder}
          onCloseApp={onCloseApp}
          onOpenApp={onOpenApp}
          onSelectFolder={onSelectFolder}
        />
      </div>
      <CrtPowerOn isPoweringOff={powerState === "powering-off"} />
    </div>
  );
}
