/** 폴더 선택과 상세 콘텐츠를 함께 보여주는 문서 창 컴포넌트. */
import Image from "next/image";
import { icons } from "@/constants/assets";
import ProfileFolder from "@/app/(home)/components/ProfileFolder";
import RecordsFolder from "@/app/(home)/components/RecordsFolder";
import StackFolder from "@/app/(home)/components/StackFolder";
import {
  FOLDERS,
  type FolderKey,
} from "@/app/(home)/constants/retroPortfolioData";
import { cn } from "@/utils/cn";

type Props = {
  selectedFolder: FolderKey;
  onSelectFolder: (f: FolderKey) => void;
};

export default function DocumentsWindow({
  selectedFolder,
  onSelectFolder,
}: Props) {
  return (
    <div className="flex h-full flex-col gap-1.5 p-1.5">
      {/* 주소 표시줄 */}
      <div className="flex h-5 shrink-0 items-center border border-d-border bg-white/60 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <span className="font-retro-terminal text-2xs leading-none text-d-mid">
          Documents /{" "}
          {FOLDERS.find((f) => f.key === selectedFolder)?.label ?? selectedFolder}
        </span>
      </div>

      {/* 폴더 패널 + 컨텐츠 */}
      <div className="grid min-h-0 flex-1 grid-cols-[4.5rem_1fr] gap-1.5">
        {/* 좌측 폴더 목록 */}
        <div className="overflow-y-auto border border-d-border bg-white/50 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          <div className="flex flex-col gap-1.5">
            {FOLDERS.map((folder) => {
              const active = folder.key === selectedFolder;
              return (
                <button
                  key={folder.key}
                  type="button"
                  onClick={() => onSelectFolder(folder.key)}
                  className={cn(
                    "flex flex-col items-center gap-0.5 border px-1 py-2 transition-colors",
                    "shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
                    active
                      ? "border-d-warm bg-d-cream"
                      : "border-d-border bg-white/40 hover:border-d-warm/50 hover:bg-white/60",
                  )}
                >
                  <Image
                    src={icons.iconFile}
                    alt=""
                    width={44}
                    height={44}
                    className="size-5.5"
                  />
                  <span
                    className={cn(
                      "font-retro-terminal text-3xs leading-none",
                      active ? "text-d-warm-deep" : "text-d-text",
                    )}
                  >
                    {folder.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 우측 컨텐츠 */}
        <div className="min-h-0 overflow-hidden border border-d-border bg-d-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
          {selectedFolder === "profile" && <ProfileFolder />}
          {selectedFolder === "records" && <RecordsFolder />}
          {selectedFolder === "stack" && <StackFolder />}
        </div>
      </div>
    </div>
  );
}
