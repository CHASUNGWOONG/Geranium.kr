import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { CategorySection } from "@/components/category-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

<main className="relative min-h-screen">
  {/* 배경 이미지 */}
  <div
    className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/main_page_image.png')" }}
  />
  {/* 필요하면 어두운 오버레이 */}
  <div className="fixed inset-0 -z-10 bg-background/60" />
  <HeroSection />
  <ProductGrid />
  ...
</main>

export default function Page() {
  return (
    <CartProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <ProductGrid />
        <CategorySection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </CartProvider>
  )
}
