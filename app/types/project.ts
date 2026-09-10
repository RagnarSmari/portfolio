

export interface Project {
  id: number,
  title: string,
  description: string,
  image: string,
  technologies: string[],
  features: string[],
  liveUrl?: string,
  githubUrl?: string,
  status: string,
  category: string
}
