/** 모니터 화면 안의 배경과 폴더 아이콘 레이아웃을 배치하는 컴포넌트. */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/constants/ASSETS";
import { DECO_ITEMS } from "@/app/(home)/constants/monitorDesktopArtboardData";
import { cn } from "@/utils/cn";

const TITLE_TEXT = "KWONSAEROM Portfolio";
const TITLE_TYPE_INTERVAL_MS = 85;

type Props = {
  isTitleAnimating: boolean;
  isWindowOpen: boolean;
};

type DesktopFolderShortcutProps = {
  alt: string;
  href?: string;
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
  href,
  label,
  note,
  labelPosition,
  src,
  width,
  height,
  shadowClassName,
  wrapperClassName,
}: DesktopFolderShortcutProps) {
  const shortcutClassName = cn(
    "absolute z-20 flex items-center gap-2",
    labelPosition === "top" ? "flex-col" : "flex-col-reverse",
    href
      ? "pointer-events-auto transition-transform duration-150 hover:-translate-y-1"
      : "pointer-events-none",
    wrapperClassName,
  );

  const shortcutContent = (
    <>
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
          className="max-w-none drop-shadow-md"
        />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${alt} 외부 사이트 열기`}
        className={shortcutClassName}
      >
        {shortcutContent}
      </a>
    );
  }

  return <div className={shortcutClassName}>{shortcutContent}</div>;
}

export default function MonitorDesktopArtboard({
  isTitleAnimating,
  isWindowOpen,
}: Props) {
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    if (!isTitleAnimating) return;

    let titleIndex = 0;
    let typingTimer: number | null = null;

    const startTimer = window.setTimeout(() => {
      setTypedTitle("");

      typingTimer = window.setInterval(() => {
        titleIndex += 1;
        setTypedTitle(TITLE_TEXT.slice(0, titleIndex));

        if (titleIndex >= TITLE_TEXT.length && typingTimer) {
          window.clearInterval(typingTimer);
        }
      }, TITLE_TYPE_INTERVAL_MS);
    }, 0);

    return () => {
      window.clearTimeout(startTimer);

      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
    };
  }, [isTitleAnimating]);

  const isTyping = isTitleAnimating && typedTitle.length < TITLE_TEXT.length;

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

      <div className="pointer-events-none absolute inset-x-0 top-[5%] z-20 flex justify-center">
        <h1
          aria-label={TITLE_TEXT}
          className={cn(
            "font-mona-title text-[34px] font-medium uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.42)]",
            isWindowOpen ? "opacity-0" : "opacity-100",
          )}
        >
          {typedTitle}
          {isTyping ? (
            <span aria-hidden="true" className="ml-1 inline-block animate-pulse">
              _
            </span>
          ) : null}
        </h1>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[5%] z-10">
        <Image
          src={images.imgProfile}
          alt="권새롬 프로필 컷아웃"
          fill
          sizes="(max-width: 640px) 30vw, (max-width: 1024px) 36vw, 42vw"
          className={cn(
            "object-contain object-bottom transition-opacity duration-200",
            isWindowOpen ? "opacity-0" : "opacity-100",
          )}
        />
      </div>

      {DECO_ITEMS.map((item) => (
        <div
          key={item.alt}
          className={cn("transition-opacity duration-200", isWindowOpen ? "opacity-0" : "opacity-100")}
        >
          <DesktopFolderShortcut
            alt={item.alt}
            href={item.href}
            label={item.label}
            note={item.note}
            labelPosition={item.labelPosition}
            src={item.src}
            width={item.width}
            height={item.height}
            shadowClassName={item.shadowClassName}
            wrapperClassName={item.position}
          />
        </div>
      ))}
    </>
  );
}
