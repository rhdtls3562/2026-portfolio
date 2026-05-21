"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "@/constants/ASSETS";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src={images.imgMain}
        alt="메인 배경 이미지"
        fill
        className="object-cover object-center"
        fetchPriority="high"
        loading="eager"
      />

      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-(--color-bg)" />
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30" />

      {/* 콘텐츠 */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* 상단 장식 라인 */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-(--color-gold)" />
          <span className="text-(--color-gold) tracking-[0.4em] text-xs uppercase font-medium">
            Portfolio
          </span>
          <div className="w-12 h-px bg-(--color-gold)" />
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-(--color-text-primary) leading-none mb-4">
          KWON
          <br />
          <span className="text-(--color-gold)">SAEROM</span>
        </h1>

        {/* 서브 타이틀 */}
        <p className="text-(--color-text-secondary) tracking-[0.3em] text-sm md:text-base uppercase mt-6 mb-12">
          Frontend Developer
        </p>

        {/* 스크롤 다운 버튼 */}
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="아래로 스크롤"
        >
          <span className="text-(--color-text-muted) tracking-[0.2em] text-xs uppercase group-hover:text-(--color-gold) transition-colors">
            Scroll
          </span>
          <div className="w-px h-12 bg-linear-to-b from-(--color-gold) to-transparent animate-pulse" />
        </button>
      </div>
    </section>
  );
}
