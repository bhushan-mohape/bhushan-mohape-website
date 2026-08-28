export type SkillIcon =
  | 'react'
  | 'javascript'
  | 'typescript'
  | 'html'
  | 'css'
  | 'redux'
  | 'reactNative'
  | 'rest'
  | 'graphql'
  | 'node'
  | 'git'
  | 'github'
  | 'cicd'
  | 'vercel'

export interface Skill {
  name: string
  icon: SkillIcon
  description: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: 'react',
        description: 'Building component-based interfaces with hooks, context and modern patterns.',
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        description: 'Core language for interactive, dynamic web experiences.',
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        description: 'Typed JavaScript for safer, more maintainable codebases.',
      },
      {
        name: 'HTML',
        icon: 'html',
        description: 'Semantic markup structured for accessibility and SEO.',
      },
      {
        name: 'CSS',
        icon: 'css',
        description: 'Modern, responsive styling including Flexbox, Grid and animations.',
      },
      {
        name: 'React Redux',
        icon: 'redux',
        description: 'Connecting React components to a centralized application store.',
      },
      {
        name: 'Redux',
        icon: 'redux',
        description: 'Predictable state management for complex frontend applications.',
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    skills: [
      {
        name: 'React Native',
        icon: 'reactNative',
        description: 'Cross-platform mobile app development using React fundamentals.',
      },
    ],
  },
  {
    id: 'api',
    title: 'API / Backend Integration',
    skills: [
      {
        name: 'REST APIs',
        icon: 'rest',
        description: 'Integrating frontend applications with RESTful backend services.',
      },
      {
        name: 'GraphQL',
        icon: 'graphql',
        description: 'Querying and managing data with flexible, typed GraphQL APIs.',
      },
      {
        name: 'Node.js',
        icon: 'node',
        description: 'Server-side JavaScript for APIs and backend tooling.',
      },
    ],
  },
  {
    id: 'deployment',
    title: 'Development & Deployment',
    skills: [
      {
        name: 'Git',
        icon: 'git',
        description: 'Version control for tracking and managing code changes.',
      },
      {
        name: 'GitHub',
        icon: 'github',
        description: 'Source control hosting, collaboration and code review workflows.',
      },
      {
        name: 'CI/CD',
        icon: 'cicd',
        description: 'Automated build and deployment pipelines for reliable releases.',
      },
      {
        name: 'Vercel',
        icon: 'vercel',
        description: 'Deploying and hosting modern frontend applications.',
      },
    ],
  },
]
