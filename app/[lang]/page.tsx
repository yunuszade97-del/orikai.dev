import Navbar from '@/components/ui/Navbar'
import Loader from '@/components/ui/Loader'
import CustomCursor from '@/components/ui/CustomCursor'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Pricing from '@/components/sections/Pricing'
import HowItWorks from '@/components/sections/HowItWorks'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Pricing />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <footer
        className="py-6 px-6 md:px-12 flex items-center justify-between text-xs"
        style={{
          borderTop: '1px dashed var(--border)',
          color: 'var(--muted)',
          fontFamily: 'var(--font-space)',
          background: 'var(--bg)',
        }}
      >
        <span>ORIK © {new Date().getFullYear()}</span>
        <span>orikai.dev</span>
      </footer>
    </>
  )
}
