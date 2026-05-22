/** 외부 링크를 작은 브라우저 창 스타일로 노출하는 컴포넌트. */
import RetroConnectionPanel from "@/app/(home)/components/RetroConnectionPanel";
import WindowActionButton from "@/app/(home)/components/WindowActionButton";
import { LINKS } from "@/app/(home)/constants/retroPortfolioData";
import { INTERNET_WINDOW_FIELDS } from "@/app/(home)/constants/retroWindowData";

export default function InternetWindow() {
  return (
    <RetroConnectionPanel
      title="Cyber"
      accentTitle="Social"
      fields={INTERNET_WINDOW_FIELDS}
      footer="select a portal to open a new tab"
    >
      {LINKS.map((link) => (
        <WindowActionButton key={link.label} href={link.href}>
          {link.label}
        </WindowActionButton>
      ))}
    </RetroConnectionPanel>
  );
}
