'use client'
import { useRef, useEffect, useState } from 'react'
import { Star, GoogleG } from './icons'
import { brand } from '@/lib/brand'
import { gsap } from '@/lib/gsap'
import { useReveal } from '@/hooks/useReveal'
import { useLang } from './LanguageProvider'
import type { ReviewItem } from '@/lib/content'

// Enough copies that one logical set always exceeds any viewport width (true seamless loop).
const COPIES = 4

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-[#D4A85E] text-[#D4A85E]' : 'fill-transparent text-[#3A3A40]'}`}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

function ReviewCard({ r, hidden }: { r: ReviewItem; hidden?: boolean }) {
  return (
    <article
      aria-hidden={hidden}
      className="flex w-[86vw] shrink-0 flex-col rounded-sm border border-[#F2EFEA]/10 bg-[#16171E] p-7 sm:w-[400px]"
    >
      <header className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B8924A] font-[family-name:var(--font-display)] text-lg text-[#0B0C0F]">
          {r.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-[0.95rem] font-medium text-[#F2EFEA]">{r.name}</p>
          <p className="truncate text-xs text-[#9A938A]">{r.meta}</p>
        </div>
        <GoogleG className="ms-auto h-5 w-5 shrink-0" />
      </header>

      <div className="mt-5 flex items-center gap-3">
        <Stars rating={r.rating} />
        <span className="text-xs text-[#9A938A]">{r.date}</span>
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-[#C9C3BA]">{r.text}</p>
    </article>
  )
}

export function Reviews() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>(0.08)
  const trackRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  const reviews = t.reviews.items

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Seamless marquee; pauses on hover. Track holds the reviews multiple times.
  useEffect(() => {
    if (reduced) return
    const track = trackRef.current
    if (!track) return

    const tween = gsap.fromTo(
      track,
      { xPercent: -100 / COPIES },
      { xPercent: 0, duration: 38, ease: 'none', repeat: -1 }
    )
    const slow = () => gsap.to(tween, { timeScale: 0, duration: 0.5, overwrite: true })
    const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.5, overwrite: true })
    track.addEventListener('mouseenter', slow)
    track.addEventListener('mouseleave', resume)

    return () => {
      track.removeEventListener('mouseenter', slow)
      track.removeEventListener('mouseleave', resume)
      tween.kill()
    }
  }, [reduced, reviews])

  return (
    <section ref={ref} className="section overflow-hidden">
      <div className="shell relative">
        {/* Summary - reads as real Google proof */}
        <div data-reveal className="mb-16 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <GoogleG className="h-7 w-7" />
            <span className="label text-[#9A938A]">{t.reviews.google}</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="font-[family-name:var(--font-display)] text-5xl font-light text-[#F2EFEA]">
              {brand.rating.toFixed(1)}
            </span>
            <Stars rating={Math.round(brand.rating)} />
          </div>
          <a
            href={brand.socials.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-[#9A938A] underline-offset-4 transition-colors hover:text-[#D4A85E] hover:underline"
          >
            {t.reviews.summary}
          </a>
        </div>
      </div>

      {/* Marquee - full-bleed, feathered edges */}
      {reduced ? (
        <div className="shell flex flex-wrap justify-center gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
          <div ref={trackRef} className="flex w-max pl-5 [&>*]:mr-5">
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              reviews.map((r) => <ReviewCard key={`${copy}-${r.name}`} r={r} hidden={copy > 0} />)
            )}
          </div>
        </div>
      )}
    </section>
  )
}
