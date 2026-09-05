import { useState } from 'react'
import { MessageCircle, Phone, Mail, MapPin, Send, Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { WH, DESTINATIONS_OPTIONS } from '../lib/data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    destination: '',
    date: '',
    travelers: '',
    service: '',
    message: '',
  })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Confirmation only — wiring to WhatsApp/prefill happens in this release.
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-olive-800 text-ivory-50 lg:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-2">
            {/* Left: copy + direct channels */}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(199,182,132,0.18),transparent_55%)]" />
              <div className="relative">
                <SectionHeading
                  eyebrow="لنبدأ"
                  title="لنخطط لرحلتك القادمة."
                  lead="أخبرنا بما تبحث عنه، وسيتواصل معك فريق الفسيفساء."
                  theme="dark"
                  className="max-w-md"
                />

                <div className="mt-9 space-y-4">
                  <a
                    href={`https://wa.me/${WH.whatsappRaw}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light w-full !h-14 sm:w-auto"
                  >
                    <MessageCircle size={18} strokeWidth={2} />
                    تحدث معنا عبر WhatsApp
                  </a>
                </div>

                <div className="mt-10 space-y-4 border-t border-ivory-50/10 pt-8">
                  <ContactRow
                    icon={Phone}
                    href={`tel:${WH.telRaw}`}
                    label="الهاتف"
                    value={WH.tel}
                  />
                  <ContactRow
                    icon={Mail}
                    href={`mailto:${WH.email}`}
                    label="البريد"
                    value={WH.email}
                  />
                  <ContactRow
                    icon={MapPin}
                    label="الموقع"
                    value={WH.location}
                  />
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-ivory-50 p-8 text-charcoal-900 sm:p-12 lg:p-14">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input id="c-name" label="الاسم" value={form.name} onChange={update('name')} type="text" placeholder="اسمك الكريم" autoComplete="name" />
                <Input id="c-phone" label="رقم الهاتف" value={form.phone} onChange={update('phone')} type="tel" placeholder="+213" autoComplete="tel" />
                <div className="sm:col-span-2">
                  <Select
                    id="c-destination"
                    label="الوجهة"
                    value={form.destination}
                    onChange={update('destination')}
                    options={['', ...DESTINATIONS_OPTIONS]}
                    placeholder="اختر وجهتك"
                  />
                </div>
                <Input id="c-date" label="تاريخ السفر" value={form.date} onChange={update('date')} type="date" />
                <Input id="c-travelers" label="عدد المسافرين" value={form.travelers} onChange={update('travelers')} type="number" min="1" placeholder="1" />
                <div className="sm:col-span-2">
                  <Select
                    id="c-service"
                    label="الخدمة"
                    value={form.service}
                    onChange={update('service')}
                    options={['', 'رحلة منظمة', 'عمرة', 'رحلة خاصة', 'حجوزات طيران', 'فنادق وإقامة', 'تأشيرات']}
                    placeholder="ما الذي تبحث عنه؟"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="mb-2 block ps-1 text-xs font-semibold text-charcoal-500">رسالتك</label>
                  <textarea
                    id="c-message"
                    value={form.message}
                    onChange={update('message')}
                    rows={4}
                    placeholder="أخبرنا أكثر عن رحلتك المثالية..."
                    className="w-full resize-none rounded-2xl border border-charcoal-900/12 bg-ivory-100/50 px-4 py-3.5 text-sm text-charcoal-900 outline-none transition-colors focus:border-olive-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button type="submit" className="btn btn-olive w-full !h-14">
                    {sent ? (
                      <>
                        <Check size={18} strokeWidth={2} />
                        تم إرسال طلبك
                      </>
                    ) : (
                      <>
                        <Send size={18} strokeWidth={2} />
                        أرسل الطلب
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs leading-relaxed text-charcoal-400">
                    بمجرد الإرسال، سيتواصل معك فريقنا في أقرب وقت.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, href, label, value }) {
  const content = (
    <span className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-50/10 text-ivory-50">
        <Icon size={19} strokeWidth={1.7} />
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-ivory-100/60">{label}</span>
        <span className="mt-0.5 font-medium text-ivory-50" dir="ltr">
          {value}
        </span>
      </span>
    </span>
  )
  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    )
  }
  return <div>{content}</div>
}

function Input({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block ps-1 text-xs font-semibold text-charcoal-500">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="h-14 w-full rounded-2xl border border-charcoal-900/12 bg-ivory-100/50 px-4 text-sm text-charcoal-900 outline-none transition-colors focus:border-olive-600"
      />
    </div>
  )
}

function Select({ label, id, value, onChange, options, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block ps-1 text-xs font-semibold text-charcoal-500">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full rounded-2xl border border-charcoal-900/12 bg-ivory-100/50 px-4 text-sm outline-none transition-colors focus:border-olive-600 ${
          value ? 'h-14 text-charcoal-900' : 'h-14 text-charcoal-400'
        }`}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} disabled={opt === ''}>
            {opt === '' ? placeholder : opt}
          </option>
        ))}
      </select>
    </div>
  )
}
