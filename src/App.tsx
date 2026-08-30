import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { WhyWorkWithMe } from './components/WhyWorkWithMe'
import { Process } from './components/Process'
import { CTA } from './components/CTA'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-accent-solid px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
