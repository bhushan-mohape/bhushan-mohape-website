import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business, audience and website requirements.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create the structure, layout and visual direction.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build the website using modern technologies.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy, test and optimize the website.',
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading kicker="Process" title="A Clear, Reliable Development Process" />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-fg-subtle/70">{step.number}</span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <step.icon size={20} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
