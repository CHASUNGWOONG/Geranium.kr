import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[500px] w-full lg:h-[85vh]">
        <Image
          src="/images/hero-geranium.jpg"
          alt="아름다운 제라늄 꽃 컬렉션"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/30" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-background/80">
            Premium Geranium Collection
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-background md:text-6xl lg:text-7xl">
            <span className="text-balance">
              당신의 공간에 피어나는 아름다움
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-background/80 md:text-base">
            엄선된 프리미엄 제라늄으로 일상에 싱그러운 자연의 기운을 더해보세요.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-none border border-background bg-background px-8 py-3 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-background/90"
            >
              컬렉션 보기
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-none border border-background/60 bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-background transition-colors hover:bg-background/10"
            >
              브랜드 스토리
            </a>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="overflow-hidden border-b border-t border-border/60 bg-primary py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs uppercase tracking-[0.25em] text-primary-foreground/80"
            >
              ZONAL GERANIUM &nbsp;&bull;&nbsp; IVY GERANIUM &nbsp;&bull;&nbsp; SCENTED GERANIUM &nbsp;&bull;&nbsp; PREMIUM QUALITY &nbsp;&bull;&nbsp; FREE SHIPPING &nbsp;&bull;&nbsp; PLANT CARE GUIDE
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
