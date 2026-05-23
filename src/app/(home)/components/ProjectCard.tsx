/** 프로젝트 카드 한 장을 렌더링한다. */
import {
  type Project,
  type ProjectTone,
} from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

const PROJECT_TONES: Record<ProjectTone, string> = {
  pink: "bg-linear-to-br from-[#fce4ec] via-[#f8bbd9] to-[#f48fb1]",
  butter: "bg-linear-to-br from-[#fff8e1] via-[#ffecb3] to-[#ffd54f]",
  mint: "bg-linear-to-br from-[#e8f5e9] via-[#c8e6c9] to-[#81c784]",
  lavender: "bg-linear-to-br from-[#ede7f6] via-[#d1c4e9] to-[#9575cd]",
  blue: "bg-linear-to-br from-[#e3f2fd] via-[#bbdefb] to-[#64b5f6]",
  cloud: "bg-linear-to-br from-[#fafafa] via-[#e0e0e0] to-[#bdbdbd]",
};

const TAG_TONES = [
  "bg-[#fff1f6] text-[#c2185b]",
  "bg-[#edf8ef] text-[#2e7d32]",
  "bg-[#f2ecfb] text-[#5e35b1]",
  "bg-[#fff8e6] text-[#f57f17]",
  "bg-[#eef6ff] text-[#1565c0]",
];

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#ececec] bg-white p-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div
        className={cn(
          "relative h-44 overflow-hidden rounded-[22px]",
          PROJECT_TONES[project.tone],
        )}
      >
        <span className="absolute left-5 top-4 font-mono text-[1.7rem] font-black text-black/10">
          {"</>"}
        </span>
        <span className="absolute bottom-4 right-5 font-mono text-[0.52rem] font-black uppercase tracking-[0.18em] text-black/20">
          {project.slug}
        </span>
      </div>

      <div className="px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[1.08rem] font-black leading-tight tracking-[-0.02em] text-black">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-[0.55rem] tracking-[0.18em] text-[#b3b3b3]">
              {project.period}
            </p>
          </div>
          <span className="rounded-full border border-[#ececec] bg-[#fafafa] px-3 py-1 font-mono text-[0.54rem] text-[#8c8c8c]">
            {project.period.split(" – ")[1]}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 text-[0.58rem] font-bold",
                TAG_TONES[index % TAG_TONES.length],
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-[0.76rem] leading-[1.7] text-[#636363]">
          {project.desc}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#f1f1f1] pt-4">
          <span className="rounded-full border border-[#f2dce7] bg-[#fff6fa] px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.12em] text-[#bf5d89]">
            Project record
          </span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.54rem] uppercase tracking-[0.18em] text-[#8c8c8c] transition-colors hover:text-black"
            >
              github ↗
            </a>
          ) : (
            <span className="font-mono text-[0.54rem] uppercase tracking-[0.18em] text-[#b3b3b3]">
              archive
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
