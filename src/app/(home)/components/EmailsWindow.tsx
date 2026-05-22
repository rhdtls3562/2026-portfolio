/** 연락용 메일 정보를 간단한 레트로 메일 창 형태로 보여주는 컴포넌트. */
"use client";

import { useState } from "react";
import RetroConnectionPanel from "@/app/(home)/components/RetroConnectionPanel";
import WindowActionButton from "@/app/(home)/components/WindowActionButton";
import { EMAIL } from "@/app/(home)/constants/retroPortfolioData";
import {
  EMAIL_WINDOW_FIELDS,
  EMAIL_WINDOW_MESSAGE,
} from "@/app/(home)/constants/retroWindowData";

export default function EmailsWindow() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <RetroConnectionPanel
      title="Direct"
      accentTitle="Mail"
      fields={EMAIL_WINDOW_FIELDS}
      footer="mail client can be launched from this panel"
    >
      <div className="w-full border-2 border-white bg-win-surface-mid px-[15px] py-3 font-retro-terminal text-sm leading-relaxed text-white shadow-[0_0_10px_rgba(0,0,0,0.25)]">
        {EMAIL_WINDOW_MESSAGE}
      </div>

      <div className="flex flex-wrap justify-center gap-x-[25px] gap-y-4">
        <WindowActionButton href={`mailto:${EMAIL}?subject=Let's build something together`}>
          Send Mail
        </WindowActionButton>
        <WindowActionButton onClick={handleCopyAddress}>
          {isCopied ? "Copied" : "Copy Mail"}
        </WindowActionButton>
      </div>
    </RetroConnectionPanel>
  );
}
