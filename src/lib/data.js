// Central content for Al-Mosaïque Travel & Tourism.
// Keeps copy short and premium; edit here to update the whole site.
//
// Images are imported so Vite bundles & hashes them for production.

// Featured journeys
import journeyIstanbul from '../assets/images/journey-istanbul.webp'
import journeyIstanbulSm from '../assets/images/journey-istanbul-sm.webp'
import dubai from '../assets/images/dest-dubai.webp'
import dubaiSm from '../assets/images/dest-dubai-sm.webp'
import thailand from '../assets/images/dest-thailand.webp'
import thailandSm from '../assets/images/dest-thailand-sm.webp'
import malaysia from '../assets/images/dest-malaysia.webp'
import malaysiaSm from '../assets/images/dest-malaysia-sm.webp'

// Destinations gallery
import turkey from '../assets/images/dest-turkey.webp'
import turkeySm from '../assets/images/dest-turkey-sm.webp'
import saudi from '../assets/images/dest-saudi.webp'
import saudiSm from '../assets/images/dest-saudi-sm.webp'
import oman from '../assets/images/dest-oman.webp'
import omanSm from '../assets/images/dest-oman-sm.webp'
import tunisia from '../assets/images/dest-tunisia.webp'
import tunisiaSm from '../assets/images/dest-tunisia-sm.webp'
import spain from '../assets/images/dest-spain.webp'
import spainSm from '../assets/images/dest-spain-sm.webp'

export const WH = {
  tel: '+213 555 00 00 00',
  telRaw: '+213555000000',
  whatsappRaw: '213555000000',
  email: 'contact@almosaique-travel.dz',
  location: 'الجزائر',
  // Filled when the agency provides real profile links; until then the footer
  // only renders WhatsApp (a genuinely working channel).
  social: {
    instagram: '',
    facebook: '',
  },
}

export const NAV = [
  { label: 'الرحلات', href: '#journeys' },
  { label: 'الوجهات', href: '#destinations' },
  { label: 'الخدمات', href: '#services' },
  { label: 'العمرة', href: '#umrah' },
  { label: 'عن الفسيفساء', href: '#about' },
  { label: 'اتصل بنا', href: '#contact' },
]

export const JOURNEYS = [
  {
    id: 'istanbul',
    title: 'إسطنبول',
    country: 'تركيا',
    duration: '5 أيام',
    tag: 'الأكثر طلباً',
    desc: 'اكتشف المدينة بين التاريخ، الثقافة والنكهات.',
    cta: 'اكتشف الرحلة',
    image: journeyIstanbul,
    imageSm: journeyIstanbulSm,
    aspect: 'landscape',
  },
  {
    id: 'dubai',
    title: 'دبي',
    country: 'الإمارات',
    duration: '4 أيام',
    tag: 'مدينة المستقبل',
    desc: 'بين ناطحات السحاب ورمال الصحراء الذهبية.',
    cta: 'اكتشف الرحلة',
    image: dubai,
    imageSm: dubaiSm,
    aspect: 'tall',
  },
  {
    id: 'thailand',
    title: 'تايلاند',
    country: 'آسيا',
    duration: '9 أيام',
    tag: 'استراحة استوائية',
    desc: 'جزر فيروزية وثقافة نابضة تنتظرك.',
    cta: 'اكتشف الرحلة',
    image: thailand,
    imageSm: thailandSm,
    aspect: 'landscape',
  },
  {
    id: 'omalaysia',
    title: 'ماليزيا',
    country: 'آسيا',
    duration: '7 أيام',
    tag: 'آسيا الحديثة',
    desc: 'كوالالمبور الحديثة وجمال الطبيعة الاستوائية.',
    cta: 'اكتشف الرحلة',
    image: malaysia,
    imageSm: malaysiaSm,
    aspect: 'tall',
  },
]

export const DESTINATIONS = [
  {
    id: 'turkey',
    name: 'تركيا',
    country: 'كبادوكيا',
    image: turkey,
    imageSm: turkeySm,
  },
  {
    id: 'dubai',
    name: 'دبي',
    country: 'الإمارات',
    image: dubai,
    imageSm: dubaiSm,
  },
  {
    id: 'saudi',
    name: 'السعودية',
    country: 'العمرة',
    image: saudi,
    imageSm: saudiSm,
  },
  {
    id: 'oman',
    name: 'عُمان',
    country: 'الخليج',
    image: oman,
    imageSm: omanSm,
  },
  {
    id: 'malaysia',
    name: 'ماليزيا',
    country: 'آسيا',
    image: malaysia,
    imageSm: malaysiaSm,
  },
  {
    id: 'thailand',
    name: 'تايلاند',
    country: 'آسيا',
    image: thailand,
    imageSm: thailandSm,
  },
  {
    id: 'tunisia',
    name: 'تونس',
    country: 'المغرب العربي',
    image: tunisia,
    imageSm: tunisiaSm,
  },
  {
    id: 'spain',
    name: 'إسبانيا',
    country: 'أوروبا',
    image: spain,
    imageSm: spainSm,
  },
]

export const SERVICES = [
  {
    id: 'packages',
    title: 'الرحلات المنظمة',
    desc: 'برامج متكاملة من الإقلاع إلى العودة.',
  },
  {
    id: 'flights',
    title: 'حجوزات الطيران',
    desc: 'أفضل الأسعار لوجهتك المفضلة.',
  },
  {
    id: 'hotels',
    title: 'الفنادق والإقامة',
    desc: 'إقامة مريحة تناسب ذوقك وميزانيتك.',
  },
  {
    id: 'visa',
    title: 'التأشيرات',
    desc: 'نرافقك في إجراءات السفر بلا تعقيد.',
  },
  {
    id: 'umrah',
    title: 'العمرة',
    desc: 'رحلة روحانية نعتني بكل تفاصيلها.',
  },
  {
    id: 'private',
    title: 'الرحلات الخاصة',
    desc: 'تجارب مصمّمة خصيصاً لك وحدك.',
  },
]

export const DESTINATIONS_OPTIONS = [
  'إسطنبول',
  'دبي',
  'عُمان',
  'ماليزيا',
  'تايلاند',
  'السعودية',
  'تونس',
  'إسبانيا',
]

export const TRIP_TYPES = ['رحلة منظمة', 'عمرة', 'رحلة خاصة', 'رحلات طيران']
