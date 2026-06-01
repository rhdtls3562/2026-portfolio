/** 로그인 패널 느낌의 레트로 정보 창 레이아웃을 제공하는 컴포넌트. */
import { cn } from "@/utils/cn";
import type { WindowPanelField } from "@/app/(home)/constants/retroWindowData";

type Props = {
  accentTitle: string;
  children: React.ReactNode;
  fields: WindowPanelField[];
  footer?: string;
  title: string;
};

export default function RetroConnectionPanel({
  accentTitle,
  children,
  fields,
  footer,
  title,
}: Props) {
  return (
    <div className="flex h-full items-center justify-center bg-win-surface-light p-5">
      <div className="w-full max-w-[25rem] border-2 border-white bg-win-surface px-8 py-7 shadow-[0_0_12px_rgba(0,0,0,0.15)]">
        <div className="mb-5 flex items-center justify-center bg-win-blue px-4 py-3 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.15)]">
          <span className="font-retro-display text-xl uppercase tracking-soft text-white">
            {title} <span className="text-win-accent">{accentTitle}</span>
          </span>
        </div>

        <div className="space-y-3.5">
          {fields.map((field) => (
            <div key={field.label}>
              <p className="mb-1 font-retro-display text-2xs uppercase tracking-widest text-win-accent-deep">
                {field.label}
              </p>
              <div
                className={cn(
                  "min-h-9 border-x-2 border-b-2 border-t-2 px-3 py-2",
                  "border-l-win-surface-dark border-t-win-surface-dark border-r-white border-b-white",
                  "bg-win-surface-light font-retro-terminal text-2xs text-win-ink",
                )}
              >
                {field.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">{children}</div>

        {footer ? (
          <p className="mt-4 text-center font-retro-terminal text-3xs uppercase tracking-widest text-[#6f6f6f]">
            {footer}
          </p>
        ) : null}
      </div>
    </div>
  );
}
