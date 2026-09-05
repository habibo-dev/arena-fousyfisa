import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const PRINCIPLES = [
  {
    num: '01',
    title: 'عناية حقيقية',
    desc: 'نستمع أولاً، ثم نقترح. كل رحلة تبدأ منك أنت.',
  },
  {
    num: '02',
    title: 'وضوح من البداية',
    desc: 'أسعار وبرامج واضحة، بلا مفاجآت أو تفاصيل مبهمة.',
  },
  {
    num: '03',
    title: 'خدمة ترافقك',
    desc: 'نبقى معك قبل السفر وأثناءه وبعده.',
  },
]

export default function WhyAlMosaique() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="لماذا الفسيفساء؟"
          title="نصنع تجربة سفر تبدأ قبل أن تقلع الطائرة."
          className="max-w-3xl"
        />

        <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.num} delay={i * 120} className="relative border-t border-charcoal-900/10 pt-8">
              <span className="font-display text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none text-olive-200">
                {p.num}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-charcoal-900">
                {p.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-charcoal-500">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
