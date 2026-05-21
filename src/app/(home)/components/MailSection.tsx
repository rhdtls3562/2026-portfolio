/** 연락처와 메일 CTA를 보여주는 섹션 컴포넌트. */
import Image from "next/image";
import { icons, images } from "@/constants/ASSETS";

const EMAIL = "rhdtls3562@naver.com";

export default function MailSection() {
  return (
    <section
      id="mail"
      className="relative py-24 md:py-36 px-6 bg-(--color-surface) overflow-hidden"
    >
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-(--color-gold)/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-(--color-gold)/3 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-(--color-gold)/3 blur-3xl pointer-events-none" />

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
            <span className="text-(--color-gold) tracking-[0.4em] text-xs uppercase font-medium">
              04
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--color-text-primary)">
              Mail
            </h2>
          </div>
          <div className="flex-1 h-px bg-(--color-border)" />
        </div>

        {/* CTA 영역 */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-(--color-text-secondary) text-sm md:text-base leading-loose mb-10">
            새로운 기회나 협업 제안, 또는 단순한 인사도 언제든지 환영합니다.
            <br />
            편하게 메일을 보내주세요.
          </p>

          {/* 이메일 링크 */}
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-3 border border-(--color-gold)/40 hover:border-(--color-gold) px-8 py-4 transition-all duration-300 hover:bg-(--color-gold)/5"
          >
            <span className="text-(--color-text-secondary) group-hover:text-(--color-gold) text-sm tracking-widest transition-colors duration-300">
              {EMAIL}
            </span>
            <span className="text-(--color-gold)/50 group-hover:text-(--color-gold) transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          {/* 버튼 이미지 사용 */}
          <div className="mt-16 flex justify-center">
            <a href={`mailto:${EMAIL}`} className="group block relative">
              <Image
                src={images.imgButtonOn}
                alt="메일 보내기"
                width={200}
                height={200}
                className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-(--color-gold)/0 group-hover:ring-(--color-gold)/60 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-(--color-text-primary) text-xs tracking-[0.3em] uppercase font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Contact
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
