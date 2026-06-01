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

      <section className="plm-grid-base relative overflow-hidden px-[3.3vw] py-[3.3vw]">
        <span className="decor-float absolute right-15 top-10 text-[2.8vw] text-black/15">
          ◈
        </span>
        <span className="decor-float-slow decor-delay-1 absolute right-30 top-30 font-mono text-[3.3vw] font-black text-yellow-500/30">
          {"[ ]"}
        </span>

        <span className="inline-flex rounded-full border border-yellow-300 bg-[#fff9eb] px-[1.1vw] py-[0.42vw] text-[0.6rem] font-black uppercase tracking-broad text-[#d58b16]">
          Portfolio
        </span>

        <h2 className="mt-[1.4vw] text-[2.9vw] font-black leading-none tracking-snug">
          Project{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Archive</span>
            <span className="plm-highlight-butter absolute inset-x-0 bottom-1 z-0 h-[1.1vw] rounded-sm" />
          </span>
        </h2>

        <div className="mt-[1.4vw] flex flex-wrap gap-[0.7vw]">
          {SUMMARY_ITEMS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#ece7cf] bg-white/80 px-[1vw] py-[0.42vw] text-[0.62rem] font-black uppercase tracking-airy text-[#7d7046]"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-[1.4vw] max-w-[44vw] text-[0.91vw] leading-read-lg text-[#676767]">
          실무 프로젝트와 부트캠프 팀 프로젝트를 함께 모아두었습니다.
          <br />
          실무 경험부터 협업형 웹 서비스 구현 경험까지 한눈에 보이도록 프로젝트
          중심으로 정리한 섹션입니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="butter" />

      <section className="px-[3.3vw] py-[3.3vw]">
        <div className="mb-[2.2vw] flex items-end justify-between gap-[1.7vw]">
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-vast text-[#b5b5b5]">
              Project overview
            </p>
            <p className="mt-[0.55vw] text-[0.89vw] leading-read-md text-[#717171]">
              실무 중심 작업과 부트캠프 팀 프로젝트가 함께 보이도록 순서를 다시
              정리했습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[1.7vw]">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
