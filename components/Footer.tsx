'use client'
import { Instagram, Link2 } from './icons'
import { brand } from '@/lib/brand'

export function Footer() {
  return (
    <footer className="section section--seam-none border-t border-[#B8924A]/20 !pb-14 !pt-20">
      <div className="shell">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl font-light tracking-[-0.01em] text-[#F2EFEA]">
              M1 <span className="italic text-[#D4A85E]">Cafe Lounge</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9A938A]">{brand.address}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={brand.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M1 Cafe Lounge on Instagram"
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-[#B8924A]/35 text-[#D4A85E] transition-all duration-300 hover:bg-[#B8924A] hover:text-[#0B0C0F]"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={brand.socials.linktree}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="M1 Cafe Lounge links"
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-[#B8924A]/35 text-[#D4A85E] transition-all duration-300 hover:bg-[#B8924A] hover:text-[#0B0C0F]"
            >
              <Link2 className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#F2EFEA]/10 pt-8 text-xs text-[#9A938A] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} M1 Cafe Lounge. All rights reserved.</p>
          <p className="font-[family-name:var(--font-mono)] tracking-wide">
            Site by Faruk &middot; faruk_automates
          </p>
        </div>
      </div>
    </footer>
  )
}
