import { Layers, Building2, Smartphone, Sparkle } from 'lucide-react'
import { Reveal } from './Reveal'

const items = [
  {
    icon: Layers,
    title: 'Modern UI',
    description: 'Beautiful, responsive interfaces.',
  },
  {
    icon: Building2,
    title: 'Business Websites',
    description: 'Websites designed around real business goals.',
  },
  {
    icon: Smartphone,
    title: 'Responsive',
    description: 'Optimized for mobile, tablet and desktop.',
  },
  {
    icon: Sparkle,
    title: 'Modern Technology',
    description: 'Built with modern development practices.',
  },
]

export function TrustStrip() {
  return (
    <section aria-label="Capabilities" className="border-y border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex items-start gap-4 px-1 py-8 sm:px-8">
                <item.icon className="mt-0.5 shrink-0 text-accent" size={22} aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-semibold text-fg">{item.title}</h3>
                  <p className="mt-1 text-sm text-fg-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
