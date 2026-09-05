import Reveal from './Reveal.jsx'
import istanbul from '../assets/images/editorial-istanbul.webp'

export default function EditorialIntro() {
  return (
    <section id="about" className="py-24 sm:py-36">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Statement */}
          <div className="lg:col-span-7">
            <Reveal as="p" className="eyebrow mb-6">
              فلسفتنا
            </Reveal>
            <Reveal as="h2" delay={60} className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold leading-[1.12] tracking-tightish text-charcoal-900 balance-text">
              السفر بالنسبة لنا
              <br />
              ليس مجرد حجز.
            </Reveal>
            <Reveal as="p" delay={160} className="mt-7 font-display text-[clamp(1.4rem,3.4vw,2.3rem)] font-medium leading-relaxed text-olive-700">
              إنها تجربة تبدأ قبل الإقلاع.
            </Reveal>
            <Reveal as="p" delay={240} className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal-500">
              في الفسيفساء، نصمّم كل رحلة حولك أنت. من الفكرة الأولى إلى لحظة العودة،
              نختار الوجهة، ونرتّب التفاصيل، ونرافقك — لتبقى لك المتعة وحدها.
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="#services" className="btn btn-olive">
                  تعرّف على خدماتنا
                </a>
                <div className="flex items-center gap-4">
                  <div className="h-px w-10 bg-olive-500/40" />
                  <span className="text-sm font-medium text-charcoal-500">
                    وجهات تختارها بعناية، ورحلات تُروى طويلاً.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <Reveal delay={120} className="relative">
              <div className="img-frame rounded-[1.75rem] sm:rounded-[2.25rem]">
                <img
                  src={istanbul}
                  alt="أفق إسطنبول عند الغسق بين المساجد والبوسفور"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
                  loading="lazy"
                />
              </div>
              {/* Floating caption card */}
              <div className="absolute -bottom-6 start-6 hidden rounded-2xl bg-ivory-50/95 px-6 py-5 shadow-lift backdrop-blur sm:block">
                <p className="font-display text-sm font-semibold text-charcoal-900">
                  وجهات تُختار بعناية
                </p>
                <p className="mt-1 text-sm text-charcoal-400">
                  لرحلة تشبهك تماماً
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
