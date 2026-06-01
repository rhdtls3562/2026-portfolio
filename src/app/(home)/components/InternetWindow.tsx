/** 스킬 창 - 기술 스택과 작업 강점을 보여주는 컬러풀 보드. */
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { SKILL_HIGHLIGHT_ITEMS } from "@/app/(home)/constants/WINDOW_CONTENT";
import { STACKS } from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

const TICKER_ITEMS = [
  "SKILL STACK",
  "TYPESCRIPT",
  "NEXT.JS",
  "TAILWIND CSS",
  "UI/UX",
  "WORKFLOW",
];

const STACK_TONES = [
  "border-[#f5d5e3] bg-[#fff5f9] text-[#c2185b]",
  "border-[#d8ecda] bg-[#f3fbf4] text-[#2e7d32]",
  "border-[#ddd0f4] bg-[#f7f3fd] text-[#5e35b1]",
  "border-[#fff0c8] bg-[#fffaf0] text-[#f57f17]",
  "border-[#d6e8fb] bg-[#f3f9ff] text-[#1565c0]",
  "border-[#e7e7e7] bg-[#fafafa] text-[#666]",
];

export default function InternetWindow() {
  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="Skill" />

      <section className="plm-grid-base relative overflow-hidden px-[3.3vw] py-[3.3vw]">
        <span className="decor-float absolute right-20 top-8 text-[2.2vw] text-black/10">
          ★
        </span>
        <span className="decor-float-slow decor-delay-2 absolute right-30 top-25 font-mono text-[3.3vw] font-black text-purple-400/25">
          {"{ }"}
        </span>

        <span className="inline-flex rounded-full border border-purple-300 bg-[#f5efff] px-[1.1vw] py-[0.42vw] text-[0.6rem] font-black uppercase tracking-broad text-[#6d48c3]">
          Skill
        </span>

        <h2 className="mt-[1.4vw] text-[2.8vw] font-black leading-flat tracking-snug">
          Skills I use
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">in real projects</span>
            <span className="plm-highlight-lavender absolute inset-x-0 bottom-1 z-0 h-[1.1vw] rounded-sm" />
          </span>
        </h2>

        <p className="mt-[1.4vw] max-w-[38vw] text-[0.91vw] leading-read-lg text-[#666]">
          실무와 프로젝트에서 반복해서 사용한 기술을 카테고리별로 나눠
          정리했습니다.
          <br />
          구현 기술뿐 아니라 퍼블리싱, UI 구조화, 협업 방식까지 함께 보이도록
          구성한 창입니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="lavender" />

      <section className="px-[3.3vw] py-[2.8vw]">
        <p className="mb-[1.4vw] text-[0.62rem] font-black uppercase tracking-vast text-[#b6b6b6]">
          Stack board
        </p>
        <div className="grid grid-cols-2 gap-[1.1vw]">
          {STACKS.map((stack, index) => (
            <article
              key={stack.category}
              className={cn(
                "rounded-[1.7vw] border px-[1.7vw] py-[1.4vw]",
                STACK_TONES[index % STACK_TONES.length],
              )}
            >
              <div className="flex items-start justify-between gap-[1.1vw]">
                <div>
                  <p className="text-[1vw] font-black">{stack.category}</p>
                  <p className="mt-[0.55vw] text-[0.81vw] leading-read-sm text-[#666]">
                    {stack.items.join(" · ")}
                  </p>
                </div>
                <span className="text-[1.1vw] opacity-35">✦</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="plm-grid-dense px-[3.3vw] py-[2.8vw]">
        <div className="grid grid-cols-3 gap-[1.1vw]">
          {SKILL_HIGHLIGHT_ITEMS.map((item) => (
            <article
              key={item.title}
              className={cn("rounded-[1.7vw] border px-[1.4vw] py-[1.7vw]", item.cardClassName)}
            >
              <p className="text-[0.91vw] font-black text-black">
                {item.title}
              </p>
              <p className="mt-[0.83vw] text-[0.8vw] leading-read text-[#666]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
