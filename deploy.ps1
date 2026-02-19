# Geranium Vercel 배포 스크립트
# 터미널에서 직접 실행하세요: .\deploy.ps1

Set-Location $PSScriptRoot

if (-not (Test-Path ".vercel\project.json")) {
    Write-Host "처음 배포입니다. 프로젝트를 Vercel에 연결합니다..." -ForegroundColor Yellow
    Write-Host "스코프 선택 시 'gorgeoussung-6530s projects'를 선택하고, 프로젝트 이름은 Enter로 기본값(geranium)을 쓰면 됩니다." -ForegroundColor Cyan
    npx vercel link
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}

Write-Host "`n프로덕션 배포 중..." -ForegroundColor Green
npx vercel --prod
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "`n배포가 완료되었습니다. 위에 출력된 URL로 접속하세요." -ForegroundColor Green
