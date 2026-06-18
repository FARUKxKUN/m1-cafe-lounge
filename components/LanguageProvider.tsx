'use client'
import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { content, type Lang, type Content } from '@/lib/content'
import { ScrollTrigger } from '@/lib/gsap'

interface LangContext {
  lang: Lang
  t: Content
  toggle: () => void
}

const Ctx = createContext<LangContext>({ lang: 'en', t: content.en, toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('m1-lang')
    if (saved === 'ar' || saved === 'en') setLang(saved)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('m1-lang', lang)
    // Layout direction changed - recalculate pinned/scrub triggers.
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [lang])

  const toggle = useCallback(() => setLang((l) => (l === 'en' ? 'ar' : 'en')), [])

  return <Ctx.Provider value={{ lang, t: content[lang], toggle }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
