import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">NACC</span>
            </Link>
            <p className="mt-4 text-sm opacity-90">
              A united Church Community that meaningfully contributes to the spiritual and social-economic growth of
              Zimbabwe.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold">Links</h3>
              <ul className="mt-4 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm opacity-90 transition-opacity hover:opacity-100">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-semibold">Get In Touch</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <div className="flex items-start space-x-2">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-90">+263 77 327 0362</p>
                      <p className="text-sm opacity-90">+263 71 237 0192</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start space-x-2">
                    <Mail className="h-5 w-5" />
                    <p className="text-sm opacity-90">nacczim@gmail.com</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5" />
                    <p className="text-sm opacity-90">Suite 217 Lutheran House, H. Chitepo Str Bulawayo</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Hours and Social Links */}
          <div>
            <h3 className="text-sm font-semibold">Hours</h3>
            <p className="mt-4 text-sm opacity-90">
              Mon - Fri
              <br />
              10:00am - 17:00pm
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-6">
                {navigation.social.map((item) => (
                  <Link key={item.name} href={item.href} className="opacity-90 transition-opacity hover:opacity-100">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm opacity-90">
              &copy; {new Date().getFullYear()} National Association of Christian Churches. All rights reserved.
            </p>
            <p className="text-center text-sm opacity-90">
              Developed by{" "}
              <a
                href="https://kawerify.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-100"
              >
                Kawerify Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

