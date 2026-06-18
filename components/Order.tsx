'use client'
import Image from 'next/image'
import { MessageCircle, Instagram, Facebook } from './icons'
import { brand } from '@/lib/brand'
import { useReveal } from '@/hooks/useReveal'

export function Order() {
  const ref = useReveal<HTMLElement>(0.1)
  const waLink = `https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`

  return (
    <section ref={ref} id="order" className="section relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.18]">
        <Image src="/images/pizza.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B0C0F] via-[#0B0C0F]/85 to-[#0B0C0F]" />

      <div className="shell relative z-10">
        {/* Centered, ~70% width, scaled up */}
        <div className="mx-auto flex w-full flex-col items-center text-center md:w-[70%]">
          <p data-reveal className="label mb-7">
            04 &mdash; Order
          </p>
          <h2
            data-reveal
            className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,6.5vw,5rem)] font-light leading-[1.04] tracking-[-0.02em] text-[#F2EFEA]"
          >
            Bring M1 <span className="italic text-[#D4A85E]">to your table.</span>
          </h2>
          <p data-reveal className="mx-auto mt-7 max-w-xl text-[1.125rem] leading-relaxed text-[#C9C3BA]">
            Order in for delivery, or message us directly to reserve a table.
          </p>

          <div data-reveal className="mt-12 flex w-full flex-col gap-4">
            {/* primary action */}
            <a
              href={brand.delivery.talabat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#B8924A] px-8 py-6 text-sm font-bold uppercase tracking-[0.22em] text-[#0B0C0F] transition-colors duration-300 hover:bg-[#D4A85E]"
            >
              Order on Talabat
            </a>

            {/* secondary actions */}
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={brand.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#B8924A]/40 px-6 py-5 text-xs uppercase tracking-[0.18em] text-[#D4A85E] transition-all duration-300 hover:border-[#B8924A] hover:bg-[#B8924A]/10"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#F2EFEA]/15 px-6 py-5 text-xs uppercase tracking-[0.18em] text-[#F2EFEA] transition-colors duration-300 hover:border-[#F2EFEA]/40"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} /> WhatsApp
              </a>
              <a
                href={brand.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#F2EFEA]/15 px-6 py-5 text-xs uppercase tracking-[0.18em] text-[#F2EFEA] transition-colors duration-300 hover:border-[#F2EFEA]/40"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} /> Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
