import { FolderGit2Icon } from 'lucide-react'
import { ProjectCarrousel } from './_page.components/projects/ProjectCarrousel'

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
