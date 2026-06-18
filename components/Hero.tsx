'use client'
import { useRef, useEffect } from 'react'
import { brand } from '@/lib/brand'
import { gsap } from '@/lib/gsap'
import { MagneticButton } from './MagneticButton'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  // Pin the hero so the (always-playing) video stays on screen while you scroll down a bit.
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Keep the ambient video playing at a calmer 0.8x regardless of scroll.
    const applySpeed = () => {
      video.playbackRate = 0.8
    }
    applySpeed()
    video.addEventListener('play', applySpeed)
    video.addEventListener('loadedmetadata', applySpeed)
    if (!reduce) {
      const tryPlay = () => {
        applySpeed()
        video.play().catch(() => {})
      }
      if (video.readyState >= 2) tryPlay()
      else video.addEventListener('canplay', tryPlay, { once: true })
    }

    const ctx = gsap.context(() => {
      if (reduce) return
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=90%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })
      tl.to(mediaRef.current, { scale: 1.14, ease: 'none' }, 0).to(
        contentRef.current,
        { yPercent: -22, opacity: 0, ease: 'none' },
        0
      )
    }, section)

    return () => ctx.revert()
  }, [])

  // Line-by-line headline reveal on load (manual mask split - no paid SplitText).
  useEffect(() => {
    const el = headlineRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lines = el.querySelectorAll('[data-line] > span')

    if (reduce) {
      gsap.set(lines, { yPercent: 0, opacity: 1 })
      gsap.set('[data-hero-fade]', { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.from(lines, {
        yPercent: 115,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.1,
        delay: 0.3,
      })
      gsap.from('[data-hero-fade]', {
        opacity: 0,
        y: 26,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.95,
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[100svh] w-full overflow-hidden">
      {/* Full-bleed ambient media, duotone-graded into the brand palette */}
      <div ref={mediaRef} className="absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          className="h-full w-full object-cover [filter:contrast(1.12)_saturate(1.12)_brightness(0.9)]"
          poster="/images/interior-2.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/ambient.mp4" type="video/mp4" />
        </video>

        {/* Cinematic grade - keeps real color, warms it toward the brand gold + cool shadows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B8924A]/25 via-transparent to-[#1A2030]/35 mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[#6B5320] opacity-15 mix-blend-overlay" />

        {/* Vignette for depth */}
        <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_50%_38%,transparent_45%,#0B0C0F_118%)]" />

        {/* Legibility scrim - feathered, concentrated bottom-left under the copy.
            Video stays clear toward the top-right; text sits on a calm backing. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C0F]/85 via-[#0B0C0F]/30 to-transparent" />
        <div className="absolute inset-0 [background:radial-gradient(80%_70%_at_22%_78%,rgba(11,12,15,0.7),transparent_70%)]" />
      </div>

      {/* Content - editorial bottom-left */}
      <div className="relative z-10 flex h-full items-end pb-[14vh] md:pb-[12vh]">
        <div ref={contentRef} data-hero-content className="shell">
          <p data-hero-fade className="label mb-7">
            Al Bateen / Abu Dhabi
          </p>

          <h1 ref={headlineRef} className="display text-[clamp(3.25rem,11vw,9.5rem)] text-[#F2EFEA]">
            <span data-line className="block overflow-hidden pb-[0.08em]">
              <span className="block">Slow mornings.</span>
            </span>
            <span data-line className="block overflow-hidden pb-[0.08em]">
              <span className="block italic text-[#D4A85E]">Golden evenings.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-9 max-w-md text-[1.0625rem] leading-relaxed text-[#C9C3BA]">
            {brand.tagline}. A lounge in the heart of Al Bateen where coffee, cuisine and
            atmosphere meet.
          </p>

          <div data-hero-fade className="mt-11 flex flex-wrap gap-4">
            <MagneticButton href="#order" primary>
              Order Now
            </MagneticButton>
            <MagneticButton href="#menu">View Menu</MagneticButton>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-fade
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="label text-[#9A938A]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-[#B8924A] to-transparent" />
      </div>
    </section>
  )
}
