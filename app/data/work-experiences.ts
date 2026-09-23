import type { WorkExperience } from '~/types/work-exp'

export const Experiences: WorkExperience[] = [
  {
    id: 1,
    company: 'University of Akureyri',
    position: 'Teaching Assistant',
    period: '2024',
    location: 'On-site',
    type: 'Part-time',
    description: 'Teaching assistant for Programming Languages (functional programming in F#) and Advanced Game Design (Unity).',
    achievements: [
      'Supported students in understanding assignments and concepts taught during lectures'
    ],
    technologies: ['F#', 'Unity', 'C#']
  },
  {
    id: 2,
    company: 'Slippurinn DNG',
    position: 'Software Developer',
    period: '2023 - present',
    location: 'On-site',
    type: 'Full-time',
    description:
      'Developing Promas, a production management system for fish processing used on vessels and in on-shore plants.',
    achievements: [
      'Rebuilt Promas into a modular, equipment-agnostic platform supporting graders, filleting lines palletizing and more',
      'Built real-time dashboards with SignalR and Blazor, streaming live data from grading equipment over MQTT',
      'Developed a traceability and labelling system with GS1 barcodes and multi-language labels for export markets',
      'Standardised deployments on Docker across vessels and on-shore sites, with secure remote access for maintenance and updates',
      'Delivered an in-house inventory system (.NET + Nuxt) integrated with the company\'s dkPlus ERP'
    ],
    technologies: ['C#', '.NET', 'Blazor', 'SignalR', 'PostgreSQL', 'MQTT', 'Docker', 'Azure', 'Nuxt']
  },
  {
    id: 3,
    company: 'Akureyri University',
    position: 'Course Instructor',
    period: '2026 - 2026',
    location: 'On-site',
    type: 'Part-time',
    description: 'Instructor for the Web Development 2 course, delivered as an intensive three-week block. Taught the course front to back using material authored by the lead teacher for the regular twelve-week format.',
    achievements: [
      'Delivered a twelve-week curriculum in a three-week intensive format',
      'Gave the introductory lecture and handled all in-person teaching',
      'Designed the course projects and assignments',
      'Graded all submissions and conducted oral exams'
    ],
    technologies: ['JavaScript', 'TypeScript', 'React', 'NextJs']
  },
  {
    id: 4,
    company: 'University of Akureyri',
    position: 'Teaching Assistant',
    period: '2026',
    location: 'On-site',
    type: 'Part-time',
    description: 'Teaching assistant for Web Services, covering HTTP, RESTful and RPC services, .NET Web API, authentication, authorization and DevOps.',
    achievements: [
      'Supported students in understanding assignments and concepts taught during lectures'
    ],
    technologies: ['C#', '.NET', 'ASP.NET Core', 'REST', 'HTTP']
  },
]
