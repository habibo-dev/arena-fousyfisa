import { MessageCircle } from 'lucide-react'
import { WH } from '../lib/data.js'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WH.whatsappRaw}`}
      target="_blank"
      rel="noreferrer"
      aria-label="تحدث معنا عبر WhatsApp"
      className="fixed bottom-4 end-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 ps-4 pe-5 text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:bottom-6 sm:end-6"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <MessageCircle size={22} strokeWidth={2} className="fill-white/20" />
      <span className="text-sm font-semibold">WhatsApp</span>
    </a>
  )
}
