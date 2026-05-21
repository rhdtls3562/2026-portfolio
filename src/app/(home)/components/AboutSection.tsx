import Image from "next/image";
import { icons, images } from "@/constants/assets";

type Skill = {
  category: string;
  items: string[];
};

const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Vercel", "TanStack Query"],
  },
  {
    category: "Etc",
    items: ["Zod", "React Hook Form", "ESLint", "Prettier"],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-36 px-6 bg-(--color-bg)"
    >
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex items-center gap-6 mb-20">
          <Image
            src={icons.iconMore}
            alt=""
            width={28}
            height={28}
            className="size-7 opacity-80"
          />
          <div className="flex items-center gap-4">
            <span className="text-(--color-gold) tracking-[0.4em] text-xs uppercase font-medium">
              01
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
              About Me
            </h2>
          </div>
          <div className="flex-1 h-px bg-(--color-border)" />
        </div>

        {/* 본문 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* 프로필 이미지 */}
          <div className="relative">
            <div className="relative aspect-3/4 max-w-sm mx-auto md:mx-0">
              <div className="absolute inset-0 border border-(--color-gold)/30 translate-x-4 translate-y-4" />
              <Image
                src={images.imgProfile}
                alt="권새롬 프로필 사진"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* 텍스트 영역 */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-(--color-text-primary) leading-relaxed">
                사용자 경험을 섬세하게 설계하는
                <br />
                <span className="text-(--color-gold)">프론트엔드 개발자</span>
                입니다.
              </h3>
              <p className="text-(--color-text-secondary) text-sm md:text-base leading-loose">
                픽셀 단위의 디테일부터 전체적인 사용자 흐름까지, 화면 속 모든
                요소가 사용자에게 자연스럽게 느껴지도록 고민합니다. 협업과
                커뮤니케이션을 중요하게 생각하며, 읽기 좋고 유지보수하기 쉬운
                코드를 지향합니다.
              </p>
            </div>

            {/* 스킬 */}
            <div className="space-y-5">
              {SKILLS.map((skill) => (
                <div key={skill.category}>
                  <p className="text-(--color-gold) tracking-widest text-xs uppercase mb-2">
                    {skill.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 border border-(--color-border) text-(--color-text-secondary) text-xs tracking-wide hover:border-(--color-gold) hover:text-(--color-gold) transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
