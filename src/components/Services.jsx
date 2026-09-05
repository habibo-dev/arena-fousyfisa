import { ArrowUpLeft, Plane, BedDouble, FileCheck2, MoonStar, Compass, Map } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { SERVICES } from '../lib/data.js'
import accent from '../assets/images/accent-cappadocia.webp'
import accentSm from '../assets/images/accent-cappadocia-sm.webp'

const ICONS = {
  packages: Map,
  flights: Plane,
  hotels: BedDouble,
  visa: FileCheck2,
  umrah: MoonStar,
  private: Compass,
}

export default function Services() {
  return (
    <section id="services" className="bg-olive-800 py-24 text-ivory-50 sm:py-32">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + feature image */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="خدماتنا"
              title="كل ما تحتاجه لرحلة بلا تعقيد"
              theme="dark"
              className="max-w-md"
            />
            <Reveal delay={160} className="mt-10">
              <div className="img-frame relative rounded-[1.5rem]">
                <img
                  src={accent}
                  srcSet={`${accentSm} 640w, ${accent} 900w`}
                  sizes="(min-width:1024px) 40vw, 100vw"
                  alt="مناطيد الهواء الساخن فوق كبادوكيا"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-900/60 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="font-display text-xl font-semibold leading-snug">
                    رحلة بلا تفاصيل معلّقة.
                  </p>
                  <p className="mt-1 text-sm text-ivory-100/80">
                    ننظّم كل شيء، لتستمتع أنت بكل شيء.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: service blocks */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {SERVICES.map((s, i) => {
                const Icon = ICONS[s.id] || Compass
                const spanFull = i === 0 || i === SERVICES.length - 1
                return (
                  <Reveal
                    key={s.id}
                    delay={(i % 2) * 100}
                    className={spanFull ? 'sm:col-span-2' : ''}
                  >
                    <a
                      href="#contact"
                      className={`group flex h-full items-start gap-4 rounded-2xl border border-ivory-50/10 p-6 transition-all duration-300 hover:border-ivory-50/25 hover:bg-ivory-50/[0.06] ${
                        spanFull ? 'sm:p-8' : ''
                      }`}
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory-50/10 text-ivory-50">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>
                      <div>
                        <h3
                          className={`font-display font-semibold text-ivory-50 ${
                            spanFull ? 'text-2xl' : 'text-xl'
                          }`}
                        >
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                          {s.desc}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ivory-50/80 transition-colors group-hover:text-ivory-50">
                          اعرف المزيد
                          <ArrowUpLeft
                            size={15}
                            strokeWidth={2}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
