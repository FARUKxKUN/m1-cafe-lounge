'use client'
import { useLenis } from '@/hooks/useLenis'
import { LanguageProvider } from '@/components/LanguageProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  useLenis()
  return <LanguageProvider>{children}</LanguageProvider>
}
