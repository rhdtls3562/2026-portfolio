/** 모니터 화면 안의 배경과 폴더 아이콘 레이아웃을 배치하는 컴포넌트. */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import DesktopFolderShortcut from "@/app/(home)/components/DesktopFolderShortcut";
import { images } from "@/constants/ASSETS";
import { DECO_ITEMS } from "@/app/(home)/constants/monitorDesktopArtboardData";
import { cn } from "@/utils/cn";

const TITLE_TEXT = "KWONSAEROM Portfolio";
const TITLE_TYPE_INTERVAL_MS = 85;

type Props = {
  isTitleAnimating: boolean;
  isWindowOpen: boolean;
};

export default function MonitorDesktopArtboard({
  isTitleAnimating,
  isWindowOpen,
}: Props) {
  const [activePreviewKey, setActivePreviewKey] = useState<string | null>(null);
  const [typedTitle, setTypedTitle] = useState("");

  const handleTogglePreview = (itemKey: string) => {
    setActivePreviewKey((currentKey) =>
      currentKey === itemKey ? null : itemKey,
    );
  };

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
  const visiblePreviewKey = isWindowOpen ? null : activePreviewKey;

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
          key={item.key}
          className={cn(
            "transition-opacity duration-200",
            isWindowOpen ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          <DesktopFolderShortcut
            isPreviewVisible={visiblePreviewKey === item.key}
            item={item}
            onTogglePreview={handleTogglePreview}
          />
        </div>
      ))}
    </>
  );
}
