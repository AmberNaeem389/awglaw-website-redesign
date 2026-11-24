import { useState } from 'react'
import { links } from '../data/site.js'

const KEY = 'awg-cookie-ok'

export default function CookieNotice() {
  const [open, setOpen] = useState(() => {
    try { return !localStorage.getItem(KEY) } catch { return true }
  })
  if (!open) return null

  const close = () => {
    try { localStorage.setItem(KEY, '1') } catch { /* ignore */ }
    setOpen(false)
  }

  return (
    <div role="region" aria-label="Cookie notice" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md border-2 border-ink bg-paper p-5 text-ink shadow-[6px_6px_0_0_rgba(238,90,36,1)] sm:right-auto sm:left-6 sm:bottom-6 sm:mx-0">
      <p className="text-[0.85rem] leading-relaxed">
        We use cookies to give you the best experience on our website. By continuing, you agree to our use of cookies.{' '}
        <a href={links.privacy} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-teal">Privacy Policy<span className="sr-only"> (opens in a new tab)</span></a>
      </p>
      <button onClick={close} className="mono mt-4 bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-vermilion hover:text-ink">
        Accept
      </button>
    </div>
  )
}
