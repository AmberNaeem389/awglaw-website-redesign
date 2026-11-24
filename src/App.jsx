import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Practices from './components/Practices.jsx'
import Industries from './components/Industries.jsx'
import Firm from './components/Firm.jsx'
import People from './components/People.jsx'
import Difference from './components/Difference.jsx'
import Recognition from './components/Recognition.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CookieNotice from './components/CookieNotice.jsx'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-vermilion focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <Practices />
          <Industries />
          <Firm />
          <People />
          <Difference />
          <Recognition />
          <Contact />
        </main>
        <Footer />
        <CookieNotice />
      </MotionConfig>
    </LazyMotion>
  )
}
