import { ArrowUpLeft } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { DESTINATIONS } from '../lib/data.js'

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="أين تريد أن تذهب؟"
          title="اكتشف العالم"
          lead="وجهات نختارها بعناية، لتجد ما يشبهك تماماً."
          className="max-w-2xl"
        />

        {/* Mobile: horizontal scroll */}
        <div className="-mx-5 mt-10 overflow-x-auto px-5 pb-4 no-scrollbar lg:hidden">
          <div className="flex gap-4 snap-x snap-mandatory">
            {DESTINATIONS.map((d) => (
              <DestinationTile key={d.id} dest={d} />
            ))}
          </div>
        </div>

        {/* Desktop: asymmetric editorial mosaic */}
        <div className="mt-12 hidden gap-4 lg:grid lg:grid-cols-12 lg:auto-rows-[9rem]">
          {DESTINATIONS.map((d, i) => (
            <DestTileDesktop key={d.id} dest={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationTile({ dest }) {
  return (
    <a
      href="#contact"
      className="group relative block w-[72vw] max-w-[270px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] lg:w-auto"
    >
      <div className="img-frame">
        <img
          src={dest.image}
          srcSet={`${dest.imageSm} 640w, ${dest.image} 1000w`}
          sizes="270px"
          alt={`${dest.name} — ${dest.country}`}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
      <div className="absolute inset-x-5 bottom-5 text-ivory-50">
        <span className="text-xs font-medium text-ivory-100/80">{dest.country}</span>
        <div className="mt-1 flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold leading-tight">{dest.name}</h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50/15 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpLeft size={15} strokeWidth={2} />
          </span>
        </div>
      </div>
    </a>
  )
}

/**
 * Desktop editorial mosaic. Span set is tuned so all 8 tiles fill
 * a 12-col grid in three balanced, asymmetric rows (last tile is a wide strip).
 */
const LAYOUT = [
  'col-span-5 row-span-2',
  'col-span-4 row-span-2',
  'col-span-3',
  'col-span-3',
  'col-span-4',
  'col-span-4',
  'col-span-4',
  'col-span-12',
]

function DestTileDesktop({ dest, index }) {
  const span = LAYOUT[index % LAYOUT.length]
  const big = span === 'col-span-12'
  return (
    <Reveal
      delay={(index % 3) * 90}
      className={`${span} group relative overflow-hidden rounded-[1.5rem]`}
    >
      <a href="#contact" className="block h-full w-full">
        <div className="img-frame h-full w-full">
          <img
            src={dest.image}
            srcSet={`${dest.imageSm} 640w, ${dest.image} 1000w`}
            sizes="(min-width:1024px) 33vw, 100vw"
            alt={`${dest.name} — ${dest.country}`}
            className={`h-full w-full object-cover ${big ? 'lg:aspect-[10/3]' : ''}`}
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
        <div className="absolute inset-x-5 bottom-5 text-ivory-50">
          <span className="text-xs font-medium text-ivory-100/80">{dest.country}</span>
          <div className="mt-1 flex items-center justify-between">
            <h3 className={`font-display font-semibold leading-tight ${big ? 'text-2xl' : 'text-xl'}`}>
              {dest.name}
            </h3>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivory-50/15 backdrop-blur-sm">
              <ArrowUpLeft size={14} strokeWidth={2} />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  )
}
