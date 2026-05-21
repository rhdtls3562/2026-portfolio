/** 레트로 포트폴리오 데스크톱에서 사용하는 공통 데이터와 상태 타입을 정의한다. */
import { icons } from "@/constants/assets";

export const EMAIL = "rhdtls3562@naver.com";

export type AppKey = "internet" | "documents" | "emails" | "readme";
export type PowerState = "off" | "powering" | "powering-off" | "desktop";
export type FolderKey = "profile" | "records" | "stack";

export type DesktopApp = { key: AppKey; label: string; icon: string };
export type FolderItem = { key: FolderKey; label: string };
export type LinkItem = { label: string; href: string; note: string };

export const WINDOW_TITLE: Record<AppKey, string> = {
  readme: "Readme.txt",
  documents: "Documents",
  internet: "Internet",
  emails: "Emails",
};

export const DESKTOP_APPS: DesktopApp[] = [
  { key: "readme", label: "about me", icon: icons.iconMore },
  { key: "documents", label: "records", icon: icons.iconFile },
  { key: "internet", label: "social", icon: icons.iconEarth },
  { key: "emails", label: "contact", icon: icons.iconMail },
];

export const FOLDERS: FolderItem[] = [
  { key: "profile", label: "Profile" },
  { key: "records", label: "Career" },
  { key: "stack", label: "Stack" },
];

export const LINKS: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/kwonsaerom",
    note: "구현 결과와 코드 기록",
  },
  {
    label: "Portfolio",
    href: "https://rhdtls3562.github.io/portfolio2025/",
    note: "2025년 디자인 & 개발 포트폴리오",
  },
  {
    label: "Velog",
    href: "https://velog.io/@kwonsaerom",
    note: "작업 메모와 회고 정리",
  },
  { label: "Mail", href: `mailto:${EMAIL}`, note: "협업 문의와 연락" },
];

export const PROJECTS = [
  {
    title: "쉐브론",
    period: "2024.10 – 현재",
    tags: ["UI/UX", "반응형 퍼블리싱"],
    desc: "아모레퍼시픽 BTS·챗봇·립AR·두피진단 서비스 UI/UX 디자인 및 반응형 웹 퍼블리싱",
  },
  {
    title: "피알몽땅",
    period: "2023.11 – 2024.10",
    tags: ["Figma", "웹디자인", "팀 리드"],
    desc: "브랜드 아이덴티티 설계부터 웹사이트 퍼블리싱까지 전체 디자인 프로세스 주도",
  },
  {
    title: "엔클레어 / 댕댕펫",
    period: "2022.10 – 2023.11",
    tags: ["웹디자인", "콘텐츠디자인"],
    desc: "뷰티·반려동물 브랜드 온라인 마케팅 콘텐츠 및 웹 페이지 디자인",
  },
  {
    title: "하이어랭크",
    period: "2021.06 – 2021.12",
    tags: ["UI/UX디자인", "패션브랜드"],
    desc: "형지그룹(엘리트·까스텔바작·올리비아허슬러) 패션 브랜드 웹디자인",
  },
  {
    title: "서연성형외과의원",
    period: "2020.05 – 2021.05",
    tags: ["웹디자인", "BI"],
    desc: "병원 BI 반영 홈페이지 디자인·유지보수, 이벤트 배너·온라인 홍보물 제작",
  },
  {
    title: "수디자인광고기획",
    period: "2019.05 – 2020.05",
    tags: ["웹디자인", "옥외광고"],
    desc: "다양한 클라이언트의 웹사이트 및 옥외광고 디자인으로 실무 역량 기초 확립",
  },
];

export const STACKS = [
  {
    category: "Language",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  { category: "Framework", items: ["Next.js", "React", "Bootstrap"] },
  { category: "Styling", items: ["Tailwind CSS", "반응형 웹", "UI/UX 디자인"] },
  {
    category: "Tool",
    items: ["Figma", "Adobe Photoshop", "Illustrator", "Git"],
  },
  {
    category: "State / Form",
    items: ["TanStack Query", "Zod", "React Hook Form"],
  },
  {
    category: "Education",
    items: ["코드잇 부트캠프(2025–2026)", "MBC 웹퍼블리셔 과정(2024)"],
  },
];

export const README_PARAGRAPHS = [
  "디자인과 구현, 두 언어를 동시에 말할 수 있는 웹 전문가 권새롬입니다.",
  "쉐브론에서 아모레퍼시픽 BTS·챗봇·립AR·두피진단 서비스의 UI/UX 디자인과 반응형 웹 퍼블리싱을 담당하고 있습니다. 6년간 패션·뷰티·의료 등 다양한 산업군을 거치며 디자인 감성과 기술 구현력을 함께 쌓아왔습니다.",
  "현재 코드잇 프론트엔드 부트캠프를 수료하며 Next.js·TypeScript 기반 개발 역량을 확장 중입니다. 디자인 의도를 코드로 정확히 옮기는 하이브리드형 웹 전문가를 지향합니다.",
];
