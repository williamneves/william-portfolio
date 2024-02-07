import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

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
    <section className={cn('mx-auto')}>
      {/* <ModeToggle /> */}
      {children}
    </section>
  )
}
