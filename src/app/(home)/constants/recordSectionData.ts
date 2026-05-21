/** 메인 기록 섹션에서 사용하는 프로젝트 카드 데이터를 정의한다. */
export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  period: string;
  role: string;
  links?: { github?: string; demo?: string };
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description:
      '사용자 중심의 대시보드 UI를 구현한 프로젝트. TanStack Query와 React Hook Form을 활용해 서버 상태 관리와 폼 처리를 최적화했습니다.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'TanStack Query'],
    period: '2025.09 — 2025.12',
    role: 'Frontend Developer',
    links: { github: 'https://github.com', demo: 'https://vercel.app' },
  },
  {
    id: 2,
    title: 'Project Beta',
    description:
      '팀 협업 툴의 프론트엔드를 담당. 컴포넌트 설계와 재사용성을 고려한 공통 UI 시스템을 구축하였습니다.',
    tags: ['React', 'TypeScript', 'Zod', 'React Hook Form'],
    period: '2025.03 — 2025.07',
    role: 'Frontend Developer',
    links: { github: 'https://github.com' },
  },
  {
    id: 3,
    title: 'Project Gamma',
    description:
      '반응형 웹 애플리케이션 개발. 접근성과 시맨틱 마크업을 중점으로 다양한 디바이스 환경에서 일관된 UX를 제공했습니다.',
    tags: ['Next.js', 'Tailwind CSS', 'ESLint', 'Vercel'],
    period: '2024.10 — 2025.02',
    role: 'Frontend Developer',
    links: { github: 'https://github.com', demo: 'https://vercel.app' },
  },
];
