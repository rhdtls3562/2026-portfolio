/** 컬러풀 창 UI에 사용하는 섹션별 데이터 집합. */
export const ABOUT_SECTION_THEMES = [
  {
    sectionClassName: "bg-[#f7f7f7]",
    badgeClassName: "bg-[#fff1f6] text-[#c2185b]",
  },
  {
    sectionClassName: "bg-white",
    badgeClassName: "bg-[#edf8ef] text-[#2e7d32]",
  },
  {
    sectionClassName: "bg-[#f7f7f7]",
    badgeClassName: "bg-[#f2ecfb] text-[#5e35b1]",
  },
] as const;

export const CAREER_ITEMS = [
  {
    period: "2024.10 – 2025.10",
    company: "Chavron",
    role: "웹퍼블리싱 · 웹디자인",
    cardClassName: "bg-[#fff4f8]",
    dotClassName: "bg-[#f48fb1]",
  },
  {
    period: "2023.11 – 2024.09",
    company: "피알몽땅",
    role: "웹서비스기획 · 모바일기획 · UI 설계 및 디자인",
    cardClassName: "bg-[#fff9eb]",
    dotClassName: "bg-[#ffd54f]",
  },
  {
    period: "2022.01 – 2023.10",
    company: "엔클레어 / 댕댕펫",
    role: "웹디자이너 · 프리랜서",
    cardClassName: "bg-[#eef9f0]",
    dotClassName: "bg-[#81c784]",
  },
  {
    period: "2021.06 – 2021.12",
    company: "하이어랭크",
    role: "웹디자인 · 서비스 기획",
    cardClassName: "bg-[#f4effd]",
    dotClassName: "bg-[#9575cd]",
  },
  {
    period: "2020.05 – 2021.05",
    company: "SY(서연)성형외과",
    role: "웹배너제작 · 웹디자인",
    cardClassName: "bg-[#eef6ff]",
    dotClassName: "bg-[#64b5f6]",
  },
  {
    period: "2019.05 – 2020.05",
    company: "SU-디자인 광고기획사",
    role: "옥외광고디자인",
    cardClassName: "bg-[#f6f6f6]",
    dotClassName: "bg-[#bdbdbd]",
  },
] as const;

export const CERTIFICATION_ITEMS = [
  {
    year: "2025.11–2026.05",
    title: "Codeit Frontend 개발자 부트캠프",
    description: "6개월 과정 수료 · 프로젝트 팀장",
    cardClassName: "bg-[#fff4f8]",
    yearClassName: "border-[#f4cade] bg-white text-[#c2185b]",
  },
  {
    year: "2018.05–2019.03",
    title: "Cut above academy, Digital Design",
    description: "뉴질랜드 유학 · 미술, 특수분장 전공",
    cardClassName: "bg-[#eef9f0]",
    yearClassName: "border-[#cde8d0] bg-white text-[#2e7d32]",
  },
  {
    year: "2024.07",
    title: "GTQ 포토샵 1급 만점 취득",
    description: "GTQ 그래픽기술자격",
    cardClassName: "bg-[#f4effd]",
    yearClassName: "border-[#d9cdf3] bg-white text-[#5e35b1]",
  },
  {
    year: "2018.03",
    title: "IELTS 6.0 취득",
    description: "NZ school of tourism 교내 자체시험",
    cardClassName: "bg-[#eef6ff]",
    yearClassName: "border-[#cde2fb] bg-white text-[#1565c0]",
  },
] as const;

export const ABOUT_GLANCE_ITEMS = [
  {
    title: "Frontend Developer · Web Publisher",
    description: "저와 가장 가까운 정체성을 한 줄로 정리한 프로필 요약입니다.",
    cardClassName: "border-[#f5d5e3] bg-[#fff5f9]",
  },
  {
    title: "5 years 6 months",
    description:
      "웹디자인, 웹퍼블리싱, 서비스 기획을 넘나들며 실무 경력을 쌓아왔습니다.",
    cardClassName: "border-[#d8ecda] bg-[#f3fbf4]",
  },
  {
    title: "Design background",
    description: "미술전공 출신 배경을 기반으로 시각적 완성도를 다집니다.",
    cardClassName: "border-[#ddd0f4] bg-[#f7f3fd]",
  },
] as const;

export const SKILL_HIGHLIGHT_ITEMS = [
  {
    title: "Responsive publishing",
    description:
      "브랜드 화면을 디바이스에 맞게 자연스럽게 재구성하는 퍼블리싱 역량",
    cardClassName: "border-[#f5d5e3] bg-[#fff5f9]",
  },
  {
    title: "Frontend Architecture",
    description:
      "재사용 가능한 컴포넌트와 일관된 상태 관리 구조를 설계하며 유지보수성과 확장성을 고려한 프론트엔드 개발 방식",
    cardClassName: "border-[#d8ecda] bg-[#f3fbf4]",
  },
  {
    title: "AI-assisted workflow",
    description:
      "Codex, Claude Code 같은 도구를 실제 작업 흐름에 통합하는 습관",
    cardClassName: "border-[#ddd0f4] bg-[#f7f3fd]",
  },
] as const;

export const CONTACT_TOPIC_ITEMS = [
  {
    title: "Web publishing",
    description: "반응형 퍼블리싱과 디자인 의도 반영이 필요한 협업",
    cardClassName: "border-[#f5d5e3] bg-[#fff5f9]",
  },
  {
    title: "UI refresh",
    description: "기존 화면을 더 명확하고 보기 좋게 다듬는 개선 작업",
    cardClassName: "border-[#fff0c8] bg-[#fffaf0]",
  },
  {
    title: "Team workflow",
    description: "디자인과 개발 사이 커뮤니케이션을 줄이는 실무형 협업",
    cardClassName: "border-[#d8ecda] bg-[#f3fbf4]",
  },
] as const;
