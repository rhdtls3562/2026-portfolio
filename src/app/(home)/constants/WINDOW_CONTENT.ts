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
    company: "쉐브론",
    role: "웹퍼블리싱 · UI/UX 디자인",
    cardClassName: "bg-[#fff4f8]",
    dotClassName: "bg-[#f48fb1]",
  },
  {
    period: "2023.11 – 2024.09",
    company: "피알몽땅",
    role: "웹디자인 · 서비스 기획 (대리)",
    cardClassName: "bg-[#fff9eb]",
    dotClassName: "bg-[#ffd54f]",
  },
  {
    period: "2022.01 – 2023.10",
    company: "엔클레어 / 댕댕펫",
    role: "웹디자인 (프리랜서)",
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
    company: "서연성형외과",
    role: "웹디자인 · BI",
    cardClassName: "bg-[#eef6ff]",
    dotClassName: "bg-[#64b5f6]",
  },
  {
    period: "2019.05 – 2020.05",
    company: "수디자인광고기획",
    role: "웹디자인 · 옥외광고",
    cardClassName: "bg-[#f6f6f6]",
    dotClassName: "bg-[#bdbdbd]",
  },
] as const;

export const CERTIFICATION_ITEMS = [
  {
    year: "2025–2026",
    title: "코드잇 프론트엔드 개발자 부트캠프 수료",
    description: "'흠잡을 곳이 없다' 평가 · 팀 프로젝트 팀장 2회",
    cardClassName: "bg-[#fff4f8]",
    yearClassName: "border-[#f4cade] bg-white text-[#c2185b]",
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
    description: "Cut above academy, New Zealand",
    cardClassName: "bg-[#eef6ff]",
    yearClassName: "border-[#cde2fb] bg-white text-[#1565c0]",
  },
] as const;

export const SOCIAL_PRESENCE_ITEMS = [
  {
    title: "Code archive",
    description: "구현 결과와 코드 기록, 작업 맥락이 가장 빠르게 쌓이는 공간입니다.",
    cardClassName: "border-[#f5d5e3] bg-[#fff5f9]",
  },
  {
    title: "Portfolio showcase",
    description: "완성된 결과물을 시각적으로 정리한 포트폴리오 아카이브를 보여줍니다.",
    cardClassName: "border-[#d8ecda] bg-[#f3fbf4]",
  },
  {
    title: "Process notes",
    description: "작업 메모, 회고, 프론트엔드 학습 기록을 꾸준히 남기는 로그입니다.",
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
