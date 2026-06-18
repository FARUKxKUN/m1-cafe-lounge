'use client'
import { useState, useEffect } from 'react'
import { brand } from '@/lib/brand'
import { useLang } from './LanguageProvider'

export function MobileCTA() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)
  const waLink = `https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#B8924A]/25 bg-[#0B0C0F]/95 backdrop-blur-md transition-transform duration-500 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={brand.delivery.talabat}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center bg-[#B8924A] text-xs font-bold uppercase tracking-[0.18em] text-[#0B0C0F]"
      >
        {t.mobile.order}
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center text-xs uppercase tracking-[0.18em] text-[#F2EFEA]"
      >
        {t.mobile.whatsapp}
      </a>
    </div>
  )
}
