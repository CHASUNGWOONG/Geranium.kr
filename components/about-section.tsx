import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/about-greenhouse.jpg"
              alt="Bloom & Petal 온실"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Our Story
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              자연과 함께하는 이야기
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Bloom & Petal은 제라늄에 대한 깊은 사랑에서 시작되었습니다.
                10년 넘게 제라늄을 연구하고 재배해온 전문 농장에서
                직접 키운 건강한 식물만을 엄선하여 보내드립니다.
              </p>
              <p>
                우리의 온실에서는 최적의 환경에서 정성스럽게 관리된
                다양한 품종의 제라늄이 자라고 있습니다. 조날, 아이비,
                센티드 등 각 품종의 특성을 살려 최상의 상태로 여러분께 전해드립니다.
              </p>
              <p>
                모든 식물은 안전한 포장과 함께 배송되며, 구매 후에도
                제라늄 관리에 대한 전문 상담을 무료로 제공하고 있습니다.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-10">
              <div>
                <p className="font-serif text-2xl text-foreground md:text-3xl">10+</p>
                <p className="mt-1 text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground md:text-3xl">50+</p>
                <p className="mt-1 text-xs text-muted-foreground">Varieties</p>
              </div>
              <div>
                <p className="font-serif text-2xl text-foreground md:text-3xl">5K+</p>
                <p className="mt-1 text-xs text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
