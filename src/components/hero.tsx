
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { AnimatedElement } from "./animated-element"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/30 dark:to-purple-950/30"
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <AnimatedElement className="mx-auto flex max-w-[64rem] flex-col items-start gap-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
              Hi, I'm John Doe
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Full Stack Developer
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I craft beautiful and functional web experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and intuitive design.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={0.2} className="mx-auto w-full max-w-[400px] lg:max-w-none">
            <div className="aspect-square overflow-hidden rounded-full border-2 border-neutral-200 dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </AnimatedElement>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce rounded-full"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}