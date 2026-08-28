import { useState, type FormEvent } from 'react'
import { Mail, Phone, Send, Info } from 'lucide-react'
import { site, whatsappUrl } from '../data/site'
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './icons/BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const projectTypes = [
  'Business Website',
  'Restaurant Website',
  'Hotel Website',
  'Landing Page',
  'React Web Application',
  'Website Redesign',
  'Other',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const hasBackend = Boolean(site.formEndpoint)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const company = String(data.get('company') ?? '')
    const projectType = String(data.get('projectType') ?? '')
    const message = String(data.get('message') ?? '')

    if (hasBackend) {
      setStatus('submitting')
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, company, projectType, message }),
        })
        if (res.ok) {
          setStatus('success')
          form.reset()
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
      return
    }

    // No backend configured: fall back to opening the visitor's email
    // client with a pre-filled message, rather than pretending the
    // message was delivered.
    const subject = encodeURIComponent(`Project Inquiry: ${projectType || 'New Project'} — from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBusiness / Company: ${company || '—'}\nProject Type: ${
        projectType || '—'
      }\n\nMessage:\n${message}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          kicker="Contact"
          title="Let’s Build Something Great"
          description="Tell me about your project and I'll get back to you."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <p className="leading-relaxed text-fg-muted">
                Prefer to reach out directly? Use any of the options below, or send a project inquiry using
                the form.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Email</p>
                  <p className="text-sm font-medium text-fg">{site.email}</p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                  <WhatsappIcon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">WhatsApp</p>
                  <p className="text-sm font-medium text-fg">Chat directly on WhatsApp</p>
                </div>
              </a>

              {site.phone ? (
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-fg-subtle">Phone</p>
                    <p className="text-sm font-medium text-fg">{site.phone}</p>
                  </div>
                </a>
              ) : null}

              <div className="flex gap-3">
                {site.social.linkedin ? (
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-fg-muted transition-colors hover:text-fg"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                ) : null}
                {site.social.github ? (
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-fg-muted transition-colors hover:text-fg"
                  >
                    <GithubIcon size={18} />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={100}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Business / Company" name="company" type="text" />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="text-sm font-medium text-fg-muted">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-fg-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
                  placeholder="Tell me a bit about your project, timeline and goals."
                />
              </div>

              {!hasBackend ? (
                <p className="flex items-start gap-2 text-xs leading-relaxed text-fg-subtle">
                  <Info size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  This form currently opens your email client with your message pre-filled, sent directly to{' '}
                  {site.email}. Online form submission will be enabled soon.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-solid px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-solid-hover disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Project Inquiry'}
                <Send size={15} aria-hidden="true" />
              </button>

              {status === 'success' && hasBackend ? (
                <p className="text-sm font-medium text-emerald-400">
                  Thanks — your project inquiry was sent successfully.
                </p>
              ) : null}
              {status === 'success' && !hasBackend ? (
                <p className="text-sm font-medium text-emerald-400">
                  Your email client should now be open with your message ready to send.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm font-medium text-red-400">
                  Something went wrong sending your inquiry. Please email {site.email} directly.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string
  name: string
  type: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-fg-muted">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-accent"
      />
    </div>
  )
}
