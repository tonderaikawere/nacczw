import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with NACC. We're here to help and answer any questions you may have.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Get in touch with us for any inquiries or support. We're here to help!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                We'd love to hear from you. Please use the contact information below or fill out the form.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>+263 77 327 0362</p>
                    <p>+263 71 237 0192</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>nacczim@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>Suite 217 Lutheran House,</p>
                    <p>H. Chitepo Str Bulawayo</p>
                    <p>Zimbabwe</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold">Office Hours</h3>
                <p>Monday - Friday: 10:00am - 5:00pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6" action="/api/contact" method="POST">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea id="message" name="message" className="h-32 rounded-md border p-2" required />
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center">Our Location</h2>
          <div className="mt-8 aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5963666889386!2d28.58333!3d-20.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5547f3f3b9bf7%3A0x4b7fe7ce3f0b1ce1!2sLutheran%20House%2C%20Herbert%20Chitepo%20St%2C%20Bulawayo%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1645789012345!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

