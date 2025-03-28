
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80"
    >
      <nav className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <motion.a
          href="/"
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.a>
        
        <ul className="flex items-center gap-6">
          <li><a href="#about" className="hover:text-neutral-600 dark:hover:text-neutral-300">About</a></li>
          <li><a href="#projects" className="hover:text-neutral-600 dark:hover:text-neutral-300">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-neutral-600 dark:hover:text-neutral-300">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-neutral-600 dark:hover:text-neutral-300">Contact</a></li>
          <li>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}