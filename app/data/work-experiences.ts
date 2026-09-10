import type { WorkExperience } from '~/types/work-exp'

export const Experiences: WorkExperience[] = [
  {
    id: 1,
    company: 'Akureyri University',
    position: 'TA',
    period: '2024 - 2024',
    location: 'On-site',
    type: 'Part-time',
    description: 'Assistant teacher for Programming languages and also Advanced game design courses.',
    achievements: [
      'Helping students reach better understanding of programming'
    ],
    technologies: ['F#', 'Unity']
  },
  {
    id: 2,
    company: 'Slippurinn DNG',
    position: 'Software developer',
    period: '2023 - present',
    location: 'On-site',
    type: 'Full-time',
    description: 'Developing and maintaing Promas, a production management software for fish processing equipment.',
    achievements: [
      'Implemented realtime dashboards with SignalR and Blazor',
      'Integrated docker and refined deployment strategies for improved reliability',
      'Implemented automated testing strategies improving code coverage',
      'Participated in agile development processes and sprint planning',
      'Integrated PostgreSQL database and switched hosting provider from Windows to Linux',
      'Communicated with clients and stakeholders to ensure project success'
    ],
    technologies: ['C#', '.NET', 'Blazor', 'SignalR', 'PostgreSQL', 'Docker', 'SQL Server', 'Eclipse Mosquitto', 'Azure', 'Vue.js', 'NuxtJs']
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
  }
]
