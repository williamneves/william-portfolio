import {
  AtSign,
  Calendar,
  CalendarFold,
  Dot,
  GalleryHorizontalEnd,
  Route,
} from 'lucide-react'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto min-h-svh max-w-full snap-start"
    >
      <div className="mx-auto px-6 sm:max-w-[580px] md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1300px]">
        <div className="flex flex-col py-4">
          {/* Icon + Hello */}
          <div className="flex flex-col items-center gap-0 opacity-65">
            <Route className="size-5 md:size-6" />
            <span className="font-sm text-[1.05rem] md:text-[1.1rem]">
              Read about
            </span>
          </div>
          <h1 className="text-primary py-4 text-center text-4xl md:py-6 md:text-5xl">
            My Journey
          </h1>
          <div className="h-8 md:h-4" />
        </div>
      </div>
      <div className="mx-auto max-w-full overflow-x-hidden py-8">
        {/* Jouney Timeline */}
        <ol className="no-scrollbar flex snap-x snap-mandatory items-center gap-2 overflow-x-scroll">
          <li className="relative min-w-[calc(50%-144px)] snap-center md:min-w-[calc(50%-160px)] lg:min-w-[calc(50%-192px)]" />
          {Array.from({ length: 10 }, (_, i) => (
            <ExperienceItem key={i} {...experienceData[i]} />
          ))}
        </ol>
        <div className="text-foreground/50 flex items-center justify-center gap-2 py-4 text-sm">
          <GalleryHorizontalEnd className="rotate-180 animate-pulse" /> Swipe to
          left to scroll
        </div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  startDate: string
  endDate: string
  position: string
  company: string
  descriptions: string[]
}

const experienceData: ExperienceItemProps[] = Array.from(
  { length: 10 },
  () => ({
    startDate: '2021',
    endDate: 'Present',
    position: 'Software Engineer',
    company: 'Company',
    descriptions: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et commodi sed perspiciatis facilis fuga placeat, sint necessitatibus atque quaerat.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et commodi sed perspiciatis facilis fuga placeat, sint necessitatibus atque quaerat.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et commodi sed perspiciatis facilis fuga placeat, sint necessitatibus atque quaerat.',
    ],
  })
)

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  startDate,
  endDate,
  position,
  company,
  descriptions,
}) => {
  return (
    <li className="relative w-72 flex-shrink-0 snap-center md:w-80 lg:w-96">
      <div className="z-20 flex items-center py-1 pe-4">
        <div className="bg-card flex size-7 items-center justify-center rounded-xl text-center ring-2 ring-neutral-200">
          <CalendarFold className="size-4" />
        </div>
        <div className="z-10 h-1 flex-1 rounded-e-xl bg-gradient-to-r from-neutral-200 to-neutral-200/40"></div>
      </div>
      <div className="mt-4 pe-4">
        <span className="text-foreground/70 flex items-center gap-0 text-sm">
          <Dot className="text-primary" /> {startDate} ~ {endDate}
        </span>
        <p className="text-primary line-clamp-2 text-lg">{position}</p>
        <span className="text-foreground/80 flex items-center gap-1 pb-2 text-sm">
          <AtSign className="size-4" /> {company}
        </span>
        <ol className="text-foreground/70 list-inside list-disc space-y-2 text-base">
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ol>
      </div>
    </li>
  )
}

export default ExperienceItem
