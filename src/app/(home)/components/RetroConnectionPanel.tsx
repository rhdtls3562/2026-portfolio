/** 레퍼런스의 로그인 창 비율을 따라 회색 패널과 입력 줄 구성을 제공한다. */
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
    <div className="flex h-full items-center justify-center bg-win-surface-light p-4">
      <div className="flex w-full max-w-[700px] flex-col bg-win-surface px-[50px] py-[30px] shadow-[0_0_10px_rgba(0,0,0,0.25)]">
        <div className="mb-5 flex h-[92px] items-center justify-center border-2 border-white bg-win-blue px-5">
          <div className="text-center">
            <p className="font-retro-terminal text-3xs uppercase tracking-[0.24em] text-white/70">
              system access
            </p>
            <p className="mt-1 font-retro-display text-[1.7rem] uppercase tracking-[0.08em] text-white">
              {title} <span className="text-win-accent">{accentTitle}</span>
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {fields.map((field) => (
            <div key={field.label}>
              <p className="mb-1.5 font-retro-display text-[1rem] uppercase tracking-[0.04em] text-win-accent-deep">
                {field.label}
              </p>
              <div className="border-2 border-white bg-win-surface-mid px-[15px] py-2 font-retro-terminal text-base font-light text-white shadow-[0_0_10px_rgba(0,0,0,0.25)]">
                {field.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-x-[25px] gap-y-4">
          {children}
        </div>

        {footer ? (
          <p className="mt-5 text-center font-retro-terminal text-3xs uppercase tracking-[0.12em] text-win-surface-dark">
            {footer}
          </p>
        ) : null}
      </div>
    </div>
  );
}
