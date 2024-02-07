import { Hero } from './Hero'
import { About } from './About'
import { Projects } from './Projects'
import { Experience } from './Experience'

export default function Home() {
  return (
    <main className="max-h-screen snap-y snap-proximity overflow-scroll">
      <Hero />
      <About />
      <Projects />
      <Experience />

      {/* Education */}
      {/* Skills */}
      <section
        id="skills"
        className="mx-auto min-h-svh max-w-full snap-start px-6 sm:max-w-[580px]  md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1300px]"
      >
        Skills
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto min-h-svh max-w-full snap-start px-6 sm:max-w-[580px]  md:max-w-[700px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1300px]"
      >
        Contact
      </section>
    </main>
  )
}
