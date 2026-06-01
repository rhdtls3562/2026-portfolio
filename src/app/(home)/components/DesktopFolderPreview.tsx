/** 폴더 위로 튀어나오는 이미지 미리보기 카드를 렌더링하는 컴포넌트. */
import Image from "next/image";
import { cn } from "@/utils/cn";

type Props = {
  alt: string;
  height: number;
  isVisible: boolean;
  sizes: string;
  sizeClassName: string;
  src: string;
  width: number;
  wrapperClassName?: string;
};

export default function DesktopFolderPreview({
  alt,
  height,
  isVisible,
  sizes,
  sizeClassName,
  src,
  width,
  wrapperClassName,
}: Props) {
  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "pointer-events-none absolute left-1/2 bottom-[72%] z-10 -translate-x-1/2 transition-all duration-200",
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-95 opacity-0",
        wrapperClassName,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-5 -bottom-3 h-6 rounded-full bg-slate-950/28 blur-lg"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn("shadow-[0_22px_40px_rgba(15,23,42,0.34)]", sizeClassName)}
      />
    </div>
  );
}
