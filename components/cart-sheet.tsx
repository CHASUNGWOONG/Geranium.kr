"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col border-border/60 bg-card sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-serif text-lg text-foreground">
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            장바구니
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/30" strokeWidth={1} />
            <p className="text-sm text-muted-foreground">장바구니가 비어있습니다</p>
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="border-primary/20 text-foreground hover:bg-primary/5 hover:text-foreground"
            >
              쇼핑 계속하기
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
                          aria-label="수량 줄이기"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm text-foreground">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted"
                          aria-label="수량 늘리기"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-auto p-1 text-muted-foreground transition-colors hover:text-accent"
                          aria-label="상품 삭제"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <Separator className="bg-border/60" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">합계</span>
                <span className="font-serif text-lg font-semibold text-foreground">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                주문하기
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-muted-foreground hover:text-foreground"
              >
                장바구니 비우기
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
