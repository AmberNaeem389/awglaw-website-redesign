import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EASE, Logo } from './ui.jsx'
import { links, nav } from '../data/site.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // highlight the section currently in view
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => document.getElementById(id) && io.observe(document.getElementById(id)))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  const solid = scrolled && !open
  const light = !solid && !open // light-on-dark while over the hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solid ? 'bg-paper/90 shadow-[0_1px_0_rgba(26,21,17,0.12)] backdrop-blur-md' : open ? 'bg-ink' : 'bg-transparent'
      }`}
    >
      <div className={`container-x flex items-center justify-between gap-4 transition-[height] duration-500 ${solid ? 'h-[4.25rem]' : 'h-[5rem]'}`}>
        <a href="#top" aria-label="Amin Wasserman Gurnani, home" onClick={() => setOpen(false)}>
          <Logo light={light || open} />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex min-[1440px]:gap-9">
          {nav.map((n, i) => {
            const active = current === n.href.slice(1)
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={active ? 'true' : undefined}
                className={`group mono relative flex items-baseline gap-2 whitespace-nowrap transition-colors ${
                  light ? 'text-paper/85 hover:text-paper' : 'text-ink/80 hover:text-ink'
                } ${active ? (light ? '!text-paper' : '!text-ink') : ''}`}
              >
                <span className={`text-[0.62rem] ${light ? 'text-lime' : 'text-teal'}`}>0{i + 1}</span>
                {n.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-2 left-0 h-[2px] bg-vermilion transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group relative isolate overflow-hidden bg-vermilion px-4 py-2.5 text-[0.7rem] whitespace-nowrap font-semibold tracking-[0.1em] text-ink uppercase transition-colors duration-500 hover:text-paper sm:px-6 sm:text-[0.74rem]"
          >
            <span aria-hidden="true" className="absolute inset-0 -z-10 translate-y-[101%] bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
            <span className="sm:hidden">Inquire</span>
            <span className="hidden sm:inline">Start an inquiry</span>
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className={`p-2.5 xl:hidden ${light || open ? 'text-paper' : 'text-ink'}`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="on-dark fixed inset-x-0 top-[5rem] bottom-0 overflow-y-auto bg-ink text-paper xl:hidden"
          >
            <ul className="container-x py-8">
              {nav.map((n, i) => (
                <li key={n.href} className="overflow-hidden border-b border-paper/15">
                  <m.a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.07, ease: EASE }}
                    className="font-display flex items-baseline gap-4 py-4 text-[2.6rem] leading-none"
                  >
                    <span className="mono text-lime">0{i + 1}</span>
                    {n.label}
                  </m.a>
                </li>
              ))}
            </ul>
            <div className="container-x pb-10">
              <p className="mono text-paper/70">info@awglaw.com</p>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="mono mt-2 block text-paper/70 hover:text-paper">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
