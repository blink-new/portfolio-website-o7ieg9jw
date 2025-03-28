
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"
import { Button } from "./ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Let's discuss your project and create something amazing together
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              I'm always open to new projects and opportunities. Feel free to reach out!
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-100 p-3 dark:bg-neutral-800">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@example.com" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-100 p-3 dark:bg-neutral-800">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Social</p>
                  <a href="#" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200">
                    @username
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-900"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-neutral-200 bg-white px-4 py-2 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600"
                placeholder="Your message..."
              />
            </div>

            <Button className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}