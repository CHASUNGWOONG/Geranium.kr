# Bloom & Petal - 제라늄 전문 쇼핑몰

v0에서 다운로드한 프로젝트입니다. **npx로 생성한 프로젝트와 동일하게** 아래 순서로 실행하면 됩니다.

## 실행 방법 (npx 생성 프로젝트와 동일)

### 1. 의존성 설치

프로젝트 폴더에서 한 번만 실행하세요. (다운로드 시 `node_modules`가 없으므로 필요합니다.)

```powershell
cd c:\CursorStudy\PROJECT
$env:Path = "C:\Program Files\nodejs;" + $env:Path
npm install --legacy-peer-deps
```

(의존성 충돌 시 `--legacy-peer-deps`가 필요할 수 있습니다. pnpm을 쓰는 경우:

```bash
cd c:\CursorStudy\PROJECT
pnpm install
```

### 2. 개발 서버 실행

**Cursor 터미널에서 PATH에 Node가 안 잡혀 있다면** 아래처럼 한 줄로 실행하세요:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path; npm run dev
```

또는 Node가 이미 PATH에 있다면:

```bash
npm run dev
```

브라우저에서 **http://localhost:3000** 으로 접속하면 쇼핑몰이 표시됩니다.

---

## npx 방식과의 차이

| 구분 | 예전 방식 (npx) | 지금 방식 (다운로드) |
|------|-----------------|----------------------|
| 프로젝트 생성 | `npx create-v0-app@latest` 등으로 폴더 생성 + 자동 설치 | ZIP/폴더 다운로드 (파일만 있음) |
| 동일하게 쓰려면 | (이미 설치됨) | **위 1번 `npm install` 한 번 실행** |
| 실행 | `npm run dev` | **동일하게 `npm run dev`** |

즉, **`npm install` 한 번만 해 주면** 이후 사용 방법은 npx로 만든 프로젝트와 같습니다.

## 사용 가능한 스크립트

- `npm run dev` — 개발 서버 (핫 리로드)
- `npm run build` — 프로덕션 빌드
- `npm run start` — 빌드 후 서버 실행
- `npm run lint` — ESLint 실행
