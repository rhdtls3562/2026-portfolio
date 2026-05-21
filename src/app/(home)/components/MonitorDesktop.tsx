/** 전원이 켜진 모니터 안에서 데스크톱 아트보드와 앱 창을 관리하는 컴포넌트. */
"use client";

import Image from "next/image";
import DocumentsWindow from "@/app/(home)/components/DocumentsWindow";
import EmailsWindow from "@/app/(home)/components/EmailsWindow";
import InternetWindow from "@/app/(home)/components/InternetWindow";
import MonitorDesktopArtboard from "@/app/(home)/components/MonitorDesktopArtboard";
import ReadmeWindow from "@/app/(home)/components/ReadmeWindow";
import WindowChrome from "@/app/(home)/components/WindowChrome";
import {
  DESKTOP_APPS,
  type AppKey,
  type FolderKey,
} from "@/app/(home)/components/retro-constants";
import { cn } from "@/utils/cn";

type Props = {
  activeApp: AppKey | null;
  isInteractive: boolean;
  selectedFolder: FolderKey;
  onCloseApp: () => void;
  onOpenApp: (app: AppKey) => void;
  onSelectFolder: (f: FolderKey) => void;
};

export default function MonitorDesktop({
  activeApp,
  isInteractive,
  selectedFolder,
  onCloseApp,
  onOpenApp,
  onSelectFolder,
}: Props) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        "bg-d-bg",
        isInteractive ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <MonitorDesktopArtboard />

      <div className="absolute bottom-[5.5%] left-1/2 z-20 flex -translate-x-1/2 items-end gap-2.5">
        {DESKTOP_APPS.map((app) => (
          <button
            key={app.key}
            type="button"
            onClick={() => onOpenApp(app.key)}
            aria-label={app.label}
            className={cn(
              "relative flex flex-col items-center transition-all duration-150",
              "hover:-translate-y-1 hover:scale-110",
              activeApp === app.key ? "-translate-y-0.5 scale-110" : "",
            )}
          >
            <Image
              src={app.icon}
              alt=""
              width={120}
              height={120}
              className="size-14 drop-shadow-md"
            />
            {/* 활성 인디케이터 */}
            {activeApp === app.key && (
              <span className="absolute -bottom-1.5 size-1 rounded-full bg-d-ink" />
            )}
          </button>
        ))}
      </div>

      {/* ─── 앱 윈도우 ─── */}
      {activeApp && (
        <WindowChrome app={activeApp} onClose={onCloseApp}>
          {activeApp === "readme" && <ReadmeWindow />}
          {activeApp === "documents" && (
            <DocumentsWindow
              selectedFolder={selectedFolder}
              onSelectFolder={onSelectFolder}
            />
          )}
          {activeApp === "internet" && <InternetWindow />}
          {activeApp === "emails" && <EmailsWindow />}
        </WindowChrome>
      )}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-40">
        <div className="crt-screen-rgb absolute inset-0" />
        <div className="crt-screen-vignette absolute inset-0" />
      </div>
    </div>
  );
}
