import {
  AwardIcon,
  BookHeartIcon,
  KanbanIcon,
  ListChecksIcon,
  ScanEyeIcon,
  UserIcon,
} from 'lucide-react'
import ABOUT_ME from '@/assets/about-me1.jpg'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function About() {
  return (
    <section id="about" className="min-h-svh snap-center">
      <div className="flex flex-col py-4">
        {/* Icon + Hello */}
        <div className="flex flex-col items-center gap-0 opacity-65">
          <UserIcon className="size-5 md:size-6" />
          <span className="font-sm text-[1.05rem] md:text-[1.1rem]">
            Get to Know
          </span>
        </div>
        <h1 className="text-primary py-4 text-center text-4xl md:py-6 md:text-5xl">
          About Me
        </h1>
        <div className="h-8 md:h-4" />
        <section className="grid grid-cols-1 gap-8 md:gap-8 lg:grid-cols-2">
          {/* Photo */}
          <div className="flex items-start justify-center">
            <div className="group relative size-[250px] md:size-[280px] lg:size-[340px]">
              <div className="from-primary/50 via-primary to-primary/50 absolute inset-0 z-10 h-full w-full  rounded-3xl bg-gradient-to-tr from-0% via-50% to-100% transition-all delay-75 duration-300 ease-out group-hover:-rotate-3" />
              <Image
                src={ABOUT_ME}
                className="relative z-20 h-full w-full rotate-12 rounded-3xl object-cover transition-all delay-75 duration-300 ease-out group-hover:rotate-0"
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-card-foreground/70 text-center text-lg italic">
              &quot;While hard skills may open doors, soft skills are what keep
              them wide open.&quot;
            </span>
            {/* Soft Skills */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <AboutMeCards
                title="Passionate"
                description="Dedicated to software engineering, finding joy and fulfillment in every project."
                icon={<BookHeartIcon className="stroke-primary size-6" />}
              />
              <AboutMeCards
                title="Problem Solver"
                description="Naturally inclined to solve, not create problems. My approach is analytical and solution-focused."
                icon={<ListChecksIcon className="stroke-primary size-6" />}
              />
              <AboutMeCards
                title="Project Leader"
                description="Expert at guiding teams towards a unified goal, ensuring smooth team collaboration."
                icon={<KanbanIcon className="stroke-primary size-6" />}
              />
              <AboutMeCards
                title="Detail-Oriented"
                description={`"Greatness" lies in the details. Every aspect of the project should be on point.`}
                icon={<ScanEyeIcon className="stroke-primary size-6" />}
              />
            </div>
            <div className="text-card-foreground/80 flex flex-col gap-4 text-justify text-lg">
              <span>
                I am a Full Stack Developer, with a strong emphasis on Next.js.
                Beyond coding, my strength lies in delivering fully functional,
                high-quality solutions. This ability stems from my extensive
                corporate background, which enhances my understanding of both
                client needs and user interfaces.
              </span>
              <span>
                I'm thrilled to make ideas a reality, and the web, with no entry
                barriers, just a simple "https://" provides the ideal stage for
                this. JavaScript and TypeScript have become as natural to me as
                my native language, enabling me to bring ideas to life with
                precision and creativity.
              </span>
              <span>
                Other languages like Python, PHP, C#, and databases such as
                MySQL, PostgreSQL, and MongoDB and UI libraries also form an
                integral part of my daily tech stack, complementing my primary
                focus with a broad technical versatility.
              </span>
            </div>
          </div>
          {/* Text About */}
        </section>
      </div>
    </section>
  )
}

type AboutMeCardsProps = {
  title: string
  titleClasses?: string | string[]
  description: string
  descriptionClasses?: string | string[]
  icon: React.ReactNode
  iconClasses?: string | string[]
  id?: string
  cardClasses?: string | string[]
}
function AboutMeCards(props: AboutMeCardsProps) {
  return (
    <Card
      className={cn(
        'bg-card/80 group flex flex-col items-center gap-2 rounded-md p-4 text-center',
        'transition-all delay-75 duration-300 ease-out',
        'hover:bg-card/50 hover:border-primary/80 cursor-default',
        props.cardClasses
      )}
      id={props.id ?? ''}
    >
      {props.icon}
      <h4 className={cn('text-card-foreground/90 text-lg', props.titleClasses)}>
        {props.title}
      </h4>
      <span
        className={cn(
          'text-card-foreground/50 text-xs xl:text-base',
          props.titleClasses
        )}
      >
        {props.description}
      </span>
    </Card>
  )
}
