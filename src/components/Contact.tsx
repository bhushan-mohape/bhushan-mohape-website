import { useState, type FormEvent } from 'react'
import { Mail, Phone, Send, Info, Copy, Check } from 'lucide-react'
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

// 'fallback' = no backend configured, so we couldn't confirm delivery —
// distinct from 'success', which is only used once a real backend
// (Formspree/API) confirms the submission actually went through.
type Status = 'idle' | 'submitting' | 'success' | 'fallback' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [fallbackMessage, setFallbackMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const hasBackend = Boolean(site.formEndpoint)

  async function copyFallbackMessage(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      // Clipboard API can throw (permissions, insecure context, etc.) —
      // the message is still shown on screen for manual copy, so this
      // isn't fatal, just skip the "copied" confirmation.
      setCopied(false)
    }
  }

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

    // No backend configured. window.location.href = 'mailto:...' only
    // works if the visitor's browser/OS has a mail client registered as
    // the default handler — there's no reliable way to detect whether
    // that actually happened, so we can't claim success from it alone.
    // We still attempt it (best-effort), but the message is always also
    // shown on screen + copied to the clipboard, so the inquiry is never
    // silently lost even when no mail app opens.
    const plainMessage = `Name: ${name}\nEmail: ${email}\nBusiness / Company: ${company || '—'}\nProject Type: ${
      projectType || '—'
    }\n\nMessage:\n${message}`
    const subject = encodeURIComponent(`Project Inquiry: ${projectType || 'New Project'} — from ${name}`)
    const body = encodeURIComponent(plainMessage)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`

    setFallbackMessage(plainMessage)
    setCopied(false)
    setStatus('fallback')
    void copyFallbackMessage(plainMessage)
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
                  Online form submission isn&rsquo;t connected yet — this will try to open your email app
                  addressed to {site.email}, and always shows your message on screen (and copies it) as a
                  backup in case nothing opens.
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

              {status === 'success' ? (
                <p className="text-sm font-medium text-emerald-400">
                  Thanks — your project inquiry was sent successfully.
                </p>
              ) : null}

              {status === 'fallback' ? (
                <div className="rounded-xl border border-border bg-bg-soft p-4">
                  <p className="text-sm font-medium text-fg">
                    We tried to open your email app with this pre-filled — if nothing opened,
                    {copied ? ' your message was also copied to your clipboard, so you can' : ' you can'} paste
                    it into an email to{' '}
                    <a href={`mailto:${site.email}`} className="text-accent underline underline-offset-2">
                      {site.email}
                    </a>
                    .
                  </p>
                  <textarea
                    readOnly
                    value={fallbackMessage}
                    rows={5}
                    onFocus={(e) => e.currentTarget.select()}
                    className="mt-3 w-full resize-none rounded-lg border border-border bg-bg px-3 py-2 text-xs leading-relaxed text-fg-muted"
                  />
                  <button
                    type="button"
                    onClick={() => copyFallbackMessage(fallbackMessage)}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold text-fg transition-colors hover:bg-surface-2"
                  >
                    {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                    {copied ? 'Copied' : 'Copy message'}
                  </button>
                </div>
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
