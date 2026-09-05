import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import hero from '../assets/images/hero-cappadocia.webp'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Preload then fade in to avoid pop-in
    const img = imgRef.current
    if (img?.complete) setLoaded(true)
    const onLoad = () => setLoaded(true)
    img?.addEventListener('load', onLoad)
    if (img?.complete) onLoad()
    return () => img?.removeEventListener('load', onLoad)
  }, [])

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          ref={imgRef}
          src={hero}
          alt="مناطيد الهواء الساخن تحلّق فوق وديان كبادوكيا عند الشروق"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient overlays — subtle, cinematic */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/15 to-charcoal-900/20" />
      <div className="absolute inset-0 bg-gradient-to-l from-charcoal-900/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-shell flex min-h-[100svh] flex-col justify-end pb-[max(9rem,calc(env(safe-area-inset-bottom)_+_7rem))] pt-28">
        <div className="max-w-3xl text-ivory-50">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-ivory-100/90 animate-fade-up">
            <span className="h-px w-10 bg-ivory-100/50" />
            وكالة الفسيفساء للسياحة والأسفار
          </p>

          <h1
            className="font-display text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[1.04] tracking-tightish balance-text animate-fade-up"
            style={{ animationDelay: '120ms' }}
          >
            العالم أقرب
            <br />
            مما تتخيّل
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-ivory-100/85 sm:text-lg animate-fade-up"
            style={{ animationDelay: '240ms' }}
          >
            رحلات مصمّمة بعناية، وتجربة سفر تبدأ من أول لحظة.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 animate-fade-up"
            style={{ animationDelay: '360ms' }}
          >
            <a href="#contact" className="btn btn-light !h-14 !px-8">
              اكتشف رحلتك
            </a>
            <a
              href="#destinations"
              className="btn btn-outline-light !h-14 !px-8"
            >
              استكشف الوجهات
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 start-6 z-10 hidden xl:block">
        <a
          href="#planner"
          aria-label="مرّر للأسفل"
          className="flex h-12 w-7 items-start justify-center rounded-full border border-ivory-50/35 pt-2 text-ivory-50/70"
        >
          <ArrowDown
            size={14}
            strokeWidth={1.6}
            className="animate-scroll-bounce"
          />
        </a>
      </div>
    </section>
  )
}
