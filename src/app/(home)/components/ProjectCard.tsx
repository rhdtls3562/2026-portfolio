/** 프로젝트 카드 한 장을 렌더링한다. */
import Image from "next/image";
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
    <article className="overflow-hidden rounded-[1.9vw] border border-[#ececec] bg-white p-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.06)]">
      <div
        className={cn(
          "relative aspect-video overflow-hidden rounded-[1.5vw]",
          PROJECT_TONES[project.tone],
        )}
      >
        {project.imageSrc ? (
          <>
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? `${project.title} 프로젝트 이미지`}
              fill
              sizes={project.imageSizes ?? "(max-width: 1024px) 50vw, 320px"}
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/18 via-transparent to-white/10"
            />
          </>
        ) : null}
        <span className="absolute left-5 top-4 font-mono text-[1.9vw] font-black text-black/10">
          {"</>"}
        </span>
        <span className="absolute bottom-4 right-5 font-mono text-[0.52rem] font-black uppercase tracking-spaced text-black/20">
          {project.slug}
        </span>
      </div>

      <div className="px-[0.83vw] pb-[0.83vw] pt-[1.4vw]">
        <div className="flex items-start justify-between gap-[0.83vw]">
          <div>
            <h3 className="text-[1.2vw] font-black leading-tight tracking-snug text-black">
              {project.title}
            </h3>
            <p className="mt-[0.28vw] font-mono text-[0.55rem] tracking-spaced text-[#b3b3b3]">
              {project.period}
            </p>
          </div>
          <span className="rounded-full border border-[#ececec] bg-[#fafafa] px-[0.83vw] py-[0.28vw] font-mono text-[0.54rem] text-[#8c8c8c]">
            {project.period.split(" – ")[1]}
          </span>
        </div>

        <div className="mt-[1.1vw] flex flex-wrap gap-[0.55vw]">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-[0.83vw] py-[0.28vw] text-[0.58rem] font-bold",
                TAG_TONES[index % TAG_TONES.length],
              )}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-[1.1vw] text-[0.84vw] leading-read text-[#636363]">
          {project.desc}
        </p>

        <div className="mt-[1.4vw] flex items-center justify-between border-t border-[#f1f1f1] pt-[1.1vw]">
          <span className="rounded-full border border-[#f2dce7] bg-[#fff6fa] px-[0.83vw] py-[0.28vw] text-[0.58rem] font-black uppercase tracking-roomy text-[#bf5d89]">
            Project record
          </span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[0.54rem] uppercase tracking-spaced text-[#8c8c8c] transition-colors hover:text-black"
            >
              github ↗
            </a>
          ) : (
            <span className="font-mono text-[0.54rem] uppercase tracking-spaced text-[#b3b3b3]">
              archive
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
