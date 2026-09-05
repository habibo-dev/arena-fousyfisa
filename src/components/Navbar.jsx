import { useEffect, useState } from 'react'
import { Menu, X, Globe, ArrowLeft, MessageCircle } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV, WH } from '../lib/data.js'

const LANGS = ['العربية', 'Français', 'English']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState('العربية')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-50/90 backdrop-blur-xl shadow-[0_1px_0_rgba(29,26,22,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="container-shell flex items-center justify-between gap-4 h-[4.5rem]"
          aria-label="التنقل الرئيسي"
        >
          <Logo theme={scrolled ? 'dark' : 'light'} />

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-olive-200/40 ${
                    scrolled
                      ? 'text-charcoal-700 hover:text-olive-700'
                      : 'text-ivory-50/90 hover:text-ivory-50'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <LangSelector
              lang={lang}
              setLang={setLang}
              light={!scrolled}
            />
            <a
              href="#contact"
              className="btn btn-olive !h-11 !px-6 !text-sm"
            >
              ابدأ رحلتك
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`lg:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
              scrolled
                ? 'text-charcoal-900 hover:bg-charcoal-900/5'
                : 'text-ivory-50 hover:bg-ivory-50/10'
            }`}
            aria-label="فتح القائمة"
            aria-expanded={open}
          >
            <Menu size={24} strokeWidth={1.8} />
          </button>
        </nav>
      </header>

      {open && (
        <MobileMenu
          lang={lang}
          setLang={setLang}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

function LangSelector({ lang, setLang, light = false }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
          light
            ? 'text-ivory-50/90 hover:bg-ivory-50/10'
            : 'text-charcoal-700 hover:bg-charcoal-900/5'
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Globe size={16} strokeWidth={1.8} />
        {lang}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 w-40 overflow-hidden rounded-2xl bg-ivory-50 p-1 shadow-lift"
        >
          {LANGS.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => {
                  setLang(l)
                  setOpen(false)
                }}
                className={`w-full rounded-xl px-3 py-2.5 text-start text-sm transition-colors ${
                  l === lang
                    ? 'bg-olive-200/60 font-semibold text-olive-900'
                    : 'text-charcoal-700 hover:bg-charcoal-900/5'
                }`}
                role="option"
                aria-selected={l === lang}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function MobileMenu({ lang, setLang, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="القائمة"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="إغلاق القائمة"
        onClick={onClose}
        className="absolute inset-0 bg-charcoal-900/30 backdrop-blur-sm animate-fade-in"
      />

      {/* Panel */}
      <div className="absolute inset-y-0 end-0 flex w-full max-w-[24rem] flex-col bg-ivory-50 animate-[slide-in_0.5s_cubic-bezier(0.16,1,0.3,1)]">
        <style>{`
          @keyframes slide-in {
            from { transform: translateX(-100%); opacity: 0.6; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}</style>
        <div className="flex items-center justify-between border-b border-charcoal-900/8 px-6 py-5">
          <Logo theme="dark" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal-900 hover:bg-charcoal-900/5"
            aria-label="إغلاق القائمة"
          >
            <X size={22} strokeWidth={1.8} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-8">
          <ul className="space-y-1">
            {NAV.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl font-medium text-charcoal-900 transition-colors hover:bg-olive-200/40"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item.label}
                  <ArrowLeft
                    size={20}
                    strokeWidth={1.6}
                    className="-translate-x-1 text-olive-600 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Language */}
          <div className="mt-10">
            <p className="eyebrow mb-3">اللغة</p>
            <div className="flex gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`flex-1 rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                    l === lang
                      ? 'border-olive-600 bg-olive-200/50 text-olive-900'
                      : 'border-charcoal-900/10 text-charcoal-500 hover:border-charcoal-900/20'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="space-y-3 border-t border-charcoal-900/8 px-6 py-6">
          <a href="#contact" onClick={onClose} className="btn btn-olive w-full">
            ابدأ رحلتك
          </a>
          <a
            href={`https://wa.me/${WH.whatsappRaw}`}
            target="_blank"
            rel="noreferrer"
            className="btn w-full border border-charcoal-900/12 text-charcoal-900 hover:bg-charcoal-900/5"
          >
            <MessageCircle size={18} strokeWidth={2} />
            تحدث معنا عبر WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
