/** 데스크톱 앱 창의 공통 크롬과 닫기 버튼을 감싸는 컴포넌트. */
import { type AppKey, WINDOW_TITLE } from "@/app/(home)/components/retro-constants";
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
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
        "flex flex-col overflow-hidden rounded-sm",
        "border border-d-border bg-d-chrome",
        "shadow-[0_4px_20px_rgba(0,0,0,0.25),0_1px_3px_rgba(0,0,0,0.15)]",
        app === "documents" && "h-4/5 w-11/12",
        app === "readme"    && "h-4/5 w-11/12",
        app === "internet"  && "h-3/5 w-4/5",
        app === "emails"    && "h-2/3 w-4/5",
      )}
    >
      {/* 타이틀 바 */}
      <div
        className="flex h-5.5 shrink-0 items-center justify-between px-1.5"
        style={{
          background: "linear-gradient(180deg, #d4cfc8 0%, #bfb9b1 100%)",
          borderBottom: "1px solid #aaa49c",
        }}
      >
        <div className="flex items-center gap-0.75">
          <button
            type="button"
            onClick={onClose}
            aria-label={`${WINDOW_TITLE[app]} 닫기`}
            className="size-2.5 rounded-full bg-[#ff5f57] hover:brightness-90 transition-[filter]"
            style={{ boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.4)" }}
          />
          <div
            className="size-2.5 rounded-full bg-[#febc2e]"
            style={{ boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.4)" }}
          />
          <div
            className="size-2.5 rounded-full bg-[#28c840]"
            style={{ boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.4)" }}
          />
        </div>
        <span className="font-retro-terminal select-none text-2xs uppercase tracking-widest text-d-text/75">
          {WINDOW_TITLE[app]}
        </span>
        <div className="w-10" />
      </div>

      {/* 컨텐츠 영역 */}
      <div className="flex-1 overflow-hidden bg-d-surface">
        {children}
      </div>
    </section>
  );
}
