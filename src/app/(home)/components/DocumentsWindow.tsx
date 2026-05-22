/** 레퍼런스 탐색기 구조에 맞춰 문서 창의 루트와 폴더 상세를 렌더링한다. */
"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileFolder from "@/app/(home)/components/ProfileFolder";
import RecordsFolder from "@/app/(home)/components/RecordsFolder";
import StackFolder from "@/app/(home)/components/StackFolder";
import {
  FOLDERS,
  type FolderKey,
} from "@/app/(home)/constants/retroPortfolioData";
import { icons } from "@/constants/ASSETS";
import { cn } from "@/utils/cn";

type Props = {
  selectedFolder: FolderKey;
  onSelectFolder: (f: FolderKey) => void;
};

function ToolbarButton({
  children,
  isDisabled,
  label,
  onClick,
}: {
  children: React.ReactNode;
  isDisabled?: boolean;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center border-r-2 border-white text-win-ink",
        isDisabled ? "cursor-default opacity-40" : "hover:bg-[#c7c7c7]",
      )}
    >
      {children}
    </button>
  );
}

function DocumentsFolderContent({ selectedFolder }: { selectedFolder: FolderKey }) {
  if (selectedFolder === "profile") return <ProfileFolder />;
  if (selectedFolder === "records") return <RecordsFolder />;
  return <StackFolder />;
}

export default function DocumentsWindow({
  selectedFolder,
  onSelectFolder,
}: Props) {
  const [isRootView, setIsRootView] = useState(true);
  const currentFolder = FOLDERS.find((folder) => folder.key === selectedFolder);

  const handleOpenFolder = (folderKey: FolderKey) => {
    onSelectFolder(folderKey);
    setIsRootView(false);
  };

  const handleShowRoot = () => {
    setIsRootView(true);
  };

  return (
    <div className="flex h-full flex-col bg-win-surface-light text-win-ink">
      <div className="flex h-10 shrink-0 border-b-2 border-win-surface-mid bg-win-surface">
        <ToolbarButton
          label="뒤로 가기"
          isDisabled={isRootView}
          onClick={handleShowRoot}
        >
          <svg aria-hidden="true" viewBox="0 0 19 12" className="h-3 w-4 fill-current">
            <path d="M9.332 3.193H17.9c.217 0 .395.184.395.41v5.144c0 .226-.178.41-.395.41H9.332v2.276a.404.404 0 0 1-.207.36.376.376 0 0 1-.404-.017L.93 6.518a.403.403 0 0 1-.18-.343c0-.143.064-.265.18-.343L8.72.573a.376.376 0 0 1 .404-.017c.13.073.207.206.207.36v2.277Z" />
          </svg>
        </ToolbarButton>
        <ToolbarButton label="홈" onClick={handleShowRoot}>
          <svg aria-hidden="true" viewBox="0 0 23 21" className="h-4 w-4 fill-current">
            <path d="M19.672 8.06V2.651H15.73l-.001 1.47L11.667.067 3.837 8.01.75 11.143h3.086v9.595h5.367v-.047l.003.035h5.095v.012h5.371v-9.595h3.086L19.672 8.06Zm-4.623 4.588h-2.952V9.589h2.952v3.059Zm-3.65-3.059v3.059H8.472V9.589h2.927Zm-2.927 6.814v-3.032h2.927v3.032H8.472Zm3.625 0v-3.032h2.952v3.032h-2.952Z" />
          </svg>
        </ToolbarButton>
        <div className="flex flex-1 items-center bg-win-surface px-3 py-1.5">
          <div className="flex h-full w-full items-center border-2 border-win-surface-mid bg-white px-3 font-retro-terminal text-2xs text-win-ink">
            {isRootView
              ? "C:\\Documents\\"
              : `C:\\Documents\\${currentFolder?.label ?? ""}\\`}
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 bg-white">
        {isRootView ? (
          <div className="grid grid-cols-3 gap-x-12 gap-y-8 px-10 pb-8 pt-7">
            {FOLDERS.map((folder) => (
              <button
                key={folder.key}
                type="button"
                onClick={() => handleOpenFolder(folder.key)}
                className="flex w-[110px] flex-col items-center gap-3 text-center"
              >
                <Image
                  src={icons.iconFolder}
                  alt=""
                  width={148}
                  height={119}
                  className="h-auto w-[70px] drop-shadow-[0_0_10px_rgba(0,0,0,0.25)]"
                />
                <span className="font-retro-terminal text-[0.9rem] uppercase tracking-[0.01em] text-win-ink">
                  {folder.label}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="h-full bg-win-surface p-3">
            <div className="flex h-full flex-col overflow-hidden border-2 border-white bg-[#efefef]">
              <div className="border-b-2 border-win-surface-mid bg-white px-4 py-2 font-retro-terminal text-2xs uppercase tracking-[0.08em] text-win-ink">
                {currentFolder?.label}
              </div>
              <div className="min-h-0 flex-1 overflow-hidden">
                <DocumentsFolderContent selectedFolder={selectedFolder} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
