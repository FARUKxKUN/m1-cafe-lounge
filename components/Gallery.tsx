'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'

const shots = [
  { src: '/images/food-hero.jpg', alt: 'Plated signature dish', label: 'The Kitchen' },
  { src: '/images/interior-2.jpg', alt: 'Brass pendant over marble', label: 'The Room' },
  { src: '/images/drinks.jpg', alt: 'Fresh-pressed drinks', label: 'The Bar' },
  { src: '/images/night.jpg', alt: 'Lit facade at night', label: 'After Dark' },
  { src: '/images/dessert.jpg', alt: 'House dessert', label: 'Sweet' },
  { src: '/images/exterior.jpg', alt: 'Outdoor terrace', label: 'The Terrace' },
]

export function Gallery() {
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  // Pinned horizontal scroll on desktop; track vertically centered with equal margins.
  useEffect(() => {
    const pin = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return

    const mm = gsap.matchMedia()
    mm.add(
      { isDesktop: '(min-width: 768px) and (prefers-reduced-motion: no-preference)' },
      () => {
        const distance = () => track.scrollWidth - window.innerWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: () => `+=${distance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }
    )
    return () => mm.revert()
  }, [])

  return (
    <section id="gallery" className="section overflow-hidden">
      <div className="shell">
        <p className="label mb-7">03 &mdash; Gallery</p>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#F2EFEA]">
            Step <span className="italic text-[#D4A85E]">inside.</span>
          </h2>
          <p className="hidden text-[0.95rem] text-[#9A938A] md:block">Scroll to explore &rarr;</p>
        </div>
      </div>

      {/*
        Desktop pinned track. Opaque bg so the heading can never show through (pin bug fix).
        pt-20 offsets the fixed navbar; items-center then yields equal visible top/bottom margins.
      */}
      <div
        ref={pinRef}
        className="relative z-10 mt-16 hidden h-screen items-center overflow-hidden bg-[#0B0C0F] pt-20 md:flex"
      >
        <div
          ref={trackRef}
          className="flex gap-7 px-[max(1.5rem,calc((100vw-1320px)/2+4rem))] will-change-transform"
        >
          {shots.map((s) => (
            <figure key={s.src} className="relative h-[58vh] w-[40vw] shrink-0 overflow-hidden">
              <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/80 via-transparent to-transparent" />
              <figcaption className="label absolute bottom-6 left-6 text-[#F2EFEA]">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Mobile: stacked grid */}
      <div className="shell mt-12 grid grid-cols-2 gap-3 md:hidden">
        {shots.map((s) => (
          <figure key={s.src} className="relative aspect-[3/4] overflow-hidden">
            <Image src={s.src} alt={s.alt} fill className="object-cover" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F]/70 to-transparent" />
            <figcaption className="label absolute bottom-3 left-3 text-[0.6rem] text-[#F2EFEA]">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
