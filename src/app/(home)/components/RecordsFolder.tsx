/** 경력 목록을 폴더 내부 리스트 형식으로 보여주는 컴포넌트. */
import { cn } from "@/utils/cn";
import { PROJECTS } from "@/app/(home)/constants/retroPortfolioData";

export default function RecordsFolder() {
  return (
    <div className="flex h-full flex-col gap-1.5 overflow-y-auto p-2">
      {PROJECTS.map((project, i) => (
        <div
          key={project.title}
          className={cn(
            "border bg-white/55 p-2 transition-colors",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
            "border-d-border hover:border-d-warm hover:bg-white/75",
          )}
        >
          <div className="flex items-start justify-between gap-1">
            <div className="flex items-center gap-1.5">
              <span className="font-retro-terminal text-2xs text-d-warm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-retro-display text-2xs uppercase tracking-tight text-d-ink">
                {project.title}
              </p>
            </div>
            <p className="font-retro-terminal shrink-0 text-3xs text-d-muted">
              {project.period}
            </p>
          </div>
          <p className="font-retro-terminal mt-1 text-2xs leading-tight text-d-text">
            {project.desc}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-retro-terminal border border-d-border bg-d-cream/80 px-1 py-0.5 text-3xs text-d-text"
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
