import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'start',
  className = '',
  theme = 'light',
}) {
  const alignCls =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-start'
  const leadColor = theme === 'dark' ? 'text-ivory-100/70' : 'text-charcoal-500'

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow mb-4">
          <span className="inline-flex items-center gap-3">
            <span
              className={`h-px w-8 ${theme === 'dark' ? 'bg-ivory-50/40' : 'bg-olive-500/50'}`}
            />
            {eyebrow}
          </span>
        </Reveal>
      )}
      {title && (
        <Reveal
          as="h2"
          delay={80}
          className="font-display text-[clamp(1.9rem,5vw,3.5rem)] font-semibold leading-[1.12] tracking-tightish balance-text"
        >
          {title}
        </Reveal>
      )}
      {lead && (
        <Reveal
          as="p"
          delay={160}
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${leadColor}`}
        >
          {lead}
        </Reveal>
      )}
    </div>
  )
}
