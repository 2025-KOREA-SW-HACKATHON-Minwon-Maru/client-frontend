
  # AI Prompt Box Interface (Community)

  This is a code bundle for AI Prompt Box Interface (Community). The original project is available at https://www.figma.com/design/5IvoebkmzfTcXXAKECxXQC/AI-Prompt-Box-Interface--Community-.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
## 프로젝트 구조

```text
AI Prompt Box Interface (Community)/
├─ index.html                      # Vite 진입 HTML, #root에 React 앱 마운트
├─ package.json                    # 의존성, 스크립트(dev/build)
├─ vite.config.ts                  # Vite 설정(React SWC 플러그인)
├─ README.md                       # 프로젝트 안내 문서
└─ src/                            # 애플리케이션 소스
   ├─ main.tsx                     # React 엔트리, App을 #root에 렌더
   ├─ App.tsx                      # 최상위 화면 구성(페이지 컴포지션)
   ├─ index.css                    # 전역 스타일 엔트리(리셋/기본)
   ├─ styles/
   │  └─ globals.css              # 글로벌 유틸/토큰 등 공통 스타일
   ├─ Attributions.md              # 리소스 출처 표기(있을 경우)
   ├─ imports/                     # Figma에서 변환된 정적 레이아웃/리소스
   │  ├─ Dashboard.tsx            # 대시보드 예시 화면 컴포넌트
   │  └─ svg-okbbfnoanp.ts        # Dashboard에서 쓰는 SVG path 모음
   └─ components/                  # 재사용 UI 컴포넌트
      ├─ ChatInterface.tsx        # 채팅 UI 컨테이너
      ├─ Message.tsx              # 채팅 메시지 아이템
      ├─ PromptBox.tsx            # 프롬프트 박스(메인 UI)
      ├─ PromptInput.tsx          # 프롬프트 입력 필드/액션
      ├─ figma/
      │  └─ ImageWithFallback.tsx # 이미지 로딩 실패 시 대체 표시 컴포넌트
      └─ ui/                      # 버튼/모달/폼 등 기성 UI 프리미티브(shadcn/radix 기반)
         ├─ button.tsx, dialog.tsx, input.tsx, ...
         └─ utils.ts              # UI 유틸(클래스 병합 등)
```

## 폴더/파일 설명(요약)

- `index.html`: 개발/빌드 시 기준이 되는 단일 HTML. `#root`에 React 앱이 주입됩니다.
- `vite.config.ts`: 개발 서버/번들러 설정. React SWC 플러그인 사용으로 빠른 HMR/빌드.
- `src/main.tsx`: React 앱 부트스트랩. `App`을 DOM에 마운트.
- `src/App.tsx`: 페이지의 최상위 레이아웃/구성 관리. 필요 시 라우팅을 여기에 도입.
- `src/index.css`, `src/styles/globals.css`: 전역 스타일 엔트리/토큰. Tailwind 유틸리티 클래스와 병행 사용.
- `src/components/`: 실제 화면을 구성하는 재사용 컴포넌트들.
  - `ui/*`: 버튼, 카드, 다이얼로그, 폼 요소 등 기본 UI 빌딩블록.
  - `figma/ImageWithFallback.tsx`: 이미지 로딩 실패를 처리하는 대체 뷰.
  - `ChatInterface.tsx`, `PromptBox.tsx`, `PromptInput.tsx`, `Message.tsx`: 채팅/프롬프트 인터랙션 핵심 구성요소.
- `src/imports/`: Figma에서 변환된 정적 레이아웃 샘플.
  - `Dashboard.tsx`: 데모 대시보드. 이미지 리소스는 필요 시 `public/` 또는 `src/assets/`로 교체하세요.
  - `svg-okbbfnoanp.ts`: 다수의 아이콘/도형에 쓰이는 SVG path 데이터.

## 커스터마이징 가이드(간단)

- 라우팅이 필요하면 `react-router-dom`을 추가하고 `App.tsx`에 라우트를 구성하세요.
- 전역 상태가 필요하면 React Query/Zustand/Redux 등 도입을 검토하세요.
- 이미지/아이콘은 `public/` 또는 `src/assets/`에 추가 후 상대경로로 임포트하세요.
- API 연동은 별도 유틸(예: `src/lib/api.ts`)과 훅(`useQuery`)으로 UI와 분리하는 것을 권장합니다.

## Third-Party Attributions

- shadcn/ui — MIT License. 참고: https://ui.shadcn.com/ 및 해당 저장소 LICENSE
- Unsplash Photos — Unsplash License. 참고: https://unsplash.com/license
- 상세 출처는 `src/Attributions.md` 참조
