import { useState } from 'react'
import { ExternalLink, BookOpen, Check } from 'lucide-react'
import { projects, projectCategories, type Project } from '../data/projects'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ProjectPreview } from './ProjectPreview'
import { ProjectModal } from './ProjectModal'
import { GithubIcon } from './icons/BrandIcons'

/** Shared layout class for every project card — same padding, radius,
 * border and flex structure regardless of content length, so cards in a
 * row line up exactly. */
const CARD_CLASS =
  'group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_20px_48px_-28px_rgba(0,0,0,0.5)]'
const CARD_BODY_CLASS = 'flex flex-1 flex-col p-6 sm:p-7'

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Projects"
          title="Featured Projects"
          description="Real projects showcasing modern, responsive frontend development."
        />

        {projectCategories.length > 2 ? (
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2" delay={80}>
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'border-accent bg-accent-solid text-white'
                    : 'border-border bg-surface text-fg-muted hover:text-fg'
                }`}
              >
                {category}
              </button>
            ))}
          </Reveal>
        ) : null}

        {/* items-stretch (grid's default, set explicitly) makes every card
            in a row fill the row's full height, so with each card's own
            flex-column + mt-auto button row, buttons land on the same
            baseline across a row no matter how long the description or
            feature list above them is. */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80} className="h-full">
              <article className={CARD_CLASS}>
                <ProjectPreview projectId={project.id} name={project.name} bordered={false} />

                <div className={CARD_BODY_CLASS}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-fg sm:text-2xl">{project.name}</h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-fg-muted line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-fg-muted">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-medium text-fg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* mt-auto pins this row to the bottom of the card's flex
                      column, so it sits on the same baseline as every other
                      card's button row in the grid regardless of how much
                      content is above it. */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent-solid px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-solid-hover"
                      >
                        Live Website
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface-2 px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-bg-soft"
                      >
                        <GithubIcon size={15} aria-hidden="true" />
                        GitHub
                      </a>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-fg-muted transition-colors hover:text-fg"
                    >
                      <BookOpen size={15} aria-hidden="true" />
                      Case Study
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  )
}
