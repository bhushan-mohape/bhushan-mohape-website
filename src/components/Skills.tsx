import { useState } from 'react'
import type { ComponentType } from 'react'
import {
  Atom,
  Braces,
  FileCode2,
  Layout,
  Palette,
  Boxes,
  Smartphone,
  Network,
  Share2,
  Server,
  GitBranch,
  Workflow,
  Triangle,
} from 'lucide-react'
import { skillCategories, type SkillIcon } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { GithubIcon } from './icons/BrandIcons'

type IconComponent = ComponentType<{ size?: number | string; className?: string }>

const iconMap: Record<SkillIcon, IconComponent> = {
  react: Atom,
  javascript: Braces,
  typescript: FileCode2,
  html: Layout,
  css: Palette,
  redux: Boxes,
  reactNative: Smartphone,
  rest: Network,
  graphql: Share2,
  node: Server,
  git: GitBranch,
  github: GithubIcon,
  cicd: Workflow,
  vercel: Triangle,
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleCategories =
    activeCategory === 'all' ? skillCategories : skillCategories.filter((c) => c.id === activeCategory)

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Skills"
          title="Technology I Work With"
          description="A focused toolkit for building modern, production-ready websites and applications."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2" delay={80}>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'border-accent bg-accent-solid text-white'
                : 'border-border bg-surface text-fg-muted hover:text-fg'
            }`}
          >
            All
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'border-accent bg-accent-solid text-white'
                  : 'border-border bg-surface text-fg-muted hover:text-fg'
              }`}
            >
              {category.title}
            </button>
          ))}
        </Reveal>

        <div className="mt-14 flex flex-col gap-14">
          {visibleCategories.map((category) => (
            <div key={category.id}>
              <Reveal>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-fg-subtle">
                  {category.title}
                </h3>
              </Reveal>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill, i) => {
                  const Icon = iconMap[skill.icon]
                  return (
                    <Reveal key={skill.name} delay={i * 60}>
                      <div className="group h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)]">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform group-hover:scale-110">
                          <Icon size={20} aria-hidden="true" />
                        </div>
                        <h4 className="mt-4 text-base font-semibold text-fg">{skill.name}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{skill.description}</p>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
