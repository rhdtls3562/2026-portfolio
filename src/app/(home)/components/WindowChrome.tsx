/** 데스크톱 앱 창의 공통 크롬과 닫기 버튼을 감싸는 컴포넌트. */
import {
  type AppKey,
  WINDOW_TITLE,
} from "@/app/(home)/constants/retroPortfolioData";
import { WINDOW_SIZE_CLASS } from "@/app/(home)/constants/retroWindowData";
import { cn } from "@/utils/cn";

type Props = {
  app: AppKey;
  children: React.ReactNode;
  onClose: () => void;
};

export default function WindowChrome({ app, children, onClose }: Props) {
  return (
    <section
      className={cn(
        "absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 overflow-hidden",
        "border-2 border-white bg-win-surface shadow-[0_0_10px_rgba(0,0,0,0.25)]",
        WINDOW_SIZE_CLASS[app],
      )}
    >
      <div className="flex h-full flex-col overflow-hidden border border-white/70 bg-win-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <div className="flex h-10 shrink-0 items-stretch bg-linear-to-b from-win-blue to-win-blue-deep">
          <div className="flex flex-1 items-center px-4">
            <span className="font-retro-terminal select-none text-[0.875rem] tracking-[0.01em] text-white">
              {WINDOW_TITLE[app]}
            </span>
          </div>
          <div className="w-10 border-l-2 border-white bg-win-surface-mid">
            <button
              type="button"
              onClick={onClose}
              aria-label={`${WINDOW_TITLE[app]} 닫기`}
              className="flex size-full items-center justify-center font-retro-terminal text-sm leading-none text-white transition-colors hover:bg-win-accent-deep"
            >
              x
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden bg-win-surface">
          <div className="h-full overflow-hidden border border-white/70 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
