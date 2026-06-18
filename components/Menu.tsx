'use client'
import { useReveal } from '@/hooks/useReveal'
import { useLang } from './LanguageProvider'
import type { MenuGroup } from '@/lib/content'

function CategoryBlock({ group, currency }: { group: MenuGroup; currency: string }) {
  return (
    <div data-reveal>
      <h3 className="label mb-8 border-b border-[#B8924A]/20 pb-4 text-[#D4A85E]">
        {group.category}
      </h3>
      <ul className="space-y-7">
        {group.items.map((item) => (
          <li key={item.name}>
            <div className="flex items-end gap-3">
              <span className="font-[family-name:var(--font-display)] text-xl font-light leading-none tracking-[-0.01em] text-[#F2EFEA]">
                {item.name}
              </span>
              <span className="mb-[5px] h-px flex-1 border-b border-dotted border-[#B8924A]/35" />
              <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm leading-none text-[#D4A85E]">
                <span className="text-[#9A938A]">{currency}</span> {item.price}
              </span>
            </div>
            <p className="mt-2.5 max-w-md text-[0.9rem] leading-relaxed text-[#9A938A]">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Menu() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>(0.1)
  const groups = t.menu.groups
  const left = groups.filter((_, i) => i % 2 === 0)
  const right = groups.filter((_, i) => i % 2 === 1)

  return (
    <section ref={ref} id="menu" className="section overflow-hidden">
      <div className="glow right-0 top-10 h-[26rem] w-[26rem]" />
      <div className="shell relative">
        {/* Heading */}
        <div>
          <p data-reveal className="label mb-7">
            {t.menu.label}
          </p>
          <h2
            data-reveal
            className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#F2EFEA]"
          >
            {t.menu.h1}
            <br />
            <span className="italic text-[#D4A85E]">{t.menu.h2}</span>
          </h2>
        </div>

        {/* Menu body - generous separation from the heading */}
        <div className="mt-24 grid gap-x-20 gap-y-16 md:mt-32 md:grid-cols-2 md:items-stretch md:gap-y-0">
          {/* Left column */}
          <div className="space-y-16">
            {left.map((group) => (
              <CategoryBlock key={group.category} group={group} currency={t.menu.currency} />
            ))}
          </div>

          {/* Right column - intro note pushed to the bottom of the empty space */}
          <div className="flex flex-col">
            <div className="space-y-16">
              {right.map((group) => (
                <CategoryBlock key={group.category} group={group} currency={t.menu.currency} />
              ))}
            </div>
            <div data-reveal className="mt-auto border-s-2 border-[#B8924A]/40 ps-6 pt-24">
              <p className="label mb-3">{t.menu.noteLabel}</p>
              <p className="max-w-sm text-[0.95rem] leading-relaxed text-[#9A938A]">{t.menu.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
