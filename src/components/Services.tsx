import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  UtensilsCrossed,
  BedDouble,
  Rocket,
  AppWindow,
  RefreshCw,
  Plug,
  Cloud,
} from 'lucide-react'
import { services, type ServiceIcon } from '../data/services'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  business: Building2,
  restaurant: UtensilsCrossed,
  hotel: BedDouble,
  landing: Rocket,
  webapp: AppWindow,
  redesign: RefreshCw,
  api: Plug,
  deployment: Cloud,
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-bg-soft border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Services"
          title="How I Can Help Your Business"
          description="Website development services tailored to what your business actually needs, built with modern, maintainable technology."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <Reveal key={service.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_48px_-28px_rgba(124,92,255,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-fg">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
