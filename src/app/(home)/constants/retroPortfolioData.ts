/** 레트로 포트폴리오 데스크톱에서 사용하는 공통 데이터와 상태 타입을 정의한다. */
import { documents, icons, images } from "@/constants/ASSETS";
import { getNaverMailComposeHref } from "@/constants/NAVER_MAIL";

export const EMAIL = "rhdtls3562@naver.com";

export type AppKey = "internet" | "documents" | "emails" | "readme";
export type PowerState = "off" | "powering" | "powering-off" | "desktop";
export type FolderKey = "profile" | "records" | "stack";

export type DesktopApp = {
  key: AppKey;
  label: string;
  icon: string;
  width: number;
  height: number;
  imageClassName: string;
};
export type FolderItem = { key: FolderKey; label: string };
export type LinkItem = { label: string; href: string; note: string };
export type ProjectTone =
  | "pink"
  | "butter"
  | "mint"
  | "lavender"
  | "blue"
  | "cloud";

export const WINDOW_TITLE: Record<AppKey, string> = {
  readme: "About_Me.txt",
  documents: "Project.txt",
  internet: "Skill.txt",
  emails: "Contact.txt",
};

export const DESKTOP_APPS: DesktopApp[] = [
  {
    key: "readme",
    label: "about me",
    icon: icons.iconMore,
    width: 81,
    height: 87,
    imageClassName: "w-[52px] h-auto",
  },
  {
    key: "documents",
    label: "project",
    icon: icons.iconFile,
    width: 175,
    height: 156,
    imageClassName: "w-[63px] h-auto",
  },
  {
    key: "internet",
    label: "skill",
    icon: icons.iconEarth,
    width: 149,
    height: 149,
    imageClassName: "w-14 h-auto",
  },
  {
    key: "emails",
    label: "contact",
    icon: icons.iconMail,
    width: 155,
    height: 159,
    imageClassName: "w-[55px] h-auto",
  },
];

export const FOLDERS: FolderItem[] = [
  { key: "profile", label: "Profile" },
  { key: "records", label: "Career" },
  { key: "stack", label: "Stack" },
];

export const LINKS: LinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/rhdtls3562?tab=repositories",
    note: "구현 결과와 코드 기록",
  },
  {
    label: "Notion",
    href: "https://www.notion.so/2c40e03e823180ce9101f3db7c90bf27?v=2c40e03e8231811a8782000c92cceef9",
    note: "작업 메모와 회고 정리",
  },
  {
    label: "Mail",
    href: getNaverMailComposeHref({ to: EMAIL }),
    note: "협업 문의와 연락",
  },
  {
    label: "추천서",
    href: documents.recommendationPdf,
    note: "추천서 정리",
  },
];

export type Project = {
  title: string;
  period: string;
  tags: string[];
  desc: string;
  slug: string;
  tone: ProjectTone;
  href?: string;
  imageAlt?: string;
  imageSizes?: string;
  imageSrc?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Chavron",
    period: "2024.10 – 2025.10",
    tags: ["UI/UX", "반응형 퍼블리싱"],
    desc: "아모레퍼시픽 BTS·챗봇·립AR·두피진단 서비스 UI/UX 디자인 및 반응형 웹 퍼블리싱 담당",
    slug: "CHEVRON",
    tone: "pink",
    href: "https://buly.kr/jbS2Pq",
    imageSrc: images.imgBtsBrowser,
    imageAlt: "쉐브론 BTS 프로젝트 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "Coworkers",
    period: "2026.04 – 2026.05",
    tags: ["To do list", "Next.js", "Team Project"],
    desc: "팀 기반 To do list, 할 일 관리, 채용/홍보 기능을 묶은 협업 플랫폼입니다. 팀장으로 랜딩 페이지, 로그인, 마이히스토리 화면을 맡아 서비스 진입 경험과 개인 작업 흐름을 설계했습니다.",
    slug: "COWORKERS",
    tone: "lavender",
    href: "https://github.com/part4-3team/Coworkers",
    imageSrc: images.imgCoworkersBrowser,
    imageAlt: "Coworkers 프로젝트 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "Taskify",
    period: "2026.03 – 2026.04",
    tags: ["협업 관리", "대시보드", "Team Project"],
    desc: "팀원 간 업무를 생성·관리·공유하는 협업형 태스크 관리 서비스입니다. 태그·컬러칩·상태 뱃지·대시보드 제목·로고, 할 일 생성/수정 모달 UI, 마이페이지, 404 페이지, 페이지네이션을 담당했습니다.",
    slug: "TASKIFY",
    tone: "pink",
    href: "https://github.com/sprint22-part3-Team3/Taskify_Front",
    imageSrc: images.imgTaskifyBrowser,
    imageAlt: "Taskify 프로젝트 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },

  {
    title: "피알몽땅",
    period: "2023.11 – 2024.09",
    tags: ["Figma", "웹디자인", "UI/UX 기획"],
    desc: "브랜드 아이덴티티 설계부터 웹 퍼블리싱까지 전체 디자인 프로세스 주도. 웹서비스 기획 및 UI 설계",
    slug: "PRMONTDANG",
    tone: "butter",
    imageSrc: images.imgPrBrowser,
    imageAlt: "피알몽땅 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "엔클레어 / 댕댕펫",
    period: "2022.01 – 2023.10",
    tags: ["웹디자인", "콘텐츠디자인"],
    desc: "뷰티·반려동물 브랜드 온라인 마케팅 콘텐츠 기획 및 제작, 웹 페이지 디자인",
    slug: "ENCLAIR / DDANGPET",
    tone: "mint",
    imageSrc: images.imgDangBrowser,
    imageAlt: "댕댕펫 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "Sevenzero",
    period: "2021.06 – 2021.08",
    tags: ["UI/UX디자인", "웹퍼블리싱"],
    desc: "Ai 이미지 제작 사이트 Ginigen의 디자인 및 퍼블리싱",
    slug: "SEVENZERO",
    tone: "lavender",
    imageSrc: images.imgSevenBrowser,
    imageAlt: "지니젠 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "서연성형외과",
    period: "2020.05 – 2021.05",
    tags: ["웹디자인", "BI"],
    desc: "병원 BI를 반영한 홈페이지 디자인 및 유지보수, 이벤트 배너·온라인 홍보물 제작",
    slug: "SEOYEON CLINIC",
    tone: "blue",
    imageSrc: images.imgSyBrowser,
    imageAlt: "서연성형외과 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
  {
    title: "수디자인광고기획",
    period: "2019.05 – 2020.05",
    tags: ["웹디자인", "옥외광고"],
    desc: "다양한 클라이언트의 웹사이트 디자인 및 옥외광고 디자인으로 실무 역량 기초 확립",
    slug: "SU DESIGN",
    tone: "cloud",
    imageSrc: images.imgSuBrowser,
    imageAlt: "수디자인 대표 이미지",
    imageSizes: "(max-width: 1024px) 50vw, 320px",
  },
];

export const STACKS = [
  {
    category: "Language",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  { category: "Framework", items: ["React", "Next.js"] },
  {
    category: "Styling",
    items: ["Tailwind CSS", "반응형 퍼블리싱", "UI/UX 설계"],
  },
  {
    category: "Tool",
    items: ["Figma", "Adobe Photoshop", "Illustrator"],
  },
  {
    category: "Workflow",
    items: ["Git", "AI Codex", "Claude Code"],
  },
  {
    category: "Education",
    items: [
      "Codeit Frontend Bootcamp (2025.11–2026.05)",
      "Cut above academy, Digital Design (2018.05–2019.03)",
    ],
  },
];

export const README_PARAGRAPHS = [
  "디자인과 구현, 두 언어를 동시에 말할 수 있는 웹 전문가 권새롬입니다.",
  "쉐브론에서 아모레퍼시픽 BTS·챗봇·립AR·두피진단 서비스의 UI/UX 디자인과 반응형 웹 퍼블리싱을 담당하고 있습니다. 6년간 패션·뷰티·의료 등 다양한 산업군을 거치며 디자인 감성과 기술 구현력을 함께 쌓아왔습니다.",
  "현재 코드잇 프론트엔드 부트캠프를 수료하며 Next.js·TypeScript 기반 개발 역량을 확장 중입니다. 디자인 의도를 코드로 정확히 옮기는 하이브리드형 웹 전문가를 지향합니다.",
];
