import { useEffect, useRef, useState } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Button, EASE, Mark, MaskLine } from './ui.jsx'
import { lifecycle } from '../data/site.js'

function useCycle(length, ms, enabled) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!enabled) return
    const t = setInterval(() => setI((v) => (v + 1) % length), ms)
    return () => clearInterval(t)
  }, [length, ms, enabled])
  return i
}

/** The "Lifecycle Facts" label: a nutrition-label parody built from the firm's own lifecycle stages. */
function LifecycleFacts({ stage }) {
  return (
    <aside aria-label="Lifecycle facts" className="w-full max-w-[26rem] border-[3px] border-ink bg-paper p-4 text-ink shadow-[10px_10px_0_0_rgba(238,90,36,1)] sm:p-5">
      <h2 className="font-display text-[2.6rem] leading-none sm:text-5xl">Lifecycle Facts</h2>
      <p className="mono mt-2 border-b-[10px] border-ink pb-2 !text-[0.66rem] !tracking-[0.06em]">Serving size: one product, start to finish</p>
      <div className="mono flex justify-between border-b-4 border-ink py-1.5 !text-[0.64rem]">
        <span>Stage</span>
        <span>Where we come in</span>
      </div>
      <ol>
        {lifecycle.map((s, i) => {
          const active = i === stage
          return (
            <li key={s.step} className="relative border-b border-ink/40 last:border-b-0">
              <span aria-hidden="true" className={`absolute inset-y-0 -inset-x-1 origin-left bg-lime transition-transform duration-700 ease-out ${active ? 'scale-x-100' : 'scale-x-0'}`} />
              <div className="relative flex items-baseline justify-between gap-4 py-2.5">
                <span className="font-display text-[1.5rem] leading-none">{s.step}</span>
                <span className="max-w-[12.5rem] text-right text-[0.78rem] leading-snug font-medium">{s.text}</span>
              </div>
            </li>
          )
        })}
      </ol>
      <p className="mono border-t-[10px] border-ink pt-2 !text-[0.62rem] !tracking-[0.06em]">Counsel at every stage. Chicago · Washington, D.C. · Los Angeles</p>
    </aside>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const stage = useCycle(lifecycle.length, 2400, !reduce)
  // window scroll only: nothing is measured at load, so first paint isn't delayed by a forced layout
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 150])
  const textY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 90])

  return (
    <section ref={ref} id="top" className="on-dark relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-paper">
      {/* photograph: the Main Reading Room, Library of Congress */}
      <m.div style={{ y: imgY }} className="absolute inset-0 -z-20 h-[118%]">
        <m.img
          src="/photo/hero-reading-room-1400.webp"
          srcSet="/photo/hero-reading-room-800.webp 800w, /photo/hero-reading-room-1400.webp 1400w, /photo/hero-reading-room.webp 2200w"
          sizes="100vw"
          alt="The domed Main Reading Room of the Library of Congress, seen from above"
          fetchPriority="high"
          initial={{ scale: reduce ? 1 : 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="h-full w-full object-cover object-[center_40%]"
        />
      </m.div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,21,17,0.96)_0%,rgba(26,21,17,0.82)_42%,rgba(26,21,17,0.35)_100%),linear-gradient(0deg,rgba(26,21,17,1)_0%,rgba(26,21,17,0.6)_14%,transparent_48%)]" />

      <div className="container-x relative w-full pt-36 pb-12 sm:pb-16 lg:pt-40">
        <div className="grid items-end gap-12 xl:grid-cols-12">
          <m.div style={{ y: textY }} className="xl:col-span-8">
            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mono mb-7 flex items-center gap-3 text-lime"
            >
              <span aria-hidden="true" className="h-px w-10 bg-current" />
              Health &amp; wellness law
            </m.p>

            <h1 className="font-display text-[clamp(3.1rem,8.2vw,8.2rem)] leading-[0.9] tracking-[-0.025em]">
              <MaskLine delay={0.1}>Read the</MaskLine>
              <MaskLine delay={0.22}>
                <Mark delay={1.15}>fine print</Mark>
              </MaskLine>
              <MaskLine delay={0.34}>before the</MaskLine>
              <MaskLine delay={0.46}>
                <em className="italic">regulators do.</em>
              </MaskLine>
            </h1>

            <m.p
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="mt-8 max-w-xl text-[1.08rem] leading-relaxed text-paper/85 sm:text-[1.18rem]"
            >
              Lawyers for the lifecycle of foods, supplements, cosmetics, drugs and devices: from first formulation to final ruling.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#contact">Start an inquiry</Button>
              <Button href="#practices" variant="ghostLight">How we work</Button>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
            className="xl:col-span-4 xl:justify-self-end"
          >
            <LifecycleFacts stage={stage} />
          </m.div>
        </div>
      </div>
    </section>
  )
}
