/** 소셜 링크를 카드 레이아웃으로 보여주는 컴포넌트. */
import Image from "next/image";
import { icons } from "@/utils/assetPaths";

type SocialLink = {
  label: string;
  handle: string;
  url: string;
  description: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@kwonsaerom",
    url: "https://github.com",
    description: "코드와 프로젝트 기록",
  },
  {
    label: "LinkedIn",
    handle: "Kwon Saerom",
    url: "https://linkedin.com",
    description: "커리어 및 경력 정보",
  },
  {
    label: "Velog",
    handle: "@kwonsaerom",
    url: "https://velog.io",
    description: "기술 블로그 및 학습 기록",
  },
];

export default function SocialSection() {
  return (
    <section
      id="social"
      className="relative py-24 md:py-36 px-6 bg-(--color-bg)"
    >
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex items-center gap-6 mb-20">
          <Image
            src={icons.iconFolder}
            alt=""
            width={28}
            height={22}
            className="opacity-80"
          />
          <div className="flex items-center gap-4">
            <span className="text-(--color-gold) tracking-epic text-xs uppercase font-medium">
              03
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
              Social
            </h2>
          </div>
          <div className="flex-1 h-px bg-(--color-border)" />
        </div>

        {/* 소셜 링크 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-(--color-border)">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-(--color-border) last:border-0 hover:bg-(--color-surface) transition-colors duration-300 overflow-hidden"
            >
              {/* 호버 장식 */}
              <div className="absolute top-0 left-0 w-full h-px bg-(--color-gold) scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-(--color-text-primary) text-lg font-semibold tracking-tight group-hover:text-(--color-gold) transition-colors duration-300">
                    {social.label}
                  </h3>
                  {/* 화살표 아이콘 */}
                  <span className="text-(--color-text-muted) group-hover:text-(--color-gold) transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sm">
                    ↗
                  </span>
                </div>

                <p className="text-(--color-gold)/70 text-xs tracking-widest">
                  {social.handle}
                </p>

                <p className="text-(--color-text-muted) text-sm leading-relaxed">
                  {social.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
