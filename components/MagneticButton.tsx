'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'

interface MagneticButtonProps {
  href: string
  children: React.ReactNode
  primary?: boolean
  external?: boolean
}

export function MagneticButton({ href, children, primary, external }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return

    function handleMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' })
    }

    function handleLeave() {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  if (primary) {
    return (
      <a
        ref={ref}
        href={href}
        {...externalProps}
        className="inline-flex cursor-pointer items-center px-8 py-4 bg-[#B8924A] text-[#0B0C0F] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D4A85E] transition-colors duration-300"
      >
        {children}
      </a>
    )
  }

  return (
    <a
      ref={ref}
      href={href}
      {...externalProps}
      className="inline-flex cursor-pointer items-center px-8 py-4 border border-[#B8924A]/50 text-[#D4A85E] text-xs tracking-[0.2em] uppercase hover:border-[#B8924A] hover:bg-[#B8924A]/10 transition-all duration-300"
    >
      {children}
    </a>
  )
}
