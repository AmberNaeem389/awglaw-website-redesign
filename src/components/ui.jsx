import { useEffect, useRef, useState } from 'react'
import { m, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export const EASE = [0.22, 1, 0.36, 1]

/**
 * True once the (static) element has entered the viewport. Reveals observe a static wrapper, never the
 * element being clipped/translated/scaled, which can have no visible area and so never reports as visible.
 */
export function useSeen(ref, rootMargin = '0px 0px -10% 0px') {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, rootMargin])
  return seen
}

/** Fade + rise on scroll, once. */
export function Reveal({ children, delay = 0, className = '', as = 'div', y = 24 }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/** A line of display type that slides up out of a mask. `inView` for scroll-triggered, otherwise on mount. */
export function MaskLine({ children, delay = 0, inView = false, className = '' }) {
  const ref = useRef(null)
  const seen = useSeen(ref)
  const go = inView ? seen : true
  return (
    <span ref={ref} className={`block overflow-hidden pr-[0.08em] pb-[0.12em] -mb-[0.12em] ${className}`}>
      <m.span className="block" initial={{ y: '112%' }} animate={{ y: go ? 0 : '112%' }} transition={{ duration: 1.1, delay, ease: EASE }}>
        {children}
      </m.span>
    </span>
  )
}

/** Marker-pen highlight behind a word (the logo is three marker strokes). Text stays dark for contrast. */
export function Mark({ children, color = 'bg-lime', delay = 0.9, inView = false }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const seen = useSeen(ref)
  const go = inView ? seen : true
  return (
    <span ref={ref} className="relative inline-block px-[0.14em] whitespace-nowrap text-ink">
      <m.span
        aria-hidden="true"
        className={`absolute inset-x-0 top-[0.14em] bottom-[0.02em] origin-left -skew-x-[8deg] ${color}`}
        initial={{ scaleX: reduce ? 1 : 0 }}
        animate={{ scaleX: go ? 1 : reduce ? 1 : 0 }}
        transition={{ duration: 0.8, delay, ease: EASE }}
      />
      <span className="relative">{children}</span>
    </span>
  )
}

/** Mono micro-label with a short rule. */
export function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`mono mb-6 flex items-center gap-3 ${light ? 'text-lime' : 'text-teal'} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}

/** Starts tracking scroll for one photo only after it is near the viewport (so nothing is measured at load). */
function ParallaxDriver({ targetRef, y, amount }) {
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => y.set(-amount + 2 * amount * v))
  return null
}

/**
 * Photograph with a "curtain" reveal on entry, gentle scroll parallax, and the shared warm treatment.
 * The curtain is a separate panel that slides away; the image itself is never clipped, so lazy-loading
 * works normally even if the visitor scrolls past quickly.
 */
export function Photo({ src, alt = '', className = '', imgClass = '', parallax = 7, treat = true, priority = false, position = 'center', cover = 'bg-bone' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const seen = useSeen(ref, '0px 0px -8% 0px')
  const y = useMotionValue(0)
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <m.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ y: reduce ? 0 : y, objectPosition: position }}
        className={`absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover ${treat ? 'photo-treat' : ''} ${imgClass}`}
      />
      <m.div
        aria-hidden="true"
        className={`absolute inset-0 origin-top ${cover}`}
        initial={{ scaleY: reduce ? 0 : 1 }}
        animate={{ scaleY: seen || reduce ? 0 : 1 }}
        transition={{ duration: 1.2, ease: EASE }}
      />
      {seen && !reduce && <ParallaxDriver targetRef={ref} y={y} amount={parallax * 1.2} />}
    </div>
  )
}

/** Number that counts up once when scrolled into view (native rAF). Screen readers get the final value. */
export function CountUp({ to, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [v, setV] = useState(reduce ? to : 0)
  useEffect(() => {
    if (reduce || !ref.current) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / 1600, 1)
        setV(Math.round(to * (1 - Math.pow(1 - p, 4))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { rootMargin: '0px 0px -40px 0px' })
    io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, reduce])
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{to}</span>
      <span aria-hidden="true">{v}</span>
    </span>
  )
}

/** Brand mark (transparent crop of the firm's logo) + typeset wordmark. */
export function Logo({ light = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img src="/img/awg-mark.png" alt="" width="174" height="148" className="h-8 w-auto shrink-0 sm:h-10" />
      <span className="leading-none">
        <span className={`font-display block text-[1.15rem] whitespace-nowrap transition-colors sm:text-[1.5rem] ${light ? 'text-paper' : 'text-ink'}`}>
          Amin Wasserman Gurnani
        </span>
        <span className={`mono mt-1 hidden text-[0.58rem] tracking-[0.16em] whitespace-nowrap transition-colors sm:block xl:hidden min-[1440px]:block ${light ? 'text-paper/70' : 'text-ink/70'}`}>
          Chicago · Washington D.C. · Los Angeles
        </span>
      </span>
    </span>
  )
}

/**
 * Button with a "fill slide": a block rises from below on hover while the arrow travels.
 * variant = vermilion | ink | paper | ghostLight | ghostDark
 */
export function Button({ href, children, variant = 'vermilion', external = false, className = '' }) {
  const v = {
    vermilion: ['bg-vermilion text-ink', 'bg-ink', 'group-hover:text-paper'],
    ink: ['bg-ink text-paper', 'bg-vermilion', 'group-hover:text-ink'],
    paper: ['bg-paper text-ink', 'bg-ink', 'group-hover:text-paper'],
    ghostLight: ['border border-paper/50 text-paper', 'bg-paper', 'group-hover:text-ink'],
    ghostDark: ['border border-ink/40 text-ink', 'bg-ink', 'group-hover:text-paper'],
  }[variant]
  const Arrow = external ? ArrowUpRight : ArrowRight
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden px-7 py-4 text-[0.82rem] font-semibold tracking-[0.1em] whitespace-nowrap uppercase transition-colors duration-500 ${v[0]} ${v[2]} ${className}`}
    >
      <span aria-hidden="true" className={`absolute inset-0 -z-10 translate-y-[101%] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 ${v[1]}`} />
      {children}
      <Arrow size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}

/** Inline text link with an underline that sweeps on hover. */
export function ArrowLink({ href, children, external = false, className = '' }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center gap-2 text-[0.82rem] font-semibold tracking-[0.1em] uppercase ${className}`}
    >
      <span className="relative">
        {children}
        <span aria-hidden="true" className="absolute -bottom-1.5 left-0 h-px w-full bg-current opacity-30" />
        <span aria-hidden="true" className="absolute -bottom-1.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
      </span>
      <ArrowRight size={15} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1" />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
