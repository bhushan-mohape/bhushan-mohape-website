import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

export function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-fg text-balance sm:text-4xl md:text-5xl">
                Have a Website Idea? Let&rsquo;s Build It.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                Whether you need a new business website, a landing page or a modern redesign, let&rsquo;s turn
                your idea into a professional digital experience.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-solid px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-solid-hover hover:shadow-[0_0_0_4px_var(--color-accent-soft)]"
                >
                  Start a Project
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-2 px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-bg-soft"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
