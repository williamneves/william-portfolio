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
  return <section className={cn('')}></section>
}
