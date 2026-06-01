/** 연락 창 - 메일 액션과 협업 주제를 정돈한 컬러풀 연락 페이지. */
"use client";

import { useState } from "react";
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import { CONTACT_TOPIC_ITEMS } from "@/app/(home)/constants/WINDOW_CONTENT";
import { EMAIL } from "@/app/(home)/constants/retroPortfolioData";
import { getNaverMailComposeHref } from "@/utils/naverMail";
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
  const naverMailHref = getNaverMailComposeHref({
    subject: "Let's build something together",
    to: EMAIL,
  });

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

      <section className="plm-grid-base relative overflow-hidden px-[3.3vw] py-[3.3vw]">
        <span className="decor-float absolute right-20 top-8 text-[3.3vw] text-black/10">
          ✉
        </span>
        <span className="decor-float-slow decor-delay-1 absolute right-35 top-25 font-mono text-[1.7vw] font-black text-blue-400/30">
          {"@"}
        </span>

        <span className="inline-flex rounded-full border border-blue-300 bg-[#eef6ff] px-[1.1vw] py-[0.42vw] text-[0.6rem] font-black uppercase tracking-broad text-[#1565c0]">
          Contact
        </span>

        <h2 className="mt-[1.4vw] text-[2.8vw] font-black leading-flat-md tracking-snug">
          Hybrid Developer
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Get yout Chance</span>
            <span className="plm-highlight-blue absolute inset-x-0 bottom-1 z-0 h-[1.1vw] rounded-sm" />
          </span>
        </h2>

        <p className="mt-[1.4vw] max-w-[34vw] text-[0.91vw] leading-read-lg text-[#666]">
          기획, 디자인, 개발 가능 하이브리드 개발자 권새롬입니다. <br />
          성실함과 Ai 친화적인 스킬을 장점으로 열심히 일하겠습니다.
          <br />
          지금 저점매수 하세요!!
        </p>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="blue" />

      <section className="px-[3.3vw] py-[2.8vw]">
        <div className="rounded-[1.9vw] border border-[#cfe3fb] bg-[#eef6ff] px-[1.9vw] py-[1.7vw]">
          <div className="flex items-center justify-between gap-[1.1vw] border-b border-[#dceafd] pb-[1.1vw]">
            <div className="flex items-center gap-[0.83vw]">
              <span className="size-[0.7vw] rounded-full bg-green-400" />
              <span className="font-mono text-[0.8vw] font-bold tracking-spaced text-[#1565c0]">
                {EMAIL}
              </span>
            </div>
            <span className="rounded-full border border-[#cde2fb] bg-white px-[0.83vw] py-[0.28vw] text-[0.55rem] font-black uppercase tracking-airy text-[#1565c0]">
              active
            </span>
          </div>

          <div className="mt-[1.4vw] grid grid-cols-2 gap-[0.83vw]">
            <a
              href={naverMailHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#cde2fb] bg-white px-[1.4vw] py-[1vw] text-center text-[0.75vw] font-black uppercase tracking-float text-[#1565c0] transition-colors hover:bg-[#dfefff]"
            >
              Send Mail ↗
            </a>
            <button
              type="button"
              onClick={handleCopyAddress}
              className={cn(
                "rounded-full border px-[1.4vw] py-[1vw] text-[0.75vw] font-black uppercase tracking-float transition-colors",
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

      <section className="plm-grid-dense px-[3.3vw] py-[2.8vw]">
        <div className="grid grid-cols-3 gap-[1.1vw]">
          {CONTACT_TOPIC_ITEMS.map((item) => (
            <article
              key={item.title}
              className={cn(
                "rounded-[1.7vw] border px-[1.4vw] py-[1.7vw]",
                item.cardClassName,
              )}
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
