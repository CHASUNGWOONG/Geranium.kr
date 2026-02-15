"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const filters = [
  { label: "전체", value: "all" },
  { label: "조날", value: "zonal" },
  { label: "아이비", value: "ivy" },
  { label: "센티드", value: "scented" },
]

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filtered =
    activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter)

  return (
    <section id="products" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">제라늄 컬렉션</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            정성스럽게 키운 프리미엄 제라늄을 만나보세요. 각각의 품종이 가진 고유한 매력을 발견할 수 있습니다.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-colors ${
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
