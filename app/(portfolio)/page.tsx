import Image from 'next/image'
import { Hero } from './Hero'
import { About } from './About'

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <Hero />
      <About />
      <section id="projects" className="min-h-svh snap-center">
        Projects
      </section>
      {/* Skills */}
      <section id="skills" className="min-h-svh snap-center">
        Skills
      </section>
      {/* Experience */}
      <section id="experience" className="min-h-svh snap-center">
        Experience
      </section>
      {/* Contact */}
      <section id="contact" className="min-h-svh snap-center">
        Contact
      </section>
    </main>
  )
}
