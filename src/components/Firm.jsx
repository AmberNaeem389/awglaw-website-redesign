import { ArrowLink, CountUp, Eyebrow, MaskLine, Photo, Reveal } from './ui.jsx'
import { links, offices } from '../data/site.js'

const figures = [
  [28, 'Professionals'],
  [3, 'Offices'],
  [5, 'Industries'],
  [11, 'Practice areas'],
]

const offsets = ['', 'md:mt-16', 'md:mt-32']

export default function Firm() {
  return (
    <section id="firm" className="relative overflow-hidden bg-bone py-24 lg:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><Eyebrow>The firm</Eyebrow></Reveal>
            <h2 className="font-display text-[clamp(2.6rem,6.4vw,6.4rem)] leading-[0.93]">
              <MaskLine inView>A narrow focus,</MaskLine>
              <MaskLine inView delay={0.1}><em className="italic text-teal">by design.</em></MaskLine>
            </h2>
          </div>
          <Reveal delay={0.15} className="lg:col-span-5 lg:pt-16">
            <p className="font-display text-[1.7rem] leading-[1.2] sm:text-[2rem]">
              We provide complete legal services for the lifecycle of products aimed at improving the population’s health and wellness.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-5 leading-[1.75] text-ink/80 lg:col-span-6 lg:col-start-2">
            <p className="first-letter:font-display first-letter:float-left first-letter:mr-1.5 first-letter:text-[5.2rem] first-letter:leading-[0.8] first-letter:text-vermilion-d">
              Amin Wasserman Gurnani has gained a strong reputation for its work at the cutting edge of food, drug (FDA), advertising (FTC, National Advertising Division, Direct Selling Self-Regulatory Council) and intellectual property law, responding nimbly to rapid changes in the regulatory climate and marketplace.
            </p>
            <p>
              We work with some of the most innovative products in this sphere, such as raw juices, allergy-free foods, botanical drugs, cosmeceuticals and hemp products. Beyond guiding new products through regulatory approvals to market, we advise on post-launch labeling, advertising, safety and manufacturing compliance, as well as recalls, false advertising class actions, infringement disputes, government investigations and Proposition 65.
            </p>
            <p>We also provide IP and compliance due diligence in mergers and acquisitions.</p>
            <div className="pt-3 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href={links.firm} external className="text-ink">About the firm</ArrowLink>
              <ArrowLink href={links.deck} external className="text-ink">Team capability deck</ArrowLink>
            </div>
          </Reveal>

          <dl className="grid grid-cols-2 gap-px self-start bg-ink/25 lg:col-span-4 lg:col-start-9">
            {figures.map(([n, l]) => (
              <Reveal key={l} className="flex flex-col bg-bone p-6">
                <dd className="font-display order-1 text-[4.2rem] leading-none"><CountUp to={n} /></dd>
                <dt className="mono order-2 mt-3 text-ink/75">{l}</dt>
              </Reveal>
            ))}
          </dl>
        </div>

        {/* three cities */}
        <div className="mt-24 lg:mt-32">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h3 className="font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-none">Three cities. <em className="italic text-teal">One team.</em></h3>
            <p className="mono text-ink/70">Chicago · Washington, D.C. · Los Angeles</p>
          </Reveal>
          <ul className="grid gap-5 md:grid-cols-3">
            {offices.map((o, i) => (
              <li key={o.city} className={offsets[i]}>
                <article className="group on-dark relative">
                  <Photo
                    src={`/photo/${o.photo}.webp`}
                    alt={{
                      chicago: 'The Chicago River lined with glass towers on a clear morning',
                      washington: 'The Jefferson Memorial reflected in the Tidal Basin at dusk',
                      'los-angeles': 'The Los Angeles skyline with a snow-covered mountain range behind it',
                    }[o.photo]}
                    className="aspect-[4/5] w-full bg-ink"
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
                    <h4 className="font-display text-[2.4rem] leading-none">{o.city}</h4>
                    <address className="mono mt-3 text-paper/85 not-italic !leading-relaxed !normal-case !tracking-normal">
                      {o.lines.join(', ')}
                    </address>
                    <a href={`tel:${o.tel}`} className="mono mt-2 inline-block text-lime underline-offset-4 hover:underline">{o.phone}</a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
