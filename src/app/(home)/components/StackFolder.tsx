/** 기술 스택과 학습 이력을 폴더 타일 형태로 보여주는 컴포넌트. */
import { STACKS } from "@/app/(home)/constants/retroPortfolioData";

export default function StackFolder() {
  return (
    <div className="grid h-full grid-cols-2 content-start gap-2 overflow-y-auto bg-[#f6f6f6] p-3">
      {STACKS.map(({ category, items }) => (
        <div
          key={category}
          className="border border-[#cfcfcf] bg-white p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
        >
          <p className="font-retro-terminal text-2xs uppercase tracking-roomy text-win-blue">
            {category}
          </p>
          <div className="mt-1.5 flex flex-col gap-1">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-1">
                <span className="size-1 shrink-0 rounded-full bg-win-accent" />
                <span className="text-[0.72rem] text-win-ink">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
