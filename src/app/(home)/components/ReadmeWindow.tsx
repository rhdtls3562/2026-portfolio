/** 자기소개와 핵심 키워드를 레트로 readme 창으로 표현하는 컴포넌트. */
import Image from "next/image";
import { images } from "@/constants/assets";
import { README_PARAGRAPHS } from "@/app/(home)/constants/retroPortfolioData";

const KEYWORDS = [
  "디자인 × 구현",
  "반응형 UI",
  "브랜드 비주얼",
  "협업 친화적 코드",
];

export default function ReadmeWindow() {
  return (
    <div className="flex h-full flex-col gap-2.5 overflow-y-auto p-3">
      {/* 헤더 */}
      <div className="flex items-start gap-2.5">
        <div className="relative h-14 w-11 shrink-0 overflow-hidden border border-d-border shadow-[1px_1px_0_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.7)]">
          <Image
            src={images.imgProfile}
            alt="권새롬 프로필 사진"
            fill
            sizes="2.75rem"
            className="object-cover object-top"
          />
        </div>
        <div className="min-w-0">
          <p className="font-retro-terminal text-2xs uppercase tracking-widest text-d-warm">
            &gt;&gt; readme.txt
          </p>
          <p className="font-retro-display mt-0.5 text-xs uppercase tracking-wider text-d-ink">
            Kwon Saerom
          </p>
          <p className="font-retro-terminal text-2xs leading-tight text-d-mid">
            Frontend Developer · Web Publisher
          </p>
        </div>
      </div>

      <div className="h-px shrink-0 bg-d-border" />

      <div className="flex-1 space-y-2 overflow-y-auto">
        {README_PARAGRAPHS.map((p) => (
          <p
            key={p}
            className="font-retro-terminal text-2xs leading-relaxed text-d-text"
          >
            {p}
          </p>
        ))}
      </div>

      <div className="shrink-0 border-t border-d-border pt-2">
        <p className="font-retro-display mb-1.5 text-3xs uppercase tracking-widest text-d-mid">
          Keywords
        </p>
        <div className="flex flex-wrap gap-1">
          {KEYWORDS.map((tag) => (
            <span
              key={tag}
              className="font-retro-terminal border border-d-border bg-d-cream/80 px-1.5 py-0.5 text-3xs text-d-text"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
