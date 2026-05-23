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
import { images } from "@/constants/ASSETS";
import { cn } from "@/utils/cn";

const TICKER_ITEMS = [
  "React",
  "Next.js",
  "Tailwind",
  "Typescript",
  "Storybook",
  "Figma",
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

      <section className="plm-grid-soft relative overflow-hidden px-12 py-14">
        <span className="decor-float absolute right-10 top-8 text-[5rem] font-black leading-none text-pink-200">
          ✦
        </span>
        <span className="decor-float-slow decor-delay-2 absolute bottom-50 right-10 font-mono text-[2rem] font-black text-purple-200">
          {"</>"}
        </span>

        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.18em] text-pink-500">
              <span className="size-2 rounded-full bg-pink-400" />
              Frontend Developer · Web Publisher
            </span>
            <h1 className="mt-6 text-[3.2rem] font-black leading-none tracking-[-0.05em]">
              Hello, I&apos;m{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Saerom</span>
                <span className="plm-highlight-pink absolute inset-x-0 bottom-2 z-0 h-5 rounded" />
              </span>
              .
            </h1>
            <p className="mt-6 max-w-[28rem] text-[0.85rem] leading-[1.85] text-[#666]">
              웹디자인과 퍼블리싱 실무 5년 6개월을 바탕으로 프론트엔드 개발자로
              <br />
              확장하고 있습니다. 디자인 의도를 코드로 정확히 옮기고, 사용자
              흐름과
              <br />
              화면 완성도를 함께 보는 방식으로 일합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+821079063994"
                className="rounded-full border border-[#f3c8da] bg-white px-6 py-3 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#c2185b] transition-colors hover:bg-[#fff1f6]"
              >
                Contact me ↗
              </a>
              <a
                href="https://github.com/rhdtls3562?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d8e9da] bg-white px-6 py-3 text-[0.7rem] font-black uppercase tracking-[0.14em] text-[#2e7d32] transition-colors hover:bg-[#edf8ef]"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="relative mb-[-60] pr-5">
            <Image
              src={images.imgProfileBlack}
              alt="권새롬 프로필"
              width={300}
              height={0}
              style={{ height: "auto" }}
              className="w-[300px]"
            />
          </div>
        </div>
      </section>

      <PlmTickerBand items={TICKER_ITEMS} tone="pink" />

      <section className="grid grid-cols-[1.05fr_0.95fr] gap-8 px-12 py-12">
        <div>
          <p className="mb-5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#c2c2c2]">
            Quick links
          </p>
          <div className="flex flex-wrap gap-3">
            {LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-full px-5 py-3 text-[0.74rem] font-black transition-opacity hover:opacity-75",
                  LINK_TONES[index % LINK_TONES.length],
                )}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#c2c2c2]">
            At a glance
          </p>
          <div className="space-y-3">
            {ABOUT_GLANCE_ITEMS.map((item) => (
              <article
                key={item.title}
                className={cn(
                  "rounded-[22px] border px-5 py-4",
                  item.cardClassName,
                )}
              >
                <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-black">
                  {item.title}
                </p>
                <p className="mt-2 text-[0.72rem] leading-[1.7] text-[#666]">
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
            "px-12 py-12",
            ABOUT_SECTION_THEMES[index % ABOUT_SECTION_THEMES.length]
              .sectionClassName,
          )}
        >
          <span
            className={cn(
              "inline-flex rounded-full px-4 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.18em]",
              ABOUT_SECTION_THEMES[index % ABOUT_SECTION_THEMES.length]
                .badgeClassName,
            )}
          >
            {section.title}
          </span>
          <div className="mt-5 max-w-[38rem] space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[0.84rem] leading-[1.85] text-[#5a5a5a]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="px-12 py-14">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-[1.5rem] font-black tracking-[-0.03em]">
            Career
          </h2>
          <span className="rounded-full border border-[#f3d6e3] bg-white px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#bf5d89]">
            6 companies
          </span>
        </div>
        <div className="space-y-4">
          {CAREER_ITEMS.map((item) => (
            <article
              key={item.company}
              className={cn(
                "flex items-center gap-5 rounded-[26px] px-7 py-5",
                item.cardClassName,
              )}
            >
              <span
                className={cn(
                  "size-3 shrink-0 rounded-full",
                  item.dotClassName,
                )}
              />
              <span className="w-32 shrink-0 font-mono text-[0.56rem] text-[#9a9a9a]">
                {item.period}
              </span>
              <div>
                <p className="text-[0.88rem] font-black">{item.company}</p>
                <p className="text-[0.7rem] text-[#777]">{item.role}</p>
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

      <section className="px-12 py-14">
        <h2 className="mb-8 text-[1.5rem] font-black tracking-[-0.03em]">
          Education & Certification
        </h2>
        <div className="space-y-5">
          {CERTIFICATION_ITEMS.map((item) => (
            <article
              key={item.title}
              className={cn(
                "flex items-start gap-6 rounded-[26px] px-7 py-6",
                item.cardClassName,
              )}
            >
              <span
                className={cn(
                  "mt-0.5 shrink-0 rounded-full border px-3 py-1 font-mono text-[0.52rem] font-bold whitespace-nowrap",
                  item.yearClassName,
                )}
              >
                {item.year}
              </span>
              <div>
                <p className="text-[0.9rem] font-black">{item.title}</p>
                <p className="mt-1 text-[0.72rem] text-[#777]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="h-8" />
    </div>
  );
}
