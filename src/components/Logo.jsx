export default function Logo({ theme = 'dark', className = '' }) {
  const ink = theme === 'dark' ? 'text-charcoal-900' : 'text-ivory-50'
  const sub = theme === 'dark' ? 'text-charcoal-400' : 'text-ivory-100/70'

  return (
    <a
      href="#top"
      aria-label="الفسيفساء للسياحة والأسفار — الصفحة الرئيسية"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark theme={theme} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-bold tracking-tight ${ink}`}>
          الفسيفساء
        </span>
        <span className={`mt-1 font-body text-[0.62rem] tracking-[0.22em] ${sub}`}>
          للسياحة والأسفار
        </span>
      </span>
    </a>
  )
}

export function LogoMark({ theme = 'dark', size = 40 }) {
  const stroke = theme === 'dark' ? '#4C5439' : '#EDEFE3'
  const fill = theme === 'dark' ? '#6C7350' : '#EEF0E1'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="64" height="64" rx="16" fill={theme === 'dark' ? '#EDEFE3' : '#FBF8F2'} />
      <path
        d="M32 12 L50 31 L32 50 L14 31 Z"
        stroke={stroke}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M32 12 L39 21 H25 Z" fill={fill} />
      <path d="M25 21 H39 L32 30 Z" fill="#CBB684" />
      <path d="M25 21 L32 30 L25 41 Z" fill={stroke} />
      <path d="M39 21 L32 30 L39 41 Z" fill={fill} />
      <path d="M32 30 L25 41 L39 41 Z" fill="#CBB684" />
    </svg>
  )
}
