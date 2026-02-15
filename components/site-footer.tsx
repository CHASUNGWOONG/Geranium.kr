import { Flower2 } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <span className="font-serif text-lg text-foreground">Bloom & Petal</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              프리미엄 제라늄 전문 온라인 플라워 샵.
              아름다운 제라늄으로 당신의 공간을 채워보세요.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Shop</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><a href="#products" className="text-xs text-muted-foreground transition-colors hover:text-foreground">전체 상품</a></li>
              <li><a href="#products" className="text-xs text-muted-foreground transition-colors hover:text-foreground">조날 제라늄</a></li>
              <li><a href="#products" className="text-xs text-muted-foreground transition-colors hover:text-foreground">아이비 제라늄</a></li>
              <li><a href="#products" className="text-xs text-muted-foreground transition-colors hover:text-foreground">센티드 제라늄</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">배송 안내</a></li>
              <li><a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">교환/반품</a></li>
              <li><a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">식물 관리 가이드</a></li>
              <li><a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">자주 묻는 질문</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li><span className="text-xs text-muted-foreground">freeofgod@naver.com</span></li>
              <li><span className="text-xs text-muted-foreground">010-7900-9516</span></li>
              <li><span className="text-xs text-muted-foreground">{"평일 09:00 - 18:00"}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-[11px] text-muted-foreground">
            {"© 2026 Bloom & Petal. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-muted-foreground transition-colors hover:text-foreground">
              개인정보처리방침
            </a>
            <a href="#" className="text-[11px] text-muted-foreground transition-colors hover:text-foreground">
              이용약관
            </a>
            <a href="#" className="text-[11px] text-muted-foreground transition-colors hover:text-foreground">
              사업자정보
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
