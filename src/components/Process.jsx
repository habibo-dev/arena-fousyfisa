import { MessageCircle, PenLine, Sparkles, PlaneTakeoff } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const STEPS = [
  { num: '01', title: 'اخبرنا بما تبحث عنه', icon: MessageCircle },
  { num: '02', title: 'نصمم لك الرحلة', icon: PenLine },
  { num: '03', title: 'نعتني بالتفاصيل', icon: Sparkles },
  { num: '04', title: 'سافر واستمتع', icon: PlaneTakeoff },
]

export default function Process() {
  return (
    <section className="bg-ivory-100/40 py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="رحلتك تبدأ من هنا"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <ol className="mt-16 grid gap-y-12 md:grid-cols-4 md:gap-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal as="li" key={s.num} delay={i * 120} className="relative">
                {/* connector line on desktop */}
                {i < STEPS.length - 1 && (
                  <span className="absolute top-7 end-[-1.5rem] hidden h-px w-12 bg-charcoal-900/15 md:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-olive-700 text-ivory-50">
                    <Icon size={22} strokeWidth={1.7} />
                    <span className="absolute -top-1.5 -end-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-champagne-300 font-display text-[0.65rem] font-bold text-charcoal-900">
                      {s.num}
                    </span>
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-charcoal-900">
                    {s.title}
                  </h3>
                </div>
              </Reveal>
            )
          })}
        </ol>

        <Reveal delay={200} className="mt-16 text-center">
          <a href="#contact" className="btn btn-olive">
            ابدأ الخطوة الأولى
          </a>
        </Reveal>
      </div>
    </section>
  )
}
