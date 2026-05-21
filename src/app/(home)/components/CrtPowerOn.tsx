/** 전원 종료 시 CRT 플래시와 중앙 빔 연출을 그리는 오버레이 컴포넌트. */
import { cn } from "@/utils/cn";

type Props = {
  isPoweringOff: boolean;
};

export default function CrtPowerOn({ isPoweringOff }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-50">
      <div
        className={cn(
          "absolute inset-0 bg-white opacity-0",
          isPoweringOff &&
            "animate-[crt-screen-flash_400ms_cubic-bezier(0.55,0.055,0.675,0.19)_both]",
        )}
      />
      <div className="absolute inset-x-2 inset-y-0 flex items-center">
        <div
          className={cn(
            "h-1.5 w-full origin-center bg-white opacity-0 shadow-[0_0_10px_3px_rgba(255,255,255,0.92)]",
            isPoweringOff &&
              "animate-[crt-beam-collapse_500ms_cubic-bezier(0.215,0.61,0.355,1)_300ms_both]",
          )}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn(
            "size-7 rounded-full bg-white opacity-0 blur-sm",
            isPoweringOff &&
              "animate-[crt-center-glow_560ms_cubic-bezier(0.645,0.045,0.355,1)_250ms_both]",
          )}
        />
      </div>
    </div>
  );
}
