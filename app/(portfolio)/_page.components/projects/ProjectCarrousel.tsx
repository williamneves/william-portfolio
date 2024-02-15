import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ProjectCard } from './ProjectCard'
import { fakerProject } from './fakerProject'

export function ProjectCarrousel({ number }: { number: number }) {
  const projects = fakerProject(number)

  return (
    <Carousel>
      <CarouselContent className="items-stretch">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="flex md:basis-1/2 lg:px-5 xl:basis-1/3 xl:px-6"
          >
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
