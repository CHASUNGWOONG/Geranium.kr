# Geranium 배포 가이드

## 1. Git 사용자 설정 (최초 1회)

GitHub 계정에 사용하는 이메일과 이름을 설정하세요.

```powershell
git config --global user.email "본인GitHub이메일@example.com"
git config --global user.name "본인GitHub이름"
```

## 2. 첫 커밋 완료

```powershell
cd C:\CursorStudy\Geranium
git commit -m "Initial commit: Geranium Next.js project"
```

## 3. GitHub에 저장소 생성

1. https://github.com/new 접속
2. Repository name: `Geranium` (또는 원하는 이름)
3. Public 선택
4. **"Add a README file" 등 추가 옵션은 체크하지 마세요** (이미 로컬에 코드가 있음)
5. "Create repository" 클릭

## 4. 원격 저장소 연결 및 푸시

GitHub에서 만든 저장소 URL을 복사한 뒤, 아래에서 `YOUR_USERNAME`을 본인 GitHub 아이디로 바꿉니다.

```powershell
cd C:\CursorStudy\Geranium
git remote add origin https://github.com/YOUR_USERNAME/Geranium.git
git branch -M main
git push -u origin main
```

(저장소 이름을 Geranium이 아닌 다른 이름으로 만들었다면 URL의 마지막 부분을 그 이름으로 바꿉니다.)

## 5. 배포 (Vercel 권장 – Next.js 무료 배포)

1. https://vercel.com 접속 후 GitHub으로 로그인
2. "Add New..." → "Project" 선택
3. "Import"에서 **Geranium** 저장소 선택
4. "Deploy" 클릭 (설정 그대로 두면 됨)
5. 완료 후 `https://geranium-xxx.vercel.app` 형태의 URL로 접속 가능

---

### 요약

| 단계 | 명령/행동 |
|------|-----------|
| 1 | `git config --global user.email "이메일"` / `user.name "이름"` |
| 2 | `git commit -m "Initial commit: Geranium Next.js project"` |
| 3 | GitHub에서 새 저장소 생성 (README 등 추가 없이) |
| 4 | `git remote add origin https://github.com/YOUR_USERNAME/Geranium.git` |
| 5 | `git branch -M main` → `git push -u origin main` |
| 6 | Vercel에서 해당 저장소 Import 후 Deploy |
