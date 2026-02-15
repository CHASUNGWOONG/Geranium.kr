import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { categories } from "@/lib/products"

export function CategorySection() {
  return (
    <section id="categories" className="border-t border-border/60 bg-secondary/50 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Categories
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">카테고리별 탐색</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            제라늄은 다양한 종류가 있으며, 각각의 특성과 매력이 다릅니다. 원하는 카테고리를 선택해보세요.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-background/70">
                    {cat.count}{'개 상품'}
                  </p>
                  <h3 className="mt-1 font-serif text-xl text-background">
                    {cat.name}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between border border-t-0 border-border/60 bg-card px-6 py-4">
                <p className="text-xs text-muted-foreground">{cat.description}</p>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
