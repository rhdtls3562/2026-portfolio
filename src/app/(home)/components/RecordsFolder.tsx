/** 경력 목록을 폴더 내부 리스트 형식으로 보여주는 컴포넌트. */
import { cn } from "@/utils/cn";
import { PROJECTS } from "@/app/(home)/constants/retroPortfolioData";

export default function RecordsFolder() {
  return (
    <div className="flex h-full flex-col gap-2 overflow-y-auto bg-[#f6f6f6] p-3">
      {PROJECTS.map((project, i) => (
        <div
          key={project.title}
          className={cn(
            "border bg-white p-2.5 transition-colors",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
            "border-[#cfcfcf] hover:border-win-blue hover:bg-white",
          )}
        >
          <div className="flex items-start justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <span className="font-retro-terminal text-2xs text-win-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-retro-display text-2xs uppercase tracking-trim text-win-ink">
                {project.title}
              </p>
            </div>
            <p className="font-retro-terminal shrink-0 text-3xs uppercase tracking-soft text-[#727272]">
              {project.period}
            </p>
          </div>
          <p className="mt-1.5 text-[0.72rem] leading-tight text-win-ink">
            {project.desc}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#d0d0d0] bg-[#f1f1f1] px-1.5 py-0.5 font-retro-terminal text-3xs uppercase tracking-ease text-win-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
