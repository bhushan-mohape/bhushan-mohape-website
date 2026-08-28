import { useState } from 'react'
import { ExternalLink, BookOpen, Check } from 'lucide-react'
import { projects, projectCategories, type Project } from '../data/projects'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { ProjectPreview } from './ProjectPreview'
import { ProjectModal } from './ProjectModal'
import { GithubIcon } from './icons/BrandIcons'

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

        <div className="mt-16 flex flex-col gap-16 sm:gap-20">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id}>
              <article
                className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <ProjectPreview projectId={project.id} name={project.name} />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">{project.name}</h3>
                  <p className="mt-4 leading-relaxed text-fg-muted">{project.description}</p>

                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-fg-muted">
                        <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-fg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
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
                        className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
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
