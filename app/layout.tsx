import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Noto_Sans_KR } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const _notoSansKR = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Bloom & Petal - 제라늄 전문 쇼핑몰',
  description: '아름다운 제라늄 꽃과 식물을 만나보세요. 프리미엄 제라늄 전문 온라인 플라워 샵.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
