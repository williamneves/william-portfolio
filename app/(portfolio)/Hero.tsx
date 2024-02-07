import { Button } from '@/components/ui/button'
import { FileTextIcon, HandIcon } from 'lucide-react'
import PROFILE_GRADIENT from '@/assets/hero-1.png'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto min-h-svh max-w-full snap-start px-6 sm:max-w-[580px]  md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1300px]"
    >
      <div className="h-14" />
      <div className="flex flex-col">
        {/* Icon + Hello */}
        <div className="flex flex-col items-center gap-1 opacity-75">
          <HandIcon className="size-5 md:size-6" />
          <span className="text-[1.2rem] font-normal md:text-[1.5rem]">
            Hello, I&apos;m
          </span>
        </div>
        <h1 className="py-4 text-center text-5xl md:py-6 md:text-7xl">
          William Neves
        </h1>
        <h3 className="text-foreground/80 text-center text-lg font-light md:text-xl">
          Software Engineer
        </h3>
        <div className="flex justify-center gap-6 py-8">
          <Button className="gap-1 p-4 text-lg md:gap-2 md:px-5 md:py-6">
            <FileTextIcon />
            Look My CV
          </Button>
          <Button className="dark:text-primary dark:border-primary border-card-foreground dark:hover:bg-primary/20 hover:bg-card-foreground/5 border bg-transparent p-4 text-lg transition-all duration-200 md:px-5 md:py-6">
            Let&apos;s Talk
          </Button>
        </div>
        <div className="relative overflow-hidden">
          <div
            className={cn([
              'absolute left-1/2 top-0 z-10 -translate-x-1/2 ',
              'mt-16 rounded-t-[5rem] md:mt-20 md:rounded-t-[6rem] lg:mt-24 lg:rounded-t-[8rem]',
              'h-full w-[312px] md:w-[360px] lg:w-[460px]',
              'from-primary/70 dark:from-primary/40 bg-gradient-to-b from-0% to-transparent to-90% dark:to-80%',
            ])}
          />
          <Image
            src={PROFILE_GRADIENT}
            className="relative z-20 mx-auto w-72 md:w-80 lg:w-96"
            alt="Picture of the author"
            priority
          />
        </div>
      </div>
    </section>
  )
}
