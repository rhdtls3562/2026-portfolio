/** 문서 창의 프로필 폴더 상세 내용을 보여주는 컴포넌트. */
import Image from "next/image";
import { images } from "@/constants/assetPaths";

const DETAILS = [
  { label: "현재",  value: "쉐브론 웹퍼블리셔 · 코드잇 프론트엔드 부트캠프 수료" },
  { label: "경력",  value: "총 6년 · 패션·뷰티·의료·반려동물 등 다양한 산업군" },
  { label: "지향",  value: "디자인 감성과 기술 구현력을 겸비한 하이브리드형 웹 전문가" },
  { label: "강점",  value: "브랜드 비주얼 언어를 코드로 정확히 옮기는 능력" },
];

export default function ProfileFolder() {
  return (
    <div className="flex h-full flex-col gap-2.5 overflow-y-auto bg-[#f6f6f6] p-3">
      <div className="flex gap-2.5">
        <div className="relative h-20 w-16 shrink-0 overflow-hidden border-2 border-white bg-white shadow-[2px_2px_0_rgba(131,131,131,0.85)]">
          <Image
            src={images.imgProfile}
            alt="권새롬 프로필 사진"
            fill
            sizes="4rem"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center gap-1.5">
          <div>
            <p className="font-retro-display text-xs uppercase tracking-[0.08em] text-win-blue">
              Kwon Saerom
            </p>
            <p className="font-retro-terminal text-2xs uppercase tracking-[0.08em] text-win-ink">
              Frontend Developer
            </p>
          </div>
          <p className="font-retro-terminal text-2xs leading-tight text-[#616161]">
            Web Publisher · UI-sensitive
          </p>
          <div className="flex gap-1">
            {["1999 · 26세", "서울, KR"].map((tag) => (
              <span
                key={tag}
                className="border border-[#c9c9c9] bg-white px-1.5 py-0.5 font-retro-terminal text-3xs uppercase tracking-[0.06em] text-win-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px shrink-0 bg-[#d0d0d0]" />

      <div className="flex flex-col gap-1.5">
        {DETAILS.map(({ label, value }) => (
          <div
            key={label}
            className="border border-[#cfcfcf] bg-white p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <p className="font-retro-terminal text-3xs uppercase tracking-[0.14em] text-win-blue">
              {label}
            </p>
            <p className="mt-1 text-[0.72rem] leading-tight text-win-ink">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
