import { ArrowUpRight } from 'lucide-react'
import { ArrowLink, Eyebrow, Mark, MaskLine, Reveal } from './ui.jsx'
import { clientQuote, insightLinks, ledger } from '../data/site.js'

export default function Recognition() {
  return (
    <>
      <section id="recognition" className="bg-paper py-24 lg:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal><Eyebrow>Recognition</Eyebrow></Reveal>
              <h2 className="font-display text-[clamp(2.6rem,5.4vw,5.2rem)] leading-[0.95]">
                <MaskLine inView>Ranked by the</MaskLine>
                <MaskLine inView delay={0.1}>people who</MaskLine>
                <MaskLine inView delay={0.2}>
                  <Mark inView delay={0.9} color="bg-lime">rank lawyers.</Mark>
                </MaskLine>
              </h2>
              <Reveal delay={0.2} className="mt-8 max-w-sm">
                <p className="leading-relaxed text-ink/75">
                  Four recent recognitions, each published on the firm’s news pages. Select any entry to read the announcement.
                </p>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {insightLinks.map((l) => (
                    <li key={l.label}><ArrowLink href={l.href} external className="text-ink">{l.label}</ArrowLink></li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {ledger.map((r, i) => (
              <Reveal as="li" key={r.href} delay={0.05} className="border-t border-ink/25 last:border-b">
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid gap-3 overflow-hidden px-1 py-8 sm:grid-cols-[3.5rem_1fr_auto] sm:items-baseline sm:gap-8 sm:py-10"
                >
                  <span aria-hidden="true" className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
                  <span className="mono relative text-teal">0{i + 1}</span>
                  <span className="relative">
                    <span className="mono block text-ink/70">{r.kicker}</span>
                    <span className="font-display mt-3 block text-[1.9rem] leading-[1.08] transition-transform duration-500 group-hover:translate-x-2 sm:text-[2.6rem]">
                      {r.line}
                    </span>
                  </span>
                  <ArrowUpRight size={26} aria-hidden="true" className="relative hidden text-ink/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-vermilion-d sm:block" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* the firm's published client statement, set large */}
      <section aria-label="Client statement" className="on-dark relative overflow-hidden bg-teal-deep py-24 text-paper lg:py-36">
        <span aria-hidden="true" className="font-display pointer-events-none absolute -top-10 left-2 text-[22rem] leading-none text-paper/[0.07] sm:left-10">“</span>
        <div className="container-x relative">
          <figure className="mx-auto max-w-5xl">
            <Reveal>
              <blockquote className="font-display text-[clamp(2rem,4.4vw,4.2rem)] leading-[1.06]">
                “{clientQuote.lead}”
              </blockquote>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 grid gap-8 border-t border-paper/25 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-[1.05rem] leading-relaxed text-paper/80">“{clientQuote.rest}”</p>
              <figcaption className="mono text-lime md:text-right">{clientQuote.by}</figcaption>
            </Reveal>
          </figure>
        </div>
      </section>
    </>
  )
}
