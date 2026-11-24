import { Mail } from 'lucide-react'
import { allPractices, disclaimer, industries, links, nav, offices } from '../data/site.js'
import { credits } from '../data/credits.js'

function Linkedin({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm7 0h3.83v1.54h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.1V21h-4v-5.07c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21h-4V9.75z" />
    </svg>
  )
}

const link = 'text-[0.92rem] text-paper/75 transition-colors hover:text-lime'
const head = 'mono mb-5 text-lime'

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="container-x pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-[1.9rem] leading-[1.1]">Lawyers for the lifecycle of foods, dietary supplements, cosmetics, drugs and medical devices.</p>
            <div className="mt-7 flex gap-3">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Amin Wasserman Gurnani on LinkedIn (opens in a new tab)" className="flex h-11 w-11 items-center justify-center border border-paper/30 transition-colors hover:border-lime hover:text-lime">
                <Linkedin />
              </a>
              <a href={`mailto:${links.email}`} aria-label="Email the firm" className="flex h-11 w-11 items-center justify-center border border-paper/30 transition-colors hover:border-lime hover:text-lime">
                <Mail size={17} />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <nav aria-label="Footer practices">
              <p className={head}>Practices</p>
              <ul className="space-y-3">
                {allPractices.slice(0, 6).map((p) => (
                  <li key={p.href}><a className={link} href={p.href} target="_blank" rel="noopener noreferrer">{p.label}<span className="sr-only"> (opens in a new tab)</span></a></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer industries">
              <p className={head}>Industries</p>
              <ul className="space-y-3">
                {industries.map((p) => (
                  <li key={p.href}><a className={link} href={p.href} target="_blank" rel="noopener noreferrer">{p.label}<span className="sr-only"> (opens in a new tab)</span></a></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Footer firm">
              <p className={head}>The firm</p>
              <ul className="space-y-3">
                {nav.map((n) => (<li key={n.href}><a className={link} href={n.href}>{n.label}</a></li>))}
                <li><a className={link} href={links.deck} target="_blank" rel="noopener noreferrer">Team capability deck<span className="sr-only"> (opens in a new tab)</span></a></li>
              </ul>
            </nav>
            <div>
              <p className={head}>Contact</p>
              <a className={`${link} block`} href={`mailto:${links.email}`}>{links.email}</a>
              <ul className="mt-5 space-y-4">
                {offices.map((o) => (
                  <li key={o.city} className="text-[0.88rem] leading-relaxed text-paper/70">
                    <span className="font-display block text-[1.15rem] text-paper">{o.city}</span>
                    {o.lines.join(', ')}
                    <a className="mt-0.5 block text-paper transition-colors hover:text-lime" href={`tel:${o.tel}`}>{o.phone}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* oversized wordmark */}
        <p aria-hidden="true" className="font-display mt-20 text-[clamp(2.4rem,9.6vw,10rem)] leading-[0.85] tracking-[-0.03em] whitespace-nowrap text-paper/90 select-none">
          Amin Wasserman Gurnani
        </p>

        <div className="mt-10 border-t border-paper/20 pt-8">
          <p className="mono flex flex-wrap gap-x-4 gap-y-2 text-paper/80">
            <span>© {new Date().getFullYear()} Amin Wasserman Gurnani, LLP</span>
            <a href={links.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-lime">Privacy Statement<span className="sr-only"> (opens in a new tab)</span></a>
            <a href={links.terms} target="_blank" rel="noopener noreferrer" className="hover:text-lime">Terms of Use<span className="sr-only"> (opens in a new tab)</span></a>
          </p>
          <p className="mt-5 max-w-5xl text-[0.78rem] leading-relaxed text-paper/65">{disclaimer}</p>

          <details className="group mt-6">
            <summary className="mono cursor-pointer text-paper/75 transition-colors hover:text-lime">Photo credits</summary>
            <ul className="mt-4 grid gap-x-8 gap-y-2 text-[0.78rem] leading-relaxed text-paper/70 md:grid-cols-2">
              {credits.map((c) => (
                <li key={c.key}>
                  <span className="text-paper/90">{c.use}.</span>{' '}
                  <a href={c.page} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-lime">{c.title}</a>
                  {' '}by {c.author}, {c.license}, via Wikimedia Commons. Cropped and colour-treated.
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </footer>
  )
}
