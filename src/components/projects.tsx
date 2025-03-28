
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Writing Assistant",
    description: "An AI-powered writing tool that helps users improve their writing with real-time suggestions.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&h=900&fit=crop",
    tags: ["TypeScript", "OpenAI", "Next.js", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing multiple social media accounts with analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&h=900&fit=crop",
    tags: ["Vue.js", "Firebase", "Chart.js", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            A selection of my favorite works across different domains
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-neutral-900"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}