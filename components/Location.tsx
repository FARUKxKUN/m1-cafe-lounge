'use client'
import { MapPin, Clock } from './icons'
import { brand } from '@/lib/brand'
import { useReveal } from '@/hooks/useReveal'
import { useLang } from './LanguageProvider'

export function Location() {
  const { t } = useLang()
  const ref = useReveal<HTMLElement>(0.1)

  return (
    <section ref={ref} id="location" className="section overflow-hidden">
      <div className="shell grid gap-x-16 gap-y-12 md:grid-cols-2 md:gap-x-24">
        <div>
          <p data-reveal className="label mb-7">
            {t.location.label}
          </p>
          <h2
            data-reveal
            className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#F2EFEA]"
          >
            {t.location.h1}
            <br />
            <span className="italic text-[#D4A85E]">{t.location.h2}</span>
          </h2>

          <div data-reveal className="mt-10 space-y-9">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A85E]" strokeWidth={1.5} />
              <div>
                <p className="label mb-2.5 text-[#9A938A]">{t.location.address}</p>
                <p className="text-[1.0625rem] leading-relaxed text-[#F2EFEA]">{t.location.addressText}</p>
                <a
                  href={brand.socials.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-[#D4A85E] underline-offset-4 transition-colors hover:underline"
                >
                  {t.location.directions}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A85E]" strokeWidth={1.5} />
              <div>
                <p className="label mb-2.5 text-[#9A938A]">{t.location.hoursLabel}</p>
                {t.location.hours.map((h) => (
                  <p key={h.days} className="text-[1.0625rem] leading-relaxed text-[#F2EFEA]">
                    <span className="text-[#9A938A]">{h.days}</span> &middot; {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="relative min-h-[380px] overflow-hidden rounded-sm border border-[#B8924A]/20"
        >
          <iframe
            title="M1 Cafe Lounge location on Google Maps"
            src={brand.mapsEmbed}
            className="absolute inset-0 h-full w-full grayscale invert-[0.92] contrast-[0.9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
