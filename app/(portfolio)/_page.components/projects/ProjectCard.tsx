import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { ArrowUpRightFromSquareIcon, Github } from 'lucide-react'

import type { ProjectInfo } from './fakerProject'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard({ project }: { project: ProjectInfo }) {
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
    <Card className="bg-card/80 hover:bg-card/50 border-border hover:border-primary/80 group flex-1 cursor-default overflow-hidden rounded-3xl transition-all delay-100 duration-300 ease-in-out hover:border">
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
            className="flex items-center gap-2"
          >
            <Github className="size-5" />
            Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
