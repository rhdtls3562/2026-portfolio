/** CRT 전원 연출과 레트로 데스크톱 인터랙션을 관리하는 메인 씬 컴포넌트. */
"use client";

import { useEffect, useState } from "react";
import RetroPortfolioBackground from "@/app/(home)/components/RetroPortfolioBackground";
import RetroPortfolioScreen from "@/app/(home)/components/RetroPortfolioScreen";
import {
  type AppKey,
  type FolderKey,
  type PowerState,
} from "@/app/(home)/components/retro-constants";

export default function RetroPortfolio() {
  const [powerState, setPowerState] = useState<PowerState>("off");
  const [buttonLit, setButtonLit] = useState(false);
  const [screenVisible, setScreenVisible] = useState(false);
  const [activeApp, setActiveApp] = useState<AppKey | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<FolderKey>("profile");

  useEffect(() => {
    if (powerState !== "powering") return;
    const timers = [
      window.setTimeout(() => setButtonLit(true), 80),
      window.setTimeout(() => setPowerState("desktop"), 1080),
    ];
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [powerState]);

  const handlePowerToggle = () => {
    if (powerState === "powering" || powerState === "powering-off") return;
    if (powerState === "off") {
      setActiveApp(null);
      setSelectedFolder("profile");
      setButtonLit(false);
      setScreenVisible(true);
      setPowerState("powering");
      return;
    }
    setButtonLit(false);
    setPowerState("powering-off");
  };

  const handlePowerOffFinished = () => {
    setPowerState("off");
    setScreenVisible(false);
    setActiveApp(null);
    setSelectedFolder("profile");
  };

  return (
    <main className="relative h-screen overflow-hidden bg-black text-white">
      <RetroPortfolioBackground
        buttonLit={buttonLit}
        powerState={powerState}
        onTogglePower={handlePowerToggle}
      >
        <RetroPortfolioScreen
          activeApp={activeApp}
          powerState={powerState}
          screenVisible={screenVisible}
          selectedFolder={selectedFolder}
          onCloseApp={() => setActiveApp(null)}
          onOpenApp={setActiveApp}
          onPowerOffFinished={handlePowerOffFinished}
          onSelectFolder={setSelectedFolder}
        />
      </RetroPortfolioBackground>
    </main>
  );
}
