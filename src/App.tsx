
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Projects } from "./components/projects"
import { ScrollToTop } from "./components/scroll-to-top"
import { Testimonials } from "./components/testimonials"

export default function App() {
  return (
    <main className="min-h-screen scroll-smooth bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50">
      <Navbar />
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}