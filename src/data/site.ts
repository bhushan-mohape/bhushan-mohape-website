/**
 * Central, editable site configuration.
 *
 * Everything that might change (contact details, social links, domain,
 * resume file, form endpoint) lives here so the rest of the codebase never
 * hardcodes it. See CONTENT_TODO.md for a checklist of items to verify or
 * fill in before/after launch.
 */

export const site = {
  name: 'Bhushan Mohape',
  brand: 'BHUSHAN MOHAPE',
  role: 'Web Developer',
  tagline: 'Web Developer • Frontend Developer • Digital Experiences',

  /**
   * Placeholder deployment URL. Swap for the final custom domain once one
   * is connected, then update this single value — it feeds the canonical
   * link, Open Graph tags, sitemap.xml and JSON-LD.
   */
  url: 'https://bhushan-mohape-website.vercel.app',

  email: 'bhushanm1012@gmail.com',
  // [ADD VERIFIED PHONE NUMBER] — leave null to keep the phone row hidden.
  phone: null as string | null,

  /**
   * WhatsApp contact number, digits only, with country code (no "+", no
   * spaces) — the format wa.me requires. Currently assumes +91 (India)
   * from the number provided (9967482339); update the country code here
   * if that assumption is wrong.
   */
  whatsappNumber: '919967482339',
  whatsappMessage: "Hi Bhushan, I'd like to talk about a website project.",

  social: {
    linkedin: 'https://linkedin.com/in/bhushanmohape',
    github: 'https://github.com/bhushan-mohape',
  },

  /**
   * Drop the real PDF at /public/resume.pdf (so it is served from
   * /resume.pdf) and this link starts working automatically — no code
   * changes required.
   */
  resumeUrl: '/resume.pdf',

  /**
   * Optional form backend. Leave empty to keep the contact form in
   * "compose an email" fallback mode. Set to a Formspree endpoint
   * (https://formspree.io/f/xxxxxxx) or any endpoint that accepts a JSON
   * POST to enable real submissions without touching component code.
   */
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? '',
} as const

/** wa.me deep link that opens a chat with a pre-filled message. */
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
