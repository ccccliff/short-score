# 🧑‍💻기술 설계 & 개발 환경

## 📖 라이브러리

| 목적        | 라이브러리 패키지       |
| ----------- | ----------------------- |
| Next-js     | `next`                  |
| TypeScript  | `typescript`            |
| 스타일링    | `tailwindcss`           |
| 차트        | `apexcharts`            |
| 상태관리    | `zustand`               |
| 데이터 쿼리 | `@tanstack/react-query` |
| API 통신    | `axios`                 |

## 🌐 기술 스택

- 전역 상태 관리: Zustand
- 쿼리: TanStack Query
- 스타일: TailwindCSS
- 주가 차트 : ApexCharts

## 🔐 인증 / 보안

- .env 파일 + 내부 API Routes
- 키 보안

## 🚀 도구

- GitHub ⇒ Vercel
- 브랜치 전략: main / dev / feature
- Jira ⇒ 협업툴

## 🚀 배포

- Vercel

## 📁 App-router

├── .env.local # KIS API 키
├── README.md
├── package.json
├── tsconfig.json

├── app/
│ ├── layout.tsx # 글로벌 레이아웃
│ ├── page.tsx # 메인 페이지 (/): 공매도 상위 30 + 검색 (CSR)
│ ├── [slug]/ # 종목 상세 페이지 : 차트+점수+공매도 현황 (SSR)
│ │ └── page.tsx
│ └── api/
│ └── short/
│ ├── list/route.ts # GET /api/short/list
│ └── [slug]/route.ts # GET /api/short/[code]
├── components/
│ ├── HourlyChart.tsx # 1시간 단위 차트
│ ├── ShortDetail.tsx # 공매도 상세 정보 UI
│ ├── ShortScore.tsx # 점수 게이지 시각화
│ └── StockList.tsx # 메인 종목 리스트 UI
├── constants/
│ └── kis.ts # API 상수
├── data/
│ └── sector_avg_short.json # 업종 평균 공매도 비중(예정)
├── hooks/ # 커스텀훅
├── lib/
│ ├── api/
│ │ └── kis/
│ │ ├── getShortData.ts # 종목별 공매도 비중 API 호출
│ │ └── getToken.ts # Access Token 발급
│ ├── format.ts # 날짜, 숫자 포맷 유틸
│ └── score.ts # 공매도 점수 계산기
├── stores/
│ └── searchStore.ts # 전역 상태관리(Zustand)
├── styles/ # Tailwind 글로벌 스타일 등
├── types/
│ ├── api.d.ts # API 타입
│ ├── kis.d.ts # KIS API 타입
│ └── stock.d.ts # 종목 타입

### 📏 정렬 확장프로그램

- ESLint / Prettier
