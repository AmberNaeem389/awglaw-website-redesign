import { useState } from 'react'
import { Plus } from 'lucide-react'
import { ArrowLink, Eyebrow, MaskLine, Reveal } from './ui.jsx'
import { allPractices, featuredPractices } from '../data/site.js'

/** Four core practices as a typographic accordion. Hover, focus or tap a row to open it. */
export default function Practices() {
  const [open, setOpen] = useState(0)
  return (
    <section id="practices" className="relative bg-paper py-24 text-ink lg:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal><Eyebrow>Practices</Eyebrow></Reveal>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.95]">
              <MaskLine inView>Where regulation,</MaskLine>
              <MaskLine inView delay={0.1}>
                rights and <em className="text-vermilion-d italic">disputes</em> meet.
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.2} className="flex items-end lg:col-span-4">
            <p className="max-w-sm leading-relaxed text-ink/75">
              Four core practices, each of them aimed at the same goal: enhancing product value and avoiding the challenge that would have undone it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-ink/30">
          {featuredPractices.map((p, i) => {
            const active = open === i
            return (
              <li key={p.title} className="border-b border-ink/30" onMouseEnter={() => setOpen(i)}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={active}
                    aria-controls={`practice-${i}`}
                    onClick={() => setOpen(i)}
                    onFocus={() => setOpen(i)}
                    className="group flex w-full items-baseline gap-5 py-6 text-left sm:gap-10 sm:py-8"
                  >
                    <span className={`mono w-8 shrink-0 transition-colors duration-500 ${active ? 'text-vermilion-d' : 'text-ink/65'}`}>0{i + 1}</span>
                    <span
                      className={`font-display flex-1 text-[clamp(1.9rem,4.6vw,4.6rem)] leading-[1.02] transition-all duration-500 ${
                        active ? 'translate-x-2 text-ink' : 'text-ink/55 group-hover:text-ink/85'
                      }`}
                    >
                      {p.short}
                    </span>
                    <Plus
                      size={34}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className={`shrink-0 self-center transition-all duration-500 ${active ? 'rotate-[135deg] text-vermilion-d' : 'rotate-0 text-ink/50'}`}
                    />
                  </button>
                </h3>
                <div
                  id={`practice-${i}`}
                  role="region"
                  aria-label={p.title}
                  className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-10 pl-[3.25rem] sm:pl-[4.75rem] lg:grid-cols-12 lg:pr-4">
                      <p className="max-w-2xl text-[1.1rem] leading-relaxed text-ink/85 lg:col-span-8">
                        <span className="mono mb-3 block text-teal">{p.title}</span>
                        {p.text}
                      </p>
                      <div className="lg:col-span-4 lg:justify-self-end lg:self-end">
                        <ArrowLink href={p.href} external className="text-ink">
                          Read about this practice
                        </ArrowLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <Reveal className="mt-20">
          <p className="mono mb-6 text-ink/70">All eleven practice areas</p>
          <ul className="flex flex-wrap gap-2.5">
            {allPractices.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative isolate inline-block overflow-hidden border border-ink/35 px-4 py-2.5 text-[0.9rem] transition-colors duration-500 hover:border-vermilion hover:text-ink"
                >
                  <span aria-hidden="true" className="absolute inset-0 -z-10 translate-y-[101%] bg-vermilion transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                  {p.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
