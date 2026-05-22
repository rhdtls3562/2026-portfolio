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
  documents: "h-[530px] w-[704px] max-h-[84%] max-w-[90%]",
  readme: "h-[544px] w-[704px] max-h-[84%] max-w-[90%]",
  internet: "h-[464px] w-[704px] max-h-[76%] max-w-[90%]",
  emails: "h-[464px] w-[704px] max-h-[76%] max-w-[90%]",
};

export const README_SECTIONS: ReadmeSection[] = [
  {
    title: "Who Am I?",
    paragraphs: [
      "디자인과 구현, 두 언어를 동시에 다루는 프론트엔드 개발자 권새롬입니다.",
      "브랜드 무드를 코드로 자연스럽게 옮기고, 화면이 실제로 동작하는 경험까지 완성하는 일을 좋아합니다.",
    ],
  },
  {
    title: "What I Do?",
    paragraphs: [
      "쉐브론에서 아모레퍼시픽 BTS, 챗봇, 립AR, 두피진단 서비스의 UI/UX 디자인과 반응형 웹 퍼블리싱을 담당하고 있습니다.",
      "패션, 뷰티, 의료, 반려동물 등 다양한 산업군에서 6년간 쌓은 감각을 바탕으로 서비스 화면을 설계하고 구현합니다.",
    ],
  },
  {
    title: "How I Work?",
    paragraphs: [
      "현재는 코드잇 프론트엔드 부트캠프를 수료하며 Next.js, TypeScript 기반 개발 역량을 확장하고 있습니다.",
      "디자인 의도를 해치지 않으면서도 협업하기 쉬운 구조와 컴포넌트 설계를 만드는 것을 중요한 기준으로 두고 있습니다.",
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
