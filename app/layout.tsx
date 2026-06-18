import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk, DM_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'M1 Cafe Lounge | Al Bateen, Abu Dhabi',
  description:
    'Premium cafe lounge in Al Bateen, Abu Dhabi. Specialty coffee, international cuisine, and an atmosphere designed to impress. Open daily.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hankenGrotesk.variable} ${dmMono.variable}`}>
      <body className="grain">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
