import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Eyebrow, Reveal, useSeen } from './ui.jsx'
import { whyChoose } from '../data/site.js'

const statement =
  'Our focus is on the food and beverage, nutritional supplements, cosmetics, medical devices, and pharmaceutical industries. We provide complete legal services for the lifecycle of products aimed at improving the population’s health and wellness.'

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.42, 1])
  return <m.span style={{ opacity }} className="mr-[0.26em] inline-block">{word}</m.span>
}

/** Words light up as the section scrolls past. Tracking only starts once the section is near the viewport. */
function ScrubbedWords({ targetRef, words }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start 0.85', 'end 0.55'] })
  return words.map((w, i) => {
    const start = i / words.length
    const end = Math.min(start + 1.6 / words.length, 1)
    return <Word key={i} word={w} progress={scrollYProgress} range={[start, end]} />
  })
}

function ScrubbedStatement() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const near = useSeen(ref, '100% 0px 100% 0px')
  const words = statement.split(' ')
  return (
    <p ref={ref} className="font-display text-[clamp(2rem,4.5vw,4.4rem)] leading-[1.06]">
      {reduce
        ? statement
        : near
          ? <ScrubbedWords targetRef={ref} words={words} />
          : words.map((w, i) => <span key={i} style={{ opacity: 0.42 }} className="mr-[0.26em] inline-block">{w}</span>)}
    </p>
  )
}

export default function Difference() {
  return (
    <section id="difference" className="on-dark relative bg-ink py-24 text-paper lg:py-40">
      <div className="container-x">
        <Reveal><Eyebrow light>The difference</Eyebrow></Reveal>
        <div className="max-w-6xl">
          <ScrubbedStatement />
        </div>

        <ol className="mt-24 grid border-t border-paper/25 md:grid-cols-2 lg:mt-32 lg:grid-cols-5">
          {whyChoose.map((w, i) => (
            <Reveal
              as="li"
              key={w.n}
              delay={i * 0.06}
              className="border-b border-paper/25 py-8 md:pr-8 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="mono text-vermilion">{w.n}</span>
              <h3 className="font-display mt-5 text-[1.85rem] leading-[1.05]">{w.title}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-paper/75">{w.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
