# 2026 Portfolio

권새롬 포트폴리오입니다.  
CRT 모니터 전원 연출, 데스크톱 오브젝트 인터랙션, 프로젝트 아카이브, 스킬/연락 창까지 하나의 화면 흐름으로 구성한 Next.js 16 기반 프론트엔드 프로젝트입니다.

## Overview

- 전원 버튼을 누르면 CRT 스타일 화면 켜짐/꺼짐 애니메이션이 재생됩니다.
- 프로필과 하단 4개 아이콘을 중심으로 `About ME`, `Project`, `Skill`, `Contact` 창을 열 수 있습니다.
- 배경 폴더를 클릭하면 연결된 이미지가 폴더 위로 튀어나오듯 미리보기 됩니다.
- `Contact`와 메일 링크는 네이버 메일 작성 화면으로 연결됩니다.
- 추천서 링크는 PDF 파일을 새 탭에서 바로 열 수 있도록 구성되어 있습니다.

## Main Features

- 레트로 CRT 전원 온/오프 애니메이션
- 데스크톱 배경 오브젝트 순차 등장 애니메이션
- 하단 4개 앱 아이콘 hover 툴팁
- 폴더 클릭형 이미지 미리보기
- 프로젝트 카드 기반 포트폴리오 아카이브
- 추천서 PDF 열기
- 네이버 메일 작성 페이지 연결

## Tech Stack

- Next.js 16.2.6
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- clsx
- tailwind-merge

## Content

포트폴리오 안에는 다음 내용이 반영되어 있습니다.

- 실무 프로젝트
  - Chavron
  - 피알몽땅
  - 엔클레어 / 댕댕펫
  - Sevenzero
  - 서연성형외과
  - 수디자인광고기획
- 부트캠프 팀 프로젝트
  - Coworkers
  - Taskify
- 소개 / 경력 / 기술 스택 / 연락처
- 디자이너 추천서 PDF
- 웹퍼블리셔 추천서 PDF

## Run Locally

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

배포 확인용 빌드는 아래 명령으로 실행할 수 있습니다.

```bash
npm run build
npm run start
```

## Project Structure

```text
src
├─ app
│  ├─ (home)
│  │  ├─ components
│  │  └─ constants
│  └─ styles
├─ components
│  └─ layout
├─ constants
└─ utils
```

주요 파일 역할은 아래와 같습니다.

- `src/app/(home)/components`
  - 메인 레트로 데스크톱 화면과 각 창 UI 컴포넌트
- `src/app/(home)/constants`
  - 프로젝트, 링크, 폴더, 창 데이터
- `src/constants/ASSETS.ts`
  - 이미지, 아이콘, PDF 경로 관리
- `public/asset`
  - 실제 정적 에셋 보관

## Asset Notes

- 이미지와 아이콘 원본은 `public/asset` 아래에서 관리합니다.
- 코드에서는 `src/constants/ASSETS.ts`를 통해 에셋 경로를 참조합니다.
- 추천서 PDF는 `public/asset/pdf` 아래에 두고 링크로 연결합니다.

## Design Notes

- 기본 본문 폰트
  - 영문: `Montserrat`
  - 한글: `Mona12`
- 레퍼런스 무드
  - [moviepalaceonline](https://www.moviepalaceonline.com/)
- 데스크톱 오브젝트는 전원 켜짐 시 순차적으로 튀어나오도록 애니메이션 처리했습니다.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Reference

- [moviepalaceonline](https://www.moviepalaceonline.com/)
