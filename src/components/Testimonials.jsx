import { Quote, MessageCircle, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

/**
 * Honest placeholder — we do NOT invent testimonials.
 * This renders a tasteful "coming soon" that can receive real reviews later.
 */
export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="آراء مسافرينا"
          title="كلمات من قلب الرحلة"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <Reveal delay={120} className="mx-auto mt-14 max-w-2xl">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-charcoal-900/8 bg-ivory-50 p-10 text-center shadow-soft sm:p-14">
            <div className="absolute -top-6 start-6 text-olive-200">
              <Quote size={90} strokeWidth={1} className="opacity-70" />
            </div>
            <div className="relative">
              <span className="mx-auto inline-flex items-center gap-1 rounded-full bg-sand-100 px-4 py-1.5 text-xs font-semibold text-charcoal-500">
                <Star size={13} strokeWidth={2} className="fill-champagne-500 text-champagne-500" />
                التقييمات قريباً
              </span>
              <p className="mx-auto mt-6 max-w-md font-display text-xl font-medium leading-relaxed text-charcoal-700 sm:text-2xl">
                نُضيف هنا قريباً آراء حقيقية من مسافرينا.
              </p>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-charcoal-500">
                رحلة تبدأ بثقة. فيما بعد، ستُعرض هنا تجربة من سافر معنا — بشكل صادق وبكلماتهم هم.
              </p>
              <a
                href="#contact"
                className="btn mx-auto mt-8 border border-charcoal-900/12 text-charcoal-900 hover:bg-charcoal-900/5"
              >
                <MessageCircle size={17} strokeWidth={2} />
                كن من أوائل من يجرب
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
