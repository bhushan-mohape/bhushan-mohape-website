import { Mail } from 'lucide-react'
import { navLinks } from '../data/nav'
import { services } from '../data/services'
import { site, whatsappUrl } from '../data/site'
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './icons/BrandIcons'

const footerServices = services.slice(0, 6)

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-base font-bold tracking-[0.08em] text-fg">{site.brand}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">{site.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:text-fg"
              >
                <Mail size={16} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:text-fg"
              >
                <WhatsappIcon size={16} />
              </a>
              {site.social.linkedin ? (
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:text-fg"
                >
                  <LinkedinIcon size={16} />
                </a>
              ) : null}
              {site.social.github ? (
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:text-fg"
                >
                  <GithubIcon size={16} />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-subtle">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-subtle">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerServices.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-fg-subtle">Get In Touch</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-fg-muted">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
                  {site.email}
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-fg">
                  Send a project inquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-fg-subtle">© 2026 Bhushan Mohape. All rights reserved.</p>
          <p className="text-xs text-fg-subtle">Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
