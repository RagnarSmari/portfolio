import type { Project } from '~/types/project'

export const Projects: Project[] = [
  {
    id: 1,
    title: 'Pumba',
    description: 'A full-stack web application for job tracking and time management',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['C#', '.NET', 'Vue.js', 'PostgreSQL', 'Docker', 'Azure'],
    features: [
      'Admin dashboard for company management',
      'Time tracking for projects and tasks',
      'User management with Asp net core Identity',
      'File management for projects documents'
    ],
    status: 'In Progress',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Gravity simulator',
    description: 'Gravity simulator for our solar system',
    image: '/gravitySimulator.png',
    technologies: ['C++', 'OpenGL'],
    features: [
      'Simulation of solar system with gravity calculations',
      'Interactive 3D view with buttons for controlling the simulation'
    ],
    githubUrl: 'https://github.com/RagnarSmari/GravitySimulatorOpenGL',
    status: 'Completed',
    category: 'Backend'
  },
  {
    id: 3,
    title: 'Personal portfolio',
    description: 'This website, a personal portfolio showcasing my skills and experience.',
    image: '/personalPortfolio.png',
    technologies: ['Vue.js', 'Nuxt.js'],
    features: [
      'Interactive star background'
    ],
    liveUrl: 'https://portfolio-ragnar-smari.nuxt.dev',
    githubUrl: 'https://github.com/RagnarSmari/Portfolio',
    status: 'In Progress',
    category: 'Frontend'
  },
  {
    id: 4,
    title: 'Journal, a catch log for ships',
    description: 'Final project in my BSc in Computer Science at Akureyri University.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
    technologies: ['C#', 'Blazor', 'MudBlazor', 'ASP .NET', 'SQL Server'],
    features: [
      'Catch log for ships',
      'Deployed on-site',
      'External communication with Fiskistofa to sync data'
    ],
    status: 'Completed',
    category: 'Full Stack'
  },
  {
    id: 5,
    title: 'Invoice organization through mail',
    description: 'Organizes all incoming invoices in their respective folders',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
    technologies: ['Python', 'JavaScript', 'Google Cloud', 'Google Apps Script'],
    features: [
      'Filters mail depending if they are an invoice or not',
      'Applies specific algorithm on a pdf to find key words and numbers'
    ],
    status: 'Completed',
    category: 'Automation'
  }
]
