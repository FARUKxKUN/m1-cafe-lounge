'use client'
import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

// Fades + lifts direct children (or [data-reveal] elements) into view on scroll.
export function useReveal<T extends HTMLElement>(stagger = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger,
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [stagger])

  return ref
}
