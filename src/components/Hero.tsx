import { ArrowRight, Sparkles } from 'lucide-react'

const floatingBadges = [
  { label: 'React', className: 'top-[6%] left-[2%]', delay: '0s' },
  { label: 'TypeScript', className: 'top-[2%] right-[4%]', delay: '0.6s' },
  { label: 'API', className: 'top-[42%] -right-3 sm:-right-5', delay: '1.2s' },
  { label: 'Responsive Design', className: 'bottom-[10%] left-[-4%] sm:left-[-6%]', delay: '1.8s' },
  { label: 'UI/UX', className: 'bottom-[-3%] right-[10%]', delay: '2.4s' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div className="reveal is-visible flex flex-col items-start gap-7" style={{ animationDelay: '0ms' }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-fg-muted">
            <Sparkles size={14} className="text-accent" aria-hidden="true" />
            Web Developer &middot; Frontend Developer
          </span>

          <h1 className="flex flex-col gap-2 text-fg">
            <span className="font-display text-base font-semibold uppercase tracking-[0.2em] text-accent sm:text-lg">
              Bhushan Mohape
            </span>
            <span className="text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
              I Build Modern Websites That{' '}
              <span className="text-gradient">Help Businesses Stand Out.</span>
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
            I&rsquo;m Bhushan Mohape, a professional Web Developer specializing in modern, responsive and
            high-performance digital experiences using React and modern web technologies.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-solid px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-solid-hover hover:shadow-[0_0_0_4px_var(--color-accent-soft)]"
            >
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
            >
              Let&rsquo;s Work Together
            </a>
          </div>
        </div>

        <div
          className="reveal is-visible relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: '150ms' }}
        >
          <div className="relative rounded-2xl border border-border bg-surface p-1 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-1.5 rounded-t-xl border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
              <span className="ml-3 truncate text-xs text-fg-subtle">website.tsx</span>
            </div>
            <pre className="overflow-x-auto rounded-b-xl bg-bg-soft p-5 text-[13px] leading-relaxed sm:text-sm">
              <code>
                <span className="text-fg-subtle">{'// A modern, responsive business website'}</span>
                {'\n'}
                <span className="text-accent-2">function</span> <span className="text-fg">BusinessWebsite</span>
                <span className="text-fg-subtle">()</span> <span className="text-fg-subtle">{'{'}</span>
                {'\n  '}
                <span className="text-accent-2">return</span> <span className="text-fg-subtle">(</span>
                {'\n    '}
                <span className="text-fg-subtle">{'<'}</span>
                <span className="text-accent">Website</span>
                {'\n      '}
                <span className="text-fg-muted">responsive</span>
                {'\n      '}
                <span className="text-fg-muted">framework</span>
                <span className="text-fg-subtle">=</span>
                <span className="text-[#ffb454]">&quot;React&quot;</span>
                {'\n      '}
                <span className="text-fg-muted">language</span>
                <span className="text-fg-subtle">=</span>
                <span className="text-[#ffb454]">&quot;TypeScript&quot;</span>
                {'\n      '}
                <span className="text-fg-muted">optimizedFor</span>
                <span className="text-fg-subtle">=</span>
                <span className="text-[#ffb454]">&quot;business growth&quot;</span>
                {'\n    '}
                <span className="text-fg-subtle">{'/>'}</span>
                {'\n  '}
                <span className="text-fg-subtle">)</span>
                {'\n'}
                <span className="text-fg-subtle">{'}'}</span>
              </code>
            </pre>
          </div>

          {floatingBadges.map((badge) => (
            <span
              key={badge.label}
              className={`animate-float absolute hidden select-none rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-fg shadow-lg shadow-black/30 sm:block ${badge.className}`}
              style={{ animationDelay: badge.delay }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
