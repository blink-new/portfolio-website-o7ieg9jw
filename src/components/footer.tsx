
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "./ui/button"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:hello@example.com",
  },
]

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#" },
      { name: "Projects", href: "#projects" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Resume", href: "#" },
      { name: "Uses", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="mt-4 max-w-xs text-sm text-neutral-600 dark:text-neutral-400">
              Full-stack developer crafting beautiful and functional web experiences.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-neutral-900 dark:hover:text-neutral-50"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}