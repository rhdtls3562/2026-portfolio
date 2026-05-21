/** 모니터 화면 안의 배경과 폴더 아이콘 레이아웃을 배치하는 컴포넌트. */
"use client";

import Image from "next/image";
import { images } from "@/constants/ASSETS";
import { DECO_ITEMS } from "@/app/(home)/constants/monitorDesktopArtboardData";
import { cn } from "@/utils/cn";

type DesktopFolderShortcutProps = {
  alt: string;
  label: string;
  note?: string;
  labelPosition: "top" | "bottom";
  src: string;
  width: number;
  height: number;
  shadowClassName: string;
  wrapperClassName: string;
};

function DesktopFolderShortcut({
  alt,
  label,
  note,
  labelPosition,
  src,
  width,
  height,
  shadowClassName,
  wrapperClassName,
}: DesktopFolderShortcutProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-20 flex items-center gap-2",
        labelPosition === "top" ? "flex-col" : "flex-col-reverse",
        wrapperClassName,
      )}
    >
      <div className="flex flex-col items-center gap-1">
        <p className="text-xs font-medium tracking-[0.04em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          {label}
        </p>
        {note ? (
          <p className="text-sm font-medium italic tracking-[0.06em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
            {note}
          </p>
        ) : null}
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className={cn(
            "absolute left-1/2 top-[78%] -z-10 -translate-x-1/2 rounded-full bg-slate-950/35 blur-xl",
            shadowClassName,
          )}
        />
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto max-w-none drop-shadow-md"
        />
      </div>
    </div>
  );
}

export default function MonitorDesktopArtboard() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={images.imgDesktop}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-center"
        />
      </div>

      <p className="pointer-events-none absolute left-[6%] top-[8%] z-20 text-xs font-semibold tracking-[0.04em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
        web design
      </p>
      <p className="pointer-events-none absolute left-1/2 top-[8%] z-20 -translate-x-1/2 text-xs font-semibold tracking-[0.04em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
        portfolio
      </p>
      <p className="pointer-events-none absolute right-[6%] top-[8%] z-20 text-xs font-semibold tracking-[0.04em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
        social media
      </p>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[5%] z-10">
        <Image
          src={images.imgProfile}
          alt="권새롬 프로필 컷아웃"
          fill
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 36vw, 42vw"
          className="object-contain object-bottom"
        />
      </div>

      {DECO_ITEMS.map((item) => (
        <DesktopFolderShortcut
          key={item.alt}
          alt={item.alt}
          label={item.label}
          note={item.note}
          labelPosition={item.labelPosition}
          src={item.src}
          width={item.width}
          height={item.height}
          shadowClassName={item.shadowClassName}
          wrapperClassName={item.position}
        />
      ))}
    </>
  );
}
