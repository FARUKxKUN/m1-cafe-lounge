'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLang } from './LanguageProvider'

const hrefs = ['#menu', '#gallery', '#about', '#location'] as const

export function Navbar() {
  const { t, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.6)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [t.nav.menu, t.nav.gallery, t.nav.about, t.nav.visit]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#B8924A]/15 bg-[#0B0C0F]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="shell flex h-20 items-center justify-between">
        <a href="#top" className="group flex cursor-pointer items-center gap-3.5" aria-label="M1 Cafe Lounge home">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden ring-1 ring-inset ring-[#B8924A]/40 transition-shadow duration-300 group-hover:ring-[#B8924A]/80">
            <Image src="/images/logo.jpg" alt="" fill sizes="40px" className="object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-display)] text-[1.15rem] tracking-[-0.01em] text-[#F2EFEA]">
              M1 Cafe Lounge
            </span>
            <span className="mt-[6px] hidden font-[family-name:var(--font-mono)] text-[0.5rem] uppercase tracking-[0.34em] text-[#9A938A] sm:block">
              {t.nav.subtitle}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((label, i) => (
            <a
              key={hrefs[i]}
              href={hrefs[i]}
              className="cursor-pointer text-xs uppercase tracking-[0.18em] text-[#C9C3BA] transition-colors duration-300 hover:text-[#D4A85E]"
            >
              {label}
            </a>
          ))}
          <a
            href="#order"
            className="cursor-pointer border border-[#B8924A]/50 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[#D4A85E] transition-all duration-300 hover:bg-[#B8924A] hover:text-[#0B0C0F]"
          >
            {t.nav.order}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-full border border-[#B8924A]/50 px-3 text-xs font-medium tracking-wide text-[#D4A85E] transition-all duration-300 hover:bg-[#B8924A] hover:text-[#0B0C0F]"
          >
            {t.toggle}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch language"
            className="flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-full border border-[#B8924A]/50 px-3 text-xs font-medium text-[#D4A85E]"
          >
            {t.toggle}
          </button>
          <a
            href="#order"
            className="flex h-11 cursor-pointer items-center text-xs uppercase tracking-[0.18em] text-[#D4A85E]"
          >
            {t.nav.order}
          </a>
        </div>
      </nav>
    </header>
  )
}
