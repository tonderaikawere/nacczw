import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Quote } from "lucide-react"

const verses = [
  {
    text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.",
    reference: "Hebrews 10:24-25",
  },
  {
    text: "For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.",
    reference: "Romans 12:4-5",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">About NACC</h1>
          <p className="mt-6 max-w-3xl text-lg">
            The National Association of Christian Churches (NACC) is a Membership Faith-Based Community of Churches that
            brings together Apostolic, Zion, Pentecostal, and other like-minded churches and institutions across
            Zimbabwe.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
              <p className="mt-4">
                To unite and strengthen Christian churches across Zimbabwe, fostering spiritual growth and
                social-economic development through collaborative efforts and Christ-centered leadership.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-primary">Our Vision</h2>
              <p className="mt-4">
                To be the leading Christian association in Zimbabwe, creating a united church community that
                meaningfully contributes to the spiritual and social-economic growth of our nation.
              </p>
            </div>
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-primary">Our Goals</h2>
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>Foster unity among Christian churches</li>
                <li>Promote spiritual growth and discipleship</li>
                <li>Support social-economic development</li>
                <li>Empower youth through education and training</li>
                <li>Advocate for Christian values in society</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verses */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-secondary-foreground">Guiding Scriptures</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {verses.map((verse, index) => (
              <div key={index} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 text-lg italic">{verse.text}</p>
                <p className="mt-2 font-semibold">{verse.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent py-16 text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="mt-4 text-lg">Become a part of NACC and help us make a difference in Zimbabwe.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

