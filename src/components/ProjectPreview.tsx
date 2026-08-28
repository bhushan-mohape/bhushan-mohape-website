import { UtensilsCrossed, BedDouble, Globe2, LayoutTemplate, HeartPulse } from 'lucide-react'

const previewConfig: Record<string, { icon: typeof UtensilsCrossed; gradient: string }> = {
  'aarogyanova-healthcare': {
    icon: HeartPulse,
    gradient: 'from-[#22d3ee]/25 via-[#7c5cff]/12 to-transparent',
  },
  'mercury-restaurant': {
    icon: UtensilsCrossed,
    gradient: 'from-[#7c5cff]/25 via-[#22d3ee]/10 to-transparent',
  },
  'hotel-website-template': {
    icon: BedDouble,
    gradient: 'from-[#22d3ee]/25 via-[#7c5cff]/10 to-transparent',
  },
  'public-facing-website-concept': {
    icon: Globe2,
    gradient: 'from-[#ffb454]/20 via-[#7c5cff]/10 to-transparent',
  },
}

interface ProjectPreviewProps {
  projectId: string
  name: string
  /** Standalone use (e.g. in the case-study modal) draws its own border/
   * rounding/shadow. Inside a card, the card supplies that chrome instead,
   * so the preview only needs its top corners rounded to match. */
  bordered?: boolean
}

/**
 * Stylized browser-chrome preview panel. Real screenshots aren't embedded
 * here — this abstract preview avoids implying a specific visual state of
 * a live site that may change over time. Swap in a real <img> once
 * up-to-date screenshots are captured.
 */
export function ProjectPreview({ projectId, name, bordered = true }: ProjectPreviewProps) {
  const config = previewConfig[projectId] ?? { icon: LayoutTemplate, gradient: 'from-accent/20 to-transparent' }
  const Icon = config.icon

  return (
    <div
      className={
        bordered
          ? 'relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]'
          : 'relative w-full overflow-hidden rounded-t-2xl bg-surface'
      }
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
      </div>
      <div
        className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${config.gradient} bg-bg-soft`}
      >
        <div className="grid-fade absolute inset-0 opacity-40" aria-hidden="true" />
        <Icon size={64} className="text-fg/25" strokeWidth={1.25} aria-hidden="true" />
        <span className="sr-only">{name} preview</span>
      </div>
    </div>
  )
}
