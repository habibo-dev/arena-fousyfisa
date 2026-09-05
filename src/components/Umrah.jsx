import { ArrowUpLeft } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import makkah from '../assets/images/umrah-makkah.webp'
import madinah from '../assets/images/umrah-madinah.webp'

const FEATURES = ['مكة', 'المدينة', 'الفنادق', 'النقل', 'البرامج']

export default function Umrah() {
  return (
    <section id="umrah" className="relative overflow-hidden bg-charcoal-900 py-24 text-ivory-50 sm:py-32">
      {/* Ambient gradient, warm and calm */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,182,132,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,99,68,0.22),transparent_55%)]" />

      <div className="relative container-shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Text */}
          <div className="lg:col-span-5 lg:pt-8">
            <SectionHeading
              eyebrow="رحلة روحانية"
              title="إلى أطهر البقاع"
              lead="نعتني بتفاصيل الرحلة، لتتفرّغ لروحانيتها."
              theme="dark"
              className="max-w-md"
            />
            <Reveal delay={200}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-ivory-100/70">
                برامج عمرة مدروسة تجمع بين القرب والسكينة. إقامة مناسبة،
                نقل مريح، ومرافقة تبقى معك في كل خطوة.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {FEATURES.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ivory-50/15 px-4 py-2 text-sm text-ivory-100/85"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={360}>
              <a
                href="#contact"
                className="btn btn-light mt-10 !h-14 !px-8"
              >
                استكشف برامج العمرة
                <ArrowUpLeft size={17} strokeWidth={2} />
              </a>
            </Reveal>
          </div>

          {/* Imagery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <Reveal className="col-span-7">
                <div className="img-frame rounded-[1.5rem]">
                  <img
                    src={makkah}
                    alt="الكعبة المشرفة في المسجد الحرام بمكة ليلاً"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={120} className="col-span-5 flex flex-col gap-4">
                <div className="img-frame rounded-[1.5rem]">
                  <img
                    src={madinah}
                    alt="المسجد النبوي في المدينة المنورة عند الغروب"
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between rounded-[1.5rem] border border-ivory-50/10 bg-ivory-50/[0.04] p-5">
                  <p className="font-display text-lg font-semibold leading-snug">
                    سكينة تسبق الرحلة
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ivory-100/70">
                    نختار لك ما يليق بقلبك وروحك.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
