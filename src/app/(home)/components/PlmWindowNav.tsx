/** 컬러풀 PLM 스타일 창 상단 네비게이션. */
import { cn } from "@/utils/cn";

const NAV_ITEMS = ["About ME", "Project", "Skill", "Contact"] as const;

export type PlmWindowTab = (typeof NAV_ITEMS)[number];

type Props = {
  active: PlmWindowTab;
};

export default function PlmWindowNav({ active }: Props) {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-end border-b border-[#ebebeb] bg-white px-10 py-3">
      <div className="flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <span
            key={item}
            className={cn(
              "cursor-default text-[0.72rem] font-medium transition-colors",
              item === active ? "font-black text-black" : "text-[#9b9b9b]",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
}
