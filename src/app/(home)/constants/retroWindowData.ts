/** 레퍼런스형 앱 창 레이아웃과 내부 표시용 데이터를 정의한다. */
import type { AppKey } from "@/app/(home)/constants/retroPortfolioData";
import { EMAIL } from "@/app/(home)/constants/retroPortfolioData";

export type WindowPanelField = {
  label: string;
  value: string;
};

export type ReadmeSection = {
  title: string;
  paragraphs: string[];
};

export const WINDOW_SIZE_CLASS: Record<AppKey, string> = {
  documents: "h-[700px] w-[920px] max-h-[92%] max-w-[97%]",
  readme: "h-[700px] w-[920px] max-h-[92%] max-w-[97%]",
  internet: "h-[700px] w-[920px] max-h-[92%] max-w-[97%]",
  emails: "h-[700px] w-[920px] max-h-[92%] max-w-[97%]",
};

export const README_SECTIONS: ReadmeSection[] = [
  {
    title: "Who Am I?",
    paragraphs: [
      "8살 때 미술 대회 대상을 받은 뒤 '보기 좋게 만드는 일'에 꾸준히 몰입해왔습니다. 한국전통문화고등학교를 졸업한 뒤 뉴질랜드 아카데미 Cut above에서 색체와 조화를 공부하며 디자인 감각의 역량을 키웠습니다.",
      "IELTS 6.0을 취득하며 낯선 환경에서도 적극적으로 커뮤니케이션하는 태도를 익혔고, 이후 웹디자인과 퍼블리싱 실무로 자연스럽게 커리어를 확장했습니다.",
    ],
  },
  {
    title: "What I Do?",
    paragraphs: [
      "약 6년 동안 패션, 뷰티, 의료, 반려동물 분야를 거치며 웹디자인, 웹퍼블리싱, 웹서비스 기획을 함께 담당했습니다. 현재는 쉐브론에서 아모레퍼시픽 BTS, 챗봇, 립 AR, 두피 진단 서비스의 웹퍼블리싱과 웹디자인을 진행했습니다.",
      "서비스마다 다른 사용자 목적과 흐름을 먼저 파악한 뒤 UI 구조를 설계하고, 디자이너의 의도를 코드로 정확히 연결하는 것이 제 핵심 역할입니다.",
    ],
  },
  {
    title: "How I Work?",
    paragraphs: [
      "코드잇 프론트엔드 부트캠프 6개월 동안 팀 프로젝트에서 팀장을 맡아 기획부터 배포까지 전체 흐름을 이끌었습니다. 완성도, UI 디테일, 코드 구조까지 끝까지 챙기는 방식으로 일합니다.",
      "AI Codex, Claude Code 같은 도구를 단순 보조가 아니라 실제 개발 워크플로우에 통합해 생산성과 완성도를 함께 높이는 편입니다.",
    ],
  },
];

export const INTERNET_WINDOW_FIELDS: WindowPanelField[] = [
  { label: "Server", value: "kwonsaerom.network" },
  { label: "Access", value: "public links enabled" },
];

export const EMAIL_WINDOW_FIELDS: WindowPanelField[] = [
  { label: "To", value: EMAIL },
  { label: "Subject", value: "Let's build something together" },
];

export const EMAIL_WINDOW_MESSAGE =
  "새로운 기회, 협업 제안, 가벼운 인사까지 언제든 환영합니다. 화면 밖에서도 자연스럽게 이어질 수 있는 좋은 팀워크를 기대하고 있습니다.";
