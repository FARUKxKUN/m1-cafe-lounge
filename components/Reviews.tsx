'use client'
import { useRef, useEffect, useState } from 'react'
import { Star, GoogleG } from './icons'
import { brand } from '@/lib/brand'
import { gsap } from '@/lib/gsap'
import { useReveal } from '@/hooks/useReveal'

// Real Google reviews for M1 Cafe Lounge (verbatim, lightly trimmed).
const reviews = [
  {
    name: 'Adina Aliu',
    meta: 'Local Guide · 34 reviews',
    date: 'a month ago',
    rating: 5,
    text: 'Local lounge filled with variety; indoor and outdoor seating, food and desserts, Turkish flavours and great service. Grace is attentive and accommodating.',
  },
  {
    name: 'Amber Imtiaz',
    meta: '7 reviews · 8 photos',
    date: 'a month ago',
    rating: 5,
    text: 'Food was delicious and served fresh and hot! The atmosphere is cozy and very relaxing. Sherry welcomed us with kindness and was very helpful and professional. Amazing experience.',
  },
  {
    name: 'Nidha Fathima',
    meta: 'Local Guide · 13 reviews',
    date: '3 months ago',
    rating: 5,
    text: 'A great experience at M1 Cafe Lounge! The atmosphere is cozy and welcoming, perfect for relaxing with friends or getting some work done. The food was fresh and flavorful, and the staff made sure we were comfortable the whole time.',
  },
  {
    name: 'Walk Inhouse Trainer',
    meta: '4 reviews · 1 photo',
    date: 'a week ago',
    rating: 5,
    text: 'I stumbled upon this cozy spot for some remote work and it completely exceeded my expectations - a peaceful place to focus or unwind. What made it unforgettable was Latifa; her service is nothing short of extraordinary. A hidden gem for great coffee, food and top-tier hospitality.',
  },
]

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

function ReviewCard({ r, hidden }: { r: (typeof reviews)[number]; hidden?: boolean }) {
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
        <GoogleG className="ml-auto h-5 w-5 shrink-0" />
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
  const ref = useReveal<HTMLElement>(0.08)
  const trackRef = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  // Seamless left-to-right marquee; pauses on hover. Track holds the reviews twice.
  useEffect(() => {
    if (reduced) return
    const track = trackRef.current
    if (!track) return

    // Shift by exactly one logical set (-100/COPIES %) and repeat - seamless because every set is identical.
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
  }, [reduced])

  return (
    <section ref={ref} className="section overflow-hidden">
      <div className="shell relative">
        {/* Summary - reads as real Google proof */}
        <div data-reveal className="mb-16 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-3">
            <GoogleG className="h-7 w-7" />
            <span className="label text-[#9A938A]">Google Reviews</span>
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
            Based on {brand.reviewCount}+ reviews &middot; Read them on Google &rarr;
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
          {/* margin (not flex gap) so -100/COPIES% lands exactly on a set boundary */}
          <div ref={trackRef} className="flex w-max pl-5 [&>*]:mr-5">
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              reviews.map((r) => (
                <ReviewCard key={`${copy}-${r.name}`} r={r} hidden={copy > 0} />
              ))
            )}
          </div>
        </div>
      )}
    </section>
  )
}
