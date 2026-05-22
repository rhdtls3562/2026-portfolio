/** 레퍼런스의 문서형 읽기 창처럼 readme 내용을 흰 문서 패널에 담아낸다. */
import { README_SECTIONS } from "@/app/(home)/constants/retroWindowData";

const KEYWORDS = [
  "디자인 × 구현",
  "반응형 UI",
  "브랜드 비주얼",
  "협업 친화적 코드",
];

export default function ReadmeWindow() {
  return (
    <div className="h-full bg-win-surface p-3">
      <div className="h-full overflow-y-auto bg-white px-8 py-8 text-black">
        <p className="font-retro-terminal text-2xs uppercase tracking-[0.16em] text-win-surface-dark">
          Readme.txt
        </p>
        <h1 className="mt-4 max-w-[21rem] text-[1.8rem] leading-[1.02] font-semibold tracking-[-0.04em] text-black">
          Welcome to the Kwon Saerom Portfolio
        </h1>

        <div className="mt-6 space-y-6">
          {README_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="mb-2 text-base font-semibold tracking-[-0.02em] text-black">
                {section.title}
              </h2>
              <div className="space-y-2">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[0.86rem] leading-[1.4] font-medium tracking-[-0.01em] text-win-ink"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-7 border-t border-[#d9d9d9] pt-4">
          <p className="font-retro-terminal text-2xs uppercase tracking-[0.16em] text-win-surface-dark">
            Keywords
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {KEYWORDS.map((tag) => (
              <span
                key={tag}
                className="border border-[#d0d0d0] bg-[#f2f2f2] px-2 py-1 font-retro-terminal text-2xs uppercase tracking-[0.08em] text-win-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
