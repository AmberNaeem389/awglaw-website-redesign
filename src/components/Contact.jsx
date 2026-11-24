import { Button, Eyebrow, MaskLine, Reveal } from './ui.jsx'
import { links, offices } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-vermilion py-24 text-ink lg:py-36">
      <div className="container-x relative">
        <Reveal>
          <p className="mono mb-6 flex items-center gap-3 !text-ink">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            New business inquiry
          </p>
        </Reveal>

        <h2 className="font-display text-[clamp(3rem,9vw,9.4rem)] leading-[0.88] tracking-[-0.03em]">
          <MaskLine inView>Launching,</MaskLine>
          <MaskLine inView delay={0.1}>defending or</MaskLine>
          <MaskLine inView delay={0.2}><em className="italic">somewhere between?</em></MaskLine>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-lg text-[1.2rem] leading-snug font-medium">
              Tell us where your product is in its lifecycle. Complete the inquiry to the best of your knowledge and a member of our team will be in touch with you soon.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <Button href={links.contact} variant="ink" external>Start an inquiry</Button>
            <Button href={`mailto:${links.email}`} variant="ghostDark">{links.email}</Button>
          </Reveal>
        </div>

        <ul className="mt-20 grid border-t-2 border-ink md:grid-cols-3">
          {offices.map((o, i) => (
            <Reveal as="li" key={o.city} delay={i * 0.08} className="border-b-2 border-ink py-8 md:border-b-0 md:py-10 md:[&:not(:first-child)]:border-l-2 md:[&:not(:first-child)]:pl-8 md:[&:not(:last-child)]:pr-8">
              <h3 className="font-display text-[2rem] leading-none">{o.city}</h3>
              <address className="mt-4 text-[0.98rem] leading-relaxed font-medium not-italic">
                {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <a
                href={`tel:${o.tel}`}
                className="font-display mt-5 inline-block text-[2.3rem] leading-none underline decoration-ink/0 decoration-2 underline-offset-8 transition-all duration-500 hover:decoration-ink"
              >
                {o.phone}
              </a>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-[0.85rem] leading-relaxed font-medium">
          Contacting us does not create an attorney-client relationship. Please do not send any confidential or sensitive information until a formal relationship has been established.
        </p>
      </div>
    </section>
  )
}
