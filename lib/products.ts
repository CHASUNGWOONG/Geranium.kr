export interface Product {
  id: string
  name: string
  nameKo: string
  price: number
  image: string
  category: "zonal" | "ivy" | "scented"
  description: string
  badge?: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Red Zonal",
    nameKo: "로열 레드 조날",
    price: 25000,
    image: "/images/geranium-red.jpg",
    category: "zonal",
    description: "선명한 빨간색 꽃이 풍성하게 피는 대표적인 조날 제라늄입니다.",
    badge: "BEST",
  },
  {
    id: "2",
    name: "Blush Pink Zonal",
    nameKo: "블러쉬 핑크 조날",
    price: 22000,
    image: "/images/geranium-pink.jpg",
    category: "zonal",
    description: "부드러운 분홍색 꽃잎이 매력적인 조날 제라늄입니다.",
    badge: "NEW",
  },
  {
    id: "3",
    name: "Snow White Zonal",
    nameKo: "스노우 화이트 조날",
    price: 28000,
    image: "/images/geranium-white.jpg",
    category: "zonal",
    description: "순백의 꽃이 청초하게 피어나는 프리미엄 조날 제라늄입니다.",
  },
  {
    id: "4",
    name: "Sunset Salmon",
    nameKo: "선셋 살몬",
    price: 30000,
    image: "/images/geranium-salmon.jpg",
    category: "zonal",
    description: "따뜻한 살몬 색상이 일몰을 연상시키는 특별한 조날 제라늄입니다.",
    badge: "PREMIUM",
  },
  {
    id: "5",
    name: "Cascade Pink Ivy",
    nameKo: "캐스케이드 핑크 아이비",
    price: 35000,
    image: "/images/geranium-ivy.jpg",
    category: "ivy",
    description: "늘어지는 줄기에 분홍색 꽃이 풍성한 아이비 제라늄입니다.",
    badge: "POPULAR",
  },
  {
    id: "6",
    name: "Citronella Scented",
    nameKo: "시트로넬라 센티드",
    price: 32000,
    image: "/images/geranium-scented.jpg",
    category: "scented",
    description: "레몬 향이 나는 잎을 가진 센티드 제라늄으로 모기 퇴치 효과도 있습니다.",
  },
]

export const categories = [
  {
    id: "zonal",
    name: "조날 제라늄",
    nameEn: "Zonal",
    description: "화려한 꽃과 둥근 잎이 특징",
    image: "/images/cat-zonal.jpg",
    count: 4,
  },
  {
    id: "ivy",
    name: "아이비 제라늄",
    nameEn: "Ivy",
    description: "늘어지는 줄기와 우아한 자태",
    image: "/images/cat-ivy.jpg",
    count: 1,
  },
  {
    id: "scented",
    name: "센티드 제라늄",
    nameEn: "Scented",
    description: "향긋한 잎의 아로마 테라피",
    image: "/images/cat-scented.jpg",
    count: 1,
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(price) + "원"
}
