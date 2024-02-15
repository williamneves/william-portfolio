import { faker } from '@faker-js/faker'
import { ProjectInfo } from './fakerProject'

export function fakerProject(number: number): ProjectInfo[] {
  // Return n number of projects
  const projects: ProjectInfo[] = []
  for (let i = 0; i < number; i++) {
    projects.push({
      title: faker.lorem.words(3),
      shortDescription: faker.lorem.sentence(),
      cardContent: faker.lorem.paragraph(),
      thumbnail: faker.image.urlLoremFlickr({
        width: 800,
        height: 380,
        category: 'business',
      }),
      images: [
        faker.image.urlLoremFlickr({
          width: 800,
          height: 380,
          category: 'nature',
        }),
      ],
      modalContent: [],
      repo: faker.internet.url(),
    })
  }
  return projects
}
export type ProjectInfo = {
  title: string
  shortDescription?: string
  cardContent: string
  thumbnail: string
  images: string[]
  modalContent?: unknown[]
  repo?: string
}
