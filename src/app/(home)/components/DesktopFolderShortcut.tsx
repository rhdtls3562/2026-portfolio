/** 데스크톱 배경 위의 폴더 또는 이미지 바로가기를 렌더링하는 컴포넌트. */
"use client";

import Image from "next/image";
import DesktopFolderPreview from "@/app/(home)/components/DesktopFolderPreview";
import type { DecoItem } from "@/app/(home)/constants/monitorDesktopArtboardData";
import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  isPreviewVisible: boolean;
  item: DecoItem;
  onTogglePreview: (itemKey: string) => void;
};

function ShortcutLabel({ label, note }: Pick<DecoItem, "label" | "note">) {
  if (!label && !note) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-1">
      {label ? (
        <p className="text-[0.83vw] font-medium tracking-trim text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          {label}
        </p>
      ) : null}
      {note ? (
        <p className="text-[0.97vw] font-medium italic tracking-ease text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
          {note}
        </p>
      ) : null}
    </div>
  );
}

function ShortcutVisual({
  isPreviewVisible,
  item,
}: Pick<Props, "isPreviewVisible" | "item">) {
  return (
    <>
      <ShortcutLabel label={item.label} note={item.note} />
      <div className="relative">
        {item.preview ? (
          <DesktopFolderPreview
            alt={item.preview.alt}
            height={item.preview.height}
            isVisible={isPreviewVisible}
            sizes={item.preview.sizes}
            src={item.preview.src}
            width={item.preview.width}
            sizeClassName={item.preview.sizeClassName}
            wrapperClassName={item.preview.wrapperClassName}
          />
        ) : null}
        <div
          aria-hidden="true"
          className={cn(
            "absolute left-1/2 top-[78%] -z-10 -translate-x-1/2 rounded-full bg-slate-950/35 blur-xl",
            item.shadowClassName,
          )}
        />
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          className={cn("drop-shadow-md", item.sizeClassName)}
        />
      </div>
    </>
  );
}

export default function DesktopFolderShortcut({
  className,
  isPreviewVisible,
  item,
  onTogglePreview,
}: Props) {
  const hasInteraction = Boolean(item.href || item.preview);
  const shortcutClassName = cn(
    "absolute flex items-center gap-2",
    isPreviewVisible ? "z-[60]" : "z-20",
    item.labelPosition === "top" ? "flex-col" : "flex-col-reverse",
    hasInteraction
      ? "pointer-events-auto transition-transform duration-150 hover:-translate-y-1"
      : "pointer-events-none",
    item.position,
    className,
  );

  if (item.preview) {
    return (
      <button
        type="button"
        aria-label={`${item.alt} 폴더 열기`}
        aria-pressed={isPreviewVisible}
        onClick={() => onTogglePreview(item.key)}
        className={cn(shortcutClassName, "cursor-pointer bg-transparent p-0 text-left")}
      >
        <ShortcutVisual isPreviewVisible={isPreviewVisible} item={item} />
      </button>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${item.alt} 외부 사이트 열기`}
        className={shortcutClassName}
      >
        <ShortcutVisual isPreviewVisible={false} item={item} />
      </a>
    );
  }

  return (
    <div className={shortcutClassName}>
      <ShortcutVisual isPreviewVisible={false} item={item} />
    </div>
  );
}
