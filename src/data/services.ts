export type ServiceIcon =
  | 'business'
  | 'restaurant'
  | 'hotel'
  | 'landing'
  | 'webapp'
  | 'redesign'
  | 'api'
  | 'deployment'

export interface Service {
  title: string
  description: string
  icon: ServiceIcon
}

export const services: Service[] = [
  {
    title: 'Business Websites',
    description: 'Modern websites for businesses that want a professional online presence.',
    icon: 'business',
  },
  {
    title: 'Restaurant Websites',
    description: 'Beautiful restaurant websites with menus, location, contact information and mobile-first design.',
    icon: 'restaurant',
  },
  {
    title: 'Hotel Websites',
    description: 'Professional hotel websites designed to showcase rooms, amenities, gallery and contact/booking information.',
    icon: 'hotel',
  },
  {
    title: 'Landing Pages',
    description: 'High-converting landing pages for products, services and campaigns.',
    icon: 'landing',
  },
  {
    title: 'React Web Applications',
    description: 'Modern interactive web applications built with React.',
    icon: 'webapp',
  },
  {
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, responsive digital experiences.',
    icon: 'redesign',
  },
  {
    title: 'API Integration',
    description: 'Connect websites and applications with REST APIs and GraphQL services.',
    icon: 'api',
  },
  {
    title: 'Deployment & Hosting',
    description: 'Deploy websites using modern hosting platforms such as Vercel and GitHub Pages.',
    icon: 'deployment',
  },
]
