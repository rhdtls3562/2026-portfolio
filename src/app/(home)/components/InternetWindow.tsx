/** 소셜 창 - 링크와 온라인 활동 흐름을 보여주는 컬러풀 보드. */
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { SOCIAL_PRESENCE_ITEMS } from "@/app/(home)/constants/WINDOW_CONTENT";
import { LINKS } from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

const TICKER_ITEMS = [
  "SOCIAL PRESENCE",
  "GITHUB",
  "PORTFOLIO",
  "VELOG",
  "CONTACT",
  "PROCESS NOTES",
];

const LINK_TONES = [
  "border-[#f5d5e3] bg-[#fff5f9] text-[#c2185b]",
  "border-[#d8ecda] bg-[#f3fbf4] text-[#2e7d32]",
  "border-[#ddd0f4] bg-[#f7f3fd] text-[#5e35b1]",
  "border-[#fff0c8] bg-[#fffaf0] text-[#f57f17]",
];

export default function InternetWindow() {
  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="Social" />

      <section className="plm-grid-base relative overflow-hidden px-12 py-12">
        <span className="decor-float absolute right-12 top-8 text-[2rem] text-purple-400/25">★</span>
        <span className="decor-float-slow decor-delay-2 absolute right-10 top-18 font-mono text-[0.95rem] font-black text-purple-400/25">
          {"{ }"}
        </span>

        <span className="inline-flex rounded-full border border-purple-300 bg-[#f5efff] px-4 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#6d48c3]">
          Social
        </span>

        <h2 className="mt-5 text-[2.55rem] font-black leading-[1.02] tracking-[-0.05em]">
          Places where
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">I share my work</span>
            <span className="plm-highlight-lavender absolute inset-x-0 bottom-1 -z-0 h-4 rounded-sm" />
          </span>
        </h2>

        <p className="mt-5 max-w-[34rem] text-[0.82rem] leading-[1.8] text-[#666]">
          코드를 쌓는 곳, 결과물을 보여주는 곳, 과정과 회고를 남기는 곳을
          카테고리대로 분리해두었습니다. 지금 창에서는 소셜과 외부 채널만
          모아 바로 이동할 수 있게 정리했습니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="lavender" />

      <section className="px-12 py-10">
        <p className="mb-5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#b6b6b6]">
          Link board
        </p>
        <div className="grid grid-cols-2 gap-4">
          {LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "rounded-[24px] border px-6 py-5 transition-transform hover:-translate-y-0.5",
                LINK_TONES[index % LINK_TONES.length],
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.92rem] font-black">{link.label}</p>
                  <p className="mt-2 text-[0.73rem] leading-[1.65] text-[#666]">{link.note}</p>
                </div>
                <span className="text-base">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="plm-grid-dense px-12 py-10">
        <div className="grid grid-cols-3 gap-4">
          {SOCIAL_PRESENCE_ITEMS.map((item) => (
            <article key={item.title} className={cn("rounded-[24px] border px-5 py-6", item.cardClassName)}>
              <p className="text-[0.82rem] font-black text-black">{item.title}</p>
              <p className="mt-3 text-[0.72rem] leading-[1.7] text-[#666]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
