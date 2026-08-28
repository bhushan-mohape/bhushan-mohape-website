import { useEffect, useRef } from 'react'
import { X, ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import { ProjectPreview } from './ProjectPreview'
import { GithubIcon } from './icons/BrandIcons'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm sm:items-center sm:px-6"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="reveal is-visible w-full max-w-3xl rounded-3xl border border-border bg-surface p-6 sm:p-9"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold text-fg sm:text-3xl">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="shrink-0 rounded-full border border-border p-2 text-fg-muted transition-colors hover:text-fg"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6">
          <ProjectPreview projectId={project.id} name={project.name} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <CaseStudyBlock title="Challenge" text={project.caseStudy.challenge} />
          <CaseStudyBlock title="Approach" text={project.caseStudy.approach} />
          <CaseStudyBlock title="Solution" text={project.caseStudy.solution} />
          <CaseStudyBlock title="Result" text={project.caseStudy.result} />
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-fg-subtle">Technology</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-medium text-fg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-solid px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-solid-hover"
            >
              Live Project
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface-2 px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface"
            >
              <GithubIcon size={16} aria-hidden="true" />
              View Code
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-fg-subtle">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{text}</p>
    </div>
  )
}
