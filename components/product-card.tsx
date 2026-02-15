"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { formatPrice, type Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.nameKo}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() =>
            addItem({
              id: product.id,
              name: product.nameKo,
              price: product.price,
              image: product.image,
            })
          }
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground opacity-0 transition-all duration-300 hover:bg-primary/90 group-hover:opacity-100"
          aria-label={`${product.nameKo} 장바구니에 추가`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 pt-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {product.category === "zonal" ? "Zonal" : product.category === "ivy" ? "Ivy" : "Scented"}
        </p>
        <h3 className="font-serif text-base text-foreground">{product.nameKo}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
