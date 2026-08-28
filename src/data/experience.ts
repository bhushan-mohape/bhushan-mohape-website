export interface ExperienceEntry {
  company: string
  title: string
  dates: string
  duration: string
  location: string
  isCurrent?: boolean
}

/**
 * Verified employment history, as provided directly by Bhushan.
 * Responsibility bullets are intentionally omitted rather than invented —
 * add real ones per role here if/when they're written up.
 */
export const experience: ExperienceEntry[] = [
  {
    company: 'Cognizant',
    title: 'Senior Associate',
    dates: 'Aug 2025 – Present',
    duration: '1 yr 1 mo',
    location: 'Maharashtra, India',
    isCurrent: true,
  },
  {
    company: 'IBM',
    title: 'Advisory System Analyst',
    dates: 'Jul 2021 – Aug 2025',
    duration: '4 yrs 2 mos',
    location: 'Mumbai, Maharashtra, India',
  },
  {
    company: 'Capgemini',
    title: 'Associate Consultant',
    dates: 'Dec 2019 – Jul 2021',
    duration: '1 yr 8 mos',
    location: 'Thane, Maharashtra, India',
  },
  {
    company: 'Majesco',
    title: 'Software Engineer',
    dates: 'Jan 2017 – Oct 2019',
    duration: '2 yrs 10 mos',
    location: 'Ghansoli (Mahape), Maharashtra, India',
  },
]
