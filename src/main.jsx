import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Instrument Serif: oversized editorial display. Hanken Grotesk: body. JetBrains Mono: label-style micro-copy.
import '@fontsource/instrument-serif/latin-400.css'
import '@fontsource/instrument-serif/latin-400-italic.css'
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/jetbrains-mono'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
