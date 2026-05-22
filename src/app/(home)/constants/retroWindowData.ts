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
      "8살 때 미술 대회 대상을 받으며 '보기 좋게 만드는 것'에 집착하게 됐습니다. 예술고 졸업 후 뉴질랜드로 유학해 디지털 디자인을 전공하고, IELTS 6.0을 취득하며 전공 과정을 수료했습니다.",
      "패션·뷰티·의료·반려동물 등 다양한 산업에서 6년간 쌓아온 디자인 감성 위에, 코드잇 프론트엔드 부트캠프 수료로 개발 논리를 더한 하이브리드형 웹 전문가입니다.",
    ],
  },
  {
    title: "What I Do?",
    paragraphs: [
      "쉐브론에서 아모레퍼시픽 BTS·챗봇·립AR·두피진단 서비스의 UI/UX 설계와 반응형 퍼블리싱을 담당했습니다. 서비스마다 다른 사용자 흐름을 분석해 UI 구조를 매번 처음부터 설계하는 방식으로 일했습니다.",
      "디자이너의 의도를 코드로 정확히 옮기고, 브랜드 비주얼을 화면 위에 일관되게 구현하는 것이 핵심 역량입니다.",
    ],
  },
  {
    title: "How I Work?",
    paragraphs: [
      "코드잇 부트캠프 6개월 동안 두 번의 팀 프로젝트에서 모두 팀장을 맡아 기획부터 배포까지 전체 흐름을 이끌었습니다. 멘토와 강사로부터 '흠잡을 곳이 없다', 'AI를 개발 도구로 능숙하게 활용했다'는 평가를 받았습니다.",
      "AI codex, Claude Code 등 도구를 개발 워크플로우에 적극 통합해 팀 생산성을 높이는 방식으로 일합니다. 완성도와 속도를 함께 잡는 것이 목표입니다.",
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
