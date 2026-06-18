import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Menu } from '@/components/Menu'
import { Gallery } from '@/components/Gallery'
import { Reviews } from '@/components/Reviews'
import { Order } from '@/components/Order'
import { Location } from '@/components/Location'
import { Footer } from '@/components/Footer'
import { MobileCTA } from '@/components/MobileCTA'

export default function Home() {
  return (
    <>
      <span id="top" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Order />
        <Location />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
