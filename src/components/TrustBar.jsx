import { ShieldCheck, Languages, Headset, Handshake } from 'lucide-react'
import Reveal from './Reveal.jsx'

/**
 * Trust strip. We deliberately avoid inventing numbers (destinations count,
 * years, clients, ratings) since we have no verified data. Instead we show
 * qualitative, truthful markers of credibility.
 */
const TRUST = [
  {
    icon: ShieldCheck,
    title: 'وكالة موثوقة',
    desc: 'مرخّصة ومقيمة في الجزائر.',
  },
  {
    icon: Languages,
    title: 'بثلاث لغات',
    desc: 'العربية، الفرنسية، الإنجليزية.',
  },
  {
    icon: Headset,
    title: 'دعم مباشر',
    desc: 'نرافقك قبل وأثناء السفر.',
  },
  {
    icon: Handshake,
    title: 'شفافية كاملة',
    desc: 'تفاصيل واضحة من البداية.',
  },
]

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal-900/8 bg-ivory-100/40 py-14">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {TRUST.map((t, i) => {
            const Icon = t.icon
            return (
              <Reveal
                key={t.title}
                delay={i * 90}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-200/50 text-olive-700">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
                <h3 className="font-display text-lg font-semibold text-charcoal-900">
                  {t.title}
                </h3>
                <p className="max-w-[13rem] text-sm leading-relaxed text-charcoal-500">
                  {t.desc}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
