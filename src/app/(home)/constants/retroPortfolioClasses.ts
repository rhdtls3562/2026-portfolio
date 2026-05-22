/** 레트로 포트폴리오 씬의 배치와 상태별 Tailwind 클래스를 관리한다. */
import { type PowerState } from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

const ACTIVE_SCREEN_LAYOUT_CLASS = [
  "top-[50.34%] h-[48%] w-[33%]",
  "sm:top-[50.46%] sm:h-[52%] sm:w-[36%]",
  "md:top-[50.62%] md:h-[58%] md:w-[40%]",
  "lg:top-[50.82%] lg:h-[60%] lg:w-[46%]",
].join(" ");

const SCREEN_CONTENT_STATE_CLASS: Record<PowerState, string> = {
  off: "[clip-path:polygon(50%_50%,50%_50%,50%_51%,50%_51%)]",
  powering:
    "animate-[crt-screen-open_500ms_cubic-bezier(0.215,0.61,0.355,1)_300ms_both]",
  "powering-off":
    "animate-[crt-screen-close_450ms_cubic-bezier(0.215,0.61,0.355,1)_200ms_forwards]",
  desktop: "[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]",
};

export const SCENE_CONTAINER_CLASS =
  "absolute left-1/2 top-1/2 aspect-[3506/1972] w-[max(100vw,177.79vh)] -translate-x-1/2 -translate-y-1/2 overflow-hidden";

export const POWER_BUTTON_POSITION_CLASS = "left-[56.05%] top-[70.15%] w-[4%]";

export const getSceneZoomClass = (powerState: PowerState) =>
  cn(
    "absolute inset-0 origin-[50%_49%] will-change-transform transition-transform duration-slow ease-spring",
    powerState === "off"
      ? "scale-100"
      : "scale-[1.34] sm:scale-[1.46] md:scale-[1.62] lg:scale-[1.82]",
  );

export const getScreenFrameClass = (
  powerState: PowerState,
  isVisible: boolean,
) =>
  cn(
    "retro-screen absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border-8 border-black bg-black shadow-[0_0_24px_rgba(0,0,0,0.55)] transition-[top,width,height] duration-slow ease-spring",
    powerState === "desktop"
      ? "pointer-events-auto"
      : "pointer-events-none",
    powerState === "off"
      ? "top-[50%] h-[32%] w-[22%]"
      : ACTIVE_SCREEN_LAYOUT_CLASS,
    isVisible ? "opacity-100" : "opacity-0",
  );

export const getScreenContentClass = (powerState: PowerState) =>
  cn(
    "absolute inset-0 will-change-[clip-path]",
    SCREEN_CONTENT_STATE_CLASS[powerState],
  );
