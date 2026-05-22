/** 프로젝트 창 - 여백과 섹션 간격을 넉넉히 둔 컬러풀 아카이브 레이아웃. */
import ProjectCard from "@/app/(home)/components/ProjectCard";
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { PROJECTS } from "@/app/(home)/constants/retroPortfolioData";

const TICKER_ITEMS = [
  "MY PROJECTS",
  "6 WORKS",
  "2019 – 2025",
  "DESIGN × CODE",
  "UI/UX",
  "FRONTEND",
  "WEB PUBLISHING",
];

const SUMMARY_ITEMS = ["6 works", "2019 – 2025", "Brand design to publishing"];

export default function DocumentsWindow() {
  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="Projects" />

      <section className="plm-grid-base relative overflow-hidden px-12 py-12">
        <span className="decor-float absolute right-12 top-7 text-[2rem] text-black/15">
          ◈
        </span>
        <span className="decor-float-slow decor-delay-1 absolute right-24 top-18 font-mono text-[1rem] font-black text-yellow-500/30">
          {"[ ]"}
        </span>

        <span className="inline-flex rounded-full border border-yellow-300 bg-[#fff9eb] px-4 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#d58b16]">
          Portfolio
        </span>

        <h2 className="mt-5 text-[2.6rem] font-black leading-none tracking-[-0.05em]">
          My{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Projects</span>
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

        <p className="mt-5 max-w-[35rem] text-[0.82rem] leading-[1.8] text-[#676767]">
          패션, 뷰티, 의료, 반려동물처럼 결이 다른 브랜드를 맡으며 디자인과
          퍼블리싱을 함께 다뤘습니다. 화면 위 결과물과 실무 기록이 한눈에
          보이도록 프로젝트 중심으로 정리한 섹션입니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="butter" />

      <section className="px-12 py-12">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#b5b5b5]">
              Selected records
            </p>
            <p className="mt-2 text-[0.8rem] leading-[1.75] text-[#717171]">
              회사별 역할과 성격이 다르게 보이도록 카드 간 여백과 정보 구조를
              조금 더 넉넉하게 정리했습니다.
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
