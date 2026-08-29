export interface CaseStudy {
  challenge: string
  approach: string
  solution: string
  result: string
}

export interface Project {
  id: string
  name: string
  category: string
  /** Short line shown on the card, under the category tag. */
  summary: string
  description: string
  technologies: string[]
  features: string[]
  /** Leave empty to hide the "Live Website" button. */
  liveUrl: string
  /** Leave empty to hide the "GitHub" button. */
  githubUrl: string
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    id: 'aarogyanova-healthcare',
    name: 'AarogyaNova Multispeciality Clinic',
    category: 'Healthcare Website',
    summary: 'A feature-rich healthcare website concept — doctor profiles, appointment booking UI and a patient content library.',
    description:
      'AarogyaNova is a front-end concept build for a multispeciality clinic, designed to demonstrate how a full healthcare website experience — doctor listings, service departments, an appointment flow, galleries and patient resources — comes together in a single, cohesive interface. It is a front-end demonstration only: there is no backend, and all clinic details (doctors, testimonials, stats, address, contact numbers) are placeholder content rather than a real, operating clinic.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    features: [
      'Doctor directory (6 profiles) with a detailed profile modal — specialty, experience, qualifications, availability',
      '10-department service directory in a bento-style grid',
      'Multi-step appointment booking flow with client-side validation (front-end only — no backend or real booking)',
      'Filterable clinic/facilities gallery with a lightbox viewer',
      'FAQ accordion and tabbed patient-resource content',
      'Testimonial carousel and animated stats counters (demo content, not real patient data)',
      'Floating WhatsApp, call and book-appointment shortcuts',
    ],
    liveUrl: 'https://aarogyanova-healthcare-website.vercel.app/',
    githubUrl: '',
    caseStudy: {
      challenge:
        'Healthcare websites need to earn trust quickly while organizing a lot of information — doctors, departments, booking, resources — without overwhelming a visitor who may be anxious or in a hurry.',
      approach:
        'Treat it as a full-scope front-end build: design each piece (doctor cards, department grid, booking flow, galleries, FAQs) as its own clear, focused interaction, then bring them together into one consistent visual system.',
      solution:
        'Built a fully interactive React/TypeScript front end — working modals, multi-step form validation, filterable/lightbox galleries, carousels and scroll-triggered animations — all running on local component state with placeholder clinic data, since no backend or real clinic was involved.',
      result:
        'A complete, polished healthcare website interface that demonstrates end-to-end front-end execution across a large, varied feature set. It is a portfolio/demo build, not a live business — real deployment would mean swapping in verified clinic data and wiring up an actual backend.',
    },
  },
  {
    id: 'mercury-restaurant',
    name: 'Mercury Restaurant Website',
    category: 'Restaurant Website',
    summary: 'A modern restaurant website concept built around premium presentation.',
    description:
      'Mercury is a modern restaurant website project focused on presenting a restaurant’s brand, menu and atmosphere through a clean, premium interface. The layout is built to make the food and dining experience feel inviting from the very first screen, while keeping navigation and information easy to find on any device.',
    technologies: ['React', 'TypeScript', 'Modern Frontend Tooling', 'Responsive CSS'],
    features: [
      'Premium restaurant presentation and visual storytelling',
      'Responsive design across mobile, tablet and desktop',
      'Structured menu presentation',
      'Restaurant information, contact and location sections',
      'Mobile-friendly navigation and layout',
      'Modern, polished UI',
    ],
    liveUrl: 'https://mercury-restaurant-website.vercel.app/',
    githubUrl: '',
    caseStudy: {
      challenge:
        'Restaurants need a website that reflects the quality of their food and atmosphere at a glance — most restaurant sites feel outdated, cluttered or hard to browse on a phone.',
      approach:
        'Design the interface around clear visual hierarchy: a strong first impression, an easy-to-scan menu layout, and restaurant information that visitors actually look for — location, contact and hours — without unnecessary friction.',
      solution:
        'Built a responsive, component-based React interface with a premium visual style, a structured menu presentation and dedicated sections for restaurant information, so the site works equally well as a showcase and as a practical reference for visitors.',
      result:
        'A cohesive, mobile-friendly restaurant website concept that demonstrates how a modern frontend stack can be used to present a hospitality business professionally.',
    },
  },
  {
    id: 'hotel-website-template',
    name: 'Hotel Website Template',
    category: 'Hotel Website',
    summary: 'A professional hotel website template with rooms, amenities and gallery.',
    description:
      'A hotel website template designed to give hotels and stays a professional, modern web presence. The layout highlights rooms and amenities visually, with a gallery and contact section, built as a responsive template that adapts cleanly across devices.',
    technologies: ['React', 'Responsive CSS', 'Modern Frontend Tooling'],
    features: [
      'Hotel-focused visual design and layout',
      'Responsive layout for mobile, tablet and desktop',
      'Rooms and accommodation presentation',
      'Amenities section',
      'Photo gallery',
      'Contact information section',
    ],
    liveUrl: 'https://bhushan-mohape.github.io/hotel-website-template/',
    githubUrl: '',
    caseStudy: {
      challenge:
        'Hotels rely on their website to set expectations before a guest ever arrives — the site needs to visually communicate comfort, quality and amenities clearly across every device.',
      approach:
        'Structure the template around the information guests look for first: rooms, amenities and visuals, presented in a clean, responsive layout with a clear path to contact information.',
      solution:
        'Developed a responsive hotel website template with dedicated sections for rooms/accommodation, amenities, a gallery and contact details, so it can be adapted as a starting point for a real hotel’s website.',
      result:
        'A complete, ready-to-adapt hotel website template with a modern, responsive interface suitable for showcasing a hotel’s rooms and amenities.',
    },
  },
  {
    id: 'public-facing-website-concept',
    name: 'Public-Facing Website Concept',
    category: 'Web Application',
    summary: 'A multilingual, public-facing website development project.',
    description:
      'A public-facing website development project focused on presenting structured, multilingual content — Marathi, Hindi and English — through an accessible, modern interface. This project is shown here purely as a development and UI/UX case study; it does not represent an official affiliation, endorsement or commission from any individual or organization.',
    technologies: ['React', 'TypeScript', 'Responsive CSS'],
    features: [
      'Modern, responsive UI',
      'Multilingual content presentation (Marathi, Hindi, English)',
      'Structured, organized content sections',
      'Accessible navigation',
      'Mobile-friendly design',
    ],
    liveUrl: 'https://eknath-shinde-website.vercel.app/hi',
    githubUrl: '',
    caseStudy: {
      challenge:
        'Public-facing informational websites often need to present structured content in multiple languages while remaining simple to navigate for a broad audience.',
      approach:
        'Focus on clear information architecture and accessible navigation, with a responsive layout that presents multilingual content without overwhelming the visitor.',
      solution:
        'Implemented a modern, responsive frontend capable of presenting structured content across Marathi, Hindi and English, with accessible navigation patterns and a mobile-first layout.',
      result:
        'A structured, multilingual, mobile-friendly public-facing website concept demonstrating frontend development for content-heavy, accessibility-conscious projects.',
    },
  },
  {
    id: 'akshay-chavan-website',
    name: 'Akshay Chavan — Digital Creator Website',
    category: 'Personal Brand Website',
    summary: 'A personal brand website for an Instagram reel creator — bio, stats, reel showcase and brand collaborations.',
    description:
      'A personal brand website built for Akshay Chavan, a digital creator known for his Instagram reels, designed to give him a professional web presence beyond social media for brands and followers to discover his work. The site introduces him with a bio and creator stats, showcases his reels in a video gallery, highlights past brand collaborations, and makes it easy for brands and followers to get in touch or follow him on social media.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    features: [
      'Creator bio section with stats (followers, views, reels)',
      'Reel/video showcase gallery embedding his Instagram content',
      'Brand collaboration section highlighting past partnerships',
      'Contact/inquiry section for brand outreach',
      'Social media links to Instagram and other platforms',
      'Responsive, mobile-first layout suited to a social-first audience',
    ],
    liveUrl: 'https://akshay-chavan-website.vercel.app/',
    githubUrl: '',
    caseStudy: {
      challenge:
        'A social media creator’s work lives on platforms he doesn’t own — he needed a single, professional home that presents his reach and past collaborations credibly to brands, without depending on any one app.',
      approach:
        'Design the site around what brands actually look for first — audience stats and proof of past collaborations — while keeping the reel content itself front and center, and make the path to contact effortless.',
      solution:
        'Built a responsive React/TypeScript site with a stats-led bio, an embedded reel showcase gallery, a dedicated brand-collaboration section and clear contact/social links, all styled for a social-first, mobile-heavy audience.',
      result:
        'A polished, self-owned digital presence that lets Akshay Chavan present his content, reach and brand history in one place, independent of any single social platform.',
    },
  },
]

export const projectCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
