import Image from "next/image";

const DETAILS = [
  { label: "현재",  value: "쉐브론 웹퍼블리셔 · 코드잇 프론트엔드 부트캠프 수료" },
  { label: "경력",  value: "총 6년 · 패션·뷰티·의료·반려동물 등 다양한 산업군" },
  { label: "지향",  value: "디자인 감성과 기술 구현력을 겸비한 하이브리드형 웹 전문가" },
  { label: "강점",  value: "브랜드 비주얼 언어를 코드로 정확히 옮기는 능력" },
];

export default function ProfileFolder() {
  return (
    <div className="flex h-full flex-col gap-2 overflow-y-auto p-2.5">
      <div className="flex gap-2.5">
        <div className="relative h-20 w-16 shrink-0 overflow-hidden border border-d-border shadow-[1px_1px_0_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]">
          <Image
            src="/asset/img/img_profile.png"
            alt="권새롬 프로필 사진"
            fill
            sizes="4rem"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center gap-1.5">
          <div>
            <p className="font-retro-display text-xs uppercase tracking-wider text-d-ink">
              Kwon Saerom
            </p>
            <p className="font-retro-terminal text-2xs text-d-warm">
              Frontend Developer
            </p>
          </div>
          <p className="font-retro-terminal text-2xs leading-tight text-d-mid">
            Web Publisher · UI-sensitive
          </p>
          <div className="flex gap-1">
            {["1999 · 26세", "서울, KR"].map((tag) => (
              <span
                key={tag}
                className="font-retro-terminal border border-d-border bg-d-cream/70 px-1.5 py-0.5 text-3xs text-d-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px shrink-0 bg-d-border" />

      <div className="flex flex-col gap-1.5">
        {DETAILS.map(({ label, value }) => (
          <div
            key={label}
            className="border border-d-border bg-white/50 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
          >
            <p className="font-retro-display text-3xs uppercase tracking-widest text-d-warm">
              {label}
            </p>
            <p className="font-retro-terminal mt-0.5 text-2xs leading-tight text-d-text">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
