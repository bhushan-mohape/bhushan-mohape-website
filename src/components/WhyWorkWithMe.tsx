import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, Smartphone, Cpu, Target, FileCode, UploadCloud } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Professional Design',
    description: 'Your website should look trustworthy from the first impression.',
    icon: ShieldCheck,
  },
  {
    title: 'Responsive Experience',
    description: 'Designed to work across mobile, tablet and desktop.',
    icon: Smartphone,
  },
  {
    title: 'Modern Development',
    description: 'Built using modern frontend technologies.',
    icon: Cpu,
  },
  {
    title: 'Business-Focused',
    description: 'Design decisions should support the business objective.',
    icon: Target,
  },
  {
    title: 'Clean & Maintainable',
    description: 'Structured code and reusable components.',
    icon: FileCode,
  },
  {
    title: 'Deployment Ready',
    description: 'Help with hosting and deployment.',
    icon: UploadCloud,
  },
]

export function WhyWorkWithMe() {
  return (
    <section className="py-24 sm:py-32 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading kicker="Why Me" title="Why Businesses Choose a Modern Web Developer" />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-border-strong">
                <reason.icon size={22} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-fg">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
