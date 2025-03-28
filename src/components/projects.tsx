
import { Github, Link } from "lucide-react"
import { Button } from "./ui/button"
import { AnimatedElement } from "./animated-element"

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Node.js. Features real-time updates and responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "Node.js", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "Project Two",
    description:
      "Mobile-first e-commerce platform with seamless payment integration and user authentication.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL", "TailwindCSS"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "Project Three",
    description:
      "Real-time chat application with end-to-end encryption and file sharing capabilities.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Firebase", "WebRTC", "Styled Components"],
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="container px-4 md:px-6">
        <AnimatedElement>
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-center text-neutral-600 dark:text-neutral-400">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </AnimatedElement>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedElement key={project.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <Link className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}