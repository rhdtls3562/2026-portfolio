/** 연락 창 - 메일 액션과 협업 주제를 정돈한 컬러풀 연락 페이지. */
"use client";

import { useState } from "react";
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { CONTACT_TOPIC_ITEMS } from "@/app/(home)/constants/WINDOW_CONTENT";
import { EMAIL } from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

const TICKER_ITEMS = [
  "LET'S WORK TOGETHER",
  "OPEN TO OPPORTUNITIES",
  "KWON SAEROM",
  "FRONTEND DEVELOPER",
  "CONTACT ME",
  "DESIGN × CODE",
];

export default function EmailsWindow() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="Contact" />

      <section className="plm-grid-base relative overflow-hidden px-12 py-12">
        <span className="decor-float absolute right-12 top-8 text-[2.5rem] text-black/10">✉</span>
        <span className="decor-float-slow decor-delay-1 absolute right-28 top-20 font-mono text-[1rem] font-black text-blue-400/30">
          {"@"}
        </span>

        <span className="inline-flex rounded-full border border-blue-300 bg-[#eef6ff] px-4 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#1565c0]">
          Contact
        </span>

        <h2 className="mt-5 text-[2.55rem] font-black leading-[1.04] tracking-[-0.05em]">
          Let&apos;s build
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">something together</span>
            <span className="plm-highlight-blue absolute inset-x-0 bottom-1 -z-0 h-4 rounded-sm" />
          </span>
        </h2>

        <p className="mt-5 max-w-[31rem] text-[0.82rem] leading-[1.8] text-[#666]">
          새로운 프로젝트, 리디자인, 퍼블리싱 협업처럼 구체적인 논의가 필요한
          상황이라면 메일이 가장 빠릅니다. 연락 수단과 협업 포인트만 간결하게
          모아둔 창입니다.
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="blue" />

      <section className="px-12 py-10">
        <div className="rounded-[28px] border border-[#cfe3fb] bg-[#eef6ff] px-7 py-6">
          <div className="flex items-center justify-between gap-4 border-b border-[#dceafd] pb-4">
            <div className="flex items-center gap-3">
              <span className="size-2.5 rounded-full bg-green-400" />
              <span className="font-mono text-[0.72rem] font-bold tracking-[0.18em] text-[#1565c0]">
                {EMAIL}
              </span>
            </div>
            <span className="rounded-full border border-[#cde2fb] bg-white px-3 py-1 text-[0.55rem] font-black uppercase tracking-[0.14em] text-[#1565c0]">
              active
            </span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Let's build something together`}
              className="rounded-full border border-[#cde2fb] bg-white px-5 py-3.5 text-center text-[0.68rem] font-black uppercase tracking-[0.15em] text-[#1565c0] transition-colors hover:bg-[#dfefff]"
            >
              Send Mail ↗
            </a>
            <button
              type="button"
              onClick={handleCopyAddress}
              className={cn(
                "rounded-full border px-5 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.15em] transition-colors",
                isCopied
                  ? "border-[#c8e6c9] bg-[#eef9f0] text-[#2e7d32]"
                  : "border-[#cde2fb] bg-white text-[#1565c0] hover:bg-[#dfefff]",
              )}
            >
              {isCopied ? "Copied ✓" : "Copy Mail"}
            </button>
          </div>
        </div>
      </section>

      <section className="plm-grid-dense px-12 py-10">
        <div className="grid grid-cols-3 gap-4">
          {CONTACT_TOPIC_ITEMS.map((item) => (
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
