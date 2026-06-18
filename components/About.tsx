'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>(0.12)

  return (
    <section ref={ref} id="about" className="section section--seam-none overflow-hidden">
      <div className="glow -left-40 top-1/4 h-[28rem] w-[28rem]" />
      <div className="shell relative grid items-center gap-x-16 gap-y-12 md:grid-cols-2 md:gap-x-24">
        <div>
          <p data-reveal className="label mb-7">
            01 &mdash; The Place
          </p>
          <h2
            data-reveal
            className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#F2EFEA]"
          >
            More than coffee.
            <br />
            <span className="italic text-[#D4A85E]">A way to pause.</span>
          </h2>
          <p data-reveal className="mt-9 max-w-md text-[1.0625rem] leading-relaxed text-[#C9C3BA]">
            Tucked into Al Bateen, M1 Cafe Lounge is where the city slows down. Velvet seating,
            brass light and marble - a room built for long conversations and good food.
          </p>
          <p data-reveal className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-[#9A938A]">
            From the first espresso of the morning to a late-night plate, every detail is
            considered. This is hospitality with intent.
          </p>
        </div>

        <div data-reveal className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/interior-1.jpg"
            alt="Velvet seating and brass lighting inside M1 Cafe Lounge"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#B8924A]/25" />
        </div>
      </div>
    </section>
  )
}
