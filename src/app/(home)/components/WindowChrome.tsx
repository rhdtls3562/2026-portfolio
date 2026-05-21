/** 데스크톱 앱 창의 공통 크롬과 닫기 버튼을 감싸는 컴포넌트. */
import {
  type AppKey,
  WINDOW_TITLE,
} from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

type Props = {
  app: AppKey;
  children: React.ReactNode;
  onClose: () => void;
};

const TRAFFIC_LIGHT_CLASS =
  "size-2.5 rounded-full shadow-[inset_0_0.5px_0_rgba(255,255,255,0.4)]";

export default function WindowChrome({ app, children, onClose }: Props) {
  return (
    <section
      className={cn(
        "absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-sm border border-d-border bg-d-chrome shadow-[0_4px_20px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.15)]",
        app === "documents" && "h-4/5 w-11/12",
        app === "readme" && "h-4/5 w-11/12",
        app === "internet" && "h-3/5 w-4/5",
        app === "emails" && "h-2/3 w-4/5",
      )}
    >
      <div className="flex h-5.5 shrink-0 items-center justify-between border-b border-[#aaa49c] bg-linear-to-b from-d-chrome to-[#bfb9b1] px-1.5">
        <div className="flex items-center gap-0.75">
          <button
            type="button"
            onClick={onClose}
            aria-label={`${WINDOW_TITLE[app]} 닫기`}
            className={cn(
              TRAFFIC_LIGHT_CLASS,
              "bg-[#ff5f57] transition-[filter] hover:brightness-90",
            )}
          />
          <div className={cn(TRAFFIC_LIGHT_CLASS, "bg-[#febc2e]")} />
          <div className={cn(TRAFFIC_LIGHT_CLASS, "bg-[#28c840]")} />
        </div>
        <span className="font-retro-terminal select-none text-2xs uppercase tracking-widest text-d-text/75">
          {WINDOW_TITLE[app]}
        </span>
        <div className="w-10" />
      </div>
      <div className="flex-1 overflow-hidden bg-d-surface">{children}</div>
    </section>
  );
}
