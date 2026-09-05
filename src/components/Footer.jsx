import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import Logo from './Logo.jsx'
import { NAV, WH } from '../lib/data.js'

// Only real, working channels appear here — WhatsApp always works; the social
// platform URLs are placeholders to be filled by the agency (set `WH.social`).
const SOCIAL = [
  { icon: Instagram, label: 'Instagram', href: WH.social?.instagram },
  { icon: Facebook, label: 'Facebook', href: WH.social?.facebook },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/${WH.whatsappRaw}` },
].filter((s) => !!s.href)

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 pt-20 text-ivory-50">
      <div className="container-shell">
        <div className="grid gap-12 pb-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Logo theme="light" />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ivory-100/65">
              وكالة سفر جزائرية تصنع رحلات تشبهك. نصمم، نرتّب، ونرافق —
              لتبقى لك المتعة وحدها.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIAL.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-100/80 transition-colors hover:border-ivory-50/40 hover:text-ivory-50"
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold tracking-wide text-ivory-100/50">
              التنقل
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ivory-100/80 transition-colors hover:text-ivory-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-semibold tracking-wide text-ivory-100/50">
              تواصل معنا
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`tel:${WH.telRaw}`} className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-50">
                  <Phone size={17} strokeWidth={1.7} />
                  <span dir="ltr">{WH.tel}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WH.whatsappRaw}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-50">
                  <MessageCircle size={17} strokeWidth={1.7} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${WH.email}`} className="flex items-center gap-3 text-ivory-100/80 hover:text-ivory-50">
                  <Mail size={17} strokeWidth={1.7} />
                  <span dir="ltr">{WH.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-ivory-100/80">
                <MapPin size={17} strokeWidth={1.7} />
                {WH.location}
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {['العربية', 'Français', 'English'].map((l) => (
                <span
                  key={l}
                  className="rounded-full border border-ivory-50/15 px-4 py-1.5 text-sm text-ivory-100/80"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ivory-50/10 py-8 sm:flex-row">
          <p className="text-sm text-ivory-100/55">
            © {new Date().getFullYear()} الفسيفساء للسياحة والأسفار. جميع الحقوق محفوظة.
          </p>
          <p className="font-display text-sm font-semibold tracking-wide text-ivory-100/70">
            رحلات تُصنع بعناية، وتُروى طويلاً.
          </p>
        </div>
      </div>
    </footer>
  )
}
