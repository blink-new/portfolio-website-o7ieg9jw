
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "An exceptional developer who consistently delivers high-quality work. Their attention to detail and problem-solving skills are outstanding.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
  },
  {
    quote: "Working with them was a game-changer for our project. They brought innovative solutions and exceeded our expectations.",
    author: "Michael Chen",
    title: "Product Manager, InnovateLab",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop"
  },
  {
    quote: "Their technical expertise combined with excellent communication skills made our collaboration smooth and successful.",
    author: "Emily Rodriguez",
    title: "Founder, DesignStudio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-50 py-24 px-4 dark:bg-neutral-900">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            What others say about working with me
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg dark:bg-neutral-800"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-neutral-200 dark:text-neutral-700" />
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}