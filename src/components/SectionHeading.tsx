import { Reveal } from './Reveal'

interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, title, description, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        {kicker}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-fg text-balance">{title}</h2>
      {description ? <p className="text-fg-muted text-base sm:text-lg leading-relaxed">{description}</p> : null}
    </Reveal>
  )
}
