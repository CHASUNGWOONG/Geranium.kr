"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="border-t border-border/60 bg-primary px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
          Newsletter
        </p>
        <h2 className="font-serif text-3xl text-primary-foreground md:text-4xl">
          소식을 받아보세요
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
          새로운 제라늄 품종, 관리 팁, 특별 할인 등 유용한 소식을 이메일로 받아보세요.
        </p>

        {submitted ? (
          <div className="mt-10">
            <p className="text-sm text-primary-foreground">
              구독해주셔서 감사합니다! 곧 좋은 소식을 전해드리겠습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md">
            <label htmlFor="newsletter-email" className="sr-only">이메일 주소</label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소를 입력하세요"
              required
              className="flex-1 border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/40 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary-foreground px-6 py-3 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary-foreground/90"
            >
              구독
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
