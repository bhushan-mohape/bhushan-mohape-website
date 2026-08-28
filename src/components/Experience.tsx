import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Experience"
          title="Professional Experience"
          description="A timeline of the organizations Bhushan has worked with as a web developer."
        />

        <ol className="mt-16 flex flex-col gap-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((entry, i) => (
            <li key={entry.company} className="relative">
              <Reveal delay={i * 100}>
                <span
                  className="absolute -left-[2.55rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-border-strong bg-surface text-accent sm:-left-[3.05rem]"
                  aria-hidden="true"
                >
                  <Briefcase size={14} />
                </span>

                <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-semibold text-fg">{entry.company}</h3>
                      {entry.isCurrent ? (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <span className="text-sm font-medium text-fg-subtle">
                      {entry.dates} &middot; {entry.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">{entry.title}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-fg-muted">
                    <MapPin size={14} className="shrink-0" aria-hidden="true" />
                    {entry.location}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
