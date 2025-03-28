
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="text-center">
        <motion.h1 
          className="text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Creative Developer &
          <span className="block text-neutral-600 dark:text-neutral-400">Digital Craftsman</span>
        </motion.h1>
        
        <motion.p 
          className="mx-auto mt-6 max-w-lg text-lg text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build beautiful, interactive experiences for the web. Focused on creating products that people love to use.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  )
}