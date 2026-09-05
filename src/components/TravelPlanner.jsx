import { useState } from 'react'
import { MapPin, Calendar, Users, Compass, Search, ChevronDown } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { DESTINATIONS_OPTIONS, TRIP_TYPES } from '../lib/data.js'

export default function TravelPlanner() {
  const [destination, setDestination] = useState('')
  const [date, setDate] = useState('')
  const [travelers, setTravelers] = useState('')
  const [type, setType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: could open WhatsApp prefilled, or a contact dialog.
    const lines = []
    if (destination) lines.push(`الوجهة: ${destination}`)
    if (date) lines.push(`تاريخ السفر: ${date}`)
    if (travelers) lines.push(`عدد المسافرين: ${travelers}`)
    if (type) lines.push(`نوع الرحلة: ${type}`)
    const msg = `مرحباً، أود التخطيط لرحلة.\n${lines.join('\n')}`.trim()
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="planner" className="relative z-20 -mt-[7rem] pb-8 sm:-mt-[6rem]">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-4xl">
          <div className="rounded-[1.75rem] bg-ivory-50 p-6 shadow-lift ring-1 ring-charcoal-900/[0.05] sm:p-9">
            <h2 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-snug text-charcoal-900 balance-text">
              إلى أين تأخذك الرحلة القادمة؟
            </h2>

            <form onSubmit={handleSubmit} className="mt-7">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                <Field label="الوجهة" htmlFor="pl-destination">
                  <FieldSelect
                    id="pl-destination"
                    value={destination}
                    onChange={setDestination}
                    icon={MapPin}
                    options={['', ...DESTINATIONS_OPTIONS]}
                    placeholder="اختر وجهتك"
                  />
                </Field>

                <Field label="تاريخ السفر" htmlFor="pl-date">
                  <label className="relative block">
                    <Calendar
                      size={17}
                      strokeWidth={1.8}
                      className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-charcoal-400"
                    />
                    <input
                      id="pl-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="h-14 w-full appearance-none rounded-2xl border border-charcoal-900/10 bg-ivory-100/60 ps-11 pe-4 text-sm text-charcoal-900 outline-none transition-colors focus:border-olive-600"
                    />
                  </label>
                </Field>

                <Field label="المسافرون" htmlFor="pl-travelers">
                  <FieldSelect
                    id="pl-travelers"
                    value={travelers}
                    onChange={setTravelers}
                    icon={Users}
                    options={['', 'مسافر واحد', '2 مسافرين', '3-4 مسافرين', 'عائلة', 'مجموعة']}
                    placeholder="عدد المسافرين"
                  />
                </Field>

                <Field label="نوع الرحلة" htmlFor="pl-type">
                  <FieldSelect
                    id="pl-type"
                    value={type}
                    onChange={setType}
                    icon={Compass}
                    options={['', ...TRIP_TYPES]}
                    placeholder="اختر النوع"
                  />
                </Field>
              </div>

              <button type="submit" className="btn btn-olive mt-4 w-full !h-14 md:w-auto md:!px-10">
                <Search size={18} strokeWidth={2} />
                ابدأ التخطيط
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block ps-1 text-xs font-semibold text-charcoal-500"
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function FieldSelect({ id, value, onChange, icon: Icon, options, placeholder }) {
  return (
    <div className="relative">
      <Icon
        size={17}
        strokeWidth={1.8}
        className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-charcoal-400"
      />
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none rounded-2xl border border-charcoal-900/10 bg-ivory-100/60 ps-11 pe-10 text-sm transition-colors outline-none focus:border-olive-600 ${
          value ? 'h-14 w-full text-charcoal-900' : 'h-14 w-full text-charcoal-400'
        }`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} disabled={opt === ''}>
            {opt === '' ? placeholder : opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        strokeWidth={1.8}
        className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-charcoal-400"
      />
    </div>
  )
}
