import { ArrowUpLeft } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { JOURNEYS } from '../lib/data.js'

export default function FeaturedJourneys() {
  return (
    <section id="journeys" className="bg-ivory-100/40 py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="رحلات مختارة"
            title="رحلات تستحق أن تُعاش"
            className="max-w-xl"
          />
          <Reveal delay={120}>
            <a
              href="#destinations"
              className="hidden items-center gap-2 text-sm font-semibold text-olive-700 transition-colors hover:text-olive-800 md:inline-flex"
            >
              كل الوجهات
              <ArrowUpLeft size={16} strokeWidth={2} />
            </a>
          </Reveal>
        </div>

        {/* Mobile: swipeable horizontal scroll */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 pb-4 no-scrollbar md:hidden">
          <div className="flex gap-4 snap-x snap-mandatory">
            {JOURNEYS.map((j) => (
              <JourneyCard key={j.id} journey={j} />
            ))}
          </div>
        </div>

        {/* Desktop: editorial asymmetric grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-12">
          {JOURNEYS.map((j, i) => (
            <JourneyCardDesktop key={j.id} journey={j} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function JourneyCard({ journey }) {
  const { image, imageSm, title, country, duration, desc, tag, cta, aspect } = journey
  return (
    <article
      className="group relative flex w-[78vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-charcoal-900 text-ivory-50 shadow-card transition-shadow duration-500 hover:shadow-card-hover sm:max-w-[330px]"
    >
      <div className="img-frame absolute inset-0">
        <img
          src={image}
          srcSet={`${imageSm} 640w, ${image} 1000w`}
          sizes="330px"
          alt={`رحلة ${title} في ${country}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/92 via-charcoal-900/25 to-transparent" />

      <div className="relative flex min-h-[22rem] w-full flex-col justify-end p-6">
        <div className="absolute top-5 start-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-ivory-50/15 px-3 py-1 text-[0.68rem] font-semibold text-ivory-50 backdrop-blur-sm">
            {tag}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-ivory-100/85">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory-50/10 px-3 py-1.5 backdrop-blur-sm">
            {duration}
          </span>
          <span className="px-1 text-ivory-100/70">{country}</span>
        </div>

        <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory-100/80">
          {desc}
        </p>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ivory-50"
        >
          {cta}
          <ArrowUpLeft
            size={16}
            strokeWidth={2}
            className="translate-x-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  )
}

function JourneyCardDesktop({ journey, index }) {
  const { image, imageSm, title, country, duration, desc, tag, cta, aspect } = journey
  const isTall = aspect === 'tall'
  const colClass = isTall ? 'lg:col-span-5' : 'lg:col-span-7'
  const minH = isTall ? 'min-h-[34rem]' : 'min-h-[30rem]'
  const textSize = isTall ? 'text-3xl' : 'text-3xl lg:text-4xl'

  return (
    <Reveal
      delay={(index % 2) * 120}
      className={`${colClass} ${index % 2 === 1 ? 'lg:mt-10' : ''}`}
    >
      <article
        className={`group relative flex ${minH} flex-col justify-end overflow-hidden rounded-[1.75rem] text-ivory-50 shadow-card transition-shadow duration-500 hover:shadow-card-hover`}
      >
        <img
          src={image}
          srcSet={`${imageSm} 640w, ${image} 1000w`}
          sizes="(min-width:1024px) 620px, 100vw"
          alt={`رحلة ${title} في ${country}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/92 via-charcoal-900/20 to-transparent" />

        <div className="relative z-10 flex flex-col p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-ivory-50/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {tag}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory-50/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {duration}
            </span>
          </div>

          <h3 className={`mt-4 font-display ${textSize} font-semibold leading-tight`}>
            {title}
            <span className="mt-1 block text-sm font-body font-medium text-ivory-100/70">
              {country}
            </span>
          </h3>
          <div className="mt-3 flex items-end justify-between gap-6">
            <p className="max-w-xs text-sm leading-relaxed text-ivory-100/80">{desc}</p>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ivory-50 px-5 py-3 text-sm font-semibold text-charcoal-900 transition-colors group-hover:bg-white">
              {cta}
              <ArrowUpLeft size={16} strokeWidth={2} />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
