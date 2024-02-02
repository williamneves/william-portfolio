import { ModeToggle } from '@/components/@core/ModeToggle'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { Leftnav } from './_page.components/Leftnav'
import Link from 'next/link'
import { HomeIcon, User2Icon } from 'lucide-react'
import { ReactElement } from 'react'

export const metadata: Metadata = {
  title: 'STUDIO - William Portfolio',
  description: "Sanity Studio for William's Portfolio",
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className={cn(
        'mx-auto px-6 md:px-4 lg:px-0',
        'md:max-w-[768px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1440px]',
        'flex flex-col gap-4'
      )}
    >
      <section
        className={cn(
          'items-centers mb-4 mt-2 flex justify-end md:mb-40 md:mt-6'
        )}
      >
        <ModeToggle />
      </section>
      <section className={cn('flex flex-col gap-4 md:flex-row')}>
        <section className="">
          <Leftnav />
        </section>
        <section className={cn('flex-1', 'flex flex-col gap-4')}>
          <Card
            className={cn(
              'flex h-16 justify-between p-2 text-center lg:hidden'
            )}
          >
            <LinkButton
              icon={<User2Icon className="size-[18px] lg:size-[24px]" />}
              name="About"
            />
            <LinkButton
              icon={<User2Icon className="size-[18px] lg:size-[24px]" />}
              name="About"
            />
            <LinkButton
              icon={<User2Icon className="size-[18px] lg:size-[24px]" />}
              name="About"
            />
            <LinkButton
              icon={<User2Icon className="size-[18px] lg:size-[24px]" />}
              name="About"
            />
          </Card>
          <Card className={cn('min-h-[2000px] flex-1')}>{children}</Card>
        </section>
        <section>
          <Card className={cn('hidden w-24 lg:flex', 'sticky top-40')}>
            <div className="flex flex-1 flex-col items-center gap-8 p-4">
              <LinkButton
                icon={<User2Icon className="size-[18px] lg:size-[24px]" />}
                name="About"
              />
              <LinkButton
                icon={<HomeIcon className="size-[24px]" />}
                name="Home"
              />
              <LinkButton
                icon={<HomeIcon className="size-[24px]" />}
                name="Home"
                href="/home"
              />
              <LinkButton
                icon={<HomeIcon className="size-[24px]" />}
                name="Home"
                href="/home"
              />
            </div>
          </Card>
        </section>
      </section>
    </section>
  )
}

interface LinkButtonProps {
  icon: ReactElement
  name: string
  href?: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, name, href = '#' }) => {
  return (
    <Link
      href={href}
      className="dark:bg-card flex flex-row items-center justify-center gap-2 rounded-md bg-neutral-50 px-2 lg:size-[60px] lg:flex-col lg:gap-0 lg:px-0"
    >
      {icon}
      <span className="text-sm">{name}</span>
    </Link>
  )
}
