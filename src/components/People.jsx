import { useMemo, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { ArrowLink, EASE, Eyebrow, MaskLine, Reveal } from './ui.jsx'
import { links } from '../data/site.js'
import { team } from '../data/team.js'

const groups = {
  All: () => true,
  Partners: (p) => /Partner$/.test(p.title),
  'Counsel & Associates': (p) => /Counsel|Associate|Patent Agent/.test(p.title),
  Operations: (p) => p.title === 'Chief Operating Officer',
}
const INITIAL = 10

function Preview({ p }) {
  return (
    <div className="lg:sticky lg:top-28">
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={p.name}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-bone">
            <img src={p.photo} alt={`Portrait of ${p.name}`} width="640" height="800" className="h-full w-full object-cover object-top" />
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1.5"><span className="flex-1 bg-teal" /><span className="flex-1 bg-lime" /><span className="flex-1 bg-vermilion" /></span>
          </div>
          <h3 className="font-display mt-5 text-4xl leading-none">{p.name}</h3>
          <p className="mono mt-2 text-teal">{p.title}</p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ink/80">{p.bio}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ArrowLink href={p.url} external className="text-ink">View profile</ArrowLink>
            <a href={`mailto:${p.email}`} className="mono inline-flex items-center gap-2 text-ink/80 hover:text-ink">
              <Mail size={14} aria-hidden="true" /> {p.email}
            </a>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  )
}

export default function People() {
  const [tab, setTab] = useState('All')
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState(() => team.find((t) => t.name === 'Ivan J. Wasserman') || team[0])

  const filtered = useMemo(() => team.filter(groups[tab]), [tab])
  const shown = expanded ? filtered : filtered.slice(0, INITIAL)

  const choose = (g) => {
    setTab(g)
    setExpanded(false)
    const first = team.filter(groups[g])[0]
    if (first) setActive(first)
  }

  return (
    <section id="people" className="bg-paper py-24 lg:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>People</Eyebrow></Reveal>
            <h2 className="font-display text-[clamp(2.6rem,6.4vw,6.4rem)] leading-[0.93]">
              <MaskLine inView>Behind every</MaskLine>
              <MaskLine inView delay={0.1}>filing, <em className="italic text-teal">a name.</em></MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="max-w-md leading-relaxed text-ink/75">
              {team.length} professionals across Chicago, Washington, D.C. and Los Angeles. Select a name to read their background.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div role="group" aria-label="Filter professionals by role" className="flex flex-wrap gap-2">
            {Object.keys(groups).map((g) => (
              <button
                key={g}
                type="button"
                aria-pressed={tab === g}
                onClick={() => choose(g)}
                className={`mono px-4 py-2.5 transition-colors ${
                  tab === g ? 'bg-ink text-paper' : 'border border-ink/35 text-ink hover:border-ink'
                }`}
              >
                {g} <span className="ml-1.5">{team.filter(groups[g]).length}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <p className="sr-only" role="status" aria-live="polite">Showing {shown.length} of {filtered.length} professionals</p>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ul className="lg:col-span-7">
            {shown.map((p) => {
              const on = active.name === p.name
              return (
                <li key={p.name} className="group relative border-t border-ink/25 last:border-b" onMouseEnter={() => setActive(p)}>
                  <span aria-hidden="true" className={`absolute inset-0 -z-0 origin-left bg-bone transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${on ? 'scale-x-100' : 'scale-x-0'}`} />
                  <div className="relative flex items-center gap-4 py-3 pr-2 pl-2 sm:gap-6">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onFocus={() => setActive(p)}
                      className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6"
                    >
                      <img
                        src={p.photo}
                        alt=""
                        width="56"
                        height="56"
                        loading="lazy"
                        decoding="async"
                        className={`h-14 w-14 shrink-0 rounded-full object-cover object-top transition-all duration-500 ${on ? 'grayscale-0' : 'grayscale'}`}
                      />
                      <span className="min-w-0">
                        <h3 className={`font-display text-[1.7rem] leading-none transition-transform duration-500 sm:text-[2.2rem] ${on ? 'translate-x-1.5' : ''}`}>{p.name}</h3>
                        <span className="mono mt-1.5 block text-ink/70">{p.title}</span>
                      </span>
                      <ArrowUpRight size={22} aria-hidden="true" className={`ml-auto hidden shrink-0 transition-all duration-500 sm:block ${on ? 'translate-x-0 text-vermilion-d opacity-100' : '-translate-x-2 opacity-0'}`} />
                      <span className="sr-only">View profile (opens in a new tab)</span>
                    </a>
                    <a href={`mailto:${p.email}`} aria-label={`Email ${p.name}`} className="shrink-0 p-2 text-ink/60 transition-colors hover:text-vermilion-d">
                      <Mail size={18} aria-hidden="true" />
                    </a>
                  </div>
                </li>
              )
            })}
            <li className="pt-8">
              <div className="flex flex-wrap items-center gap-4">
                {filtered.length > INITIAL && (
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setExpanded((e) => !e)}
                    className="mono border border-ink/40 px-6 py-3.5 transition-colors hover:bg-ink hover:text-paper"
                  >
                    {expanded ? 'Show fewer' : `Show all ${filtered.length} professionals`}
                  </button>
                )}
                <ArrowLink href={links.professionals} external className="text-ink">Full directory</ArrowLink>
              </div>
            </li>
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <Preview p={active} />
          </div>
        </div>
      </div>
    </section>
  )
}
