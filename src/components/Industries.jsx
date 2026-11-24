import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Eyebrow, MaskLine, Reveal } from './ui.jsx'
import { industries } from '../data/site.js'

const alts = {
  food: 'Baskets of orange and red peppers at a market stall',
  supplements: 'Yellow supplement tablets spilling from a white bottle',
  cosmetics: 'A set of makeup brushes laid out on a white surface',
  drugs: 'An open medieval herbal manuscript with plant illustrations',
  devices: 'Wooden tongue depressors and a metal medical tool',
}

/** Five categories as photographic panels that open on hover/focus (stacked rows on small screens). */
export default function Industries() {
  const [active, setActive] = useState(0)
  return (
    <section id="industries" className="on-dark bg-ink py-24 text-paper lg:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal><Eyebrow light>Industries</Eyebrow></Reveal>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] leading-[0.95]">
              <MaskLine inView>Products people eat,</MaskLine>
              <MaskLine inView delay={0.1}>take, apply <em className="italic text-vermilion">and rely on.</em></MaskLine>
            </h2>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="max-w-sm leading-relaxed text-paper/75">
              Our focus is on food and beverage, nutritional supplements, cosmetics, medical devices and pharmaceuticals, including cosmeceuticals, botanical drugs and hemp products.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 flex flex-col gap-3 lg:h-[36rem] lg:flex-row lg:gap-2" onMouseLeave={() => setActive(0)}>
          {industries.map((ind, i) => {
            const on = active === i
            return (
              <li
                key={ind.label}
                style={{ flexGrow: on ? 4 : 1 }}
                className="relative min-h-[11rem] flex-1 basis-0 overflow-hidden bg-ink transition-[flex-grow] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                onMouseEnter={() => setActive(i)}
              >
                <a
                  href={ind.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onFocus={() => setActive(i)}
                  className="group on-dark absolute inset-0 block"
                >
                  <img
                    src={`/photo/${ind.photo}.webp`}
                    alt={alts[ind.photo]}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: ind.photo === 'devices' ? '78% 60%' : ind.photo === 'cosmetics' ? '50% 40%' : 'center' }}
                    className={`photo-treat absolute inset-0 h-full w-full object-cover ${on ? 'is-on scale-105' : 'scale-100'}`}
                  />
                  <span aria-hidden="true" className={`absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent transition-opacity duration-700 ${on ? 'opacity-95' : 'opacity-70'}`} />

                  {/* collapsed: vertical label (desktop) */}
                  <span
                    aria-hidden="true"
                    className={`font-display absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-3xl whitespace-nowrap text-paper transition-opacity duration-500 [writing-mode:vertical-rl] rotate-180 lg:block ${on ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {ind.label}
                  </span>

                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper sm:p-7">
                    <span className={`transition-all duration-700 ${on ? 'translate-y-0 opacity-100' : 'lg:translate-y-4 lg:opacity-0'}`}>
                      <span className="mono mb-2 block text-lime">0{i + 1}</span>
                      <span className="font-display block text-[2.3rem] leading-none sm:text-5xl">{ind.label}</span>
                      <span className="mt-3 block max-w-xs text-[0.95rem] leading-snug text-paper/85">{ind.note}</span>
                    </span>
                    <ArrowUpRight
                      size={30}
                      aria-hidden="true"
                      className={`shrink-0 text-vermilion transition-all duration-500 ${on ? 'opacity-100' : 'lg:opacity-0'}`}
                    />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
