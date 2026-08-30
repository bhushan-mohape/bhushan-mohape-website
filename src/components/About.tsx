import {
  Code2,
  Atom,
  Smartphone,
  Building2,
  LayoutTemplate,
  Plug,
  Rocket,
  Gauge,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const whatIDo = [
  { icon: Code2, label: 'Frontend Development' },
  { icon: Atom, label: 'React Development' },
  { icon: Smartphone, label: 'Responsive Website Development' },
  { icon: Building2, label: 'Business Website Development' },
  { icon: LayoutTemplate, label: 'UI Implementation' },
  { icon: Plug, label: 'API Integration' },
  { icon: Rocket, label: 'Website Deployment' },
  { icon: Gauge, label: 'Website Optimization' },
]

const focusTags = ['React', 'TypeScript', 'React Native', 'Redux', 'GraphQL', 'Node.js', 'CI/CD', 'Vercel']

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="About"
          title="More Than Just Code. We Build Digital Experiences."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="relative flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface mx-auto lg:mx-0">
              <img
                src="/images/profile.jpg"
                alt="Bhushan Mohape, Web Developer"
                width={800}
                height={800}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2">
                {focusTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-bg/70 px-3 py-1 text-[11px] font-medium text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-fg">
                Bhushan Mohape is a Web Developer and Frontend Developer focused on building modern, responsive
                websites and web applications for businesses. His work centers on React, TypeScript and a
                component-based approach to frontend development &mdash; building interfaces that are clean,
                fast and easy to maintain.
              </p>
              <p className="leading-relaxed text-fg-muted">
                Alongside frontend development, Bhushan works with React Native for mobile experiences, Redux
                and React Redux for state management, and integrates REST and GraphQL APIs to connect
                interfaces with real data. On the backend and deployment side, he works with Node.js, Git and
                GitHub for version control, CI/CD pipelines for reliable releases, and Vercel for modern
                hosting and deployment.
              </p>
              <p className="leading-relaxed text-fg-muted">
                With several years of hands-on, professional software development experience under his belt,
                Bhushan brings a practical, production-tested approach to every project &mdash; writing clean,
                reliable code and shipping work that holds up in the real world, not just in a demo.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-fg-subtle">What We Do</h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {whatIDo.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-border-strong"
                  >
                    <item.icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm font-medium text-fg">{item.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
