import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  ArrowUpRightFromSquareIcon,
  FolderGit2Icon,
  GithubIcon,
  LinkIcon,
} from 'lucide-react'
import Image from 'next/image'
import PORTFOLIO1 from '@/assets/virtualclinic.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto min-h-svh max-w-full snap-start px-6 sm:max-w-[580px]  md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1300px]"
    >
      <div className="flex flex-col py-4">
        {/* Icon + Hello */}
        <div className="flex flex-col items-center gap-0 opacity-65">
          <FolderGit2Icon className="size-5 md:size-6" />
          <span className="font-sm text-[1.05rem] md:text-[1.1rem]">
            Take a Look at
          </span>
        </div>
        <h1 className="text-primary py-4 text-center text-4xl md:py-6 md:text-5xl">
          My Projects
        </h1>
        <div className="h-8 md:h-4" />
        <span className="text-card-foreground/80 mx-auto w-72 select-none pb-8 text-center text-lg md:w-[422px]">
          Here, I showcase a selection of my projects. Please note, due to
          client confidentiality, some of my most complex works are not fully
          displayed.
        </span>
        <div className="mx-auto max-w-full">
          <ProjectCarrousel number={8} />
        </div>
        {/* Cards */}
      </div>
    </section>
  )
}

type ProjectInfo = {
  title: string
  shortDescription?: string
  cardContent: string
  thumbnail: string
  images: string[]
  modalContent?: unknown[]
  repo?: string
}

import { faker } from '@faker-js/faker'

function fakerProject(number: number): ProjectInfo[] {
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

function ProjectCard({ project }: { project: ProjectInfo }) {
  const {
    title,
    shortDescription,
    cardContent,
    thumbnail,
    images,
    modalContent,
    repo,
  } = project
  return (
    <Card className="bg-card/80 hover:bg-card/50 border-border hover:border-primary/80 group cursor-default overflow-hidden rounded-3xl transition-all delay-100 duration-300 ease-in-out hover:border">
      <CardContent className="p-4">
        <Image
          src={thumbnail}
          width={800}
          height={380}
          alt="Portfolio 1"
          className="rounded-xl"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        {!!shortDescription && (
          <CardDescription className="line-clamp-2">
            {shortDescription}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="line-clamp-4">
        <p>{cardContent}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-4 p-4">
        <Button className="gap-2">
          <ArrowUpRightFromSquareIcon className="size-5" />
          Details
        </Button>
        <Button variant="outline" className="gap-2" asChild>
          <Link
            href={repo ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubIcon className="size-5" />
            Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ProjectCarrousel({ number }: { number: number }) {
  const projects = fakerProject(number)

  return (
    <Carousel>
      <CarouselContent className="items-center">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:px-5 xl:basis-1/3 xl:px-6"
          >
            <ProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
