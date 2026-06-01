/** 소개 창 - 자기소개, 스택, 경력, 자격을 한 흐름으로 묶은 컬러풀 페이지. */
import Image from "next/image";
import PlmTickerBand from "@/app/(home)/components/PlmTickerBand";
import PlmWindowNav from "@/app/(home)/components/PlmWindowNav";
import {
  ABOUT_GLANCE_ITEMS,
  ABOUT_SECTION_THEMES,
  CAREER_ITEMS,
  CERTIFICATION_ITEMS,
} from "@/app/(home)/constants/WINDOW_CONTENT";
import { LINKS } from "@/app/(home)/constants/retroPortfolioData";
import { README_SECTIONS } from "@/app/(home)/constants/retroWindowData";
import { images } from "@/utils/assetPaths";
import { cn } from "@/utils/cn";

const TICKER_ITEMS = [
  "디자인",
  "기획",
  "웹퍼블리싱",
  "프론트개발",
  "까지 가능한 저",
  "탐나지 않으신가요",
];

const LINK_TONES = [
  "bg-[#fff1f6] text-[#c2185b]",
  "bg-[#edf8ef] text-[#2e7d32]",
  "bg-[#f2ecfb] text-[#5e35b1]",
  "bg-[#fff8e6] text-[#f57f17]",
];

export default function ReadmeWindow() {
  return (
    <div className="h-full overflow-y-auto bg-white text-black">
      <PlmWindowNav active="About ME" />

      <section className="plm-grid-soft relative overflow-hidden px-[3.3vw] py-[3.9vw]">
        <span className="decor-float absolute right-10 top-8 text-[5.6vw] font-black leading-none text-pink-200">
          ✦
        </span>
        <span className="decor-float-slow decor-delay-2 absolute bottom-50 right-10 font-mono text-[2.2vw] font-black text-purple-200">
          {"</>"}
        </span>

        <div className="flex items-end justify-between gap-[2.2vw]">
          <div>
            <span className="inline-flex items-center gap-[0.55vw] rounded-full border border-pink-200 bg-pink-50 px-[1.1vw] py-[0.42vw] text-[0.72vw] font-black uppercase tracking-[0.18em] text-pink-500">
              <span className="size-[0.55vw] rounded-full bg-pink-400" />
              Frontend Developer · Web Publisher
            </span>
            <h1 className="mt-[1.7vw] text-[3.6vw] font-black leading-none tracking-[-0.05em]">
              Hello, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Saerom</span>
                <span className="plm-highlight-pink absolute inset-x-0 bottom-2 z-0 h-[1.4vw] rounded" />
              </span>
              .
            </h1>
            <p className="mt-[1.7vw] max-w-[31vw] text-[0.94vw] leading-[1.85] text-[#666]">
              웹디자인과 퍼블리싱 실무 약 6년을 바탕으로 프론트엔드 개발자로
              <br />
              확장하고 있습니다. 디자인 의도를 코드로 정확히 옮기고, 사용자
              흐름과
              <br />
              화면 완성도를 함께 보는 방식으로 일합니다.
            </p>
            <div className="mt-[2.2vw] flex flex-wrap gap-[0.83vw]">
              <a
                href="tel:+821079063994"
                className="rounded-full border border-[#f3c8da] bg-white px-[1.7vw] py-[0.83vw] text-[0.78vw] font-black uppercase tracking-[0.14em] text-[#c2185b] transition-colors hover:bg-[#fff1f6]"
              >
                Contact me ↗
              </a>
              <a
                href="https://github.com/rhdtls3562?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d8e9da] bg-white px-[1.7vw] py-[0.83vw] text-[0.78vw] font-black uppercase tracking-[0.14em] text-[#2e7d32] transition-colors hover:bg-[#edf8ef]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="relative mb-[-4.2vw] pr-[1.4vw]">
            <Image
              src={images.imgProfileBlack}
              alt="권새롬 프로필"
              width={1122}
              height={1402}
              className="h-auto w-[20.8vw]"
            />
          </div>
        </div>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="pink" />

      <section className="grid grid-cols-[1.05fr_0.95fr] gap-[1.9vw] px-[3.3vw] py-[3.3vw]">
        <div>
          <p className="mb-[1.4vw] text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#c2c2c2]">
            Quick links
          </p>
          <div className="flex flex-wrap gap-[0.83vw]">
            {LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full px-[1.4vw] py-[0.83vw] text-[0.82vw] font-black transition-opacity hover:opacity-75",
                  LINK_TONES[index % LINK_TONES.length],
                )}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-[1.4vw] text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#c2c2c2]">
            At a glance
          </p>
          <div className="space-y-[0.83vw]">
            {ABOUT_GLANCE_ITEMS.map((item) => (
              <article
                key={item.title}
                className={cn(
                  "rounded-[1.5vw] border px-[1.4vw] py-[1.1vw]",
                  item.cardClassName,
                )}
              >
                <p className="text-[0.75vw] font-black uppercase tracking-[0.16em] text-black">
                  {item.title}
                </p>
                <p className="mt-[0.55vw] text-[0.8vw] leading-[1.7] text-[#666]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {README_SECTIONS.map((section, index) => (
        <section
          key={section.title}
          className={cn(
            "px-[3.3vw] py-[3.3vw]",
            ABOUT_SECTION_THEMES[index % ABOUT_SECTION_THEMES.length]
              .sectionClassName,
          )}
        >
          <span
            className={cn(
              "inline-flex rounded-full px-[1.1vw] py-[0.42vw] text-[0.62rem] font-black uppercase tracking-[0.18em]",
              ABOUT_SECTION_THEMES[index % ABOUT_SECTION_THEMES.length]
                .badgeClassName,
            )}
          >
            {section.title}
          </span>
          <div className="mt-[1.4vw] max-w-[42vw] space-y-[1.1vw]">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.93vw] leading-[1.85] text-[#5a5a5a]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="px-[3.3vw] py-[3.9vw]">
        <div className="mb-[2.2vw] flex items-center gap-[0.83vw]">
          <h2 className="text-[1.7vw] font-black tracking-[-0.03em]">
            Career
          </h2>
          <span className="rounded-full border border-[#f3d6e3] bg-white px-[0.83vw] py-[0.28vw] text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#bf5d89]">
            6 companies
          </span>
        </div>
        <div className="space-y-[1.1vw]">
          {CAREER_ITEMS.map((item) => (
            <article
              key={item.company}
              className={cn(
                "flex items-center gap-[1.4vw] rounded-[1.8vw] px-[1.9vw] py-[1.4vw]",
                item.cardClassName,
              )}
            >
              <span
                className={cn(
                  "size-[0.83vw] shrink-0 rounded-full",
                  item.dotClassName,
                )}
              />
              <span className="w-[8.9vw] shrink-0 font-mono text-[0.56rem] text-[#9a9a9a]">
                {item.period}
              </span>
              <div>
                <p className="text-[1vw] font-black">{item.company}</p>
                <p className="text-[0.78vw] text-[#777]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PlmTickerBand
        items={["BOOTCAMP", "GTQ", "IELTS", "TEAM LEAD", "AI TOOLS", "NEXT.JS"]}
        tone="mint"
        trackClassName="plm-marquee-slow"
      />

      <section className="px-[3.3vw] py-[3.9vw]">
        <h2 className="mb-[2.2vw] text-[1.7vw] font-black tracking-[-0.03em]">
          Education & Certification
        </h2>
        <div className="space-y-[1.4vw]">
          {CERTIFICATION_ITEMS.map((item) => (
            <article
              key={item.title}
              className={cn(
                "flex items-start gap-[1.7vw] rounded-[1.8vw] px-[1.9vw] py-[1.7vw]",
                item.cardClassName,
              )}
            >
              <span
                className={cn(
                  "mt-0.5 shrink-0 rounded-full border px-[0.83vw] py-[0.28vw] font-mono text-[0.52rem] font-bold whitespace-nowrap",
                  item.yearClassName,
                )}
              >
                {item.year}
              </span>
              <div>
                <p className="text-[1vw] font-black">{item.title}</p>
                <p className="mt-[0.28vw] text-[0.8vw] text-[#777]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="h-[2.2vw]" />
    </div>
  );
}
