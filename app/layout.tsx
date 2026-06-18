import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk, DM_Mono, El_Messiri, Tajawal } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['opsz'],
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
})

// Arabic faces - elegant display + clean body. Activated via [lang="ar"] in globals.css.
const elMessiri = El_Messiri({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-ar',
})

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-body-ar',
})

export const metadata: Metadata = {
  title: 'M1 Cafe Lounge | Al Bateen, Abu Dhabi',
  description:
    'Premium cafe lounge in Al Bateen, Abu Dhabi. Specialty coffee, international cuisine, and an atmosphere designed to impress. Open daily.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${dmMono.variable} ${elMessiri.variable} ${tajawal.variable}`}
    >
      <body className="grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
