/** 프로젝트 창 - 여백과 섹션 간격을 넉넉히 둔 컬러풀 아카이브 레이아웃. */
import ProjectCard from "@/app/(home)/components/ProjectCard";
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { PROJECTS } from "@/app/(home)/constants/retroPortfolioData";

const PROJECT_COUNT_LABEL = `${PROJECTS.length} WORKS`;

const TICKER_ITEMS = [
  "PROJECT ARCHIVE",
  PROJECT_COUNT_LABEL,
  "2019 – 2026",
  "DESIGN × CODE",
  "UI/UX",
  "FRONTEND",
  "WEB PUBLISHING",
];

const SUMMARY_ITEMS = [
  `${PROJECTS.length} works`,
  "2019 – 2026",
  "Brand design to publishing",
];

export default function DocumentsWindow() {
  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="Project" />

      <section className="plm-grid-base relative overflow-hidden px-12 py-12">
        <span className="decor-float absolute right-15 top-10 text-[2.5rem] text-black/15">
          ◈
        </span>
        <span className="decor-float-slow decor-delay-1 absolute right-30 top-30 font-mono text-[3rem] font-black text-yellow-500/30">
          {"[ ]"}
        </span>

        <span className="inline-flex rounded-full border border-yellow-300 bg-[#fff9eb] px-4 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d58b16]">
          Portfolio
        </span>

        <h2 className="mt-5 text-[2.6rem] font-black leading-none tracking-[-0.02em]">
          Project{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Archive</span>
            <span className="plm-highlight-butter absolute inset-x-0 bottom-1 z-0 h-4 rounded-sm" />
          </span>
        </h2>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {SUMMARY_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#ece7cf] bg-white/80 px-3.5 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#7d7046]"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-5 max-w-[40rem] text-[0.82rem] leading-[1.8] text-[#676767]">
          실무 프로젝트와 부트캠프 팀 프로젝트를 함께 모아두었습니다. 패션,
          뷰티, 의료, 반려동물 분야 실무 경험부터 협업형 웹 서비스 구현 경험까지
          한눈에 보이도록 프로젝트 중심으로 정리한 섹션입니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="butter" />

      <section className="px-12 py-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#b5b5b5]">
              Project overview
            </p>
            <p className="mt-2 text-[0.8rem] leading-[1.75] text-[#717171]">
              실무 중심 작업과 부트캠프 팀 프로젝트가 함께 보이도록 순서를 다시
              정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
