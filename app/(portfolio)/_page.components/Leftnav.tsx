import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Avatar from './assets/avatar-1x1.webp'
import Image from 'next/image'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export function Leftnav() {
  return (
    <Card
      className={cn(
        'md:w-64 lg:w-[280px] xl:w-[320px] 2xl:w-[360px]',
        'flex flex-col items-center gap-4',
        'sticky top-40'
      )}
    >
      <div
        className={cn(
          `mx-auto flex w-full flex-col px-6 sm:flex-row md:-mt-[30%] md:flex-col`
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-2 py-5">
          <section
            id="avatar"
            className={cn(
              'mx-auto size-44 overflow-hidden rounded-[20px] object-fill shadow-sm md:size-48 lg:size-52 xl:size-56'
            )}
          >
            <Image
              src={Avatar}
              alt="Picture of the author"
              className="object-cover"
              // width={500} automatically provided
              // height={500} automatically provided
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
          </section>
          <section
            id="profile-name"
            className="pb-3 pt-4 text-center text-xl font-semibold"
          >
            Profile Name
          </section>
          <section className="flex justify-center">
            <div
              id="profile-title"
              className={cn(
                'dark:bg-card rounded-md bg-neutral-200 px-4 py-2 text-center text-lg font-semibold'
              )}
            >
              Profile Title
            </div>
          </section>
          <section className="flex justify-center">
            <div
              id="profile-socials"
              className={cn('flex justify-between gap-4 py-4')}
            >
              <Link
                href={'#'}
                className={cn(
                  'flex size-6 items-center justify-center rounded-md bg-neutral-100 p-4 dark:bg-neutral-800'
                )}
              >
                fb
              </Link>
              <Link
                href={'#'}
                className={cn(
                  'flex size-6 items-center justify-center rounded-md bg-neutral-100 p-4 dark:bg-neutral-800'
                )}
              >
                tw
              </Link>
              <Link
                href={'#'}
                className={cn(
                  'flex size-6 items-center justify-center rounded-md bg-neutral-100 p-4 dark:bg-neutral-800'
                )}
              >
                lk
              </Link>
            </div>
          </section>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <section
            id="profile-links"
            className={cn(
              ' rounded-md bg-neutral-100 p-4 dark:bg-neutral-800',
              'flex flex-col gap-2'
            )}
          >
            <ContactInfo
              icon={<div>I</div>}
              label="Email"
              value="email@provider.com"
            />
            <Separator />
            {/* Phone */}
            <ContactInfo
              icon={<div>I</div>}
              label="Phone"
              value="123-456-7890"
            />
            <Separator />
            {/* Location US */}
            <ContactInfo
              icon={<div>I</div>}
              label="Location"
              value="City, State"
            />
            <Separator />
            {/* Languages PT-BR and US Eng */}
            <ContactInfo
              icon={<div>I</div>}
              label="Languages"
              value="PT-BR, US Eng"
            />
          </section>
          <section
            id="profile-cv"
            className="flex items-center justify-center py-4"
          >
            <Button>Download CV</Button>
          </section>
        </div>
      </div>
    </Card>
  )
}

interface BlockProps {
  className?: string
}

interface ContactInfoProps {
  icon: JSX.Element // JSX component for the icon, now required
  iconProps?: BlockProps // Optional className for the icon
  label: string // Text label, now required
  labelProps?: BlockProps // Optional className for the label
  value: string // Text value, now required
  valueProps?: BlockProps // Optional className for the value
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  iconProps,
  label,
  labelProps,
  value,
  valueProps,
}) => {
  return (
    <div className={cn('flex flex-1 items-center gap-2')}>
      {/* Icon */}
      <div
        className={cn(
          'bg-card size-8 rounded-md p-2 shadow-sm lg:size-9 xl:size-10',
          iconProps?.className
        )}
      >
        {icon}
      </div>
      {/* Block */}
      <div className={cn('flex flex-1 flex-col')}>
        <span
          className={cn(
            'text-card-foreground/70 text-sm md:text-xs lg:text-sm',
            labelProps?.className
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            'text-md text-card-foreground/90 text-sm md:text-xs lg:text-sm',
            valueProps?.className
          )}
        >
          {value}
        </span>
      </div>
    </div>
  )
}
